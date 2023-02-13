const express = require("express");
const { createOrder, singleOrder, myOrders, getAllOrder, deleteOrder } = require("../controllers/orderController");
const { authenticated, authorizeAdmin } = require("../middleware/auth");

const route = express.Router();

// Create Order
route.post("/order/new", authenticated, createOrder);

// Get Single Order
route.get("/order/:id", authenticated, singleOrder);

// Get My Order
route.get("/myorder", authenticated, myOrders);

// Get All Orders --Admin
route.get("/orders", authenticated, authorizeAdmin, getAllOrder);

// Delete Orders --Admin
route.delete("/order/:id", authenticated, authorizeAdmin, deleteOrder);

module.exports = route;
