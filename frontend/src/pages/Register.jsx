import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;
const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     const res = await axios.post(`${API}/api/auth/register`, form);
      alert(res.data.message); 
      navigate("/login"); 
    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Create Account</h2>

        <label style={styles.label}>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>Register</button>

        <p style={styles.signupText}>
          Already have an account? <span style={styles.signupLink} onClick={() => navigate("/login")}>Login</span>
        </p>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  form: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    width: "350px",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#131921",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
    fontSize: "14px",
    color: "#333",
  },
  input: {
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    padding: "12px",
    backgroundColor: "#131921",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
  },
  signupText: {
    marginTop: "15px",
    textAlign: "center",
    fontSize: "14px",
    color: "#555",
  },
  signupLink: {
    color: "#131921",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Register;