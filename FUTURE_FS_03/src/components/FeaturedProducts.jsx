<section className="py-16 bg-[#f7f3ef]">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-[#1e3932] mb-4">Coffee Specials</h2>
    <p className="text-lg text-gray-600 mb-12">
      Handcrafted beverages and blends just for you
    </p>

    <div className="flex gap-6 overflow-x-auto px-4">
      {[
        { id: 1, name: "Caffè Latte", price: "₹250", image: "/images/coffee2.jpg" },
        { id: 2, name: "Cappuccino", price: "₹270", image: "/images/coffee9.jpg" },
        { id: 3, name: "Cold Brew", price: "₹300", image: "/images/coffee1.jpg" },
      ].map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md transition-transform transform hover:-translate-y-2 relative group"
          style={{ width: 300 }}
        >
          {/* Image Container */}
         <div className="relative w-full rounded mb-4 overflow-hidden group">
  <img
    src={product.image}
    alt={product.name}
    className="w-full rounded transition-transform duration-300 group-hover:scale-105"
  />
  <div className="w-full h-full object-cover rounded transition-transform duration-300 group-hover:scale-105">
  </div>
</div>


          {/* Info */}
          <div className="p-5 text-left">
            <h3 className="text-xl font-semibold text-[#1e3932]">{product.name}</h3>
            <p className="text-lg text-gray-600">{product.price}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-10">
      <a
        href="/products"
        className="inline-block bg-[#1e3932] text-white px-6 py-3 rounded-full font-medium hover:bg-[#2c5449] transition-colors"
      >
        View All Products
      </a>
    </div>
  </div>
</section>
