import React from "react";
import Card from "../common/Card";

const podcasts = [
  {
    title: "Cold Case Files: Miami",
    image: "https://www.nasa.gov/wp-content/uploads/2024/07/hwhap-logo-2024-4k.png",
    description:
      "Joyce Sapp, 62; Bryan Herrera, 16; and Laurence Webb, 32—three Miami residents...",
  },
  {
    title: "Dateline NBC",
    image: "https://www.nasa.gov/wp-content/uploads/2024/07/hwhap-logo-2024-4k.png",
    description:
      "Current and classic episodes, featuring compelling true-crime mysteries...",
  },
  {
    title: "Stuff You Should Know",
    image: "https://www.nasa.gov/wp-content/uploads/2024/07/hwhap-logo-2024-4k.png",
    description:
      "If you’ve ever wanted to know about champagne, salamanders, the Stonewall Uprising...",
  },
  {
    title: "Dateline NBC",
    image: "https://www.nasa.gov/wp-content/uploads/2024/07/hwhap-logo-2024-4k.png",
    description:
      "Current and classic episodes, featuring compelling true-crime mysteries...",
  },
];

export default function Podcast() {
  return (
    <section className="bg-black text-white  py-12 px-4 sm:px-6 lg:px-8">
      <div className="container  w-[100%] max-w-[1440px] m-auto  ">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          {/* Left side */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-2 text-white">Stream Top Podcasts</h2>
            <p className="text-sm text-[#999999]">
              Stream the best podcasts from your favorite stations
            </p>
          </div>

          {/* Right side */}
          <div className="w-full md:w-auto">
            <input
              type="text"
              placeholder="Search podcasts..."
              className="w-full md:w-64 px-4 py-2 rounded-lg bg-black border-2 border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
        </div>

        <h2 className="text-lg  text-left  font-bold ">Popular Podcasts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {podcasts.map((podcast, index) => (
            <Card podcast={podcast} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
