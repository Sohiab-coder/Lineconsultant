const Product = require("../models/productModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Apifeatures = require("../utils/apifeatures");
const Errorhander = require("../utils/errorhander");
const cloudinary = require("cloudinary");
const getDataUri = require("../utils/dataUri");

// Create Product --Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const file = req.file;
  const { name, price, category, description } = req.body;
  const fileUri = getDataUri(file);

  const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);

  const product = await Product.create({
    name,
    price,
    description,
    category,
    image: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },
  });

  res.status(201).json({
    success: true,
    product,
  });
});

// Get All Product
exports.allProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    products,
  });
});

// Get Product Details
exports.singleProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(
      new Errorhander(`Product does not exist with Id: ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// Delete Product --Admin
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(
      new Errorhander(`Product does not exist with Id: ${req.params.id}`, 404)
    );
  }

  await cloudinary.v2.uploader.destroy(product.image.public_id);

  await product.remove();
  res.status(200).json({
    success: true,
    message: "Product deleted",
  });
});

// Create New Review or Update the review
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productId);
  if (!product) {
    return next(
      new Errorhander(`Product does not exist with Id: ${productId}`, 404)
    );
  }

  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    product.reviews.forEach((i) => {
      if (i.user.toString() === req.user._id.toString())
        (i.rating = rating), (i.comment = comment);
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }
  let avg = 0;
  product.reviews.forEach((i) => {
    avg += i.rating;
  });

  product.ratings = avg / product.reviews.length;

  await product.save();

  res.status(200).json({
    success: true,
  });
});

// Get All Reviews of a product
exports.allReviews = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.query.id);

  if (!product) {
    return next(
      new Errorhander(`Product does not exist with Id: ${req.query.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});

// Delete Review
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.query.productId);

  if (!product) {
    return next(new Errorhander("Product not found", 404));
  }

  const reviews = product.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let avg = 0;

  reviews.forEach((rev) => {
    avg += rev.rating;
  });

  let ratings = 0;

  if (reviews.length === 0) {
    ratings = 0;
  } else {
    ratings = avg / reviews.length;
  }

  const numOfReviews = reviews.length;

  await Product.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    message: "Review deleted",
  });
});
