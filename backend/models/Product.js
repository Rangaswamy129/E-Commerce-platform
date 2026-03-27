const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: String,
    price: Number,
    category: String,
    rating: Number,
    image: String,
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
