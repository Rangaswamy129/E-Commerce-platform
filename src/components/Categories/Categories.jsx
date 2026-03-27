import React from "react";
import { Box, Button } from "@mui/material";

const categories = ["All", "Mobiles", "Laptops", "Headphones", "TVs", "Accessories"];

const Categories = ({ setFilters }) => {
  const handleCategory = (cat) => {
    console.log("Category clicked:", cat);

    setFilters((prev) => ({
      ...prev,
      category: cat, 
    }));
  };

  return (
    <Box sx={{ display: "flex", gap: 2, p: 2, flexWrap: "wrap" }}>
      {categories.map((cat) => (
        <Button
          key={cat}
          variant="contained"
          onClick={() => handleCategory(cat)}
          sx={{
            background: "#232f3e",
            "&:hover": { background: "#37475a" },
          }}
        >
          {cat}
        </Button>
      ))}
    </Box>
  );
};

export default Categories;
