import React, { useEffect, useState } from "react";
import Listing from "../api/Listing";
import EpisodeCard from "@/common/EpisodeCard";

export default function Podcast() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEpisodes = async () => {
    try {
      setLoading(true);
      const main = new Listing();
      const response = await main.EpsodeGetAll();
      console.log("response", response?.data?.data)
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

  // console.log("data", data);

  return (
    <section className="bg-black py-12">
      <div className="mx-auto container xl:max-w-[1440px] px-4 ">
        {/* Heading */}
        <h2 className="text-center text-4xl lg:text-5xl font-extrabold mb-10">
          <span className="text-theme">LATEST</span>{" "}
          <span className="text-white">EPISODES</span>
        </h2>
        {/* Episode */}
        <div className="space-y-8">
          {data &&
            data?.map((ep, index) => (
              <EpisodeCard episode={ep} key={index} setIsEpisodePopupOpen={false} setSelectedEpisode={null} fetchDetails={fetchEpisodes} isAdmin={false}/>
            ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 cursor-pointer rounded-md font-semibold bg-theme hover:opacity-90 transition">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
