import Layout from "@/layout/Layout";
import React, { useEffect, useState } from "react";
import Free from "./free";
import GuideCard from "@/common/GuideCard";
import Listing from "../api/Listing";

const Index = () => {
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
    <Layout>
      <div className=" bg-[#0a0a0a]  pt-[118px] lg:pt-[128px] pb-[20px]  ">
        <div className="max-w-[1440px] mx-auto px-4 w-full mb-[50px] lg:mb-[100px]">
          <Free />
          {/* Main Heading and Description */}
          <div className="max-w-7xl mx-auto text-center mb-12 mt-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              FREE{" "}
              <span className="bg-gradient-to-r from-[#9747FF] to-[#FC18D8] bg-clip-text text-transparent">
                E-GUIDES
              </span>
            </h2>
          </div>
          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {data &&
              data?.map((guide) => (
                <GuideCard guide={guide} />
              ))}
          </div>

          <div className="flex justify-center mt-12">
            <button className="px-8 py-3 rounded-full font-medium text-white bg-theme hover:opacity-90 transition">
              View All
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
