import Layout from "@/layout/Layout";
import React from "react";
import Podcast from "../../assets/e-guidebanner.png";
import Image from "next/image";
import { FiDownload } from "react-icons/fi"; // Import the download icon from feather icons (Fi)
import Heading from "@/common/Heading";

const Index = () => {
  const guides = [
    {
      id: 1,
      title: "The Complete Guide to Property Depreciation",
      desc: "Each episode features expert insights, proven strategies, and real-world stories that break down complex topics into easy, actionable steps. From mastering productivity tools to understanding algorithms and digital marketing, E-Guide gives you the clarity and confidence to thrive online.",
      pages: "32 pages",
      downloads: "2.5k Download",
      image: "/guide.jpg", // replace with actual image path
    },
    {
      id: 2,
      title: "The Complete Guide to Property Depreciation",
      desc: "Each episode features expert insights, proven strategies, and real-world stories that break down complex topics into easy, actionable steps. From mastering productivity tools to understanding algorithms and digital marketing, E-Guide gives you the clarity and confidence to thrive online.",
      pages: "32 pages",
      downloads: "2.5k Download",
      image: "/guide.jpg",
    },
    {
      id: 3,
      title: "The Complete Guide to Property Depreciation",
      desc: "Each episode features expert insights, proven strategies, and real-world stories that break down complex topics into easy, actionable steps. From mastering productivity tools to understanding algorithms and digital marketing, E-Guide gives you the clarity and confidence to thrive online.",
      pages: "32 pages",
      downloads: "2.5k Download",
      image: "/guide.jpg",
    },
    {
      id: 4,
      title: "The Complete Guide to Property Depreciation",
      desc: "Each episode features expert insights, proven strategies, and real-world stories that break down complex topics into easy, actionable steps. From mastering productivity tools to understanding algorithms and digital marketing, E-Guide gives you the clarity and confidence to thrive online.",
      pages: "32 pages",
      downloads: "2.5k Download",
      image: "/guide.jpg",
    },
  ];

  return (
    <Layout>
      <div className=" bg-[#0a0a0a]  pt-[118px] lg:pt-[128px] pb-[20px]  ">
        <div className="max-w-[1440px] mx-auto w-full  mb-[50px] lg:mb-[100px]">
          {/* Main Heading and Description */}
          <Heading
            title={"Free Property "}
            subtitle={"Investing Guides"}
            className={"text-left max-w-6xl"}
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
                property knowledge and take action with confidence. All guides
                are completely free and packed with actionable insights.
              </p>

              <button className="flex items-center justify-center w-full lg:w-[551px] h-auto px-6 py-3 border border-[#FFFFFF33] rounded-full text-sm sm:text-base md:text-[16px] font-[400] text-white bg-[#FFFFFF33] gap-2 transition duration-300 hover:text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-gray-500">
                <FiDownload className="h-5 w-5" />
                Download Free Guide PDF
              </button>
            </div>
          </div>

          {/* Main Heading and Description */}
          <div className="max-w-7xl mx-auto text-center mb-12 mt-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              FREE{" "}
              <span className="bg-gradient-to-r from-[#9747FF] to-[#FC18D8] bg-clip-text text-transparent">
                E-GUIDES
              </span>
            </h2>
          </div>

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {guides &&
              guides?.map((guide) => (
                <div
                  key={guide?.id}
                  className="relative rounded-2xl p-[2px] bg-transparent transition"
                >
                  <div className="bg-[#2C2C2C] rounded-2xl p-6 flex flex-col lg:flex-row gap-6 h-full">
                    {/* Left Image */}
                    <div className="relative w-full lg:w-1/3 h-[300px] md:h-[350px] lg:h-auto rounded-xl overflow-hidden">
                      <Image
                        src={"/guide.png"}
                        alt={guide?.title}
                        fill
                        className="object-cover object-top"
                      />
                    </div>

                    {/* Right Content */}
                    <div className="flex-1 flex flex-col justify-between text-center lg:text-left">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2 transition">
                          {guide?.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                          {guide?.desc}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                        <span>{guide?.pages}</span>
                        <span>{guide?.downloads}</span>
                      </div>

                      <button className="w-full cursor-pointer bg-gray-700 text-white py-2 rounded-lg font-medium hover:bg-[linear-gradient(270deg,#9747FF_0%,#FC18D8_97.09%)] transition">
                        Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="flex justify-center mt-12">
            <button className="px-8 py-3 rounded-full font-medium text-white bg-theme hover:opacity-90 transition">
              View All
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
