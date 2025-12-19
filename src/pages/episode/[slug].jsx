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
      <div className="bg-[#0a0a0a] pt-[118px] lg:pt-[128px] pb-[40px] md:pb-[60px] lg:pb-[80px] ">
        <div className="absolute z-0 xl:max-w-[578px] w-full md:w-[578px] h-full md:h-[943px]  aspect-square left-[0] top-[-250px]  z-1">
          <Image
            src={"/lightpinkleft.png"}
            layout="fill"
            objectFit="cover"
            className="object-cover w-full"
          />
        </div>

        <div className="absolute z-0 xl:max-w-[578px] w-full md:w-[578px] h-full md:h-[943px]  aspect-square right-[0] top-[0px]  z-1">
          <Image
            src={"/lightpinkright.png"}
            layout="fill"
            objectFit="cover"
            className="object-cover w-full"
          />
        </div>
        <section className="mx-auto container xl:max-w-[1310px] px-4">
          {loading ? (
            <Loader />
          ) : (
            <>
              <div className="flex flex-col relative z-1">
                {/* Left: Podcast Cover */}

                <div className="relative border border-[#FFFFFF66] rounded-[15px] ">
                  <div class="absolute bottom-0 left-0 right-0 w-full h-[500px] z-1  inset-x-0 bottom-0  bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-b-[10px] lg:rounded-b-[15px]"></div>

                  <Image
                    src={data?.thumbnail}
                    height={500}
                    width={1280}
                    alt="Podcast Cover"
                    className="w-full h-[500px]  object-cover object-center rounded-[10px] md:rounded-[15px] shadow-lg"
                  />
                </div>
                <div className="flex w-full justify-between flex-wrap gap-[15px] absolute bottom-0 left-0 py-[15px] pb-[20px] px-[20px] lg:pb-[40px] lg:px-[50px] w-full z-2">
                  <div className="flex flex-col">
                    <h1 className="text-[17px] md:text-[20px] lg:text-[30px] font-[700] text-white mb-[5px]">
                      {data?.title}
                    </h1>
                    <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-[600]">
                      By{" "}
                      <span className="font-semibold">
                        {data?.podcast?.author}
                      </span>{" "}
                      · {moment(data?.createdAt).format("MMMM Do YYYY")}
                    </p>
                  </div>

                  <div className="flex  sm:flex-row sm:items-center gap-6 mt-4">
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
                        className="flex items-center gap-3 bg-theme text-white text-[17px] md:text-[18px] lg:text-[20px] font-[700] px-6 sm:px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-md cursor-pointer"
                      >
                        <FaHeadphones className="text-xl" />
                        <span className="font-medium">Listen Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="mt-[25px] mb-[20px] text-white  text-[16px] md:text-[18px] lg:text-[25px] font-[600] leading-relaxed">
                {data?.description}
              </h2>
              <div
                className=" text-left text-[16px] md:text-[18px] lg:text-[20px] text-white font-[600] detail-content"
                dangerouslySetInnerHTML={{ __html: data?.detail }}
              />
              {data && data?.timestamps && (
                <div
                  className=" text-left text-[16px] md:text-[18px] lg:text-[20px] text-white font-[600] detail-content"
                  dangerouslySetInnerHTML={{ __html: data?.timestamps }}
                />
              )}
            </>
          )}
        </section>
      </div>
    </Layout>
  );
}
