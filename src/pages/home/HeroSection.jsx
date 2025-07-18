// components/HeroSection.jsx
import Image from 'next/image';
import React from 'react';
import artistImg from "../../assets/artist.png"; // Replace with your image path


function HeroSection() {
  return (
    <div className="hero_bg pt-[118px] lg:pt-[128px] ">
      <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1440px]  px-4">
        <div className="flex flex-col lg:flex-row   relative">
          {/* 40% - Text Section */}
          <div className="w-full   text-white  ">
            <h1 className="text-[30px] md:text-[36px] lg:text-[44px] xl:text-[48px] font-bold leading-[100%] mb-4 heading capitalize">
              Where every <br /> music scene lives.
            </h1>

            <p className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] mb-8 text-white ">
              <span className="font-bold">Discover 400 million songs</span>, remixes and DJ sets — every chart-topping track you can find elsewhere, and millions more you can't find anywhere else.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-[5px] border border-white text-black bg-white font-bold text-base  py-2 px-5 cursor-pointer">
                Listen Now
              </button>
              <button className="rounded-[5px] border border-black text-black font-bold text-base  py-2 px-5 cursor-pointer">
                Explore Episodes
              </button>
            </div>
          </div>
          {/* 30% - Image Section */}
          <div className="w-full flex justify-center md:justify-right  md:mt-[-150px]  relative h-[400px] md:h-[500px] ">
            <Image
              src={artistImg}
              alt="Artist"
              className="rounded-xl w-auto max-h-full absolute bottom-0"
              width={400}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>

  );
}

export default HeroSection;