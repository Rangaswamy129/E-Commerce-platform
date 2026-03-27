import React, { useContext } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty, clearCart } =
  useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return (
      <Box sx={{ marginTop: "100px", textAlign: "center" }}>
        <Typography variant="h5">Your cart is empty 🛒</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 3, marginTop: "80px" }}>
      <Typography variant="h4" gutterBottom>
        Your Shopping Cart
      </Typography>

      <Grid container spacing={3}>
        {cart.map((item) => (
          <Grid item xs={12} md={6} key={item.id}>
            <Card sx={{ display: "flex", alignItems: "center" }}>
              <CardMedia
                component="img"
                image={item.image}
                alt={item.name}
                sx={{ width: 120, objectFit: "contain" }}
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography>Price: ₹{item.price}</Typography>

                {/* Quantity Buttons */}
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <IconButton onClick={() => decreaseQty(item.id)}>
                    <Remove />
                  </IconButton>

                  <Typography sx={{ mx: 1 }}>{item.qty}</Typography>

                  <IconButton onClick={() => increaseQty(item.id)}>
                    <Add />
                  </IconButton>
                </Box>

                <Button
                  variant="outlined"
                  color="error"
                  sx={{ mt: 1 }}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
                <Button
  variant="outlined"
  color="error"
  sx={{ mt: 2, mr: 2 }}
  onClick={clearCart}
>
  Clear Cart
</Button>
<Button
  component={Link}
  to="/checkout"
  fullWidth
  sx={{
    mt: 2,
    background: "#f0c14b",
    color: "black",
    fontWeight: "bold",
  }}
>
  Proceed to Checkout
</Button>


              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ marginTop: 4, textAlign: "right" }}>
        <Typography variant="h5">Total: ₹{totalPrice}</Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
