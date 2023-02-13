import React, { useRef } from "react";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import EventIcon from "@mui/icons-material/Event";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const PaymentOrder = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const payBtn = useRef();

  const submitHandler = () => {};

  return (
    <section className="payment">
      {/* <div className="paymentContainer">
        <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
          <p>Card Info</p>
          <div>
            <CreditCardIcon />
            <CardNumberElement className="paymentInput" />
          </div>
          <div>
            <EventIcon />
            <CardExpiryElement className="paymentInput" />
          </div>
          <div>
            <VpnKeyIcon />
            <CardCvcElement className="paymentInput" />
          </div>

          <input
            type="submit"
            value={`Pay - $${orderInfo && orderInfo.totalPrice}`}
            ref={payBtn}
            className="paymentFormBtn"
          />
        </form>
      </div> */}
    </section>
  );
};

export default PaymentOrder;
