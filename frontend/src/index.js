import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

import { Elements } from "@stripe/react-stripe-js";

import "./App.css";

const theme = createTheme();


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AuthProvider>
      <CartProvider>
        
         
             <App />
         
        
     
       
      </CartProvider>
    </AuthProvider>
  </ThemeProvider>
);

