import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductList/ProductList";
import Banner from "./components/Banner/Banner";

import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Register from "./pages/Register";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import Categories from "./components/Categories/Categories";
import Success from "./pages/Success";

import Orders from "./pages/Orders";
import BodyNav from "./components/BodyNav/BodyNav"; 

import Footer from "./components/Footer/Footer"; 
import products from "./api/products";

const App = () => {
 const [filters, setFilters] = useState({
  search: "",
  category: "All", 
  price: [0, 200000],
  rating: 0,
});

  return (
    <BrowserRouter>
      <Navbar setFilters={setFilters} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
            
              <Categories setFilters={setFilters} />
             
              <ProductList products={products} filters={filters} />
                 <BodyNav /> 
            </>
          }
        />

        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/register" element={<Register />} />
<Route path="/payment" element={<Payment />} />
 <Route path="/success" element={<Success />} />
 <Route path="/orders" element={<Orders />} />
 <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer/>
   
    </BrowserRouter>
    
  );
};

export default App;
