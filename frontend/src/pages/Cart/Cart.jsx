import React from "react";
import { IoMdTrash } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Cart.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { itemAddToCart } from "../../Redex/Actions/cartAction";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const inc = (id, qty) => {
    const newQty = qty + 1;
    dispatch(itemAddToCart(id, newQty));
  };

  const dec = (id, qty) => {
    const newQty = qty - 1;
    if (1 >= newQty) {
      return;
    }
    dispatch(itemAddToCart(id, newQty));
  };

  const deleteHandler = async (id) => {
    dispatch({ type: "deleteToCart", payload: id });
    toast.success("Item remove to cart");
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <section className="cart">
      <div className="banner">
        <div className="about-text">
          <h1>Cart</h1>
        </div>
      </div>
      <div className="add-to-cart-container">
        {cartItems && cartItems.length > 0 ? (
          <>
            <div className="add-to-card-product">
              {cartItems.map((i) => (
                <div key={i.product} className="main-prod-cart">
                  <div className="cart-product">
                    <div className="prod-img">
                      <img src={i.image} alt="" />
                    </div>
                    <div className="prod-details">
                      <div className="prod-name">
                        <h3>{i.name}</h3>
                      </div>
                      <div className="prod-price">
                        <h4>{i.price * i.quantity}</h4>
                      </div>
                      <div className="prod-qty">
                        <button onClick={() => dec(i.product, i.quantity)}>
                          -
                        </button>
                        <input type="number" readOnly value={i.quantity} />
                        <button onClick={() => inc(i.product, i.quantity)}>
                          +
                        </button>
                      </div>
                      <div className="prod-remove">
                        <IoMdTrash onClick={() => deleteHandler(i.product)} />
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
                    <h4>
                      {`$${cartItems.reduce(
                        (acc, item) => acc + item.quantity * item.price,
                        0
                      )}`}
                    </h4>
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
