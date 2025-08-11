"use client";

import React, { useState, useRef, useEffect } from "react";
import { useCart } from "../../context/CartContext";

const menuItems = [
  { 
    id: 1,
    name: "Iced Caffe Americano",
    price: 346,
    image: "/images/coffee1.jpg",
    category: "Blended Beverages",
    rating: 4.5, 
    description: "Espresso shots are topped with water to produce a light layer of crema, then served over ice.\nTall(354ml) - 0kcal\nBrewed Coffee"
  },
  { 
    id: 2,
    name: "Belgium Chocolate Cream Frappuccino", 
    price: 520, 
    image: "/images/coffee3.jpg", 
    category: "Blended Beverages", 
    rating: 4.4,
    description: "Blended of decadent Belgian chocolate sauce and coffee with a whipped chocolate topping. The beverage is finished off with dark chocolate chips swirled to make a smooth blend.\nTall(354ml) - 479kcal\nIngredients: Milk Soy" 
  },
  { 
    id: 3,
    name: "Banana Chocolate Loaf Cake", 
    price: 347, 
    image: "/images/cake1.jpg", 
    category: "Desserts", 
    rating: 4.3,
    description: "English tea cake with rich taste of banana and chocolate.\nPer Serve(125g) - 385kcal\nIngredients: Wheat Soy Egg Milk" 
  },
  { 
    id: 4, 
    name: "Red Velvet Cookie", 
    price: 231, 
    image: "/images/cookie1.jpg", 
    category: "Desserts", 
    rating: 3.5,
    description: "Soft, chewy crimson coloured cookie with a vanilla flavor, accented by a hint of tanginess. A crowd favourite flavour, now in a freshly baked cookie.\nPer Serve(95g) - 462kcal\nIngredients: Wheat Soy Milk" 
  },
  { 
    id: 5, 
    name: "Chai Tea Latte", 
    price: 341, 
    image: "/images/tea1.jpg", 
    category: "Tea", 
    rating: 4.4,
    descrition: "Black Tea infused with cinnamon,clove, and other warming spices are combined with milk for the perfect balance of sweet and spicy.\nShort(237ml) - 170kcal\nIngredients: Milk" 
  },
  { id: 6, 
    name: "Java Chip Frappuccino", 
    price: 441, 
    image: "/images/coffee2.jpg", 
    category: "Blended Beverages", 
    rating: 4.2,
    description: "Mocha sauce and Frappuccino chips blended with Frappuccino roast coffee and milk and ice, then topped with white vanilla topping and mocha drizzle to bring you endless java joy.\nTall(354ml) - 392kcal\nIngredients: Soy Milk Wheat" 
  },
  { 
    id: 7, 
    name: "Iced Caramel Macchiato", 
    price: 451, 
    image: "/images/coffee4.jpg", 
    category: "Blended Beverages", 
    rating: 5,
    description: "We combine our Rich in flavour, full-bodied espresso with vanilla-flavoured syrup, milk and ice, then top it off with caramel drizzle.\nTall(354ml) - 210kcal\nGrande(473ml) - 287kcal\nVenti(591ml) - 325kcal\nIngredient: Milk" 
  },
  { 
    id: 8, 
    name: "Lemon Loaf Cake", 
    price: 346, 
    image: "/images/cake2.jpg", 
    category: "Desserts", 
    rating: 5,
    description: "English tea cake with rich taste of butter and citrusy lemon notes.\nPer Serve(120g) - 477kcal\nIngredients: Wheat Egg Milk" 
  },
  { 
    id: 9, 
    name: "Chocolate Chip Cookie", 
    price: 231, 
    image: "/images/cookie2.jpg", 
    category: "Desserts", 
    rating: 3.5,
    description: "Soft, chewy crimson coloured cookie with a vanilla flavour, accented by a hint of tnginess. A crowd favourite flavour, now in a freshly baked cookie.\nPer Serve(95g) - 428kcal\nIngredients: Wheat Milk Soy" 
  },
  { 
    id: 10, 
    name: "Iced Matcha Green Tea Latte", 
    price: 509, 
    image: "/images/coffee5.jpg", 
    category: "Blended Beverages", 
    rating: 5,
    description: "Beautiful layers of matcha green tea, our bold espresso and milk create a smooth, richly textured beverage.\nTall(354ml) - 133kcal\nIngredients: Milk" 
  },
  { 
    id: 11, 
    name: "English Breakfast Black Tea", 
    price: 331, 
    image: "/images/tea2.jpg", 
    category: "Tea", 
    rating: 5,
    description: "A breakfast-style black tea of malty boldness and bright flavour, invigorating any time of the day.\nShort(237ml) - 0kcal\nTea" 
  },
  { 
    id: 12, 
    name: "Matcha Espresso Fusion", 
    price: 395, 
    image: "/images/tea3.jpg", 
    category: "Blended Beverages", 
    rating: 5,
    description: "Beautiful layers of matcha green tea, our bold espresso and milk create a smooth, richly textured beverage.\nTall(354ml) - 133kcal\nIngredient: Milk"  
  },
  { 
    id: 13, 
    name: "Smoked Butterscotch Latte", 
    price: 436, 
    image: "/images/coffee6.jpg", 
    category: "Blended Beverages", 
    rating: 4.5,
    description: "Combines espresso with steamed milk and butterscotch sauce, finished with a sprinkling of ground coffee topping.\nTall(354ml) - 270kcal\nIngredient: Milk" 
  },
  { 
    id: 14, 
    name: "Summer-Berry Refresher", 
    price: 351, 
    image: "/images/coffee7.jpg", 
    category: "Blended Beverages", 
    rating: 3,
    description: "A sweet summer blend of rasberry, blueberry and blackberry flavours, shaken with ice and vibrant lemonade and poured over rasberry-flavoured pearls.\nTall(354ml) - 100kcal\nBerry" 
  },
  { 
    id: 15, 
    name: "Iced Shaken Hibiscus & Passion Lemonade", 
    price: 378, 
    image: "/images/tea4.jpg", 
    category: "Tea", 
    rating: 4.3,
    description: "A tangy-sweet concoction featuring hibiscus flavour and pomegranate-juice pearls.\nTall(354ml) - 74kcal\nTea" 
  },
  { 
    id: 16, 
    name: "Purple Halloween Frappuccino", 
    price: 450, 
    image: "/images/coffee8.jpg", 
    category: "Blended Beverages", 
    rating: 4,
    description: "A creamy base blended with sweet potato powder and vanilla sauce, topped with whipped cream and chocolate syrup.\nTall(354ml) - 390kcal\nIngredient: Milk" 
  },
  { 
    id: 17, 
    name: "Iced Cappuccino", 
    price: 362, 
    image: "/images/coffee9.jpg", 
    category: "Blended Beverages", 
    rating: 4.7,
    description: "Signature Italian style Cappuccino with espresso shot, steamed milk and a thick layer of foam, served over ice.\nTall(354ml) - 214kcal\nGrande(473ml) - 265kcal\nVenti(591ml) - 284kcal\nIngredient: Milk" 
  },
];

