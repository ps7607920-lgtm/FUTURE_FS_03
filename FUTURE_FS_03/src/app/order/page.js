"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext"; 

export default function OrderPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    paymentMethod: "credit-card",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [error, setError] = useState("");

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleQuantityChange = (id, qty) => {
    if (qty < 1) return;
    updateQuantity(id, qty);
  };

  const handlePlaceOrder = () => {
    if (
      !customer.name ||
      !customer.email ||
      !customer.address ||
      !customer.phone
    ) {
      setError("Please fill in all customer details.");
      return;
    }
    if (cart.length === 0) {
      setError("Your cart is empty.");
      return;
    }
    setError("");
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced)
    return (
      <div
        className={`max-w-3xl mx-auto p-6 text-center transition-opacity duration-700 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>
        <p>We have received your order and will process it shortly.</p>
      </div>
    );

  return (
    <div
      className={`max-w-5xl mx-auto p-6 transition-opacity duration-700 transform ${
        fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h1 className="text-4xl font-bold mb-6">Your Order</h1>

      {/* Cart Items */}
      <div className="mb-8">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-2">Product</th>
                <th className="text-left py-2">Price</th>
                <th className="text-left py-2">Quantity</th>
                <th className="text-left py-2">Subtotal</th>
                <th className="text-left py-2">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(({ id, name, price, quantity, image }) => (
                <tr key={id} className="border-b border-gray-200">
                  <td className="py-2 flex items-center space-x-4">
                    <img
                      src={image}
                      alt={name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span>{name}</span>
                  </td>
                  <td className="py-2">₹{price}</td>
                  <td className="py-2">
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) =>
                        handleQuantityChange(id, parseInt(e.target.value))
                      }
                      className="w-16 border rounded px-2 py-1"
                    />
                  </td>
                  <td className="py-2">₹{price * quantity}</td>
                  <td className="py-2">
                    <button
                      onClick={() => removeFromCart(id)}
                      className="text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {cart.length > 0 && (
          <div className="mt-4 text-right font-semibold text-lg">
            Total: ₹{totalPrice}
          </div>
        )}
      </div>

      {/* Customer Details Form */}
      <div className="mb-8 max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">Customer Details</h2>

        <label className="block mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={customer.name}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </label>

        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={customer.email}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </label>

        <label className="block mb-2">
          Address:
          <textarea
            name="address"
            value={customer.address}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2 mt-1"
            rows={3}
          />
        </label>

        <label className="block mb-2">
          Phone:
          <input
            type="tel"
            name="phone"
            value={customer.phone}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </label>

        <label className="block mb-4">
          Payment Method:
          <select
            name="paymentMethod"
            value={customer.paymentMethod}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2 mt-1"
          >
            <option value="credit-card">Credit Card</option>
            <option value="upi">UPI</option>
            <option value="cod">Cash on Delivery</option>
          </select>
        </label>

        {error && (
          <p className="mb-4 text-red-600 font-semibold">{error}</p>
        )}

        <button
          onClick={handlePlaceOrder}
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
