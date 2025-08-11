"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const [heroVisible, setHeroVisible] = useState(false); 

  useEffect(() => {
    setFadeIn(true);

    setTimeout(() => {
      setHeroVisible(true);
    }, 100);

    featuredProducts.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 400); 
    });
  }, []);

  const featuredProducts = [
    {
      id: 1,
      name: "Frappuccino",
      price: "₹350",
      image: "/images/coffee2.jpg",
      rating: 4.5,
      badge: "Trending",
    },
    {
      id: 2,
      name: "Cappuccino Flavoured Milk Iced Latte",
      price: "₹325",
      image: "/images/coffee9.jpg",
      rating: 4,
      badge: "Popular",
    },
    {
      id: 3,
      name: "Cold Brew",
      price: "₹336",
      image: "/images/coffee1.jpg",
      rating: 5,
      badge: null,
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <main
      className={`space-y-20 transition-opacity duration-[2000ms] ease-out ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Hero Section with Slide-in */}
      <section
        className={`relative h-[70vh] w-full rounded-lg overflow-hidden transform transition-all duration-[1200ms] ease-out ${
          heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Image
          src="/images/starbucks.jpg"
          alt="Starbucks hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to Starbucks
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Freshly brewed coffee and delightful flavors, just for you.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Coffee Specials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-[1200ms] ease-out hover:scale-105 hover:shadow-2xl relative flex flex-col ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 400}ms`,
              }}
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-3 left-3 bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg z-10 select-none">
                  {product.badge}
                </div>
              )}

              <div className="relative w-full max-w-sm aspect-[4/3] rounded overflow-hidden bg-gray-100 group mx-auto">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain rounded transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 300px"
                  priority={product.id === 1}
                />
              </div>
              <div className="p-5 text-center flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[#00704A]">
                    {product.name}
                  </h3>
                  <p className="text-gray-700 mt-1">{product.price}</p>

                  {/* Rating */}
                  <div className="flex justify-center items-center mt-2 space-x-1">
                    {Array.from({ length: 5 }, (_, i) => {
                      const starFull = i + 1 <= Math.floor(product.rating);
                      const starHalf = !starFull && i + 1 - product.rating < 1;
                      return (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill={starFull || starHalf ? "#FBBF24" : "#d1d5db"}
                          className="w-5 h-5"
                        >
                          {starFull && (
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.39 2.462c-.784.57-1.838-.197-1.54-1.118l1.287-3.967a1 1 0 00-.364-1.118L3.602 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
                          )}
                          {starHalf && (
                            <>
                              <defs>
                                <linearGradient id={`halfGrad-${i}`}>
                                  <stop offset="50%" stopColor="#FBBF24" />
                                  <stop offset="50%" stopColor="#d1d5db" />
                                </linearGradient>
                              </defs>
                              <path
                                fill={`url(#halfGrad-${i})`}
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.39 2.462c-.784.57-1.838-.197-1.54-1.118l1.287-3.967a1 1 0 00-.364-1.118L3.602 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"
                              />
                            </>
                          )}
                          {!starFull && !starHalf && (
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.39 2.462c-.784.57-1.838-.197-1.54-1.118l1.287-3.967a1 1 0 00-.364-1.118L3.602 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
                          )}
                        </svg>
                      );
                    })}
                  </div>
                </div>

                <button
                  onClick={() => addToCart(product)}
                  className="mt-5 w-full bg-green-600 text-white font-semibold py-2 rounded-full hover:bg-green-700 transition duration-300"
                >
                  Add Item
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            href="/menu"
            className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition duration-300"
          >
            View Full Menu
          </Link>
        </div>
      </section>
    </main>
  );
}
