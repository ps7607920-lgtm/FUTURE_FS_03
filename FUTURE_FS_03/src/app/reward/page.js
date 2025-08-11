"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function RewardsPage() {
  return (
    <div className="bg-[#f7f3ef] text-[#1e3932]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative h-[60vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/images/reward.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/50 p-6 rounded-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Starbucks Rewards
          </h1>
          <p className="text-lg text-white">
            Earn Stars with every sip and unlock exclusive perks.
          </p>
        </div>
      </motion.section>

      {/* How It Works */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Join", desc: "Sign up for free and start earning Stars." },
            { title: "Order & Pay", desc: "Scan your app or pay as you go." },
            { title: "Earn Rewards", desc: "Redeem Stars for free drinks & more." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Rewards Tiers */}
      <section className="py-16 bg-[#e8e0d4]">
        <h2 className="text-3xl font-bold text-center mb-12">Rewards Tiers</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {[
            { stars: "25★", perk: "Customize your drink" },
            { stars: "50★", perk: "Brewed hot coffee, bakery item" },
            { stars: "150★", perk: "Handcrafted drink, breakfast sandwich" },
          ].map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative bg-white p-6 rounded-xl shadow-lg text-center overflow-hidden"
            >
              {/* Sparkle Stars */}
              <div className="absolute top-3 right-3 flex space-x-1">
                <FaStar className="text-yellow-400 animate-bounce drop-shadow-md" size={20} />
                <FaStar className="text-yellow-400 animate-pulse drop-shadow-md" size={18} />
              </div>
              <div className="absolute bottom-3 left-3 flex space-x-1">
                <FaStar className="text-yellow-400 animate-spin drop-shadow-md" size={16} />
              </div>

              <h3 className="text-4xl font-bold text-yellow-500">{tier.stars}</h3>
              <p className="mt-3 text-gray-600">{tier.perk}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Starbucks Rewards Today</h2>
        <p className="text-gray-600 mb-6">
          Sign up and start earning Stars for your favorite drinks.
        </p>
        <Link href="/join">
          <button className="bg-[#00754a] hover:bg-[#006241] text-white px-6 py-3 rounded-full font-bold transition duration-300">
            Join Now
          </button>
       </Link>
      </section>
    </div>
  );
}
