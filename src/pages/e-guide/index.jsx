import Layout from '@/layout/Layout';
import React from 'react';
import Podcast from "../../assets/e-guidebanner.png"
import Image from 'next/image';
import { FiDownload } from 'react-icons/fi'; // Import the download icon from feather icons (Fi)
import Heading from '@/common/Heading';


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
                <div className="max-w-[1440px] mx-auto px-4 w-full   px-[15px] mb-[50px] lg:mb-[100px]">
                    {/* Main Heading and Description */}
                    <div className='!text-left'>
                        <Heading
                            title={"Free Property "}
                            subtitle={"Investing Guides"}
                            className={"text-left max-w-6xl"}

                            content={" Download high-value, expert-approved resources to deepen your property knowledge and take action with confidence. All guides are completely free and packed with actionable insights."}
                        />
                    </div>

                    {/* Featured Guide Section */}
                    <div className=" relative w-full max-w-[1440px] mx-auto min-h-[445px] flex flex-col md:flex-row flex-wrap rounded-[12px] overflow-hidden bg-gradient-custom shadow-xl p-[10px] md:p-[20px]">
                        {/* Image */}
                        <div className="md:w-1/2">
                            <Image
                                src={Podcast}
                                alt="Woman recording a podcast about property investing"
                                className="w-full h-auto object-cover rounded-[12px] "
                            />
                        </div>

                        {/* Content */}
                        <div className="p-[30px] md:p-[45px]  md:w-1/2">
                            <span className="inline-block  text-center  bg-[#FFFFFF33] text-[18px] leading-[15px] font-SemiBold p-[10px] rounded-full gap-[10px] letter-s mb-4">
                                Feature Guide
                            </span>
                            <h2 className=" font-outfit font-[500] 
                                text-[42px] leading-[130%] 
                                tracking-[-0.06em] 
                                text-white mb-4 ">
                                Free Property Investing Guides
                            </h2>

                            <p className="text-[16px] sm:text-[18px] md:text-[20px] mb-4  md:mb-8 text-[#FFFFFFB2] font-outfit font-[400]   ">
                                Download high-value, expert-approved resources to deepen your property knowledge and take action with confidence. All guides are completely free and packed with actionable insights.
                            </p>
                            <button className="flex bg-[#FFFFFF33] items-center justify-center w-full md:w-[551px] h-[39px] px-[30px] py-[10px] border border-[#FFFFFF33] rounded-full text-[16px] font-[400] text-[#FFFFFF] gap-[10px] transition duration-300  hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500">
                                <FiDownload className="h-5 w-5" />
                                Download Free Guide PDF
                            </button>

                        </div>
                    </div>
                </div>

                <div className="max-w-[1440px] mx-auto px-4 w-full   px-[15px] mb-[50px] lg:mb-[100px]">

                    {/* Main Heading and Description */}
                    <div className="max-w-7xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            FREE{" "}
                            <span className="bg-gradient-to-r from-[#9747FF] to-[#FC18D8] bg-clip-text text-transparent">
                                E-GUIDES
                            </span>
                        </h2>
                    </div>

                    {/* Grid */}
                    <div className="grid gap-8 md:grid-cols-2">
                        {guides && guides?.map((guide) => (
                            <div
                                key={guide?.id}
                                className="relative rounded-2xl p-[2px] bg-transparent transition"
                            >
                                <div className="bg-[#2C2C2C] rounded-2xl p-6 flex flex-col sm:flex-row gap-6 h-full">
                                    {/* Left Image */}
                                    <div className="relative w-full sm:w-1/3 h-40 sm:h-auto rounded-xl overflow-hidden">
                                        <Image
                                            src={"/guide.png"}
                                            alt={guide?.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Right Content */}
                                    <div className="flex-1 flex flex-col justify-between text-center sm:text-left">
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