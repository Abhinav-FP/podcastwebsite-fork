import React from "react";
import Image from "next/image";
import { MdOutlineHeadphones } from "react-icons/md";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative min-h-[600px] lg:h-[800px] flex items-center justify-center pt-6 mt-24">
      <div className="mx-auto container xl:max-w-[1440px] px-4 text-white flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="max-w-2xl text-center lg:text-left">
          {/* <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
             VOICE THAT
            <span className="text-theme block lg:inline"> Matters </span>
          </h1> */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.15]">
            The Place Where
            <span className="text-theme inline"> Property Portfolios </span>
            Are Made
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-300">
            Learn the strategies behind Australia's most successful property portfolios
          </p>
           <Link
              href={"/episode"} className="mt-6 flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-theme mx-auto lg:mx-0 cursor-pointer w-fit">
            <MdOutlineHeadphones size={20} />
            Listen Now
          </Link>
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
