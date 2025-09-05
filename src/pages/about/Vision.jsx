import React from "react";

export default function Vision() {
  return (
    <section className="py-[20px] md:py-[40px] mb-3">
      <div className="bg-[#141414] border-1  border-[#FFFFFF33] rounded-[10px] p-[10px] md:p-[20px] relative z-[2]">
         <div className="absolute w-full sm:w-[15vw] max-w-[500px] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blurcircle rounded-full z-[1]"/>
        <div className="text-center flex flex-col items-center relative z-[2]">
          <h2 className="text-[30px] sm:text-[41px] lg:text-[52px] font-[700] mb-2 uppercase">
            <span className="text-white">Our</span>
            <span className="text-theme"> Vision</span>
          </h2>
          <h3 className="text-base sm:text-lg lg:text-xl font-[700] mb-4 uppercase">
            Helping Australians build lasting wealth through property.
          </h3>
          <p className="text-[18px] sm:text-[20px] md:text-[18px] mb-5 text-[#FFFFFFCC]">
            We see a future where background, postcode, or starting point no
            longer decides who can build a strong property portfolio. Our vision
            is for more Australians to feel informed, confident, and capable of
            creating financial security for themselves and their families.
            Property investing should not be a closed door for the few, it
            should be a path open to anyone willing to learn, plan, and take
            action.
          </p>
        </div>
      </div>
    </section>
  );
}
