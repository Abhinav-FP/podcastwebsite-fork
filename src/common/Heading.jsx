import React from 'react'

export default function Heading({ title, content, subtitle, className }) {
    return (
        <div className={`${className}`}>
            <h2 className="text-[30px] sm:text-[41px] lg:text-[52px] font-[700] mb-2 uppercase">
                <span className="text-white">{title}</span>
                <span className="text-theme"> {subtitle}</span>
            </h2>
            <p className="text-[18px] sm:text-[20px] md:text-[18px] mb-8 text-[#FFFFFFCC]">
                {content}
            </p>
        </div>
    )
}