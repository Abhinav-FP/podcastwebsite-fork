import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1E1E1E] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 py-10">
        {/* Logo and Description */}
        <div>
          <div className="flex justify-center md:justify-start">
            <img
              src="https://img.freepik.com/free-vector/detailed-podcast-logo-template_23-2148786067.jpg?semt=ais_hybrid&w=740"
              alt="Logo"
              className="w-40 h-auto"
            />
          </div>
          <p className="mt-4 text-sm text-gray-400 text-center md:text-left">
            Trusted in more than 100 countries & 5 million customers.
          </p>
        </div>

        {/* Pagedone Links */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="text-gray-400 hover:text-white transition">Episode</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">E-Guide</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Blogs Links */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-4">Listen</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="text-gray-400 hover:text-white transition">Spotify</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Apple Podcasts</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Goolg Podcasts</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">YouTube</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 pt-6 border-t border-gray-700 text-right text-sm text-gray-400">
        © <a href="https://pagedone.io" className="hover:underline">pagedone</a> 2024, All rights reserved.
      </div>
    </footer>
  );
}
