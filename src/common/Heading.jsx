import React from 'react'

export default function Heading({ title, content, subtitle, className }) {
    return (
        <div className={`${className}`}>
            <h2 className="text-[48px] lg:text-[52px] font-[700] mb-2 uppercase">
                <span className="text-white">{title}</span>
                <span className="bg-gradient-to-r from-[#9747FF] to-[#FC18D8] bg-clip-text text-transparent "> {subtitle}</span>
            </h2>
            <p className="text-[18px] sm:text-[20px] md:text-[18px] mb-8 text-[#FFFFFFCC]">
                {content}
            </p>
        </div>
    )
}
