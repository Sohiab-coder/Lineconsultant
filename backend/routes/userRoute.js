const express = require("express");
const { contactForm, webForm, orderForm } = require("../controller/userController");

const route = express.Router();

route.post("/contact", contactForm);
route.post("/webform", webForm);
route.post("/orderform", orderForm);

module.exports = route;
