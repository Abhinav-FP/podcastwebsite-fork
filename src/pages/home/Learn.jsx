import React from "react";
import { FaCalculator } from "react-icons/fa";

const learnItems = [
  {
    title: "Property Investment Tips",
    desc: "Master the fundamentals of building a profitable property portfolio with expert guidance.",
    icon: <FaCalculator className="text-2xl" />,
  },
  {
    title: "Property Investment Tips",
    desc: "Master the fundamentals of building a profitable property portfolio with expert guidance.",
    icon: <FaCalculator className="text-2xl" />,
  },
  {
    title: "Property Investment Tips",
    desc: "Master the fundamentals of building a profitable property portfolio with expert guidance.",
    icon: <FaCalculator className="text-2xl" />,
  },
  {
    title: "Property Investment Tips",
    desc: "Master the fundamentals of building a profitable property portfolio with expert guidance.",
    icon: <FaCalculator className="text-2xl" />,
  },
  {
    title: "Property Investment Tips",
    desc: "Master the fundamentals of building a profitable property portfolio with expert guidance.",
    icon: <FaCalculator className="text-2xl" />,
  },
  {
    title: "Property Investment Tips",
    desc: "Master the fundamentals of building a profitable property portfolio with expert guidance.",
    icon: <FaCalculator className="text-2xl" />,
  },
];

export default function Learn() {
  return (
    <div className="bg-[#1E1E1E] ">
    <div className="mx-auto container xl:max-w-[1440px] px-4">
      <section className="text-white py-16 px-6 md:px-16 lg:px-24">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            WHAT YOU’LL <span className="text-theme">LEARN</span>
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
              className="group bg-[#2C2C2C] rounded-2xl p-6 shadow-lg hover:shadow-xl transition border-b-4 border-transparent hover:border-purple-500"
            >
              {/* Icon inside a circle */}
              <div className="bg-gray-700/60 w-14 h-14 flex items-center justify-center rounded-full mb-4 text-gray-300 group-hover:text-purple-500 transition">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2 text-white group-hover:bg-[linear-gradient(270deg,#9747FF_0%,#FC18D8_97.09%)] group-hover:bg-clip-text group-hover:text-transparent transition">
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
    </div>
  );
}