import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NewVoice() {
  return (
    <section className="relative bg-[#1C1B1B] py-8 sm:py-20">
      <div className="absolute w-[20vw] max-w-[500px] aspect-square -left-[5%] top-1/10 blurcircle rounded-r-full" />
      <div className="absolute w-[20vw] max-w-[500px] aspect-square -right-[5%] bottom-1/10 blurcircle rounded-l-full" />
      <div className="mx-auto container xl:max-w-[1440px] px-4 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-12">
        {/* Left Content */}
        <div className="text-white max-w-xl text-center lg:text-left relative z-[2]">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            Australia’s{" "}
            <span className="text-theme"> New Voice in Educating Smart </span>
            Property Investors.
          </h1>
          <p className="mt-6 text-gray-300 text-base sm:text-lg leading-loose">
            We're dedicated to transforming complex property investment concepts
            into strategic frameworks that help intelligent investors to build
            enduring wealth through property. Born from the strategic
            collaboration between PropWealth and Nfinity Financials, two
            industry-leading firms, we curate decades of combined expertise in
            smart investment strategies, mortgage solutions, and robust
            portfolio building to deliver refined, actionable insights that
            empower astute investors.
          </p>
          <ul className="mt-4 text-gray-300 text-base sm:text-lg list-disc list-inside space-y-1">
            <li>23+ Years Combined Experience</li>
            <li>Strategic Portfolio Building Focus</li>
            <li>Data-Driven Investment Insights</li>
            <li>Commitment to Your Success</li>
          </ul>

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
        <div className="flex-shrink-0 w-full max-w-sm sm:max-w-md lg:max-w-lg relative z-[2]">
          <Image
            src="/investor.png"
            alt="Podcast Recording"
            width={700}
            height={800}
            className="rounded-xl object-cover w-full h-[450px] sm:h-[550px] lg:h-[650px]"
          />
        </div>
      </div>
    </section>
  );
}