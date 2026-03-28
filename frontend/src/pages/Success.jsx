import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>Order Placed Successfully!</h1>
      <p>Your order will be delivered soon.</p>

      <button onClick={() => navigate("/")}>
        Continue Shopping 
      </button>
    </div>
  );
};

export default Success;