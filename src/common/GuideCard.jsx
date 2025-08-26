import React from "react";
import Image from "next/image";

export default function GuideCard({guide}) {
  return (
    <div
      key={guide?.id}
      className="relative rounded-2xl p-[2px] bg-transparent transition"
    >
      <div className="bg-[#2C2C2C] rounded-2xl p-6 flex flex-col lg:flex-row gap-6 h-full">
        {/* Left Image */}
        <div className="relative w-full lg:w-1/3 h-[300px] md:h-[350px] lg:h-auto rounded-xl overflow-hidden">
          <Image
            src={"/guide.png"}
            alt={guide?.title}
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col justify-between text-center lg:text-left">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2 transition">
              {guide?.title}
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {guide?.description}
            </p>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
            <span>{guide?.pages}</span>
            <span>{guide?.downloads}</span>
          </div>

          <button className="w-full cursor-pointer bg-gray-700 text-white py-2 rounded-lg font-medium hover:bg-[linear-gradient(270deg,#9747FF_0%,#FC18D8_97.09%)] transition">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
