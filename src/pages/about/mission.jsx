import React from 'react';
import Image from "next/image";
import arrow from "../../assets/arrow.png";
import Heading from "@/common/Heading";

export default function Mission() {
    const missionFeatures = [
        {
          title: "Clear Strategy",
          description:
            "We exist to democratize property investment education in Australia.",
          icon: arrow, // Placeholder for the unique icon
        },
        {
          title: "Real Story",
          description:
            "Learn from actual investors sharing their successes and mistakes.",
          icon: arrow,
        },
        {
          title: "Proven Result",
          description:
            "We exist to democratize property investment education in Australia.",
          icon: arrow,
        },
      ];
  return (
    <section className="py-[20px] md:py-[40px] mb-3">
            <div className="bg-[#141414] border-1  border-[#FFFFFF33] rounded-[10px] p-[20px] md:p-[40px]">
              {/* Section Header */}
              <Heading
                title="Our"
                subtitle="Mission"
                content="We exist to democratize property investment education in Australia. Too many people miss out on wealth-building opportunities because they don't have access to the right information at the right time. Our podcast breaks down complex strategies into actionable advice that anyone can understand and implement."
                className="text-center flex flex-col items-center"
              />

              {/* Feature Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-2">
                {missionFeatures && missionFeatures?.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-[#141414] border border-[#FFFFFF33] p-2 md:p-4 rounded-xl flex flex-wrap items-start gap-4 w-full"
                  >
                    {/* Icon Container */}
                    <div
                      className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[85px] lg:h-[85px] bg-[#141414] border border-[#FFFFFF33] rounded-full flex md:items-center md:justify-center mx-auto mb-4"
                    >
                      <Image
                        src={feature?.icon}
                        alt={feature?.title}
                        className="w-[45px] sm:w-[55px] md:w-[60px] lg:w-[65px] object-contain"
                      />
                    </div>
                    {/* Text Content */}
                    <div className="flex-1 pt-4 ">
                      <h3 className=" text-[14px] md:text-[20px] font-[400] mb-2 text-white  leading-[14px] md:leading-[20px]">
                        {feature?.title}
                      </h3>
                      <p className="text-[10px] md:text-[14px] text-gray-400 font-semibold leading-relaxed">
                        {feature?.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
  )
}
