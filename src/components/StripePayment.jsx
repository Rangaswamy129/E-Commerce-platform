import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_YOUR_PUBLIC_KEY"); 

const CheckoutForm = ({ totalAmount }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async () => {
    const res = await fetch("http://localhost:5000/api/stripe/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: totalAmount }),
    });

    const data = await res.json();

    if (!data.clientSecret) {
      alert("Stripe error: clientSecret not received ");
      return;
    }

    const result = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      alert(result.error.message);
    } else {
      alert("Payment Successful ");
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Enter Card Details 💳</h3>
      <CardElement />
      <button onClick={handlePayment} style={{ marginTop: "10px" }}>
        Pay ₹{totalAmount}
      </button>
    </div>
  );
};

const StripePayment = ({ totalAmount }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm totalAmount={totalAmount} />
    </Elements>
  );
};

export default StripePayment;
