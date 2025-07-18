import Layout from "@/layout/Layout";
import React from "react";
import { FaSearch } from "react-icons/fa";
import Podcast from "../../assets/record.png"
import Image from "next/image";

export default function Index() {
    return (
        <Layout>
            <div className="bg-[#0a0a0a]  pt-[118px] lg:pt-[128px] ">
                <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1440px]  px-4">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center heading text-white  ">Browse All Episodes</h1>
                    <p className="paragraph text-center text-[16px] sm:text-[18px] mb-8">
                        Explore our library of insightful podcasts covering everything from equity leverage and financing to market predictions and tax strategies.
                    </p>

                    {/* Search & Filter */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 ">
                        <div className="relative w-full md:w-1/3">
                            <input
                                type="text"
                                placeholder="Search episodes..."
                                className="w-full rounded-full bg-gray-800 text-white px-4 py-2 pl-10 "
                            />
                            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                        </div>
                        <select className="w-full md:w-48 rounded-full bg-gray-800 text-white px-4 py-2 pl-10 ">
                            <option>All Topics</option>
                            <option>Financing</option>
                            <option>Market</option>
                            <option>Taxes</option>
                        </select>
                    </div>
                </div>

                {/* Episodes Grid */}
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 mt-3 ">
                    {[...Array(6)].map((_, idx) => (
                        <div key={idx} className="bg-gray-900 rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
                            <Image
                                src={Podcast}
                                alt="User"
                                className=" h-48  "
                            />
                            <div className="p-6">
                                <span className="inline-block button-bg  text-xs px-3 py-1 rounded-full mb-3 ">Category</span>
                                <h3 className="text-xl font-bold heading text-white  mb-2">The Complete Guide to Property Depreciation</h3>
                                <p className=" text-[16px] sm:text-[18px] font-semibold paragraph mb-4">Everything you need to know to maximize your deductions.</p>
                                <button className="px-5 py-2 rounded-full  button-bg text-white  text-sm  cursor-pointer ">Play Now</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Testimonials */}
                <div className="container mx-auto px-4 mb-16">
                    <h2 className="text-center text-2xl md:text-4xl font-bold mb-10 text-white ">What Our Listeners Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[...Array(3)].map((_, idx) => (
                            <div
                                key={idx}
                                className="bg-gray-800 rounded-2xl p-6 shadow hover:shadow-lg transition flex flex-col items-center text-center"
                            >
                                <img
                                    src="https://randomuser.me/api/portraits/men/32.jpg" // Replace with your image
                                    alt="User"
                                    className="w-16 h-16 rounded-full mb-4 border-2 border-pink-400"
                                />
                                <p className="text-gray-300 mb-4">
                                    "This podcast completely changed my approach to investing. Every episode gives me actionable insights I can apply immediately."
                                </p>
                                <p className="text-sm font-semibold text-gray-400">— Alex, Investor</p>
                            </div>
                        ))}

                    </div>
                </div>

                {/* Subscribe CTA */}
                <div className="button-bg py-12 px-4 text-center rounded
                -3xl">
                    <h3 className="text-2xl md:text-4xl font-bold heading mb-4">Stay Ahead in Property</h3>
                    <p className="text-gray-200 mb-6 max-w-xl mx-auto">Get our latest episodes, market updates, and investing tips straight to your inbox.</p>
                    <form className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full md:w-auto flex-1 rounded-full px-6 py-3 text-black focus:outline-none focus:ring-2 focus:ring-white border-2  border-white"
                        />
                        <button className="rounded-full bg-black text-white px-8 py-3 hover:bg-white hover:text-black transition">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
