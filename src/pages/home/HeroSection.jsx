// components/HeroSection.jsx
import Image from 'next/image';
import React from 'react';
import Podccast from "../assert/home/podcast.webp"


function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-pink-400 to-pink-600  flex flex-col">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-center flex-1 px-8 py-12">
        <div className="max-w-xl space-y-6">
          <h1 className="text-5xl font-bold text-white">
            Where every <br /> music scene lives.
          </h1>
          <p className="text-white text-lg">
            Discover 400 million songs, remixes and DJ sets: every chart-topping track you can find elsewhere, and millions more you can't find anywhere else.
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-black font-semibold px-5 py-3 rounded shadow hover:bg-gray-200">
              Listing Now
            </button>
            <button className="bg-transparent border border-black text-black font-semibold px-5 py-3 rounded hover:bg-white hover:text-pink-600 transition">
              Explore Episodes
            </button>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <Image
            src={Podccast}
            alt="Artist"
            width={400}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;