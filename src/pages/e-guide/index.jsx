import Layout from '@/layout/Layout';
import React from 'react';
import Podcast from "../../assets/record.png"
import Image from 'next/image';
import { HiDownload } from "react-icons/hi";

const Index = () => {
    return (
        <Layout>
            <div className="bg-[#0a0a0a] text-white pt-[118px] lg:pt-[128px] ">
                <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1440px]  px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center heading" >Free Property Investing Guides</h1>
                    <p className="text-[16px] sm:text-[18px] paragraph  mx-auto">
                        Download high-quality, expert-approved resources to sharpen your property knowledge
                        and take action with confidence. All guides are completely free and packed with
                        actionable insights.
                    </p>
                    {/* Featured Guide Section */}
                    <section className="px-4 py-12">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/2">
                                <Image
                                    src={Podcast} // Replace with your actual image
                                    alt="Modern building architecture"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                                <span className="text-sm font-semibold text-white uppercase mb-2">
                                    Featured Guide
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 heading leading-tight">
                                    The Complete Property Investment Starter Kit
                                </h2>
                                <p className="paragraph mb-6 text-[16px] sm:text-[18px]">
                                    Our most comprehensive guide combining market analysis, financing strategies,
                                    and risk management. A must-have for anyone looking to kick-start their
                                    property investment with confidence.
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center font-semibold py-3 px-6 rounded-lg button-bg"
                                >

                                    <HiDownload />
                                    Download Free Guide
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* All Free Guides Section */}
                    <section className="px-4 py-12">
                        <h2 className="text-3xl font-bold text-center mb-12 heading">All Free Guides</h2>
                        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Guide Card 1 */}
                            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                                <Image
                                    src={Podcast} // Replace with your actual image
                                    alt="Coding on a laptop"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 heading">How to Build Your First Property Portfolio</h3>
                                    <p className="paragraph text-[16px] sm:text-[18px] mb-4">
                                        A step-by-step guide for beginners investing in Australian property.
                                    </p>
                                    <p className="text-[16px] sm:text-[18px] paragraph  mb-4">
                                        12 comprehensive 45-page guide covering everything you need to start. Includes action plan, checklist, and resources.
                                    </p>
                                    <a
                                        href="#"
                                        className="inline-flex items-center button-bg text-white font-semibold py-2 px-4 rounded-lg  text-sm"
                                    >
                                        <HiDownload />
                                        Download PDF
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Want More Exclusive Content Section */}
                    <section className="py-12 px-4 text-center ">
                        <div className="  bg-gray-800 p-4">
                            <h2 className="text-3xl font-bold heading mb-4">Want More Exclusive Content?</h2>
                            <p className="paragraph mb-8">
                                Subscribe to our newsletter for early access to new guides, exclusive market insights,
                                and bonus content not available anywhere else.
                            </p>
                            <button className="text-white font-semibold py-3 px-8 rounded-lg button-bg">
                                Subscribe for Exclusive Content
                            </button>
                        </div>
                    </section>
                </div>
            </div>

        </Layout>
    );
};

export default Index;