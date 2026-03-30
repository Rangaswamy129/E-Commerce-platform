import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductList/ProductList";
import Banner from "./components/Banner/Banner";
 
import Navbar from "./components/Navbar/Navbar";
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

// ✅ Protected Route Component (inline)
const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const App = () => {
  const [filters, setFilters] = useState({
    search: "",
    category: "All",
    price: [0, 200000],
    rating: 0,
  });

  return (
    <BrowserRouter>
  

      <Routes>
        {/* ✅ Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ✅ Protected Home */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <>
              <Navbar setFilters={setFilters}/> 
                <Banner />
                 <BodyNav />
                <Categories setFilters={setFilters} />
                <ProductList products={products} filters={filters} />
               <Footer />
              </>
            </ProtectedRoute>
          }
        />

        {/* ✅ Protected Pages */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/success"
          element={
            <ProtectedRoute>
              <Success />
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
              <Footer />
            </ProtectedRoute>
          }
        />
      </Routes>

      
    </BrowserRouter>
  );
};

export default App;