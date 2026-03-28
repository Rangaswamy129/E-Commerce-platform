import React from "react";
import Banner from "../Banner/Banner";
import ProductsList from "../ProductList/ProductList";

const Home = ({ products }) => {
  return (
    <>
      <Banner />
      <ProductsList products={products} />
    </>
  );
};

export default Home;
