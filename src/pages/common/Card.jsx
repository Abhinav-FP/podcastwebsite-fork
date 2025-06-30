import React from 'react'
import { GoDownload } from "react-icons/go";
import CustomButton from './CustomButton';


export default function Card({ index, podcast }) {
    return (
        <div key={index} className="bg-[#111] rounded-lg p-3">
            <img
                src={podcast.image}
                alt={podcast.title}
                className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-[16px] sm:text-[18px] font-semibold mt-3 mb-1">
                {podcast.title}
            </h3>
            <p className="text-[14px] sm:text-[16px] text-gray-400 mb-3">{podcast.description}</p>
            <CustomButton text="Download PDF" icon={<GoDownload size={20} />} />
        </div>
    )
}
