import React from 'react'
import { GoDownload } from "react-icons/go";
import CustomButton from './CustomButton';


export default function Card({ index, podcast }) {
    return (
        <div key={index} className=" rounded-lg p-3">
            <img
                src={podcast.image}
                alt={podcast.title}
                className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-[16px] sm:text-[18px]  mt-3 mb-1 text-[#999999]">
                {podcast.title}
            </h3>
            <p className="text-[14px] sm:text-[16px] text-[#999999] mb-3 line-clamp-2">{podcast.description}</p>
            <CustomButton text="Download PDF" icon={<GoDownload size={20} />} />
        </div>
    )
}
