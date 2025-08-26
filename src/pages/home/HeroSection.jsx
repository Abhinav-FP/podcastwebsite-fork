import React from "react";
import Image from "next/image";
import { MdOutlineHeadphones } from "react-icons/md";

function HeroSection() {
  return (
    <section className="relative min-h-[600px] lg:h-[800px] flex items-center justify-center pt-6 mt-24">
      <div className="mx-auto container xl:max-w-[1440px] px-4 text-white flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            VOICE THAT{" "}
            <span className="text-theme block lg:inline">MATTERS</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            Stories That Resonate. Real investment insights from property
            experts who've been there, done that, and want to share the lessons.
          </p>
          <button className="mt-6 flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-theme mx-auto lg:mx-0">
            <MdOutlineHeadphones size={20} />
            Listen Now
          </button>
        </div>
        {/* Right Image */}
        <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/HeroImage.png"
              alt="Podcast Host"
              width={600}
              height={350}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-no-repeat bg-center bg-cover z-[-1]" />
    </section>
  );
}

export default HeroSection;
