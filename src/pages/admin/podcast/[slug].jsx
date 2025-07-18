import React, { useEffect, useState } from "react";
import AuthLayout from "@/layout/AuthLayout";
import { MdVerified } from "react-icons/md";
import Image from "next/image";
import Listing from "@/pages/api/Listing";
import { useRouter } from "next/router";
import moment from "moment";
import EpisodeCard from "./EpisodeCard";

export default function Detail() {
  const router = useRouter();
  const { slug } = router.query;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchPodcasts = async (slug) => {
    try {
      setLoading(true);
      const main = new Listing();
      const response = await main.PodcastDetail(slug);
      setData(response?.data?.data || []);
    } catch (error) {
      console.log("error", error);
      setData({});
    }
    setLoading(false);
  };

  useEffect(() => {
    if (slug) {
      fetchPodcasts(slug);
    }
  }, [slug]);
  console.log("data", data);

  return (
    <AuthLayout>
      <div className="rounded-xl w-full mx-auto detail_bg text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:gap-8">
        {/* Profile Image */}
        <div className="w-44 h-44 min-w-44 md:w-44 md:h-44 md:min-w-44 relative rounded-full overflow-hidden border-4 border-white shadow-md mx-auto sm:mx-0">
          <Image
            src={data?.thumbnail || ""}
            alt="Podcast Thumbnail"
            layout="fill"
            objectFit="cover"
            className="w-full h-full rounded-full object-cover left-0 md:absolute top-0"
          />
        </div>

        {/* Info Section */}
        <div className="mt-4 sm:mt-0 text-center sm:text-left">
          <h1 className="text-2xl md:text-5xl font-extrabold leading-snug capitalize">
            {data?.name}
          </h1>

          <p className="text-white text-sm mt-2 sm:max-w-3xl line-clamp-2">
            {`Welcome to The Pumped On Property Show Podcast, hosted by investors Ben & Simon Everingham. 
              On this podcast, you'll learn how to build your property portfolio with confidence and achieve financial freedom. 
              Both Ben and Simon have made a lot of mistakes and learnt a lot of lessons the hard way on their journey to buying 
              over $500,000,000 worth of investment property in Australia for themselves and their clients. 
              Looking back, these mistakes have made them the investors they are today.`}
          </p>

          <p className="text-white text-sm mt-2">
            Last episode added on{" "}
            {moment(data?.files?.at(-1)?.createdAt).format("DD-MMM-YYYY") || ""}
          </p>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">Episodes</h2>
        <button>
            Add New Episode
        </button>
        </div>
      {data && data?.files && data?.files?.map((item,index)=>(
        <EpisodeCard episode={item} key={index}/>
      ))}
      </div>
    </AuthLayout>
  );
}
