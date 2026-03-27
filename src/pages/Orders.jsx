import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders.reverse()); // latest first
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} style={styles.orderBox}>
            <h4>Order ID: {order.id}</h4>
            <p>Date: {order.date}</p>
            <p>Total: ₹{order.total}</p>

            {order.items.map((item) => (
              <div key={item.id} style={styles.item}>
                <img src={item.image} alt={item.title} width="60" />
                <span>{item.title}</span>
                <span>Qty: {item.quantity}</span>
                
              </div>
            ))}
          </div>
        ))
      )}
      {orders.length > 0 && (
  <button
    onClick={() => {
      localStorage.removeItem("orders");
      setOrders([]);
    }}
    style={styles.clearBtn}
  >
    Cancel Orders 🗑️
  </button>
)}

      <button onClick={() => navigate("/")}>
        ← Back to Home
      </button>
    </div>
  );
};

const styles = {
  orderBox: {
    border: "1px solid #ccc",
    padding: "15px",
    margin: "15px 0",
    borderRadius: "8px",
  },
  item: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    margin: "8px 0",
  },
};

export default Orders;