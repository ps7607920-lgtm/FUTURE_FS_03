"use client";

import { useRouter } from "next/router"; 
import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext"; 

const menuItems = [
];

export default function ProductDetailPage({ params }) {

  const { id } = params || {};

  const productId = Number(id);

  const { addToCart, cart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productId) {
      const found = menuItems.find((item) => item.id === productId);
      setProduct(found || null);
    }
  }, [productId]);

  if (!product) return <p className="p-6">Product not found.</p>;

  const inCart = cart.find((item) => item.id === product.id);
  const quantity = inCart ? inCart.quantity : 0;

  return (
    <section className="max-w-4xl mx-auto p-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-h-96 object-contain mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-xl font-semibold text-[#147552] mb-2">₹{product.price}</p>
      <p className="mb-4">Category: {product.category}</p>

      <button
        onClick={() => addToCart(product)}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add to Cart {quantity > 0 && <span>({quantity})</span>}
      </button>
    </section>
  );
}
