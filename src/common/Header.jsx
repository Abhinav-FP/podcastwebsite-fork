'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import Logo from "../assets/logo.avif"
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // header fixed 
    const [Scrolled, setScrolled] = useState();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 5);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

  return (
 <nav className={`fixed w-full top-0 z-50  transition-all duration-300 ease-in-out  ${Scrolled ? "bg-[#fff] text-black py-1 lg:py-1" : "bg-transparent py-3  text-white lg:py-6"}`}>
                <div className="mx-auto container sm:container md:container lg:container  xl:max-w-[1440px]   px-4">
                    <div className="relative flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            width={100}
            height={100}
            className="h-16 w-auto rounded-full"
            src={Logo}
            alt="Logo"
          />
        </Link>
      </div>

      {/* Desktop Links */}
      <nav className="hidden lg:flex gap-x-10">
        <Link href="/" className="text-sm font-semibold  hover:text-gray-300">Home</Link>
        <Link href="/episode" className="text-sm font-semibold  hover:text-gray-300">Episode</Link>
        <Link href="/e-guide" className="text-sm font-semibold  hover:text-gray-300">E-Guide</Link>
        <Link href="/about" className="text-sm font-semibold  hover:text-gray-300">About</Link>
        <Link href="/#contact" className="text-sm font-semibold  hover:text-gray-300">Contact</Link>
      </nav>
      {/* Mobile Menu Open Button */}

      <div className={`flex lg:hidden ${menuOpen ? "hidden" : ""}`}>
        <button
          type="button"
          className="absolute right-[15px] top-[10px] z-[1] inline-flex items-center justify-center rounded-[3px] w-[48px] h-[45px] bg-[#ff0062]  hover:bg-[#EB3465] focus:bg-[#EB3465] focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <RiMenu3Line size={30} />
        </button>
      </div>
      {/* Mobile Menu Close Button */}
      <div className={`flex lg:hidden  ${menuOpen ? "block" : "hidden"}`}>
        <button
          type="button"
          className="absolute right-[15px] top-[10px] z-[1] inline-flex items-center justify-center rounded-[3px] w-[48px] h-[45px] bg-[#ff0062]  hover:bg-[#EB3465] focus:bg-[#EB3465] focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <IoCloseSharp size={30} />
        </button>

        {/* Mobile Menu Panel */}
        {menuOpen && (
          <div
            id="mobile-menu "
            className="absolute top-0 right-[15px] 11h-full pt-[60px] "
          >
            <ul className="relative bg-[#222]  w-[250px] z-[9] h-full flex flex-col gap-[15px] font-manrope font-[600] text-[15px] md:text-[18px] lg:text-[20px]  px-[20px] pt-[20px] pb-[30px] rounded-[5px] ">
              <li>
                <Link href="/" className="text-sm font-semibold  hover:text-gray-300">Home</Link>
              </li>
              <li>
                <Link href="/episode" className="text-sm font-semibold  hover:text-gray-300">Episode</Link>

              </li>

              <li>
                <Link href="/e-guide" className="text-sm font-semibold  hover:text-gray-300">E-Guide</Link>

              </li>
              <li>
                <Link href="/about" className="text-sm font-semibold  hover:text-gray-300">About</Link>

              </li>
              <li>
                <Link href="/#contact" className="text-sm font-semibold  hover:text-gray-300">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      </div>
</div>
    </nav>
  );
}
