import React from "react";

export default function Approach() {
  return (
    <section className="py-[20px] md:py-[40px] mb-3">
      <div className="bg-[#141414] border border-[#FFFFFF33] rounded-[10px] p-[10px] md:p-[20px] relative z-[2]">
         <div className="absolute w-full sm:w-[80vw] h-[100px] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blurcircle rounded-full z-[1]"/>
        <div className="text-center flex flex-col items-center relative z-[2]">
          <h2 className="text-[30px] sm:text-[41px] lg:text-[52px] font-[700] mb-2 uppercase">
            <span className="text-white">Our</span>
            <span className="text-theme"> Approach</span>
          </h2>

          <p className="text-[18px] sm:text-[20px] md:text-[18px] mb-4 text-[#FFFFFFCC]">
            We don’t believe in “one-size-fits-all” advice. Every investor is
            different and comes with a varied risk tolerance, financial status,
            and life stage. So, we focus on:
          </p>

          <ul className="mt-4 text-[18px] sm:text-[20px] md:text-[18px] mb-4 text-[#FFFFFFCC] list-disc list-inside space-y-1 text-left">
            <li>23+ Years Combined Experience</li>
            <li>Strategic Portfolio Building Focus</li>
            <li>Data-Driven Investment Insights</li>
            <li>Commitment to Your Success</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
