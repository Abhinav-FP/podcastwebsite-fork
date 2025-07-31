import React, { useState } from 'react';
import news from "../assets/episode.png";
import Image from 'next/image';
import Listing from '@/pages/api/Listing';
import toast from 'react-hot-toast';

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
    <section className="text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto px-4 w-full">
        <div className="bg-[#141414] p-4 rounded-[30px]">
          <div className="relative rounded-[30px] overflow-hidden shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={news}
                alt="Blurred background of people discussing"
                layout="fill"
                objectFit="cover"
                quality={75}
                className="filter blur-md scale-105"
                priority
              />
              <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-3 sm:p-8 md:p-12 flex flex-col items-center text-center">
              <h2 className="text-[30px] sm:text-[45px] md:text-[55px] font-[700] mb-4 leading-tight">
                Want more exclusive content?
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-[400] max-w-2xl mx-auto mb-8">
                Get exclusive property tips, expert strategies, and bonus content delivered to your inbox weekly.
              </p>

              {/* Email Input + Button */}
              <div className="flex flex-col sm:flex-row items-center sm:justify-between w-full max-w-[404px] border border-[#FFFFFF33] rounded-[10px] px-[9px] sm:pl-[20px] py-[9px] gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  required
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-white placeholder-white border-none outline-none focus:ring-0"
                />
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className={`w-full sm:w-auto px-4 py-2 bg-black text-white text-[16px] font-medium rounded-[8px] transition duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterBanner;
