// components/HeroSection.jsx
import React from 'react';

function HeroSection() {
  return (
    <div className="flex items-center justify-between p-16">
      <div className="w-1/2 pr-8">
        <h1 className="text-white text-6xl font-bold leading-tight heading">Where every music scene lives.</h1>
        <p className="text-white text-lg mt-6 max-w-lg">
          Discover 400 million songs, remixes and DJ sets: every chart-topping track you can find elsewhere,
          and millions more you can't find anywhere else.
        </p>
        <div className="flex space-x-4 mt-10">
          <button className="bg-white text-pink-500 px-7 py-4 rounded-md font-semibold hover:bg-gray-100">Listing Now</button>
          <button className="bg-pink-700 text-white px-7 py-4 rounded-md font-semibold hover:bg-pink-800">Explore Episodes</button>
        </div>
      </div>

      {/* Right Content (Image and Artist Info) */}
      <div className="w-1/2 relative">
        <img src="https://www.nasa.gov/wp-content/uploads/2024/07/hwhap-logo-2024-4k.png" alt="Artist" className="w-full h-auto rounded-lg" /> {/* Replace with actual image path */}
        <div className="absolute bottom-8 right-8 text-right"> {/* Adjust positioning */}
          <p className="text-white text-lg font-semibold">SAILORR</p>
          <p className="text-white text-sm">Ascending Artist</p>
        </div>
        <div className="flex justify-center space-x-2 mt-4">
            <span className="w-3 h-3 bg-white rounded-full"></span>
            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;