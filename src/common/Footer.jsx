import Link from "next/link";
import React, { useState } from "react";
import Logo from "../assets/logo.avif"
import Image from "next/image";
import Listing from "@/pages/api/Listing";
import toast from "react-hot-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email.");
      return;
    }
    setLoading(true);
    try {
      const main = new Listing();
      const response = await main.AddSubscriber({ email: email });
      toast.success("Thank you for subscribing!");
      setEmail(""); 
    } catch (error) {
      console.error("Error:", error);
      toast.error(error?.response?.data?.errors);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-black text-white py-12">
  <div className="mx-auto container xl:max-w-[1440px] px-4">

    {/* Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      
      {/* Left - Logo & Tagline */}
      <div>
        <div className="flex items-center gap-3">
          <Image src={"/logo.png"} alt="Podcast Logo" width={2110} height={520} className="h-16 w-auto object-cover"/>
        </div>
        <p className="mt-4 text-gray-400 text-sm">
          Invest with Confidence. Grow with Purpose.
        </p>
      </div>

      {/* Company Links */}
      <div>
        <h3 className="font-semibold mb-4 text-sm">COMPANY</h3>
        <ul className="space-y-4 text-gray-400 text-sm">
          <li><a href="#">About</a></li>
          <li><a href="#">Episodes</a></li>
          <li><a href="#">E-guides</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      {/* Help Links */}
      <div>
        <h3 className="font-semibold mb-4 text-sm">HELP</h3>
        <ul className="space-y-4 text-gray-400 text-sm">
          <li><a href="#">Customer Support</a></li>
          <li><a href="#">Delivery Details</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>

      {/* Newsletter */}
      <div>
        <h3 className="font-semibold mb-4 text-sm">NEWSLETTER</h3>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            required
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-2 rounded-md bg-white text-black outline-none text-sm w-4/5"
          />
          <button
            type="submit"
            className="px-5 py-2 rounded-full bg-gray-700 hover:bg-gradient-to-r hover:from-[#9747FF] hover:to-[#FC18D8] transition text-sm font-semibold w-fit"
          >
            Subscribe
          </button>
        </form>
      </div>

    </div>

    {/* Bottom Copyright */}
    <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
      © Copyright 2025, All Rights Reserved.
    </div>
  </div>
</footer>

  );
}
