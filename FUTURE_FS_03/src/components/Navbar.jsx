"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.jpg"
            alt="Starbucks Logo"
            width={40}
            height={40}
          />
          <span className="font-bold text-lg text-green-700">Starbucks</span>
        </Link>

        {/* Links */}
        <ul className="flex items-center space-x-6 font-medium text-gray-700">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/menu">Menu</Link></li>
          <li><Link href="/order">Order</Link></li>
          <li><Link href="/reward">Reward</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
