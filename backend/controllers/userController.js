const User = require("../models/userModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Errorhander = require("../utils/errorhander");
const sendToken = require("../utils/sendToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const cloudinary = require("cloudinary");
const getDataUri = require("../utils/dataUri");

// User Register Controller
exports.Register = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const file = req.file;

  if (!name || !email || !password) {
    return next(new Errorhander("Please enter all field", 400));
  }

  let user = await User.findOne({ email });

  if (user) return next(new Errorhander("User Already Exist", 409));
  const fileUri = getDataUri(file);

  const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);

  user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: mycloud.public_id,
      url: mycloud.secure_url,
    },
  });

  sendToken(res, user, `${user.name} Welcome to ecommerce app`, 201);
});

// User Login Controller
exports.login = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new Errorhander("All fields required", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new Errorhander("Email & Password incorrect", 400));
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return next(new Errorhander("Email & Password incorrect", 400));
  }

  sendToken(res, user, `Welcome back ${user.name}`, 200);
});

// User Logout Controller
exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged out",
  });
});

// Change Password Controller
exports.changePassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");
  const { oldPassword, newPassword, confirmPassword } = req.body;

  if (!newPassword || !oldPassword || !confirmPassword) {
    return next(new Errorhander("All fields required", 400));
  }

  const isMatch = await user.comparePassword(oldPassword);
  if (!isMatch) {
    return next(new Errorhander("Old Password incorrect", 400));
  }

  if (newPassword !== confirmPassword) {
    return next(new Errorhander("Password does not matched", 400));
  }

  user.password = newPassword;
  await user.save();

  res.status(200).json({
    success: true,
    message: "Password changed",
  });
});

// Forget Password Controller
exports.forgetPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new Errorhander("Incorrect email entered", 400));
  }

  const resetToken = user.getResetPasswordToken();

  await user.save();

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/password/reset/${resetToken}`;

  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Ecommerce Password Recovery",
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    return next(new Errorhander(error.message, 500));
  }
});

// Reset Password Controller
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new Errorhander(
        "Reset Password Token is invalid or has been expired",
        400
      )
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new Errorhander("Password does not matched", 400));
  }

  user.password = req.body.password;
  user.resetPasswordExpire = undefined;
  user.resetPasswordToken = undefined;

  await user.save();

  sendToken(res, user, "", 200);
});

// Update Profile Controller
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
  const { name, email } = req.body;
  const user = await User.findById(req.user.id);

  if (name) {
    user.name = name;
  }
  if (email) {
    user.email = email;
  }

  await user.save();

  res.status(200).json({
    success: true,
    message: "Profile updated",
  });
});

// See My Profile Controller
exports.myProfile = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({
    success: true,
    user,
  });
});

// Delete My Profile Controller
exports.deleteProfile = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  await cloudinary.v2.uploader.destroy(user.avatar.public_id);

  await user.remove();
  res.status(200).json({
    success: true,
    message: "Profile deleted",
  });
});

// Admin Controllers
// Get All User Controllers  --Admin
exports.getAllUser = catchAsyncErrors(async (req, res, next) => {
  const users = await User.find({});
  res.status(200).json({
    success: true,
    users,
  });
});

// Get Single User Controllers  --Admin
exports.getSingleUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new Errorhander(`User does not exist with Id: ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    user,
  });
});

// update User Role -- Admin
exports.updateUserRole = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new Errorhander(`User does not exist with Id: ${req.params.id}`, 404)
    );
  }

  if (user.role === "user") {
    user.role = "admin";
  } else {
    user.role = "user";
  }

  await user.save();

  res.status(200).json({
    success: true,
    message: `${user.name} role updated and set ${user.role}`,
  });
});

// Delete User -- Admin
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new Errorhander(`User does not exist with Id: ${req.params.id}`, 404)
    );
  }

  await cloudinary.v2.uploader.destroy(user.avatar.public_id);

  await user.remove();

  res.status(200).json({
    success: true,
    message: "User deleted",
  });
});
