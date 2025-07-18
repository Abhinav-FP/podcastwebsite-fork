import Layout from '@/layout/Layout';
import React from 'react';
import Podcast from "../../assets/record.png"
import Image from 'next/image';

const Index = () => {
    return (
        <Layout>
            <div className="bg-[#0a0a0a] text-white pt-[118px] lg:pt-[128px] ">
                <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1440px]  px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center" >Free Property Investing Guides</h1>
                    <p className="text-lg text-gray-400  mx-auto">
                        Download high-quality, expert-approved resources to sharpen your property knowledge
                        and take action with confidence. All guides are completely free and packed with
                        actionable insights.
                    </p>

                    {/* Featured Guide Section */}
                    <section className="px-4 py-12">
                        <div className="flex">
                            <div className="md:w-1/2">
                                <Image
                                    src={Podcast} // Replace with your actual image
                                    alt="Modern building architecture"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 p-8 flex flex-col justify-center">
                                <span className="text-sm font-semibold text-white uppercase mb-2">
                                    Featured Guide
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 heading leading-tight">
                                    The Complete Property Investment Starter Kit
                                </h2>
                                <p className="text-gray-300 mb-6 text-lg">
                                    Our most comprehensive guide combining market analysis, financing strategies,
                                    and risk management. A must-have for anyone looking to kick-start their
                                    property investment with confidence.
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center  border border-[#FFFFFF] text-[#C0BBB8]  font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Download Free Guide
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* All Free Guides Section */}
                    <section className="px-4 py-12">
                        <h2 className="text-3xl font-bold text-center mb-12">All Free Guides</h2>
                        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Guide Card 1 */}
                            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                                <Image
                                    src={Podcast} // Replace with your actual image
                                    alt="Coding on a laptop"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">How to Build Your First Property Portfolio</h3>
                                    <p className="text-gray-400 text-sm mb-4">
                                        A step-by-step guide for beginners investing in Australian property.
                                    </p>
                                    <p className="text-xs text-gray-500 mb-4">
                                        12 comprehensive 45-page guide covering everything you need to start. Includes action plan, checklist, and resources.
                                    </p>
                                    <a
                                        href="#"
                                        className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out text-sm"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 mr-2"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Download PDF
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Want More Exclusive Content Section */}
                    <section className="py-12 px-4 text-center bg-gray-800 mt-12">
                        <div className="max-w-xl mx-auto">
                            <h2 className="text-3xl font-bold mb-4">Want More Exclusive Content?</h2>
                            <p className="text-gray-300 mb-8">
                                Subscribe to our newsletter for early access to new guides, exclusive market insights,
                                and bonus content not available anywhere else.
                            </p>
                            <button className="text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out">
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