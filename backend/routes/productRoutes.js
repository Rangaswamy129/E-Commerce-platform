const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Add product (for testing)
router.post("/", async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

//  Get all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Search products 
router.get("/search", async (req, res) => {
  const keyword = req.query.q
    ? {
        title: { $regex: req.query.q, $options: "i" },
      }
    : {};

  const products = await Product.find(keyword);
  res.json(products);
});
router.get("/search", async (req, res) => {
  try {
    const { q } = req.query;

    const products = await Product.find({
      $or: [
        { title: { $regex: q, $options: "i" } },
        { category: { $regex: q, $options: "i" } }
      ]
    });

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
