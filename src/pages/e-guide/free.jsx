import React from "react";
import Heading from "@/common/Heading";
import { FiDownload } from "react-icons/fi";
import Podcast from "../../assets/e-guidebanner.png";
import Image from "next/image";

export default function Free() {
  return (
    <>
      <Heading
        title={"Free Property "}
        subtitle={"Investing Guides"}
        className={"text-center sm:text-left max-w-6xl"}
        content={
          "Download high-value, expert-approved resources to deepen your property knowledge and take action with confidence. All guides are completely free and packed with actionable insights."
        }
      />

      {/* Featured Guide Section */}
      <div className="relative w-full max-w-[1440px] mx-auto flex flex-col md:flex-row rounded-[12px] overflow-hidden bg-gradient-custom shadow-xl p-4 sm:p-6 md:p-8 gap-6">
        {/* Image */}
        <div className="w-full h-[220px] sm:h-[400px] md:h-[450px] lg:h-[500px] md:w-1/2">
          <Image
            src={Podcast}
            alt="Woman recording a podcast about property investing"
            className="w-full h-full object-cover rounded-[12px]"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 p-4 lg:p-[45px] flex flex-col justify-center">
          <span className="inline-block text-center bg-[#FFFFFF33] text-sm sm:text-base font-semibold px-4 py-2 rounded-full mb-4 text-white w-fit">
            Featured Guide
          </span>

          <h2 className="font-outfit font-medium text-2xl md:text-3xl  lg:text-[42px] leading-snug tracking-[-0.03em] text-white mb-4">
            Free Property Investing Guides
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-[20px] mb-4 lg:mb-8 text-[#FFFFFFB2] font-outfit font-[400]">
            Download high-value, expert-approved resources to deepen your
            property knowledge and take action with confidence. All guides are
            completely free and packed with actionable insights.
          </p>

          <button className="flex items-center justify-center w-full lg:w-[551px] h-auto px-6 py-3 border border-[#FFFFFF33] rounded-full text-sm sm:text-base md:text-[16px] font-[400] text-white bg-[#FFFFFF33] gap-2 transition duration-300 hover:text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-gray-500">
            <FiDownload className="h-5 w-5" />
            Download Free Guide PDF
          </button>
        </div>
      </div>
    </>
  );
}
