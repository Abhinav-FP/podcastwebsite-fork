import Image from "next/image";
import Link from "next/link";
import { MdOutlineHeadphones } from "react-icons/md";

export default function InvestorSection() {
  return (
    <section className="bg-[#1C1B1B] py-8 sm:py-20">
      <div className="mx-auto container xl:max-w-[1440px] px-4 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-12">
        {/* Left Content */}
        <div className="text-white max-w-xl text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight uppercase">
            Conversation That <span className="text-theme">Shapes Your Next Move</span>
          </h2>
          <p className="mt-6 text-gray-300 text-base sm:text-lg">
            Property isn’t just about bricks and numbers. It’s about the choices that shape how you live, grow, and plan for the future.
          </p>
          <p className="mt-4 text-gray-300 text-base sm:text-lg">
            Our podcast brings real stories, fresh perspectives, and straight talk from voices that matter in finance and property, giving you a different way to think about building your future.
          </p>

          <div className="mt-6 border-l-4 border-white pl-4 text-gray-200 flex items-start justify-center lg:justify-start gap-2 text-left">
            <MdOutlineHeadphones size={22} className="mt-1 flex-shrink-0" />
            <p className="font-semibold">
              We’re not just talking theory — we’re sharing what actually works
              in today’s market.
            </p>
          </div>

          <Link
              href={"/about"} className="mt-8 px-6 py-3 inline-block rounded-md font-semibold bg-theme hover:opacity-90 transition mx-auto lg:mx-0">
            Learn More
          </Link>
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