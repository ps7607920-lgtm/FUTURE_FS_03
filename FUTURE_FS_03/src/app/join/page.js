"use client";

import Image from "next/image";
import { useState } from "react";

export default function JoinPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Welcome to Starbucks Rewards!");
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      {/* Left Column - Image */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
        <Image
          src="/images/rewardcoffee.jpg" 
          alt="Starbucks Coffee"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Right Column - Form with subtle coffee bean pattern */}
      <div
        className="w-full md:w-1/2 flex items-center justify-center p-8"
        style={{
          backgroundImage: "url('/images/coffeebeans.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "150px",
          backgroundColor: "#f7f3ef",
        }}
      >
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-[#1e3932] mb-2">
            Join Starbucks Rewards
          </h1>
          <p className="text-gray-600 mb-6">
            Create an account and start earning free drinks and special offers.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block mb-2 font-medium text-[#1e3932]">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3932] outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium text-[#1e3932]">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3932] outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 font-medium text-[#1e3932]">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3932] outline-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#1e3932] hover:bg-[#0d221e] text-white py-3 rounded-lg font-semibold transition"
            >
              Join Now
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-500">
            Already have an account?{" "}
            <a href="/login" className="text-[#1e3932] hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
