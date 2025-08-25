import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { HiOutlineArrowTurnDownRight } from "react-icons/hi2";

const faqs = [
  {
    question: "What is The Property Portfolio Podcast?",
    answer:
      "We’re a platform empowering creators to share their voice through podcasts, featuring music, stories, interviews, and educational content. Our goal is to support you at every stage of your podcasting journey.",
  },
  {
    question: "How do I start my own podcast here?",
    answer:
      "You can sign up for a free account, upload your episodes, and publish them across major platforms like Spotify, Apple Podcasts, and Google Podcasts. No experience required!",
  },
  {
    question: "Is it free to use?",
    answer: "Yes, getting started is free with optional upgrades.",
  },
  {
    question: "Can I monetize my podcast?",
    answer:
      "Yes, you can monetize via ads, sponsorships, and listener support.",
  },
  {
    question: "Do you provide editing or production help?",
    answer:
      "Yes, we offer optional paid services for editing, production, and distribution.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <h2 className="text-center text-4xl md:text-5xl font-bold uppercase my-12">
        <span className="text-theme">Frequently </span> Asked Questions
      </h2>
      <div className="space-y-4 bg-[#2C2C2C] ">
        {faqs &&
          faqs?.map((faq, index) => (
            <div key={index} className="rounded-lg border-b border-white/20">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center text-left px-6 py-4 focus:outline-none"
              >
                <span className="text-base md:text-lg leading-[20px] md:leading-[24px]  font-[500] text-white">
                  {faq?.question}
                </span>
                {activeIndex === index ? (
                  <FiMinus className="text-white" size={24}/>
                ) : (
                  <FiPlus className="text-white" size={24}/>
                )}
              </button>
              {activeIndex === index && (
                <div className="flex gap-2 px-6 pb-4 text-sm md:text-base leading-[20px] md:leading-[22px] text-white/50 max-w-4xl">
                    <HiOutlineArrowTurnDownRight size={24} className="min-w-fit"/>
                  {faq?.answer}
                </div>
              )}
            </div>
          ))}
      </div>
    </>
  );
}
