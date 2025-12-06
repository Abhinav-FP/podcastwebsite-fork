import Layout from "@/layout/Layout";
import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Heading from "@/common/Heading";
import Listing from "../api/Listing";
import EpisodeCard from "@/common/EpisodeCard";
import Testimonials from "../home/Testimonials";
import Loader from "@/common/Loader";

export default function Index() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const timerRef = useRef(null);

  const fetchEpisodes = async (search = "") => {
    try {
      setLoading(true);
      const main = new Listing();
      const response = await main.EpisodeGetAll(search);
      setData(response?.data?.data || []);
    } catch (error) {
      console.log("error", error);
      setData([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEpisodes();
  }, []);

   const handleSearchChange = (e) => {
    const sval = e.target.value;
    setSearchText(sval);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    if (!sval || sval.trim() === "") {
      timerRef.current = setTimeout(() => {
        fetchEpisodes(sval);
      }, 1500);
    } else if (sval.length >= 2) {
      timerRef.current = setTimeout(() => {
        fetchEpisodes(sval);
      }, 1500);
    }
  };

  return (
    <Layout>
      <div className="bg-[#0a0a0a]  pt-[118px] lg:pt-[128px] pb-[20px] ">
        <div className="relative overflow-hidden">
          {/* Background color divs */}

          <div className="absolute w-[60vw] max-w-[500px] aspect-square -left-[12%] bottom-1/2 blurcircle rounded-r-full" />
          <div className="absolute w-[60vw] max-w-[500px] aspect-square -right-[12%] top-0 blurcircle rounded-l-full" />
          <div className="absolute w-[60vw] max-w-[500px] aspect-square -right-[12%] top-2/3 blurcircle rounded-l-full" />

          <div className="max-w-[1440px] mx-auto px-4 w-full mb-10 relative z-[2]">
            {/* Heading Section */}
            <Heading
              className={"text-center max-w-3xl mx-auto"}
              subtitle={"All Episodes"}
              title={"Browse"}
              content={
                "Browse our full archive of episodes covering market shifts, portfolio growth, and future outlooks."
              }
            />
            {/* Search + Filter */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-[10px] mb-8">
              {/* Search Box */}
              <div className="relative w-full md:w-2/3">
                <input
                  type="text"
                  value={searchText}
                  onChange={handleSearchChange}
                  placeholder="Search episodes..."
                  aria-label="Search episodes"
                  className="w-full rounded-[40px] bg-[#111111] text-white pt-[10px] pr-[30px] pl-[30px] pb-[10px]
                                border border-[#FFFFFF] border-[1px] placeholder-[#FFFFFFCC]
                                "
                />
                <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white pointer-events-none" />
              </div>

              {/* Dropdown */}
              <select
                aria-label="Filter by topic"
                className="md:w-1/3 w-full rounded-[40px] bg-[#111111] text-white pt-[10px] pr-[30px] pl-[30px] pb-[10px]
                             border border-[#FFFFFF] border-[1px]
                            "
              >
                <option>All Topics</option>
                <option>Financing</option>
                <option>Market</option>
                <option>Taxes</option>
              </select>
            </div>

            {loading ? (
              <Loader />
            ) : (
              <div className="space-y-8">
                {data &&
                  data?.map((ep, index) => (
                    <EpisodeCard
                      episode={ep}
                      key={index}
                      setIsEpisodePopupOpen={false}
                      setSelectedEpisode={null}
                      fetchDetails={fetchEpisodes}
                      isAdmin={false}
                    />
                  ))}
              </div>
            )}
          </div>
        </div>
        {/* <NewsletterBanner /> */}
        {/* <Testimonials /> */}
      </div>
    </Layout>
  );
}