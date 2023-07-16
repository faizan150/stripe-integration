'use client'
import getStripePromise from "@/lib/stripe";

const products = [
  {
    product: 1,
    name: "StripeProduct",
    price: 200,
    quantity: 3,
  },
];

const StripeCheckOutButton = async () => {
  const stripe = await getStripePromise();

  const handleAddToCart = async () => {
    const response = await fetch("/api/stripeSession", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(products),
    });

    const data = await response.json();
    console.log(data);
    
    if (data.id) {
      stripe?.redirectToCheckout({ sessionId: data.id }); // Corrected the typo here
    }
  };
  return (
    <div className="py-5  ">
      <button
        className="bg-green-500 py-5 px-5 text-white rounded-md"
        onClick={handleAddToCart}
      >
        Check Out
      </button>
    </div>
  );
};

export default StripeCheckOutButton;
