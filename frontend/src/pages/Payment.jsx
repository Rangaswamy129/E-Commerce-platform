import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const stripePromise = loadStripe("pk_test_51T0HsHJFryXmiqadLC9xUefHKOZBlqtf53tERMvQbmOlQvltBUiINNulAHli4rfxcCDjFZYm2MKS19zX7pu6nYD400UmrfJHan");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    axios.post("http://localhost:5000/api/payment/create-payment-intent", {
      amount: 500, // example ₹500
    }).then(res => setClientSecret(res.data.clientSecret));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      alert("Payment failed ");
    } else {
      alert("Payment successful ");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Pay Now 💳</h2>
      <CardElement />
      <button disabled={!stripe}>Pay</button>
    </form>
  );
};

const Payment = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default Payment;
