
const razorpay = require("../config/razorpay");
const Order = require("../models/order");   
const crypto = require("crypto");

//  DEBUG (add this at top)
console.log("RAZORPAY KEY:", process.env.RAZORPAY_KEY_ID);
console.log("RAZORPAY SECRET:", process.env.RAZORPAY_KEY_SECRET);

exports.createOrder = async (req, res) => {
  try {
    const { userId, cartItems, amount } = req.body;

    if (!amount) {
      return res.status(400).json({ message: "Amount is required" });
    }

    // Save order in DB (PENDING)
    const newOrder = await Order.create({
      userId,
      items: cartItems,
      amount,
      paymentStatus: "PENDING",
    });

    // Create Razorpay order
    const razorpayOrder = await razorpay.orders.create({
      amount: amount * 100, // convert to paise
      currency: "INR",
      receipt: `order_${newOrder._id}`,
    });

    // Save razorpay order id
    newOrder.razorpayOrderId = razorpayOrder.id;
    await newOrder.save();

    res.status(200).json({
      orderId: newOrder._id,
      razorpayOrderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      key: process.env.RAZORPAY_KEY_ID, // frontend key
    });

  } catch (err) {
    console.error("Create Order Error:", err);
    res.status(500).json({ message: "Order creation failed" });
  }
};

// VERIFY PAYMENT 
exports.verifyPayment = async (req, res) => {
  try {
    const {
      orderId,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      order.paymentStatus = "PAID";
      order.razorpayPaymentId = razorpay_payment_id;
      order.razorpaySignature = razorpay_signature;
      await order.save();

      return res.json({ success: true, message: "Payment verified successfully" });
    } else {
      order.paymentStatus = "FAILED";
      await order.save();

      return res.status(400).json({ success: false, message: "Invalid signature" });
    }

  } catch (err) {
    console.error("Verify Payment Error:", err);
    res.status(500).json({ message: "Payment verification failed" });
  }
};
