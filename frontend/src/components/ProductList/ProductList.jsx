import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ProductCard from "../Product/Product";
// import Navbar from "../Navbar/Navbar";

const ProductList = ({ products = [], filters = {} }) => {
  const [filtered, setFiltered] = useState(products);

  useEffect(() => {
    let result = [...products];

    console.log("Selected Category:", filters.category);

    // Search filter
    if (filters.search) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // CATEGORY FILTER (ONLY ONE!)
    if (filters.category && filters.category !== "All") {
      result = result.filter(
        (p) => p.category.trim().toLowerCase() === filters.category.trim().toLowerCase()
      );
    }

    //  Price filter
    if (filters.price) {
      result = result.filter(
        (p) => p.price >= filters.price[0] && p.price <= filters.price[1]
      );
    }

    //  Rating filter
    if (filters.rating) {
      result = result.filter((p) => p.rating >= filters.rating);
    }

    console.log("Filtered Products:", result.map(p => p.category));

    setFiltered(result);
  }, [filters, products]);

  return (
    <>
    
    {/* <Navbar/> */}
    <Box sx={{ background: "#f4f6f8", minHeight: "100vh", p: 2 }}>
      <Typography variant="h5" fontWeight="bold">
        Explore Products 
      </Typography>

      <Typography color="gray" mb={2}>
        {filtered.length} products found
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 3,
        }}
      >
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </Box>

      {filtered.length === 0 && (
        <Typography color="red" mt={2}>
          No products found 
        </Typography>
      )}
    </Box>
    </>
  );
};

export default ProductList;
