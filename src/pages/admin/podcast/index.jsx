import React, { useEffect, useState } from "react";
import AuthLayout from "@/layout/AuthLayout";
import Listing from "@/pages/api/Listing";
import { FaChevronDown } from "react-icons/fa";
import AddPodcast from "./AddPodcast";
import Image from "next/image";
import Link from "next/link";

export default function Index() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isPodcastPopupOpen, setIsPodcastPopupOpen] = useState(false);

  const fetchPodcasts = async () => {
    try {
      setLoading(true);
      const main = new Listing();
      const response = await main.PodcastGet();
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

  return (
    <AuthLayout page={"Podcast"}>
      <div className="bg-[#0a0a0a] text-white min-h-screen py-8 px-4 lg:px-12 space-y-8">
        <div className="flex items-center justify-between tracking-tight border-b border-[#2a2a2a] pb-4 mb-6 w-full">
        <h1 className="text-3xl lg:text-4xl font-bold">
          🎙️ Latest Podcasts
        </h1>
        <button
         onClick={() => {setIsPodcastPopupOpen(true);}}
         className="w-fit px-4 xl:px-8 py-2 h-[44px] hover:bg-white hover:text-black border border-black rounded-md tracking-[-0.06em] text-sm font-medium bg-white text-black cursor-pointer"
        >
          Add Podcast
        </button>
        </div>
        {data && data?.map((podcast) => (
          <div
            key={podcast.id}
            className="bg-[#1a1a1a] rounded-2xl shadow-xl overflow-hidden w-full"
          >
            <Link
              className="flex flex-col md:flex-row justify-between md:items-center p-6 gap-6 cursor-pointer hover:bg-[#232323] transition"
              href={`/admin/podcast/${podcast?.uuid}`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 flex-1">
                <Image
                  src={podcast.thumbnail}
                  height={880}
                  width={560}
                  alt="Thumbnail"
                  className="w-44 h-28 object-cover rounded-md shadow-sm"
                />
                <div>
                  <h2 className="text-2xl font-bold mb-1">{podcast.name}</h2>
                  <p className="text-sm text-gray-400">By {podcast.Author}</p>
                  <p className="text-sm text-gray-500">
                    Created: {new Date(podcast.createdAt).toLocaleString()}
                  </p>
                  <p className="text-sm mt-2 text-gray-300">
                    <span className="font-semibold">Cast:</span>{" "}
                    {podcast.Cast.join(", ")}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <AddPodcast
        isOpen={isPodcastPopupOpen}
        onClose={()=>{setIsPodcastPopupOpen(false);}}
      />
    </AuthLayout>
  );
}