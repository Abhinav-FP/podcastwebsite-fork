import React, { useState } from "react";
import news from "../assets/episode.png";
import Image from "next/image";
import Listing from "@/pages/api/Listing";
import toast from "react-hot-toast";

const NewsletterBanner = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
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
      setEmail(""); // clear field
    } catch (error) {
      console.error("Error:", error);
      toast.error(error?.response?.data?.errors);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className=" container xl:max-w-[1440px] mx-auto px-4 mt-6 mb-6">
      <div className="bg-[#2C2C2C] rounded-2xl border border-[rgba(255, 255, 255, 1)] overflow-hidden flex flex-col lg:flex-row items-center lg:items-stretch">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-6 sm:mb-10">
            We help you grow with latest updates.
          </h2>
          {/* Input Box */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center mb-4 bg-transparent border rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-400 outline-none"
            />
            <button
              className={`hidden sm:block mt-2 sm:mt-0 sm:ml-2 px-6 py-3 bg-gray-600 hover:bg-[linear-gradient(270deg,#9747FF_0%,#FC18D8_97.09%)] transition text-white font-medium rounded-full ${loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
          <button
            className={`block sm:hidden mt-2 sm:mt-0 mb-3 sm:ml-2 px-6 py-3 bg-gray-600 hover:bg-[linear-gradient(270deg,#9747FF_0%,#FC18D8_97.09%)] transition text-white font-medium rounded-full ${loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
          <p className="text-gray-400 text-base sm:text-lg">
            Get exclusive tips, episode updates, and investment insights
            straight to your inbox — every week.
          </p>
        </div>

        {/* Right Image */}
        <div className="hidden sm:block w-full lg:w-1/2 relative h-64 sm:h-96 lg:h-[450px]">
          <Image
            src="/subscribe.png"
            alt="Subscribe"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsletterBanner;