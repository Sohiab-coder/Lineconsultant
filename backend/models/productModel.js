const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter Product Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Enter Product Description"],
  },
  category: {
    type: String,
    required: [true, "Enter Product Category"],
  },
  price: {
    type: Number,
    required: [true, "Enter product Price"],
  },
  image: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
