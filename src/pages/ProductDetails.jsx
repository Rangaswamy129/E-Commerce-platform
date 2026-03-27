import React from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Laptop",
    price: 50000,
    description: "High performance laptop",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Mobile",
    price: 20000,
    description: "Latest smartphone",
    image: "https://via.placeholder.com/300",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2>Product not found </h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="300" />
      <p>{product.description}</p>
      <h3>₹{product.price}</h3>

      <button style={{ padding: "10px 20px", cursor: "pointer" }}>
        Add to Cart 🛒
      </button>
    </div>
  );
};

export default ProductDetails;
