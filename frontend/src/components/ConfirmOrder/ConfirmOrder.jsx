import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./ConfirmOrder.css";

const ConfirmOrder = () => {
  const { cartItems, shippingInfo } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const address = `${shippingInfo.streetAdress}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.postcode}, ${shippingInfo.country}`;

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const proceedToPayment = () => {
    const data = {
      totalPrice,
    };
    sessionStorage.setItem("orderInfo", JSON.stringify(data));
    navigate("/process/payment");
  };

  return (
    <section className="congirm-order">
      <div className="confirmOrderPage">
        <div className="confirm-order-main">
          <div className="confirmshippingArea">
            <h2>Shipping Info</h2>
            <div className="confirmshippingAreaBox">
              <div>
                <p>Name:</p>
                <span>{"Coder"}</span>
              </div>
              <div>
                <p>Phone:</p>
                <span>{shippingInfo.phone}</span>
              </div>
              <div>
                <p>Address:</p>
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className="confirmCartItems">
            <h2>Your Cart Items:</h2>
            <div className="confirmCartItemsContainer">
              {cartItems &&
                cartItems.map((item) => (
                  <div key={item.product}>
                    <img src={item.image} alt="Product" />
                    <Link to={`/product/${item.product}`}>
                      {item.name}
                    </Link>{" "}
                    <span>
                      {item.quantity} X ${item.price} ={" "}
                      <b>${item.price * item.quantity}</b>
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="confirm-order-main">
          <div className="orderSummary">
            <h2>Order Summery</h2>

            <div className="orderSummaryTotal">
              <p>
                <b>Total:</b>
              </p>
              <span>${totalPrice}</span>
            </div>

            <button onClick={proceedToPayment}>Proceed To Payment</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfirmOrder;
