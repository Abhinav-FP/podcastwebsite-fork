import React from 'react'

export default function Heading({ title }) {
    return (
        <h2 className="text-[30px] sm:text-[48px] font-bold text-center mb-10">
            {title}
        </h2>
    )
}