function Star({ filled }) {
  return filled ? (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.971c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.971a1 1 0 00-.364-1.118L2.04 9.397c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.287-3.97z" />
    </svg>
  ) : (
    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.971c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.971a1 1 0 00-.364-1.118L2.04 9.397c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.287-3.97z" />
    </svg>
  );
}

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <div className="flex items-center space-x-1">
      {[...Array(fullStars)].map((_, i) => <Star key={`full-${i}`} filled={true} />)}
      {halfStar && <Star filled={true} />}
      {[...Array(emptyStars)].map((_, i) => <Star key={`empty-${i}`} filled={false} />)}
    </div>
  );
}

function MenuItemCard({ item, quantity, addToCart }) {
  const [showDetails, setShowDetails] = useState(false);
  const dragStartX = useRef(null);

  const handleDragStart = (e) => {
    dragStartX.current = e.clientX ?? e.touches[0].clientX;
  };

  const handleDragEnd = (e) => {
    if (dragStartX.current === null) return;
    const dragEndX = e.clientX ?? e.changedTouches[0].clientX;
    const dragDistance = dragStartX.current - dragEndX;

    if (dragDistance > 50) {
      setShowDetails(true);
    } else if (dragDistance < -50) {
      setShowDetails(false);
    }
    dragStartX.current = null;
  };

  return (
    <div
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
      className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl"
      style={{ userSelect: "none" }}
    >
      <img
        src={item.image}
        alt={item.name}
        className={`w-full h-56 object-contain bg-white transition-opacity duration-300 ${showDetails ? "opacity-30" : "opacity-100"}`}
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold text-[#1e3932]">{item.name}</h2>
        <StarRating rating={item.rating} />
        <p className="mt-2 text-lg font-bold text-[#147552]">₹{item.price}</p>

        <button
          className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-[#0e3d25] transition flex justify-center items-center gap-2"
          onClick={() => addToCart(item)}
          disabled={showDetails} 
        >
          Add Item {quantity > 0 && <span className="bg-white text-green-600 px-2 py-0.5 rounded-full text-sm">{quantity}</span>}
        </button>

        {/* View Details button added here */}
        {!showDetails && (
          <button
            className="mt-2 w-full border border-[#00704a] text-[#00704a] py-2 rounded hover:bg-[#00704a] hover:text-white transition"
            onClick={() => setShowDetails(true)}
          >
            View Details
          </button>
        )}
      </div>

      {/* Details overlay */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-white bg-opacity-95 p-4 flex flex-col justify-center items-start transition-transform duration-300 ${showDetails ? "translate-x-0" : "translate-x-full"}`}
        style={{ zIndex: 10 }}
      >
        <h3 className="text-2xl font-bold mb-2 text-[#004d40]">{item.name}</h3>
        <p className="mb-4 text-[#00695c]">
          Category: {item.category}
          <br />
          Rating: {item.rating} ★
          <br />
          Price: ₹{item.price}
          <br />
          {item.description && item.description.length > 0 ? (
            item.description.split("\n").map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))
          ) : (
            <span>No description available.</span>
          )}
        </p>
        <button
          className="mt-auto px-4 py-2 bg-[#00704a] text-white rounded hover:bg-[#004d40]"
          onClick={() => setShowDetails(false)}
        >
          Close Details
        </button>
      </div>
    </div>
  );
}

export default function MenuPage() {
  const { cart, addToCart } = useCart();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");
  const [minRating, setMinRating] = useState(0);

  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(t);
  }, []);

  const filteredMenu = menuItems
    .filter(item => category === "All" || item.category === category)
    .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    .filter(item => item.rating >= minRating)
    .sort((a, b) => {
      if (sort === "low-high") return a.price - b.price;
      if (sort === "high-low") return b.price - a.price;
      return 0;
    });

  const getQuantity = (id) => {
    const found = cart.find(cartItem => cartItem.id === id);
    return found ? found.quantity : 0;
  };

  return (
    <section className={`max-w-7xl mx-auto px-6 py-16 transition-all duration-700 ease-out transform ${fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
      <h1 className="text-4xl font-bold text-center mb-8 text-[#00704A]">Our Menu</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded px-3 py-2 pr-8"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
          )}
        </div>

        <select value={category} onChange={(e) => setCategory(e.target.value)} className="border rounded px-3 py-2">
          <option value="All" className="text-gray-800">All Categories</option>
          <option value="Coffee" className="text-gray-800">Blended Beverages</option>
          <option value="Tea" className="text-gray-800">Tea</option>
          <option value="Pastry" className="text-gray-800">Desserts</option>
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)} className="border rounded px-3 py-2">
          <option value="">Sort By</option>
          <option value="low-high" className="text-gray-800">Price: Low to High</option>
          <option value="high-low" className="text-gray-800">Price: High to Low</option>
        </select>

        <select value={minRating} onChange={(e) => setMinRating(Number(e.target.value))} className="border rounded px-3 py-2">
          <option value={0} className="text-gray-800">All Ratings</option>
          <option value={5} className="text-gray-800">5 Stars</option>
          <option value={4} className="text-gray-800">4 Stars & Up</option>
          <option value={3} className="text-gray-800">3 Stars & Up</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredMenu.map(item => (
          <MenuItemCard
            key={item.id}
            item={item}
            quantity={getQuantity(item.id)}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}
