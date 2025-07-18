import React, { useEffect, useState } from "react";
import AuthLayout from "@/layout/AuthLayout";
import { MdVerified } from "react-icons/md";
import Image from "next/image";
import Listing from "@/pages/api/Listing";

export default function Detail() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

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
    <AuthLayout>
      <div className="rounded-xl w-full mx-auto detail_bg text-white p-8 flex items-center gap-8">
        {/* Profile Image */}
        <div className="w-44 h-44 relative rounded-full overflow-hidden border-4 border-white shadow-md">
          <img
            src="https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto/c_crop%2Cg_custom/v1728462701/yiwwlrbe78ahhohjjmum.jpg"
            alt="Arijit Singh"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Info Section */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <MdVerified className="text-blue-400 text-xl" />
            <span className="text-sm font-medium text-blue-200">
              Verified Artist
            </span>
          </div>
          <h1 className="text-5xl font-extrabold leading-snug">Arijit Singh</h1>
          <p className="text-gray-100 text-sm mt-2">
            47,188,877 monthly listeners
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
