import React from "react";
import { FaCalculator } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { GrMoney } from "react-icons/gr";
import { MdReportProblem } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdAutoStories } from "react-icons/md";
import { RiTimeLine } from "react-icons/ri";

const learnItems = [
  {
    title: "Market Trends",
    desc: "Short takes on how the property market is shifting across Australia",
    icon: <IoMdTrendingUp className="text-2xl" />,
  },
  {
    title: "Investment Strategies",
    desc: "Different ways people are building and managing their property portfolios.",
    icon: <GrMoney className="text-2xl" />,
  },
  {
    title: "Risks & Realities",
    desc: "Honest talk about challenges, mistakes, and lessons learned.",
    icon: <MdReportProblem className="text-2xl" />, 
  },
  {
    title: "Money Matters",
    desc: "From financing to tax considerations — the numbers that matter.",
    icon: <FaMoneyBillWave className="text-2xl" />, 
  },
  {
    title: "Property Stories",
    desc: "Real experiences from investors and experts shaping the market.",
    icon: <MdAutoStories className="text-2xl" />, 
  },
  {
    title: "Future Outlook",
    desc: "Where the property market might be heading and what to watch next.",
    icon: <RiTimeLine className="text-2xl" />,
  },
];

export default function Learn() {
  return (
      <div className="mx-auto container xl:max-w-[1440px] px-4">
        <section className="text-white py-8 sm:py-16">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase">
              What You’ll <span className="text-theme">Find Here</span>
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Every episode is packed with actionable insights to help you build
              wealth through smart property investment decisions
            </p>
          </div>
          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {learnItems.map((item, idx) => (
              <div
                key={idx}
                className="group bg-[#2C2C2C] rounded-2xl p-6 shadow-lg hover:shadow-xl transition justify-items-center sm:justify-items-start text-center sm:text-left border-b-4 border-transparent hover:border-purple-500 relative"
              >
                {/* Icon inside a circle */}
                <div className="bg-gray-700/60 w-14 h-14 flex items-center justify-center rounded-full mb-4 text-gray-300 group-hover:text-purple-500 transition">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold mb-2 text-white transition group-hover:bg-gradient-to-r group-hover:from-[#9747FF] group-hover:to-[#FC18D8] group-hover:bg-clip-text group-hover:text-transparent">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
  );
}