import React, { useEffect, useState } from "react";
import Card from "../../common/Card";
import HeadingTopic from "@/common/HeadingTopic";
import Listing from "../api/Listing";
import NoData from "@/common/NoDataFound";
import LoadingSpinner from "@/common/LoadingSpinner";



export default function Podcast() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchPodcasts = async () => {
    try {
      setLoading(true);
      const main = new Listing();
      const response = await main.PodcastGet();
      console.log("response", response)
      setData(response?.data?.data || []);
    } catch (error) {
      console.log("error", error);
      setData({});
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPodcasts();
  }, []);

  console.log(data)
  return (
    <section className="bg-black text-white  py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1440px]  ">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          {/* Left side */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-2 text-white">Stream Top Podcasts</h2>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] paragraph">
              Stream the best podcasts from your favorite stations
            </p>
          </div>

          {/* Right side */}
          <div className="w-full md:w-auto">
            <select
              className="w-full md:w-64 px-4 py-2 rounded-lg bg-black border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <option value="">Select podcast...</option>
              <option value="tech">Tech</option>
              <option value="business">Business</option>
              <option value="health">Health</option>
              <option value="education">Education</option>
            </select>

          </div>
        </div>

        <HeadingTopic title="Popular Podcasts" />
        {loading ? (
          <LoadingSpinner count={5} />
         ) : data?.length === 0 ? (
          <NoData heading="No podcasts available." />
         ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((podcast, index) => (
              <Card key={index} podcast={podcast} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
