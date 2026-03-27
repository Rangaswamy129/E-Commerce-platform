import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaBoxOpen, FaPhone } from "react-icons/fa";

const BodyNav = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div className="nav-card" style={styles.card} onClick={() => navigate("/")}>
        <FaHome style={styles.icon} />
        <p>Home</p>
      </div>

      <div  className="nav-card" style={styles.card} onClick={() => navigate("/orders")}>
        <FaBoxOpen style={styles.icon} />
        <p>My Orders</p>
      </div>

      <div  className="nav-card" style={styles.card} onClick={() => navigate("/contact")}>
        <FaPhone style={styles.icon} />
        <p>Contact</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    padding: "20px",
    background: "#fff",
    margin: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "18px",
  },

  icon: {
    fontSize: "28px",
    marginBottom: "5px",
  },
};

export default BodyNav;