import Image from "next/image";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { PiMedal } from "react-icons/pi";

export default function MeetYourHost() {
  return (
    <section className="bg-black text-white py-10 px-6 md:px-16 lg:px-24">
      <div className="mx-auto container xl:max-w-[1440px] px-4 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side - Host Image */}
        <div className="flex justify-center w-full lg:w-1/2">
          <div className="w-full max-w-[700px] aspect-[7/5] overflow-hidden rounded-lg">
            <Image
              src="/host.png"
              alt="Podcast Host"
              width={700}
              height={550}
              className="rounded-lg object-cover w-full h-full transform transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>
        {/* Right Side - Text */}
        <div className="flex flex-col gap-5 w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            MEET YOUR <span className="text-theme">HOST</span>
          </h2>

          <p className="text-base md:text-lg leading-relaxed">
            With over 15 years in property investment and a portfolio worth{" "}
            <span className="font-bold">$50M+</span>, your host brings
            real-world experience and hard-earned insights to every
            conversation.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            From humble beginnings with a single rental property to building a
            diversified portfolio across multiple markets, this podcast shares
            the <span className="font-bold">unfiltered truth</span> about
            property investment.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            No fluff, no get-rich-quick schemes – just honest conversations with
            successful investors who've navigated market cycles, overcome
            challenges, and built lasting wealth through property.
          </p>

          {/* Bottom badges */}
          <div className="flex flex-wrap justify-center items-center lg:justify-start gap-6">
            {/* Property Expert */}
            <div className="flex items-center gap-3 text-base md:text-lg font-semibold">
              <div className="bg-[linear-gradient(180deg,rgba(252,24,216,0.7)_0%,rgba(151,71,255,0.7)_100%)] p-2 rounded-full flex items-center justify-center w-12 h-12">
                <PiMedal className="text-white" size={26} />
              </div>
              Property Expert
            </div>

            {/* Community Builder */}
            <div className="flex items-center gap-3">
              <div className="bg-[linear-gradient(180deg,rgba(252,24,216,0.7)_0%,rgba(151,71,255,0.7)_100%)] p-2 rounded-full flex items-center justify-center w-12 h-12 text-base md:text-lg font-semibold">
                <MdOutlinePeopleAlt className="text-white" size={26} />
              </div>
              Community Builder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
