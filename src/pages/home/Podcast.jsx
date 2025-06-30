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
    <div className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold mb-2">Stream Top Podcasts</h2>
        <p className="text-sm text-gray-300 mb-6">
          Stream the best podcasts from your favorite stations
        </p>

          <h2 className="text-lg  text-left ">Popular Podcasts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {podcasts.map((podcast, index) => (
            <Card podcast={podcast} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
