const express = require("express");
const {
  Register,
  login,
  logout,
  changePassword,
  forgetPassword,
  resetPassword,
  updateProfile,
  myProfile,
  getAllUser,
  deleteProfile,
  getSingleUser,
  updateUserRole,
  deleteUser,
} = require("../controllers/userController");
const { authenticated, authorizeAdmin } = require("../middleware/auth");
const singleUpload = require("../middleware/multer");

const route = express.Router();

// Register Route
route.post("/register", singleUpload, Register);

// Login Route
route.post("/login", login);

// Login Route
route.get("/logout", authenticated, logout);

// Change Password Route
route.put("/password/new", authenticated, changePassword);

// Forget Password Route
route.post("/password/forget", forgetPassword);

// Reset Password Route
route.post("/password/reset/:token", resetPassword);

// Update Profile Route
route.put("/profile/update", authenticated, updateProfile);

// Delete Profile Route
route.get("/profile/delete", authenticated, deleteProfile);

// See My Profile
route.get("/me", authenticated, myProfile);

// Admin Routes

// Get All Users --Admin
route.get("/users", authenticated, authorizeAdmin, getAllUser);

// Get Single User
route.get("/user/:id", authenticated, authorizeAdmin, getSingleUser);

// Update User Role
route.put("/user/:id", authenticated, authorizeAdmin, updateUserRole);

// Delete User
route.delete("/user/:id", authenticated, authorizeAdmin, deleteUser);

module.exports = route;
