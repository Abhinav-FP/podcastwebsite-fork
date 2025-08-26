import Image from "next/image";
import { MdOutlineHeadphones } from "react-icons/md";

export default function InvestorSection() {
  return (
    <section className="bg-[#1C1B1B] py-20 px-6 lg:px-20">
      <div className="mx-auto container xl:max-w-[1440px] px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="text-white max-w-xl text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            BUILT FOR <span className="text-theme">INVESTORS</span>.
            <br />
            <span className="text-theme">POWERED</span> BY EXPERIENCE.
          </h2>
          <p className="mt-6 text-gray-300 text-base sm:text-lg">
            At{" "}
            <span className="font-semibold">
              The Property Portfolio Podcast
            </span>
            , we believe real estate is one of the most powerful tools to build
            long-term wealth — but it doesn’t have to be complicated.
          </p>
          <p className="mt-4 text-gray-300 text-base sm:text-lg">
            Hosted by a team of seasoned property investors, developers, and
            finance professionals, our podcast delivers{" "}
            <span className="font-semibold">
              real, unfiltered conversations
            </span>{" "}
            with experts across the real estate spectrum.
          </p>

          <div className="mt-6 border-l-4 border-white pl-4 text-gray-200 flex items-start justify-center lg:justify-start gap-2 text-left">
            <MdOutlineHeadphones size={22} className="mt-1 flex-shrink-0" />
            <p className="font-semibold">
              We’re not just talking theory — we’re sharing what actually works
              in today’s market.
            </p>
          </div>

          <button className="mt-8 px-6 py-3 rounded-md font-semibold bg-theme hover:opacity-90 transition mx-auto lg:mx-0">
            Learn More
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 w-full max-w-sm sm:max-w-md lg:max-w-lg">
          <Image
            src="/investor.png"
            alt="Podcast Recording"
            width={700}
            height={500}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
