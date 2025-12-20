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
import Link from "next/link";

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

  console.log("data", data);
  return (
    <Layout>
      <div className="bg-[#0a0a0a] pt-[118px] lg:pt-[128px] pb-[40px] md:pb-[60px] lg:pb-[80px] ">
        <div className="absolute z-0 w-full  w-[300px] md:w-[400px]  h-full  left-[0] top-[-150px]  z-1">
          <Image
            src={"/lightpinkleft.png"}
            layout="fill"
            objectFit="cover"
            className="object-cover w-full"
          />
        </div>

        <div className="absolute z-0  w-[300px] md:w-[400px]  h-full  right-[0] bottom-[-100px]  z-1">
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
              <div className="w-full flex flex-col sm:flex-row overflow-hidden items-center justify-start h-auto p-[5px] md:p-0 md:h-[300px] lg:h-[400px] xl:h-[413px] relative bg-[#0F0F0F]  border border-[#FFFFFF66]  rounded-[15px] z-1">
                {/* Left: Podcast Cover */}

                <div className="relative w-[270px] min-w-[270px] md:w-[312px] md:min-w-[312px] ld:w-[412px] lg:min-w-[412px] h-full ">
                  <div class="absolute bottom-[-4px] left-0 right-0 w-full h-[410px] z-1  inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-b-[10px] lg:rounded-b-[15px]"></div>

                  <Image
                    src={data?.thumbnail}
                    height={500}
                    width={1280}
                    alt="Podcast Cover"
                    className="w-[300px] sm:w-[360px] md:w-[380px] lg:w-[400px] xl:w-[413px]   h-[280px] sm:h-[300px] md:h-[380px] lg:h-[400px] xl:h-[413px] object-cover object-center rounded-[10px] md:rounded-[15px] shadow-lg"
                  />
                </div>
                <div className="flex w-full max-w-[900px] justify-between flex-wrap gap-[15px]  py-[15px] pb-[20px]  lg:pb-[40px] px-[10px] sm:px-[15px] md:px-[20px] lg:px-[20px] xl:px-[50px] w-full z-2">
                  <div className="flex flex-col">
                    <h1 className="text-overlay text-center sm:text-start  w-full text-[17px] md:text-[18px] lg:text-[25px] xl:text-[30px] font-[700] text-white mb-[5px]">
                      {data?.title}
                    </h1>
                    <p className="text-white text-center sm:text-start text-[16px] md:text-[18px] lg:text-[20px] font-[500]">
                      By{" "}
                      <span className="font-semibold">
                        {data?.podcast?.author}
                      </span>{" "}
                      · {moment(data?.createdAt).format("MMMM Do YYYY")}
                    </p>
                  </div>

                  <div className="flex w-full justify-center sm:justify-start  sm:flex-row sm:items-center gap-6 mt-4">
                    {/* <h3 className="text-2xl font-semibold text-white">Available on:</h3> */}
                    <div className="flex flex-wrap justify-center sm:justify-start items-center gap-[8px] md:gap-[10px] lg:gap-[12px]">
                      {/* <button className="text-orange-500 hover:scale-110 transition-transform cursor-pointer">
                      <FaItunes size={34} />
                    </button>
                    <button className="text-green-600 hover:scale-110 transition-transform cursor-pointer">
                      <PiSpotifyLogoFill size={34} />
                    </button> */}
                      <button
                        onClick={() => playTrack(data)}
                        className="flex items-center gap-1 lg:gap-3 bg-theme text-white text-[14px] sm:text-[15px] md:text-[15px] lg:text-[18px] xl:text-[20px] font-[700] px-[15px] py-[9px] md:py-[10px] rounded-full hover:scale-105 transition-transform shadow-md cursor-pointer"
                      >
                        <FaHeadphones className="text-[17px] lg:text-xl" />
                        <span className="font-medium">Listen Now</span>
                      </button>

                      {data?.appleLink &&
                      <a href={`${data?.appleLink}`} target="blank" className="cursor-pointer flex items-center justify-center border border-[#FFFFFF66] rounded-[40px] px-[15px] py-[8px] md:py-[8px] lg:py-[12px] min-w-[80px] sm:min-w-[100px] md:min-w-[100px] lg:min-w-[140px] xl:min-w-[150px] text-center">
                        <Image  src={'/musicbtn.png'}
                         height={120} width={80} />
                      </a>
                      }

                      {data?.spotifyLink &&
                      <a href={`${data?.spotifyLink}`} target="blank" className="cursor-pointer flex items-center justify-center border border-[#FFFFFF66] rounded-[40px] px-[15px] py-[8px] md:py-[8px] lg:py-[12px] min-w-[80px] sm:min-w-[100px] md:min-w-[100px] lg:min-w-[140px] xl:min-w-[150px] text-center">
                        <Image  src={'/spoticon.png'}
                         height={120} width={80} />
                      </a>
                      }
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="mt-[25px] mb-[20px]  text-white  text-[16px] md:text-[18px] lg:text-[25px] font-[600] leading-relaxed">
                {data?.description}
              </h2>
              <div
                className=" text-left text-[16px] md:text-[18px] lg:text-[20px] text-white font-[600] detail-content"
                dangerouslySetInnerHTML={{ __html: data?.detail }}
              />
              {data && data?.timestamps && (
                <div
                  className=" mt-[20px] md:mt-[40px] lg:mt-[70px] max-w-[680px] text-left text-[16px] md:text-[18px] lg:text-[20px] text-white font-[600] detail-content p-[15px] md:p-[30px] lg:p-[35px] bg-[#0F0F0F] border border-[#FFFFFF66] rounded-[10px] md:rounded-[15px]"
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
