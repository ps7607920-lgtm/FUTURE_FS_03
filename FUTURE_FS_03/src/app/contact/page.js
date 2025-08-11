"use client";

import { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    e.target.reset();
  };

  return (
    <section className="py-16 bg-[#f7f3ef] relative">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Toast Notification - positioned above heading */}
        {showToast && (
          <div
            className={`absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#1e3932] text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 z-50 transition-all duration-500 ease-in-out ${
              showToast
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-5"
            }`}
          >
            ☕ <span>Your Form has been submitted.</span>
          </div>
        )}

        {/* Heading */}
        <h2
          className={`text-4xl font-bold text-[#1e3932] text-center mb-4 transition-all duration-1000 ease-out transform ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Contact Us
        </h2>
        <p
          className={`text-lg text-gray-600 text-center mb-12 transition-all duration-1000 ease-out transform delay-150 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Have a question, feedback, or just want to say hello? Fill out the form
          below or reach us directly.
        </p>

        <div
          className={`grid md:grid-cols-2 gap-10 transition-all duration-1000 ease-out transform delay-300 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Contact Form */}
          <form
            className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1e3932]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1e3932]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1e3932]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#1e3932] text-white px-6 py-3 rounded-lg hover:bg-[#163029] transition-colors duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-[#1e3932] text-2xl" />
              <p className="text-gray-700 text-lg">+1 234 567 890</p>
            </div>

            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-[#1e3932] text-2xl" />
              <p className="text-gray-700 text-lg">contact@starbucks.com</p>
            </div>

            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-[#1e3932] text-2xl" />
              <p className="text-gray-700 text-lg">
                123 Starbucks Street, Coffee City, USA
              </p>
            </div>

            <iframe
              className="rounded-2xl shadow-lg w-full h-64 border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019849565238!2d-122.41941548468168!3d37.77492977975985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064ef0c6a41%3A0x4c0f4c3a4a8dcd55!2sStarbucks!5e0!3m2!1sen!2sus!4v1627488284074!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
