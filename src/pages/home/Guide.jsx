import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import GuideCard from "@/common/GuideCard";
import Listing from "../api/Listing";



export default function Guide() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fecthGuides = async () => {
    try {
      setLoading(true);
      const main = new Listing();
      const response = await main.GuideList();
      setData(response?.data?.data || []);
    } catch (error) {
      console.log("error", error);
      setData([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fecthGuides();
  }, []);


  return (
    <div className="bg-[#1C1C1C]">
      <section className="mx-auto container xl:max-w-[1440px] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            FREE{" "}
            <span className="bg-gradient-to-r from-[#9747FF] to-[#FC18D8] bg-clip-text text-transparent">
              E-GUIDES
            </span>
          </h2>
        </div>
        {/* Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 ">
          {data && data?.map((guide) => (
            <GuideCard guide={guide} />
          ))}
        </div>
        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 rounded-full font-medium text-white bg-theme hover:opacity-90 transition">
            View All
          </button>
        </div>
      </section>
    </div>
  );
}
