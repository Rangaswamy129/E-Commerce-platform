import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Box, Button, IconButton, Badge, InputBase } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../../context/CartContext"; 
import { useAuth } from "../../context/AuthContext";
import { getPoints } from "../../utils/points";
import { FaShoppingBag } from "react-icons/fa";


const Navbar = ({ setFilters }) => {

  
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const { user, logout } = useAuth();
  const { cart } = useCart();
const points = getPoints();
<span style={{ color: "gold" }}> {points} pts</span>
  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);

    //  search filter 
    if (setFilters) {
      setFilters((prev) => ({
        ...prev,
        search: value,
      }));
    }
  };

  // Voice search function 
  const startVoiceSearch = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Voice search not supported in this browser");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      setText(voiceText);
      if (setFilters) {
  setFilters((prev) => ({
    ...prev,
    search: voiceText,
  }));
}

    };

    recognition.start();
  };


   

  return (
    
    <AppBar position="sticky" sx={{ background: "#131921" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* LOGO */}
        <Box component={Link} to="/" sx={{ color: "white", textDecoration: "none", fontWeight: "bold", fontSize: 22 }}>
        <h2 className="logo">
  <FaShoppingBag className="logo-icon" />
  E-COMMERCE
</h2>
          
        </Box>

        {/* SEARCH BAR */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            background: "white",
            borderRadius: 1,
            px: 1,
            width: "40%",
          }}
        >
          <InputBase
            placeholder="Search products..."
            value={text}
            onChange={handleChange}
            sx={{ ml: 1, flex: 1 }}
          />

          {/*  Voice Search Button */}
          <Button onClick={startVoiceSearch}>🎤</Button>
        </Box>

        {/* RIGHT SIDE */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          
 <div>
      {user ? (
  <div style={styles.userBox}>
     {user.name}
    <button onClick={logout} style={styles.logoutBtn}>
      Logout
    </button>
  </div>
) : (
  <button onClick={() => navigate("/login") }>
    Login
  </button>
  
)}

    </div>
   
          <IconButton component={Link} to="/cart" sx={{ color: "white" }}>
            {/*  REAL cart count */}
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
    
  );
};

const styles = {
  userBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#fff",
  },
  logoutBtn: {
    background: "#ff4d4d",
    border: "none",
    padding: "5px 10px",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Navbar;


















