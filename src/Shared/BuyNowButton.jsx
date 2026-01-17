"use client";

import { toast } from "react-hot-toast";

export default function BuyNowButton({ productName }) {
  const handleBuy = () => {
    toast.success(`${productName} buy successful!`, {
      style: {
        borderRadius: '15px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  return (
    <button 
      onClick={handleBuy}
      className="btn btn-primary btn-lg flex-1 w-full rounded-2xl shadow-xl shadow-primary/20 text-white gap-3 text-lg border-none"
    >
      Buy Now
    </button>
  );
}