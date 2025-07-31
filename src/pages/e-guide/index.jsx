import Layout from '@/layout/Layout';
import React from 'react';
import Podcast from "../../assets/e-guidebanner.png"
import Image from 'next/image';
import { FiDownload } from 'react-icons/fi'; // Import the download icon from feather icons (Fi)
import Heading from '@/common/Heading';


const Index = () => {
    const episodes = [
        {
            image: Podcast,
            category: "32 Pages",
            date: "2.5k Download",
            title: "The Complete Guide to Property Depreciation",
            description:
                "Maximize your tax benefits through proper depreciation schedules and strategies",
        },
        {
            image: Podcast,
            category: "32 Pages",
            date: "2.5k Download",
            title: "The Complete Guide to Property Depreciation",
            description:
                "Maximize your tax benefits through proper depreciation schedules and strategies",
        }, {
            image: Podcast,
            category: "32 Pages",
            date: "2.5k Download",
            title: "The Complete Guide to Property Depreciation",
            description:
                "Maximize your tax benefits through proper depreciation schedules and strategies",
        }, {
            image: Podcast,
            category: "32 Pages",
            date: "2.5k Download",
            title: "The Complete Guide to Property Depreciation",
            description:
                "Maximize your tax benefits through proper depreciation schedules and strategies",
        }, {
            image: Podcast,
            category: "32 Pages",
            date: "2.5k Download",
            title: "The Complete Guide to Property Depreciation",
            description:
                "Maximize your tax benefits through proper depreciation schedules and strategies",
        },

    ];
    return (
        <Layout>
            <div className=" bg-[#0a0a0a]  pt-[118px] lg:pt-[128px] pb-[20px]  ">
                <div className="max-w-[1440px] mx-auto px-4 w-full   px-[15px] mb-[50px] lg:mb-[100px]">
                    {/* Main Heading and Description */}
                    <Heading
                        title={"Free Property Investing Guides"}
                        content={" Download high-value, expert-approved resources to deepen your property knowledge and take action with confidence. All guides are completely free and packed with actionable insights."}
                    />

                    {/* Featured Guide Section */}
                    <div className=" relative w-full max-w-[1440px] mx-auto min-h-[445px] flex flex-col md:flex-row rounded-[30px] overflow-hidden bg-[#141414] shadow-xl p-[10px] md:p-[20px]">
                        {/* Image */}
                        <div className="md:w-1/2">
                            <Image
                                src={Podcast}
                                alt="Woman recording a podcast about property investing"
                                className="w-full  max-w-[597px] h-auto md:h-[385px] object-cover rounded-[30px] opacity-100 shadow-md   "
                            />
                        </div>

                        {/* Content */}
                        <div className="pt-[20px] md:pt-[45px] md:w-1/2">
                            <span className="inline-block bg-[#363636] text-center  text-white text-[14px] leading-[15px] font-[400] p-[10px] rounded-[4px] gap-[10px] letter-s mb-4">
                                Feature Guide
                            </span>
                            <h2 className="text-[26px] sm:text-[34px] md:text-[45px] font-inter font-[700] text-white font-inter leading-[26px] sm:leading-[34px] md:leading-[45px] tracking-[-0.06em] mb-4">Free Property Investing Guides</h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] mb-4  md:mb-8 text-white/80 font-inter font-[400]   ">
                                Download high-value, expert-approved resources to deepen your property knowledge and take action with confidence. All guides are completely free and packed with actionable insights.
                            </p>
                            <button className="flex items-center justify-center w-full max-w-[371px] h-[39px] px-[30px] py-[10px] border border-[#FFFFFF33] rounded-full text-[16px] font-[400] text-[#C0BBB8] gap-[10px] transition duration-300  hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500">
                                <FiDownload className="h-5 w-5" />
                                Download  PDF
                            </button>

                        </div>
                    </div>
                </div>

                <div className="max-w-[1440px] mx-auto px-4 w-full   px-[15px] mb-[50px] lg:mb-[100px]">

                    {/* Main Heading and Description */}
                    <h2 className="text-[25px] sm:text-[35px] md:text-[45px] font-bold mb-4 text-white text-center font-inter">All Free Guides</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {episodes.map((episode, index) => (
                            <div
                                key={index}
                                className="bg-[#0D0D0D] rounded-xl overflow-hidden shadow-md w-full text-white border border-[#FFFFFF33]"
                            >
                                <Image
                                    src={Podcast}
                                    alt={episode.title}
                                    className="w-full h-[203px] object-cover"
                                />
                                <div className="p-4 space-y-3">
                                    {/* Tag + Date */}
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-[#727272] text-[12px] md:text-[14px] font-inter font-[400]">
                                            {episode.category}
                                        </span>
                                        <span className="text-[#727272] text-[12px] md:text-[14px] font-inter font-[400]">{episode.date}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-inter font-bold text-[17px] leading-snug text-white">
                                        {episode.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="font-inter text-[16px] text-[#727272] leading-snug">
                                        {episode.description}
                                    </p>

                                    {/* Duration + CTA */}
                                    <div className="flex items-center pt-2">

                                        <button className="flex items-center justify-center w-full  h-[39px] px-[30px] py-[10px] border border-[#FFFFFF33] rounded-full text-[16px] font-[400] text-[#C0BBB8] gap-[10px] transition duration-300  hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500">
                                            <FiDownload className="h-5 w-5" />
                                            Download  PDF
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default Index;