import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      
      <h3>Follow Us</h3>

      {/* Social Media Links */}
      <div style={styles.social}>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>

        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>

        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>

        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>

      <p style={{ marginTop: "10px" }}>
        © 2026 WebShop. All rights reserved.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    background: "#111",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
    marginTop: "40px",
  },
  social: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    fontSize: "22px",
    marginTop: "10px",
  },
};

export default Footer;