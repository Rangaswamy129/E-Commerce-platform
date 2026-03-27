import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate(); 

  return (
    <div style={styles.container}>
      <h2>📞 Contact Us</h2>
      <p>Email: support@webshop.com</p>
      <p>Phone: +91 9876543210</p>

      {/* Back to Home Button */}
      <button style={styles.button} onClick={() => navigate("/")}>
        ← Back to Home
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "60px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 15px",
    background: "#ff9900",
    border: "none",
    borderRadius: "6px",
    color: "#fff",
    cursor: "pointer",
  },
};

export default Contact;