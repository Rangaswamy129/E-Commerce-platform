import React, { useState } from "react";

const PaymentForm = ({ totalAmount, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    country: "",
    city: "",
    pincode: "",
    paymentMethod: "card",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //  payment logic here
    if (formData.paymentMethod === "cod") {
      alert("Order placed with Cash on Delivery 🛒");
    } else if (formData.paymentMethod === "upi") {
      alert("UPI Payment Successful ");
    } else {
      alert("Card Payment Successful ");
    }

    // Call success (IMPORTANT)
    onSuccess();
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>💳 Payment Details</h2>
        <p>Total Amount: ₹{totalAmount}</p>

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required style={styles.input} />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required style={styles.input} />
          <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} required style={styles.input} />
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required style={styles.input} />
          <input type="text" name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} required style={styles.input} />

          <h4>Payment Method</h4>
          <div style={styles.radioGroup}>
            <label>
              <input type="radio" name="paymentMethod" value="card" checked={formData.paymentMethod === "card"} onChange={handleChange} />
              Credit Card
            </label>
            <label>
              <input type="radio" name="paymentMethod" value="upi" onChange={handleChange} />
              UPI
            </label>
            <label>
              <input type="radio" name="paymentMethod" value="cod" onChange={handleChange} />
              Cash on Delivery
            </label>
          </div>

          <div style={styles.buttons}>
            <button type="submit" style={styles.payBtn}>
              Pay ₹{totalAmount}
            </button>
            <button type="button" onClick={onClose} style={styles.cancelBtn}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "400px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  radioGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  payBtn: {
    background: "#28a745",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  cancelBtn: {
    background: "#dc3545",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default PaymentForm;