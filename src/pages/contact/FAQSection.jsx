import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
    {
        question: 'What is The Property Portfolio Podcast?',
        answer: 'It is a platform where you can learn about property investing, podcasting tips, and more.',
    },
    {
        question: 'How do I start my own podcast here?',
        answer:
            'You can sign up for a free account, upload your episodes, and publish them across major platforms like Spotify, Apple Podcasts, and Google Podcasts. No experience required!',
    },
    {
        question: 'Is it free to use?',
        answer: 'Yes, getting started is free with optional upgrades.',
    },
    {
        question: 'Can I monetize my podcast?',
        answer: 'Yes, you can monetize via ads, sponsorships, and listener support.',
    },
    {
        question: 'Do you provide editing or production help?',
        answer: 'Yes, we offer optional paid services for editing, production, and distribution.',
    },
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleIndex = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className=" flex flex-col md:flex-row gap-10">
            {/* Left Content */}
            <div className="md:w-1/3">
                <h2 className="text-3xl sm:text-4xl text-white font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-[#FFFFFF66] mb-6 !mt-[20px]">Still have a questions in mind?</p>
                <button className="bg-white text-black font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition">
                    Ask a Question
                </button>
            </div>

            {/* Right Content (FAQs) */}
            <div className="md:w-2/3 space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-[#1F1F1F] rounded-lg shadow-md"
                    >
                        <button
                            onClick={() => toggleIndex(index)}
                            className="w-full flex justify-between items-center px-6 py-4 focus:outline-none"
                        >
                            <span className=" text-[16px] md:text-[20px] leading-[20px] md:leading-[24px]  font-[500] text-white">
                                {faq.question}
                            </span>
                            {activeIndex === index ? (
                                <FaChevronUp className="text-white" />
                            ) : (
                                <FaChevronDown className="text-white" />
                            )}
                        </button>
                        {activeIndex === index && (
                            <div className="px-6 pb-4  text-[14px]  md:text-[16px] leading-[20px] md:leading-[22px] text-[#727272]">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
