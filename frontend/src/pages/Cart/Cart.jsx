import React from "react";
import { IoMdTrash } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Cart.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const Cart = () => {
  const { cartItem, subTotal } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { cartItem: localCart, subTotal: localTotal } = useSelector(
    (state) => state.cart
  );

  const inc = (id) => {
    dispatch({ type: "addToCart", payload: { id } });
    dispatch({ type: "totalPrice" });
  };

  const dec = (id) => {
    dispatch({ type: "decrement", payload: id });
    dispatch({ type: "totalPrice" });
  };

  const deleteHandler = async (id) => {
    await dispatch({ type: "deleteToCart", payload: id });
    toast.success("Remove To Cart")
    dispatch({ type: "totalPrice" });
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(localCart));
    localStorage.setItem("cartPrice", JSON.stringify(localTotal));
  }, [localCart, localTotal]);

  return (
    <section className="cart">
      <div className="banner">
        <div className="about-text">
          <h1>Cart</h1>
        </div>
      </div>
      <div className="add-to-cart-container">
        {cartItem && cartItem.length > 0 ? (
          <>
            <div className="add-to-card-product">
              {cartItem.map((i) => (
                <div key={i.id} className="main-prod-cart">
                  <div className="cart-product">
                    <div className="prod-img">
                      <img src={i.imgSrc} alt="" />
                    </div>
                    <div className="prod-details">
                      <div className="prod-name">
                        <h3>{i.name}</h3>
                      </div>
                      <div className="prod-price">
                        <h4>{i.price}</h4>
                      </div>
                      <div className="prod-qty">
                        <button onClick={() => dec(i.id)}>-</button>
                        <input type="number" readOnly value={i.qty} />
                        <button onClick={() => inc(i.id)}>+</button>
                      </div>
                      <div className="prod-remove">
                        <IoMdTrash onClick={() => deleteHandler(i.id)} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="sub-total">
                <h2>Cart totals</h2>
                <div className="total">
                  <div className="total-price">
                    <h3>Total</h3>
                    <h4>${subTotal}</h4>
                  </div>
                  <div className="place">
                    <Link to={"/checkout"}>Proceed to checkout</Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="hide-cart">
              <h1>Cart Empty</h1>
              <Link to={"/shop"}>Back To Shop</Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
