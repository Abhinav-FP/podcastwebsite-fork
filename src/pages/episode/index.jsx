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
import EpisodeCard from "@/common/EpisodeCard";

export default function Index() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { playTrack } = useAudioPlayer();

    const fetchEpisodes = async () => {
        try {
            setLoading(true);
            const main = new Listing();
            const response = await main.EpisodeGetAll();
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
                                <EpisodeCard episode={ep} key={index} setIsEpisodePopupOpen={false} setSelectedEpisode={null} fetchDetails={fetchEpisodes} isAdmin={false}/>
                            ))}
                    </div>
                </div>
                <NewsletterBanner />
            </div>
        </Layout>
    );
}
