import Heading from "@/common/Heading";
import Layout from "@/layout/Layout";
import React from "react";
import {
  HiOutlineMicrophone,
  HiOutlineUsers,
  HiOutlineBriefcase,
  HiOutlineChartBar
} from "react-icons/hi";
import Image from "next/image";
import arrow from "../../assets/arrow.png";
import NewsletterBanner from "@/common/NewsletterBanner";
import InvestorSection from "../home/InvestorSection";
import MeetYourHost from "../home/MeetYourHost";
import Team from "./Team";
import Testimonials from "../home/Testimonials";

const Index = () => {
  const journeyEvents = [
    {
      year: "2021",
      title: "The Beginning",
      description:
        "Started as weekend conversations about property investing between two mates who wanted to share knowledge.",
    },
    {
      year: "2022",
      title: "First 50 Episode",
      description:
        "Started as weekend conversations about property investing between two mates who wanted to share knowledge.",
    },
    {
      year: "2023",
      title: "Community Growth",
      description:
        "Started as weekend conversations about property investing between two mates who wanted to share knowledge.",
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description:
        "Started as weekend conversations about property investing between two mates who wanted to share knowledge.",
    },
    {
      year: "2025",
      title: "Expanding Impact",
      description:
        "Started as weekend conversations about property investing between two mates who wanted to share knowledge.",
    },
  ];

  const featuredInLogos = [
    "The Australian",
    "AFR",
    "Domain",
    "Property Investment Magazine",
    "Smart Property Investment",
  ];

  const stats = [
    {
      value: "150+",
      label: "Episode published",
      icon: <HiOutlineMicrophone size={16} className=" text-white" />,
    },
    {
      value: "75k+",
      label: "Monthly listener",
      icon: <HiOutlineUsers size={16} className=" text-white" />,
    },
    {
      value: "20+",
      label: "Year Experience",
      icon: <HiOutlineBriefcase size={16} className=" text-white" />,
    },
    {
      value: "500+",
      label: "Property analyze",
      icon: <HiOutlineChartBar size={16} className=" text-white" />,
    },
  ];

  const missionFeatures = [
    {
      title: "Clear Strategy",
      description:
        "We exist to democratize property investment education in Australia.",
      icon: arrow, // Placeholder for the unique icon
    },
    {
      title: "Real Story",
      description:
        "Learn from actual investors sharing their successes and mistakes.",
      icon: arrow,
    },
    {
      title: "Proven Result",
      description:
        "We exist to democratize property investment education in Australia.",
      icon: arrow,
    },
  ];

  return (
    <Layout>
      <div className="container xl:max-w-[1440px] mx-auto px-4 ">
        <div className=" text-white pt-[118px] lg:pt-[128px] ">
          <InvestorSection />
          <MeetYourHost />

          <Team />

          <section className="py-[20px] md:py-[40px] mb-3">
            <div className="bg-[#141414] border-1  border-[#FFFFFF33] rounded-[10px] p-[20px] md:p-[40px]">
              {/* Section Header */}
              <Heading
                title="Our"
                subtitle="Mission"
                content="We exist to democratize property investment education in Australia. Too many people miss out on wealth-building opportunities because they don't have access to the right information at the right time. Our podcast breaks down complex strategies into actionable advice that anyone can understand and implement."
                className="text-center flex flex-col items-center"
              />

              {/* Feature Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-2">
                {missionFeatures && missionFeatures?.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-[#141414] border border-[#FFFFFF33] p-2 md:p-4 rounded-xl flex flex-wrap items-start gap-4 w-full"
                  >
                    {/* Icon Container */}
                    <div
                      className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[85px] lg:h-[85px] bg-[#141414] border border-[#FFFFFF33] rounded-full flex md:items-center md:justify-center mx-auto mb-4"
                    >
                      <Image
                        src={feature?.icon}
                        alt={feature?.title}
                        className="w-[45px] sm:w-[55px] md:w-[60px] lg:w-[65px] object-contain"
                      />
                    </div>
                    {/* Text Content */}
                    <div className="flex-1 pt-4 ">
                      <h3 className=" text-[14px] md:text-[20px] font-[400] mb-2 text-white  leading-[14px] md:leading-[20px]">
                        {feature?.title}
                      </h3>

                      <p className="text-[10px] md:text-[14px] text-gray-400 font-semibold leading-relaxed">
                        {feature?.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>


          <section className="py-[20px] md:py-[40px] mb-10">
            <h2 className="text-[25px] sm:text-[35px] md:text-[45px] font-bold mb-4 text-white text-center uppercase">
              As
              <span className="text-theme"> featured </span>
              In
            </h2>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              {featuredInLogos.map((logo, index) => (
                <div
                  key={index}
                  className="bg-[#4B4B4B] rounded-full px-3 py-2 md:px-5 md:py-4 text-white text-[18px] md:text-[20px] whitespace-nowrap"
                >
                  {logo}
                </div>
              ))}
            </div>
          </section>
          <Testimonials />
          {/* <NewsletterBanner /> */}
        </div>
      </div>
    </Layout>
  );
};

export default Index;