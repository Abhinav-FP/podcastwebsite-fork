import React, { useEffect, useState } from "react";
import Layout from "@/layout/Layout";
import { useRouter } from "next/router";
import Listing from "../api/Listing";
import { FaAndroid, FaHeadphones } from "react-icons/fa";
import { FaItunes } from "react-icons/fa";
import { PiSpotifyLogoFill } from "react-icons/pi";
import { useAudioPlayer } from "@/context/AudioPlayerContext";
import moment from "moment";
import Image from "next/image";
import Loader from "@/common/Loader";

export default function Index() {
  const { playTrack } = useAudioPlayer();
  const router = useRouter();
  const { slug } = router.query;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchDetails = async (slug) => {
    try {
      setLoading(true);
      const main = new Listing();
      const response = await main.EpisodeByID(slug);
      setData(response?.data?.data || []);
    } catch (error) {
      console.log("error", error);
      setData({});
    }
    setLoading(false);
  };

  useEffect(() => {
    if (slug) {
      fetchDetails(slug);
    }
  }, [slug]);

  // console.log("data", data);
  return (
    <Layout>
      <div className="bg-[#0a0a0a] pt-[118px] lg:pt-[128px]">
        <section className="mx-auto container xl:max-w-[1440px] px-4 py-8">
          {loading ? 
           <Loader/> 
          :
          <>
          <div className="flex flex-col sm:flex-row gap-10 sm:items-start">
            {/* Left: Podcast Cover */}
            <Image
              src={data?.thumbnail}
              height={500}
              width={500}
              alt="Podcast Cover"
              className="w-full sm:w-80 h-52 sm:h-64 object-cover rounded-xl shadow-lg"
            />
            <div className="flex flex-col justify-start">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 max-w-3xl">
                {data?.title}
              </h1>
              <p className="text-gray-500 mb-6">
                By{" "}
                <span className="font-semibold">{data?.podcast?.author}</span> ·{" "}
                {moment(data?.createdAt).format("MMMM Do YYYY")}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-4">
            {/* <h3 className="text-2xl font-semibold text-white">Available on:</h3> */}
            <div className="flex flex-wrap items-center gap-4">
              {/* <button className="text-orange-500 hover:scale-110 transition-transform cursor-pointer">
                <FaItunes size={34} />
              </button>
              <button className="text-green-600 hover:scale-110 transition-transform cursor-pointer">
                <PiSpotifyLogoFill size={34} />
              </button> */}
              <button
                onClick={() => playTrack(data)}
                className="flex items-center gap-3 bg-theme text-white px-6 sm:px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-md cursor-pointer"
              >
                <FaHeadphones className="text-xl" />
                <span className="font-medium">Listen Now</span>
              </button>
            </div>
          </div>
            </div>
          </div>
          <p className="mt-5 text-white text-base md:text-lg leading-relaxed">
            {data?.description}
          </p>
          <div
            className=" text-left detail-content"
            dangerouslySetInnerHTML={{ __html: data?.detail }}
          />
          </>}
        </section>
      </div>
    </Layout>
  );
}