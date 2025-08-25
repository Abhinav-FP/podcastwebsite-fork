import React from "react";
import AshishSharma from "../../assets/ashish.png";
import SubhashPatel from "../../assets/subhash.png";
import {
  HiOutlineLocationMarker,
  HiOutlineClipboardCheck,
} from "react-icons/hi";
import { PiMedal } from "react-icons/pi";
import Image from "next/image";

export default function Team() {

  const hosts = [
    {
      name: "Ashish Sharma",
      title: "Property Strategist & Financial Educator",
      description:
        "We're passionate about simplifying property investing. With decades of combined experience in real estate strategy, finance, and coaching, we bring practical, honest advice that actually works.",
      image: AshishSharma,
      location: "Australia",
      certification: "Certified Financial Planner",
    },
    {
      name: "Subhash Patel",
      title: "Property Strategist & Financial Educator",
      description:
        "We're passionate about simplifying property investing. With decades of combined experience in real estate strategy, finance, and coaching, we bring practical, honest advice that actually works.",
      image: SubhashPatel,
      location: "Sydney, Australia",
      certification: "Certified Financial Planner",
    },
  ];

  return (
    <section className="py-[20px] md:py-[40px] mb-3">
      <h2 className="text-[25px] sm:text-[35px] md:text-[45px] font-bold mb-4 text-white text-center uppercase">
        The {" "}
        <span className="text-theme">Team Behind </span>
        The Podcast
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {hosts &&
          hosts?.map((host, index) => (
            <div
              key={index}
              className="bg-[#141414] rounded-lg p-2 md:p-8 flex flex-col items-center text-center border-1  border-[#FFFFFF33]"
            >
              {/* Host Image */}
              <div className="relative w-32 h-32 mb-6">
                <Image
                  src={host?.image}
                  alt={host?.name}
                  width={128} // Corresponds to w-32 (128px)
                  height={128} // Corresponds to h-32 (128px)
                  className="rounded-full object-cover border-2 border-gray-700"
                />
              </div>

              {/* Host Name and Title */}
              <h3 className="text-[18px] md:text-[22px] font-bold mb-2  text-center">
                {host?.name}
              </h3>
              <p className="text-[#FFFFFF]  text-[15px] md:text-[18px] mb-6   font-[400]">
                {host?.title}
              </p>

              {/* Description */}
              <p className="text-[16px] md:text-[20px]  text-white text-center  mb-8  leading-relaxed font-[400] ">
                {host?.description}
              </p>

              {/* Badges */}
              <div className="flex flex-col sm:flex-row items-center justify-between w-full md:gap-4 px-3 py-1 md:px-5 md:py-3 border border-[#FFFFFF33] rounded-lg text-base md:text-lg">
                <div className="flex items-center gap-3 font-semibold">
                  <div className="bg-[linear-gradient(180deg,rgba(252,24,216,0.7)_0%,rgba(151,71,255,0.7)_100%)] rounded-full flex items-center justify-center w-12 h-12">
                    <PiMedal className="text-white" size={26} />
                  </div>
                  Property Expert
                </div>
                <span className="flex items-center gap-1 text-gray-300 rounded-full text-white ">
                  <HiOutlineLocationMarker size={20} />
                  {host?.location}
                </span>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
