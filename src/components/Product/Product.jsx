import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import { useCart } from "../../context/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card
      sx={{
        borderRadius: 4,
        boxShadow: "0 10px 30px rgba(55, 69, 40, 0.08)",
        transition: "0.3s",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.59)",
        },
      }}
    >
      {/* Image */}
      <Box sx={{ p: 2, textAlign: "center" }}>
       <CardMedia
  component="img"
  image={product.image}
  alt={product.title}
  sx={{
    width: "100%",
    height: "140px", 
    objectFit: "contain",
    marginBottom: "10px",
  }}
/>

      </Box>

      {/* Content */}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" fontWeight="bold">
          {product.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          ⭐ {product.rating} | Brand: {product.brand}
        </Typography>

        <Typography variant="h6" color="primary" mt={1}>
          ₹{product.price}
        </Typography>
      </CardContent>

      {/* Button */}
      <Box sx={{ p: 2 }}>
        <Button
          fullWidth
          variant="contained"
          onClick={() => addToCart(product)}
          sx={{
            borderRadius: 3,
            background: "linear-gradient(135deg, #6a5af9, #00b4d8)",
          }}
        >
          Add to Cart
        </Button>
      

  

      </Box>
    </Card>
  );
};

export default Product;


