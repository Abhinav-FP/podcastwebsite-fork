import Heading from "@/common/Heading";
import Layout from "@/layout/Layout";
import React from "react";
import {
  HiOutlineMicrophone,
  HiOutlineUsers,
  HiOutlineBriefcase,
  HiOutlineChartBar,
} from "react-icons/hi";
import Image from "next/image";
import arrow from "../../assets/arrow.png";
import InvestorSection from "../home/InvestorSection";
import MeetYourHost from "../home/MeetYourHost";
import Team from "./Team";
import Testimonials from "../home/Testimonials";
import Mission from "./mission";
import Featured from "./Featured";

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

  return (
    <Layout>
      <div className=" text-white pt-[118px] lg:pt-[128px] ">
        <InvestorSection />
        <MeetYourHost />
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute w-[20vw] max-w-[500px] aspect-square -left-[5%] top-1/3 blurcircle rounded-r-full" />
        <div className="absolute w-[20vw] max-w-[500px] aspect-square -right-[5%] bottom-1/10 blurcircle rounded-l-full" />
        <div className="container xl:max-w-[1440px] mx-auto px-4 ">
          <Team />
          <Mission />
          <Featured />
        </div>
      </div>
      <Testimonials />
      {/* <NewsletterBanner /> */}
    </Layout>
  );
};

export default Index;
