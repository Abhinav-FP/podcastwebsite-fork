import Heading from '@/common/Heading';
import Layout from '@/layout/Layout';
import React from 'react';
import { HiOutlineMicrophone, HiOutlineUsers, HiOutlineBriefcase, HiOutlineChartBar, HiOutlineLocationMarker, HiOutlineClipboardCheck } from 'react-icons/hi';
import AshishSharma from "../../assets/ashish.png"
import SubhashPatel from "../../assets/subhash.png"
import Image from 'next/image';
import arrow from "../../assets/arrow.png"
import NewsletterBanner from '@/common/NewsletterBanner';

const Index = () => {

    const journeyEvents = [
        {
            year: '2021',
            title: 'The Beginning',
            description: 'Started as weekend conversations about property investing between two mates who wanted to share knowledge.',
        },
        {
            year: '2022',
            title: 'First 50 Episode',
            description: 'Started as weekend conversations about property investing between two mates who wanted to share knowledge.',
        },
        {
            year: '2023',
            title: 'Community Growth',
            description: 'Started as weekend conversations about property investing between two mates who wanted to share knowledge.',
        },
        {
            year: '2024',
            title: 'Industry Recognition',
            description: 'Started as weekend conversations about property investing between two mates who wanted to share knowledge.',
        },
        {
            year: '2025',
            title: 'Expanding Impact',
            description: 'Started as weekend conversations about property investing between two mates who wanted to share knowledge.',
        },
    ];

    const featuredInLogos = [
        'The Australian',
        'AFR',
        'Domain',
        'Property Investment Magazine',
        'Smart Property Investment',
    ];

    const hosts = [
        {
            name: 'Ashish Sharma',
            title: 'Property Strategist & Financial Educator',
            description:
                "We're passionate about simplifying property investing. With decades of combined experience in real estate strategy, finance, and coaching, we bring practical, honest advice that actually works.",
            image: AshishSharma,
            location: 'Sydney, Australia',
            certification: 'Certified Financial Planner',
        },
        {
            name: 'Subhash Patel',
            title: 'Property Strategist & Financial Educator',
            description:
                "We're passionate about simplifying property investing. With decades of combined experience in real estate strategy, finance, and coaching, we bring practical, honest advice that actually works.",
            image: SubhashPatel,
            location: 'Sydney, Australia',
            certification: 'Certified Financial Planner',
        },
    ];
    const stats = [
        {
            value: '150+',
            label: 'Episode published',
            icon: <HiOutlineMicrophone size={16} className=" text-white" />,
        },
        {
            value: '75k+',
            label: 'Monthly listener',
            icon: <HiOutlineUsers size={16} className=" text-white" />,
        },
        {
            value: '20+',
            label: 'Year Experience',
            icon: <HiOutlineBriefcase size={16} className=" text-white" />,
        },
        {
            value: '500+',
            label: 'Property analyze',
            icon: <HiOutlineChartBar size={16} className=" text-white" />,
        },
    ];



    const missionFeatures = [
        {
            title: 'Clear Strategy',
            description: 'We exist to democratize property investment education in Australia.',
            icon: arrow, // Placeholder for the unique icon
        },
        {
            title: 'Real Story',
            description: 'Learn from actual investors sharing their successes and mistakes.',
            icon: arrow,
        },
        {
            title: 'Proven Result',
            description: 'We exist to democratize property investment education in Australia.',
            icon: arrow,
        },
    ];

    return (
        <Layout>
            <div className=" text-white pt-[118px] lg:pt-[128px] ">
                <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1440px]   px-[15px] mb-[50px] lg:mb-[100px]">
                    <section className="bg-[#141414] border-1  border-[#FFFFFF33] rounded-[10px]  p-[20px] md:p-[40px] mb-3">

                        {/* Section Header */}
                        <Heading
                            title={"Meet Your Hosts"}
                            content={"We're passionate about simplifying property investing. With decades of combined experience in real estate strategy, finance, and coaching, we bring practical, honest advice that actually works."}
                        />

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-3 md:mt-12">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-[#1F1F1F] rounded-lg p-3 md:p-6 flex flex-col items-start justify-between border-1  border-[#FFFFFF33]  "
                                >
                                    <div className="flex justify-between items-center w-full mb-2 md:mb-4">
                                        <p className="text-[40px] sm:text-[55px] font-[400] text-[#FFFFFF66] font-outfit leading-[55px]">
                                            {stat.value}
                                        </p>
                                        <span className='border-1  border-[#FFFFFF33] p-2 rounded-full'>

                                            {stat.icon}
                                        </span>
                                    </div>
                                    <p className="text-[16px] md:text-[18px]  font-outfit font-medium">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                    {/* Main Heading and Description */}
                    <section className="  p-[20px] md:p-[40px] mb-3">
                        <h2 className="text-[25px] sm:text-[35px] md:text-[45px] font-bold mb-4 text-white text-center ">The Team Behind The Podcast</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                            {hosts.map((host, index) => (
                                <div
                                    key={index}
                                    className="bg-[#141414] rounded-lg p-8 flex flex-col items-center text-center border-1  border-[#FFFFFF33]"
                                >
                                    {/* Host Image */}
                                    <div className="relative w-32 h-32 mb-6">
                                        <Image
                                            src={host.image}
                                            alt={host.name}
                                            width={128} // Corresponds to w-32 (128px)
                                            height={128} // Corresponds to h-32 (128px)
                                            className="rounded-full object-cover border-2 border-gray-700"
                                        />
                                    </div>

                                    {/* Host Name and Title */}
                                    <h3 className="text-[18px] md:text-[22px] font-bold mb-2  text-center">{host.name}</h3>
                                    <p className="text-[#FFFFFF]  text-[15px] md:text-[18px] mb-6   font-[400]">{host.title}</p>

                                    {/* Description */}
                                    <p className="text-[16px] md:text-[20px]  text-white text-center  mb-8  leading-relaxed font-[400] ">
                                        {host.description}
                                    </p>

                                    {/* Badges */}
                                    <div className="flex flex-col sm:flex-row items-center justify-between w-full md:gap-4 md:p-2 border border-[#FFFFFF33] rounded-lg">
                                        <span className="flex items-center text-sm sm:text-base text-gray-300 px-4 py-2 rounded-full ">
                                            <HiOutlineLocationMarker size={20} className="mr-2" />
                                            {host.location}
                                        </span>

                                        <span className="flex items-center text-sm sm:text-base text-gray-300 px-4 py-2 rounded-full ">
                                            <HiOutlineClipboardCheck size={20} className="mr-2" />
                                            {host.certification}
                                        </span>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="  p-[20px] md:p-[40px] mb-3">

                        <div className="bg-[#141414] border-1  border-[#FFFFFF33] rounded-[10px]  p-[20px] md:p-[40px]">

                            {/* Section Header */}
                            <Heading
                                title={"Our Mission "}
                                content={"We exist to democratize property investment education in Australia. Too many people miss out on wealth-buildingopportunities because they don't have access to the right information at the right time. Our podcast breaks down complex strategies into actionable advice that anyone can understand and implement."}
                            />

                            {/* Feature Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                                {missionFeatures?.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#141414] border border-[#FFFFFF33] p-2 md:p-4 rounded-xl flex  items-start gap-4 w-full"
                                    >
                                        {/* Icon Container */}
                                        <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[85px] lg:h-[85px] 
                                               bg-[#141414] border border-[#FFFFFF33] rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Image
                                                src={feature.icon}
                                                alt={feature.title}
                                                className="w-[45px] sm:w-[55px] md:w-[60px] lg:w-[65px] object-contain"
                                            />
                                        </div>
                                        {/* Text Content */}
                                        <div className="flex-1 pt-4 ">
                                            <h3 className=" text-[14px] md:text-[20px] font-[400] mb-2 text-white  leading-[14px] md:leading-[20px]">
                                                {feature.title}
                                            </h3>

                                            <p className="text-[10px] md:text-[14px]  font-[400]  text-[#FFFFFF] leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </section>

                    <section className="  p-[20px] md:p-[40px] mb-3">

                        <h2 className="text-[25px] sm:text-[35px] md:text-[45px] font-bold mb-4 text-white text-center ">Our Journey</h2>
                        <div className="relative">
                            {journeyEvents.map((event, index) => (
                                <div
                                    key={index}
                                    className="
                  flex flex-col md:flex-row items-start md:items-center border-b-1 border-[#FFFFFF33]
                  mb-4 md:mb-4 last:mb-0"
                                >
                                    {/* Year - always left-aligned in the image */}
                                    <div className=" flex-shrink-0 text-left md:pr-8 mb-2 md:mb-0  p-1 md:p-0">
                                        <span className="text-[55px] sm:text-[40px] font-[400] text-gray-300 ">
                                            {event.year}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="  rounded-lg p-1 md:p-6 ">
                                        <h3 className="text-[18px] md:text-[25px] font-bold mb-1 ">
                                            {event.title}
                                        </h3>
                                        <p className="text-[16px] md:text-[20px]  text-gray-300 font-[400]  leading-relaxed">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="  p-[20px] md:p-[40px] mb-3">


                        <h2 className="text-[25px] sm:text-[35px] md:text-[45px] font-bold mb-4 text-white text-center ">As featured In</h2>


                        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                            {featuredInLogos.map((logo, index) => (
                                <div
                                    key={index}
                                    className="bg-[#141414] rounded-lg px-6 py-3 border border-[#FFFFFF33] text-white font-[400] text-[18px] md:text-[20px]  whitespace-nowrap"
                                >
                                    {logo}
                                </div>
                            ))}
                        </div>
                    </section>

                    <NewsletterBanner />

                </div>
            </div>
        </Layout>
    );
};

export default Index;