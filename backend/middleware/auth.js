const jwt = require("jsonwebtoken");
const Errorhander = require("../utils/errorhander");
const User = require("../models/userModel");

exports.authenticated = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new Errorhander("Please Login to access this resource", 401));
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decodedData.id);
  next();
};

exports.authorizeAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return next(
      new Errorhander(
        `${req.user.role} is not allowed to access this resource`,
        403
      )
    );
  }
  next();
};
