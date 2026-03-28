// src/pages/Checkout.jsx
import React, { useState } from "react";
import { Box, Typography, Card, CardMedia } from "@mui/material";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import PaymentForm from "../components/PaymentForm";

//import { useAuth } from "../context/AuthContext";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
      // cart items
 // const { user } = useAuth();       // logged-in user
const [showPaymentForm, setShowPaymentForm] = useState(false);



  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
 

  // const [shipping, setShipping] = useState({
  //   name: "",
  //   address: "",
  //   city: "",
  //   pincode: "",
  // });

  // const handleChange = (e) => {
  //   setShipping({ ...shipping, [e.target.name]: e.target.value });
  // };

  

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <Typography sx={{ p: 3, fontSize: "20px" }}>
        Your cart is empty 🛒
      </Typography>
    );
  }

  return (
    
    <Box>
      {/* Banner */}
      <Box
        sx={{
          width: "100%",
          height: 150,
          backgroundImage: "url('https://source.unsplash.com/1600x400/?shopping,amazon')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mb: 3,
        }}
      />

      {/* Main content */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          p: 3,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        

        {/* RIGHT SIDE - Order Summary */}
        <Box
          sx={{
            flex: 1,
            minWidth: 300,
            border: "1px solid #ddd",
            borderRadius: 2,
            p: 2,
            height: "fit-content",
            position: { md: "sticky" },
            top: 80,
            bgcolor: "#fff",
          }}
        >
          <Typography variant="h6" mb={2}>
            Order Summary ({cart.length} items)
          </Typography>

          {cart.map((item) => (
            <Card
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                p: 1,
                border: "1px solid #eee",
                borderRadius: 1,
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{ width: 80, height: 80, objectFit: "contain" }}
              />
              <Box sx={{ ml: 2, flex: 1 }}>
                <Typography fontWeight="bold">{item.title}</Typography>
                <Typography>
                  {item.quantity} x ₹{item.price} = ₹{item.quantity * item.price}
                </Typography>
              </Box>
            </Card>
          ))}

          <Typography variant="h6" fontWeight="bold" mt={2}>
            Total: ₹{total}
          </Typography>
          <div>
      <h2>Checkout Page</h2>
      <h3>Total Amount: ₹{totalPrice}</h3>
<button onClick={() => setShowPaymentForm(true)}>
  Pay Now 💳
</button>

{showPaymentForm && (
  <PaymentForm
    totalAmount={totalPrice}
    onClose={() => setShowPaymentForm(false)}
    onSuccess={() => {
  setShowPaymentForm(false);

  const order = {
    id: Date.now(), // unique ID
    items: cart,
    total: totalPrice,
    date: new Date().toLocaleString(),
  };

  // get old orders
  const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

  // save new order
  localStorage.setItem("orders", JSON.stringify([...existingOrders, order]));

  clearCart();
  navigate("/success");
}}
  />
)}

     
    </div>
    <div>
      

      <button onClick={() => navigate("/cart")}>
        ← Back to Cart
      </button>
    </div>
   
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
