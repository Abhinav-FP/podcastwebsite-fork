import React, { useEffect, useState } from "react";
import Listing from "../api/Listing";
import EpisodeCard from "@/common/EpisodeCard";
import Link from "next/link";
import Loader from "@/common/Loader";
export default function Podcast() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchEpisodes = async () => {
    try {
      setLoading(true);
      const main = new Listing();
      const response = await main.HomeEpisode();
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


  return (
    <section className="relative py-12">

      {/* Background Circles */}
      <div className="absolute w-[300px] h-[300px] bottom-0 left-0 blurcircle rounded-r-full"></div>

      <div className="absolute w-[300px] h-[300px] top-0 right-0 blurcircle rounded-l-full"></div>

      <div className="mx-auto container xl:max-w-[1440px] px-4 relative">
        {/* Heading */}
        <div className="relative z-[2]">
          <h2 className="text-center text-4xl lg:text-5xl font-extrabold mb-10">
            <span className="text-theme">LATEST</span>{" "}
            <span className="text-white">EPISODES</span>
          </h2>


          {/* Episode */}
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

          {/* View All Button */}
          <div className="text-center mt-10">
            <Link
              href={"/episode"}
              className="px-6 py-3 cursor-pointer rounded-md font-semibold bg-theme hover:opacity-90 transition"
            >
              View All
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
