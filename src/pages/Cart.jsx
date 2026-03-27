// src/pages/Cart.jsx
import React from "react";
import { Box, Typography, Button, Card, CardMedia } from "@mui/material";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

import products from "../api/products";

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();
  const navigate = useNavigate();
const recommendProducts = (cartItems) => {
  return products.filter(p => !cartItems.some(c => c.id === p.id)).slice(0, 3);
};
const recommended = recommendProducts(cart);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <Typography sx={{ p: 3, fontSize: "20px" }}>
        Your cart is empty 🛒
      </Typography>
    );
  }

  return (
    <>
   

    <Box sx={{ display: "flex", gap: 3, p: 3, flexWrap: "wrap" }}>
      {/* LEFT SIDE - Cart Items */}
      <Box sx={{ flex: 3, minWidth: 300 }}>
        <Typography variant="h5" mb={2}>
          Shopping Cart
        </Typography>

        {cart.map((item) => (
          <Card
            key={item.id}
            sx={{ display: "flex", alignItems: "center", mb: 2, p: 2 }}
          >
            <CardMedia
              component="img"
              image={item.image}
              alt={item.title}
              sx={{ width: 120, height: 120, objectFit: "contain" }}
            />

            <Box sx={{ flex: 1, ml: 2 }}>
              <Typography fontWeight="bold">{item.title}</Typography>
              <Typography color="green">₹{item.price}</Typography>

              <Box sx={{ mt: 1 }}>
                <Button size="small" onClick={() => decreaseQty(item.id)}>
                  -
                </Button>
                <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                <Button size="small" onClick={() => increaseQty(item.id)}>
                  +
                </Button>
              </Box>

              <Button color="error" size="small" onClick={() => removeFromCart(item.id)}>
                Remove
              </Button>
            </Box>

            <Typography fontWeight="bold">₹{item.price * item.quantity}</Typography>
          </Card>
        ))}
      </Box>

      {/* RIGHT SIDE - Subtotal */}
      <Box
        sx={{
          flex: 1,
          border: "1px solid #ddd",
          p: 2,
          height: "fit-content",
          borderRadius: 2,
          minWidth: 250,
        }}
      >
        <Typography variant="h6">Subtotal ({cart.length} items):</Typography>
        <Typography variant="h5" fontWeight="bold">
          ₹{total}
        </Typography>

        <Button
          fullWidth
          sx={{
            mt: 2,
            background: "#f0c14b",
            color: "black",
            fontWeight: "bold",
            "&:hover": { background: "#ddb347" },
          }}
          onClick={() => navigate("/checkout")}
        >
          Proceed to Checkout
        </Button>
      </Box>
    </Box>

    
    {/* Recommended Products */}
<Box sx={{ p: 3 }}>
  <Typography variant="h6" mb={2}>
    Recommended for you
  </Typography>

  <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
    {recommended.map((p) => (
      <Card key={p.id} sx={{ width: 200, p: 1 }}>
        <CardMedia
          component="img"
          image={p.image}
          alt={p.title}
          sx={{ height: 120, objectFit: "contain" }}
        />
        <Typography fontSize="14px" fontWeight="bold">
          {p.title}
        </Typography>
        <Typography color="green">₹{p.price}</Typography>
      </Card>
    ))}
  </Box>
</Box>
 <div>
    
      <button onClick={() => navigate("/")}>
        ← Back to Home
      </button>
      </div>

    </>
    
  );
};

export default Cart;
