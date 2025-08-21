import Layout from "@/layout/Layout";
import React, { useEffect, useState } from "react";
import { FaHeadphones, FaPlay, FaSearch } from "react-icons/fa";
import NewsletterBanner from "@/common/NewsletterBanner";
import Heading from "@/common/Heading";
import Podcast from "../home/Podcast";
import Listing from "../api/Listing";
import { useAudioPlayer } from "@/context/AudioPlayerContext";
import { IoIosArrowDown, IoMdTime } from "react-icons/io";
import Image from "next/image";

export default function Index() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { playTrack } = useAudioPlayer();

    const fetchEpisodes = async () => {
        try {
            setLoading(true);
            const main = new Listing();
            const response = await main.EpsodeGetAll();
            console.log("response", response?.data?.data)
            setData(response?.data?.data || []);
        } catch (error) {
            console.log("error", error);
            setData([]);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchEpisodes();
    }, []);
    return (
        <Layout>
            <div className="bg-[#0a0a0a]  pt-[118px] lg:pt-[128px] pb-[20px] ">
                <div className="max-w-[1440px] mx-auto px-4 w-full">
                    {/* Heading Section */}
                    <Heading
                    className={"text-center max-w-3xl mx-auto"}
                        subtitle={"All Episodes"}
                        title={"Browse"}
                        content={"Explore our library of powerful episodes covering everything from equity leverage and financing to market predictions and tax strategies."}
                    />
                    {/* Search + Filter */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-[10px] mb-8">
                        {/* Search Box */}
                        <div className="relative w-full md:w-2/3">
                            <input
                                type="text"
                                placeholder="Search episodes..."
                                aria-label="Search episodes"
                                className="w-full rounded-[40px] bg-[#111111] text-white pt-[10px] pr-[30px] pl-[30px] pb-[10px]
                                border border-[#FFFFFF] border-[1px] placeholder-[#FFFFFFCC]
                                "
                            />
                            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white pointer-events-none" />
                        </div>

                        {/* Dropdown */}
                        <select
                            aria-label="Filter by topic"
                            className="md:w-1/3 w-full rounded-[40px] bg-[#111111] text-white pt-[10px] pr-[30px] pl-[30px] pb-[10px]
                             border border-[#FFFFFF] border-[1px]
                            "
                        >
                            <option>All Topics</option>
                            <option>Financing</option>
                            <option>Market</option>
                            <option>Taxes</option>
                        </select>
                    </div>

                </div>
                <div className="mx-auto container xl:max-w-[1440px] px-4 ">

                    {/* Episodes Grid */}
                    <div className="space-y-8">
                        {data &&
                            data?.map((ep, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col md:flex-row items-center gap-6 bg-[#4B4B4B] rounded-2xl shadow-lg overflow-hidden p-6 md:p-8"
                                    onClick={() => playTrack(ep)}
                                >
                                    {/* Image */}
                                    <div className="relative w-full md:w-[454px] h-[321px] rounded-2xl overflow-hidden flex-shrink-0">
                                        <Image
                                            src={ep?.thumbnail || ""}
                                            alt={ep?.title}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-2xl"
                                        />
                                        {/* Hover Play Icon */}
                                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            <FaPlay className="text-white text-3xl" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 font-outfit text-white flex flex-col items-start w-full md:w-auto">
                                        <h3 className="text-white font-bold text-[20px] md:text-[24px] mb-2 tracking-[0.04]">
                                            {ep?.title}
                                        </h3>
                                        <div className="flex items-center text-sm text-[#FFFFFF] gap-4 mb-4">
                                            <span className="flex items-center gap-1">
                                                <span className="font-[400] text-[16px] md:text-[18px] px-2 py-1">
                                                    Episode: {ep?.episode?._count?.episodes || 11}
                                                </span>
                                                |
                                            </span>
                                            <span className="flex items-center gap-1 ">
                                                <span className="flex  md:text-[18px] px-1 py-1 gap-1">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.8 4.3335V8.3335C5.8 8.6224 5.8569 8.90848 5.96747 9.1754C6.07803 9.44232 6.24008 9.68484 6.44437 9.88913C6.64865 10.0934 6.89118 10.2555 7.1581 10.366C7.42501 10.4766 7.71109 10.5335 8 10.5335C8.28891 10.5335 8.57499 10.4766 8.8419 10.366C9.10882 10.2555 9.35135 10.0934 9.55563 9.88913C9.75992 9.68484 9.92197 9.44232 10.0325 9.1754C10.1431 8.90848 10.2 8.6224 10.2 8.3335V4.3335C10.2 3.75002 9.96821 3.19044 9.55563 2.77786C9.14305 2.36528 8.58348 2.1335 8 2.1335C7.41652 2.1335 6.85695 2.36528 6.44437 2.77786C6.03179 3.19044 5.8 3.75002 5.8 4.3335ZM8.4 13.3175V15.3335H7.6V13.3175C6.34718 13.2169 5.17819 12.6483 4.32576 11.7247C3.47333 10.8011 2.99999 9.59034 3 8.3335V7.3335H3.8V8.3335C3.8 9.44741 4.2425 10.5157 5.03015 11.3033C5.8178 12.091 6.88609 12.5335 8 12.5335C9.11391 12.5335 10.1822 12.091 10.9698 11.3033C11.7575 10.5157 12.2 9.44741 12.2 8.3335V7.3335H13V8.3335C13 9.59034 12.5267 10.8011 11.6742 11.7247C10.8218 12.6483 9.65282 13.2169 8.4 13.3175ZM5 4.3335C5 3.53785 5.31607 2.77478 5.87868 2.21218C6.44129 1.64957 7.20435 1.3335 8 1.3335C8.79565 1.3335 9.55871 1.64957 10.1213 2.21218C10.6839 2.77478 11 3.53785 11 4.3335V8.3335C11 9.12915 10.6839 9.89221 10.1213 10.4548C9.55871 11.0174 8.79565 11.3335 8 11.3335C7.20435 11.3335 6.44129 11.0174 5.87868 10.4548C5.31607 9.89221 5 9.12915 5 8.3335V4.3335Z" fill="white" stroke="white" stroke-width="0.5" />
                                                    </svg>
                                                    <span className="font-[400] text-[16px]">
                                                        {ep?.author || "Nolan Bator"}
                                                    </span>
                                                </span> |
                                            </span>
                                            <span className="flex items-center gap-1 font-[400] text-[16px]">
                                                <span className=" px-2 py-1">
                                                    <IoMdTime size={16} className="inline-block" /> {ep?.duration}
                                                    mins
                                                </span>
                                            </span>
                                        </div>
                                        <p className="font-[400] text-[18px] text-[#FFFFFFB2] mt-1 md:text-[20px] leading-relaxed line-clamp-2">

                                            {ep?.description}
                                        </p>
                                        {/* See more */}
                                        <button
                                            className="flex items-center gap-1 font-[400] text-[18px] text-[#FFFFFFB2]  mt-2"
                                        >
                                            See More <IoIosArrowDown />
                                        </button>
                                        {/* Listen Button */}
                                        <button className="mt-6 cursor-pointer flex items-center gap-2 bg-[#5B5B5B] text-white px-8 py-3 rounded-full transition-all hover:scale-105 hover:bg-gradient-to-r hover:from-[#9747FF] hover:to-[#FC18D8]">
                                            <FaHeadphones /> Listen Now
                                        </button>
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
