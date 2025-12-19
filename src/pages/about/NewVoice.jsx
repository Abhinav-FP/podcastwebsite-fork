import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NewVoice() {
  return (
    <section className="relative pt-[10px] md:pt-[20px] lg:pt-[50px]">
      <div className="mx-auto container xl:max-w-[1310px] px-4 flex flex-col lg:flex-row items-center justify-between gap-[10px] md:gap-[25px]">
        {/* Left Content */}
        <div className="text-white w-full max-w-[100%] lg:max-w-[50%] text-center lg:text-left relative z-[2]">
          <h1 className="text-[25px] md:text-[35px] xl:text-[40px] leading-[27px] md:leading-[37px] xl:leading-[42px] font-work font-[800] leading-tight uppercase">
            Australia’s{" "}
            <span className="text-theme"> New Voice in Educating Smart </span>
            Property Investors.
          </h1>
          <p className="mt-6 text-white text-base  font-outfit font-[600] text-[16px] md:text-[18px] xl:text-[20px]">
            We're dedicated to transforming complex property investment concepts
            into strategic frameworks that help intelligent investors to build
            enduring wealth through property. Born from the strategic
            collaboration between PropWealth and Nfinity Financials, two
            industry-leading firms, we curate decades of combined expertise in
            smart investment strategies, mortgage solutions, and robust
            portfolio building to deliver refined, actionable insights that
            empower astute investors.
          </p>
          <div className="flex items-center justify-center flex-wrap md:flex-nowrap lg:justify-start gap-[10px] mt-[25px] mb-[25px] md:mb-[0]">
            <div className="relative w-[135px] sm:w-[150px] h-[115px] edubg ">
              <div className=" absolute top-0 bottom-0 left-0 right-0 w-[98%] h-[98%] m-auto bg-[#0F0F0F] rounded-[10px]"></div>
              <div className="relative w-full h-full text-[14px] font-[600] text-center z-1 flex items-center justify-center ">
                23+ <br /> Years Combined Experience
              </div>
            </div>

             <div className="relative  w-[135px] sm:w-[150px] h-[115px] edubg ">
              <div className=" absolute top-0 bottom-0 left-0 right-0 w-[98%] h-[98%] m-auto bg-[#0F0F0F] rounded-[10px]"></div>
              <div className="relative w-full h-full text-[14px] font-[600] text-center z-1 flex items-center justify-center ">
                Strategic Portfolio <br /> Building Focus
              </div>
            </div>

             <div className="relative  w-[135px] sm:w-[150px] h-[115px] edubg ">
              <div className=" absolute top-0 bottom-0 left-0 right-0 w-[98%] h-[98%] m-auto bg-[#0F0F0F] rounded-[10px]"></div>
              <div className="relative w-full h-full text-[14px] font-[600] text-center z-1 flex items-center justify-center ">
                Data-Driven <br /> Investment Insights
              </div>
            </div>

             <div className="relative  w-[135px] sm:w-[150px] h-[115px] edubg ">
              <div className=" absolute top-0 bottom-0 left-0 right-0 w-[98%] h-[98%] m-auto bg-[#0F0F0F] rounded-[10px]"></div>
              <div className="relative w-full h-full text-[14px] font-[600] text-center z-1 flex items-center justify-center ">
                Commitment to <br /> Your Success
              </div>
            </div>
          </div>
         

          {/* <div className="mt-6 border-l-4 border-white pl-4 text-gray-200 flex items-start justify-center lg:justify-start gap-2 text-left">
                <MdOutlineHeadphones size={22} className="mt-1 flex-shrink-0" />
                <p className="font-semibold">
                  We’re not just talking theory — we’re sharing what actually works
                  in today’s market.
                </p>
              </div> */}

          {/* <Link
                  href={"/about"} className="mt-8 px-6 py-3 inline-block rounded-md font-semibold bg-theme hover:opacity-90 transition mx-auto lg:mx-0">
                Learn More
              </Link> */}
        </div>

        {/* Right Image */}
        <div className=" w-full max-w-[100%] lg:max-w-[50%]  relative z-[2]">
          <Image
            src="/aboutimg.jpg"
            alt="Podcast Recording"
            width={700}
            height={800}
            className="rounded-xl object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
}