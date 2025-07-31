import Layout from "@/layout/Layout";
import React from "react";
import { FaSearch } from "react-icons/fa";
import Podcast from "../../assets/episode.png"
import Image from "next/image";
import NewsletterBanner from "@/common/NewsletterBanner";
import Heading from "@/common/Heading";

export default function Index() {

    const episodes = [
        {
            image: Podcast,
            category: "Property finance",
            date: "25 July 2025",
            title: "The Complete Guide to Property Depreciation",
            description:
                "Maximize your tax benefits through proper depreciation schedules and strategies",
            duration: "22 min",
        },
        {
            image: Podcast,
            category: "Property finance",
            date: "25 July 2025",
            title: "The Complete Guide to Property Depreciation",
            description:
                "Maximize your tax benefits through proper depreciation schedules and strategies",
            duration: "22 min",
        },
        {
            image: Podcast,
            category: "Property finance",
            date: "25 July 2025",
            title: "The Complete Guide to Property Depreciation",
            description:
                "Maximize your tax benefits through proper depreciation schedules and strategies",
            duration: "22 min",
        },
        {
            image: Podcast,
            category: "Property finance",
            date: "25 July 2025",
            title: "The Complete Guide to Property Depreciation",
            description:
                "Maximize your tax benefits through proper depreciation schedules and strategies",
            duration: "22 min",
        },

    ];
    return (
        <Layout>
            <div className="bg-[#0a0a0a]  pt-[118px] lg:pt-[128px] pb-[20px] ">
                <div className="max-w-[1440px] mx-auto px-4 w-full">
                    {/* Heading Section */}
                    <Heading
                        title={"  Browse All Episodes"}
                        content={"Explore our library of powerful episodes covering everything from equity leverage and financing to market predictions and tax strategies."}
                    />

                    {/* Search + Filter */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
                        {/* Search Box */}
                        <div className="relative w-full md:w-2/3">
                            <input
                                type="text"
                                placeholder="Search episodes..."
                                aria-label="Search episodes"
                                className="w-full rounded-lg bg-[#111111] text-white px-4 py-2 pl-10 
                 border border-[#FFFFFF33] border-[1px]
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>

                        {/* Dropdown */}
                        <select
                            aria-label="Filter by topic"
                            className="w-full md:w-1/3 rounded-lg bg-[#111111] text-white px-4 py-2 
               border border-[#FFFFFF33] border-[1px]
               focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option>All Topics</option>
                            <option>Financing</option>
                            <option>Market</option>
                            <option>Taxes</option>
                        </select>
                    </div>

                </div>

                {/* Episodes Grid */}
                <div className="max-w-[1440px] mx-auto px-4 w-full">
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
                                        <span className="bg-[#383535] text-white px-3 py-[6px] rounded-lg text-[14px]  font-medium">
                                            {episode.category}
                                        </span>
                                        <span className="text-[#727272] text-[13px]">{episode.date}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className=" font-bold text-[17px] leading-snug text-white">
                                        {episode.title}
                                    </h3>

                                    {/* Description */}
                                    <p className=" text-[16px] text-[#727272] leading-snug">
                                        {episode.description}
                                    </p>

                                    {/* Duration + CTA */}
                                    <div className="flex justify-between items-center pt-2">
                                        <span className=" text-[15px] text-[#727272]">
                                            {episode.duration}
                                        </span>
                                        <button className="rounded-full border border-[#727272] px-4 py-1 hover:bg-white hover:text-black transition-all">
                                            Play Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <NewsletterBanner />
            </div>
        </Layout>
    );
}
