import React, { useEffect, useState } from "react";
import HeadingTopic from "@/common/HeadingTopic";
import Listing from "../api/Listing";
import NoData from "@/common/NoDataFound";
import Card from "@/common/Card";
import { LoadingSpinner } from "@/common/LoadingSpinner";
export default function Podcast() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPodcasts = async () => {
    try {
      setLoading(true);
      const main = new Listing();
      const response = await main.PodcastGet();
      console.log("response", response?.data?.data)
      setData(response?.data?.data || []);
    } catch (error) {
      console.log("error", error);
      console.log("Hellos");

      setData([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPodcasts();
  }, []);

  console.log("data", data);
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
        </div>

        <HeadingTopic title="Popular Podcasts" />
        {loading ? (
          <LoadingSpinner count={5} />
        ) : data && data?.length === 0 ? (
          <NoData heading="No podcasts available." />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data && data?.map((podcast, index) => (
              <Card key={index} podcast={podcast} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
