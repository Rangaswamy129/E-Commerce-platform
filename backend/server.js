const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors({
  origin: "https://e-commerce-platform-zs3f.vercel.app"
}));

app.use(express.json());

//  Test API
app.get("/", (req, res) => {
  res.send("API is running...");
});

//  MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected ");
  } catch (error) {
    console.error("MongoDB Connection Failed :", error.message);
    process.exit(1);
  }
};

connectDB();

//  Routes
app.use("/api/auth", require("./routes/authRoutes"));





//  Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} `));
