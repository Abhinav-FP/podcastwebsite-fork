import Layout from "@/layout/Layout";
import React, { useEffect, useState } from "react";
import Free from "./free";
import GuideCard from "@/common/GuideCard";
import Listing from "../api/Listing";
import Loader from "@/common/Loader";

const Index = () => {
  const [guides, setGuides] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchGuides = async (currentPage = 1) => {
  try {
    setLoading(true);
    const main = new Listing();
    const response = await main.GuideList(currentPage);

    if (response?.data?.data) {
      const { guides = [], totalPages = 1 } = response.data.data;
      setGuides((prev) =>
        currentPage === 1 ? guides : [...prev, ...guides]
      );

      setTotalPages(totalPages);
    }
  } catch (error) {
    console.log("error", error);
    setGuides([]);
  }
  setLoading(false);
};

  useEffect(() => {
    fetchGuides(1);
  }, []);

  const handleViewMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchGuides(nextPage);
  };
  // console.log("guides", guides);

  return (
    <Layout>
      <div className=" bg-[#0a0a0a]  pt-[118px] lg:pt-[128px] pb-[20px] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 w-full mb-[50px] lg:mb-[100px]">
          <Free />
          {/* Main Heading and Description */}
        </div>
      </div>
      <div className="relative w-full pb-[40px] lg:pb-[0px] lg:mb-[120px] overflow-hidden">
         {/* Background Circles - Full Section */}
         <div className="absolute w-[60vw] max-w-[500px] aspect-square -left-[12%] top-0 blurcircle rounded-r-full" />
         <div className="absolute w-[60vw] max-w-[500px] aspect-square -right-[12%] top-1/2 blurcircle rounded-l-full" />
         <div className="absolute w-[60vw] max-w-[500px] aspect-square -left-[12%] bottom-0 blurcircle rounded-r-full" />
        <div className=" max-w-[1440px] mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center mb-12 mt-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              FREE{" "}
              <span className="bg-gradient-to-r from-[#9747FF] to-[#FC18D8] bg-clip-text text-transparent">
                E-GUIDES
              </span>
            </h2>
          </div>
          {loading ? (
            <Loader />
          ) : (
          <>
          <div className="grid gap-8 md:grid-cols-2 relative z-10">
            {guides && guides?.map((guide, index) => (
              <GuideCard guide={guide} key={index} />
            ))}
          </div>
          {page < totalPages && (
          <div className="flex justify-center mt-12 relative z-10">
            <button className="px-8 py-3 rounded-full font-medium text-white bg-theme hover:opacity-90 transition cursor-pointer">
              {loading ? "Loading..." : "View More"}
            </button>
          </div>)}
          </>)}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
