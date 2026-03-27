const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  items: [
    {
      title: String,
      price: Number,
      quantity: Number,
      image: String,
    },
  ],
  amount: Number,
  paymentMethod: {
    type: String,
    enum: ["COD", "RAZORPAY"],
    default: "RAZORPAY",
  },
  paymentStatus: {
    type: String,
    enum: ["PENDING", "PAID", "FAILED"],
    default: "PENDING",
  },
  razorpayOrderId: String,
  razorpayPaymentId: String,
  razorpaySignature: String,
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
