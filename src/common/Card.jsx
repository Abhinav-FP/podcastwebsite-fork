import React from 'react'
import { RiChatVoiceLine } from "react-icons/ri";


export default function Card({ index, podcast }) {
    return (
        <div key={index} className=" rounded-lg p-3">
            <img
                src={podcast.image}
                alt={podcast.title}
                className="w-full h-[223px] object-cover rounded-lg"
            />
            <h3 className="text-[16px] sm:text-[18px]   text-center mt-3 mb-1 text-[#b5afaf]">
                {podcast.title}
            </h3>
            <p className="text-[14px] sm:text-[16px] text-[#999999] mb-3 text-center line-clamp-2">{podcast.description}</p>
            <button
                className="flex items-center justify-center gap-3 text-center mx-auto rounded-[40px] border border-[#FFFFFF] text-[#C0BBB8] font-[400] 
                font-inter py-2  px-5 transition duration-300 shadow-md hover:shadow-xl cursor-pointer " >
                <RiChatVoiceLine size={20} />
                Listen Now
            </button>
        </div>
    )
}
