import React from 'react'
import { GoDownload } from "react-icons/go";


export default function Card({ index, podcast }) {
    return (
        <div key={index} className="bg-[#111] rounded-lg p-3">
            <img
                src={podcast.image}
                alt={podcast.title}
                className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-md font-semibold mt-3 mb-1">
                {podcast.title}
            </h3>
            <p className="text-xs text-gray-400">{podcast.description}</p>
            <button className="flex items-center gap-2 mt-3 px-4 py-2 text-sm rounded-full border border-gray-400  transition">
                <GoDownload size={20} />
                Download PDF
            </button>

        </div>
    )
}
