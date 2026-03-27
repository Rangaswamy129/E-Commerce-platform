import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSignup = () => {
    if (!name || !email || !password) {
      return alert("All fields are required!");
    }

    if (!validateEmail(email)) {
      return alert("Enter a valid email address!");
    }

    if (password.length < 6) {
      return alert("Password must be at least 6 characters!");
    }

    signup(name, email, password);
    alert("Signup successful! ");
    navigate("/");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f3f3f3",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 5,
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Webshop
      </Typography>

      <Box
        sx={{
          width: 350,
          backgroundColor: "white",
          border: "1px solid #ddd",
          borderRadius: 2,
          p: 3,
        }}
      >
        <Typography variant="h5" mb={2}>
          Create account
        </Typography>

        <Typography fontSize={14}>Your name</Typography>
        <TextField fullWidth size="small" onChange={(e) => setName(e.target.value)} />

        <Typography fontSize={14} mt={1}>
          Email
        </Typography>
        <TextField fullWidth size="small" onChange={(e) => setEmail(e.target.value)} />

        <Typography fontSize={14} mt={1}>
          Password
        </Typography>
        <TextField
          fullWidth
          size="small"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          fullWidth
          sx={{
            mt: 2,
            background: "#f0c14b",
            color: "black",
            fontWeight: "bold",
          }}
          onClick={handleSignup}
        >
          Continue
        </Button>

        <Typography fontSize={12} mt={2}>
          Already have an account?{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            Sign in
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Signup;
