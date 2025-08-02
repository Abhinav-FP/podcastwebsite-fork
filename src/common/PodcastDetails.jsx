import React from 'react'
import podcast from "../assets/e-guidebanner.png"
import Image from 'next/image'

export default function PodcastDetails() {
    return (
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <Image
                src={podcast} // Replace with actual image
                alt="The Stories of Mahabharata"
                className="w-[400px] h-[400px] rounded-lg object-cover"
            />
            <div>
                <h1 className="text-3xl font-bold mb-1 text-white">The Stories of Mahabharata</h1>
                <p className="text-white">Sudipta Bhawmik</p>
                <div className="flex items-center text-[#727272]  mt-1">
                    <span className=" text-[12px] md:text-[14px]  font-[400]">⭐ 4.4 (5.4K)</span>
                    <span className="mx-2  text-[12px] md:text-[14px]  font-[400]">•</span>
                    <span>PERFORMING ARTS • EVERY-TWO-MONTHS SERIES</span>
                </div>
                <p className=" text-[16px] text-[#727272] font-[400] leading-snug">
                    A serialized story-telling of the ancient epic of India – The Mahabharata.
                    Hosted on Acast.
                </p>
                <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                    ▶ Latest Episode
                </button>
            </div>
        </div>
    )
}
