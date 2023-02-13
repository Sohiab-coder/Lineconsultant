const express = require("express");
const {
  createProduct,
  allProducts,
  singleProduct,
  deleteProduct,
  createProductReview,
  allReviews,
  deleteReview,
} = require("../controllers/productController");
const { authenticated, authorizeAdmin } = require("../middleware/auth");
const singleUpload = require("../middleware/multer");

const route = express.Router();

// Create Product
route.post(
  "/product/new",
  authenticated,
  authorizeAdmin,
  singleUpload,
  createProduct
);

// All Product
route.get("/allproducts", allProducts);

// Get Single Product
route.get("/product/:id", singleProduct);

// Delete Product --Admin
route.delete("/product/:id", authenticated, authorizeAdmin, deleteProduct);

// Add & Update Reviews Product
route.post("/review", authenticated, createProductReview);

// Get All Reviews
route.get("/reviews", authenticated, allReviews);

// Get All Reviews
route.get("/review/delete", authenticated, deleteReview);

module.exports = route;
