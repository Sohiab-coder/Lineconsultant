const express = require("express");
const { config } = require("dotenv").config({ path: "./config/config.env" });
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const error = require("./middleware/error");
const app = express();

// use middlewares
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// import Routes
const user = require("./routes/userRoutes");
const product = require("./routes/productRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

// use Routes
app.use("/api/v1", user);
app.use("/api/v1", product);
app.use("/api/v1", order);
app.use("/api/v1", payment);

// error middleware
app.use(error);

module.exports = app;
