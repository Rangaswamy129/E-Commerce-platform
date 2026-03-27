import React from "react";
import { Grid, Box } from "@mui/material";
import Product from "../Product/Product";
import products from "../../data/products";

const Products = () => {
  return (
    <Box sx={{ padding: 3, marginTop: "80px" }}>
      <Grid container spacing={4} justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
