const express = require("express");
const {
  processPayment,
  sendStripeApiKey,
} = require("../controllers/paymentController");
const route = express.Router();
const { authenticated } = require("../middleware/auth");

route.post("/payment/process", authenticated, processPayment);

route.get("/stripeapikey", authenticated, sendStripeApiKey);

module.exports = route;
