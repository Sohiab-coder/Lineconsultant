import React from "react";
import "./orderSuccess.css";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const OrderSuccess = () => {
  return (
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Your Order has been Placed successfully </Typography>
      <Link to="/shop">View Orders</Link>
    </div>
  );
};

export default OrderSuccess;
