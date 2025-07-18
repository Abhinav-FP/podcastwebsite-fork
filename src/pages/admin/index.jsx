import React from 'react'
import AuthLayout from '@/layout/AuthLayout'
import { MdVerified } from "react-icons/md";
import Image from 'next/image';

export default function Index() {
  return (
    <AuthLayout>
     <div className="rounded-xl w-full max-w-6xl mx-auto detail_bg text-white p-8 flex items-center gap-8">
      {/* Profile Image */}
      <div className="w-44 h-44 relative rounded-full overflow-hidden border-4 border-white shadow-md">
        <img
          src="https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto/c_crop%2Cg_custom/v1728462701/yiwwlrbe78ahhohjjmum.jpg" // ✅ Place this in your public folder as "public/arijit.png"
          alt="Arijit Singh"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Info Section */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <MdVerified className="text-blue-400 text-xl" />
          <span className="text-sm font-medium text-blue-200">Verified Artist</span>
        </div>
        <h1 className="text-5xl font-extrabold leading-snug">Arijit Singh</h1>
        <p className="text-gray-100 text-sm mt-2">47,188,877 monthly listeners</p>
      </div>
    </div>
    </AuthLayout>
  )
}
