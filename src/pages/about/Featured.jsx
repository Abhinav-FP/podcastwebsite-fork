import React from "react";

export default function Featured() {
  const featuredInLogos = [
    "The Australian",
    "AFR",
    "Domain",
    "Property Investment Magazine",
    "Smart Property Investment",
  ];
  return (
    <section className="py-[20px] md:py-[40px] mb-10">
      <h2 className="text-[25px] sm:text-[35px] md:text-[45px] font-bold mb-4 text-white text-center uppercase">
        As
        <span className="text-theme"> featured </span>
        In
      </h2>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
        {featuredInLogos &&
          featuredInLogos?.map((logo, index) => (
            <div
              key={index}
              className="bg-[#4B4B4B] rounded-full px-3 py-2 md:px-5 md:py-4 text-white text-[18px] md:text-[20px] whitespace-nowrap"
            >
              {logo}
            </div>
          ))}
      </div>
    </section>
  );
}
