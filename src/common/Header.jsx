'use client'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="!bg-black shadow-sm">
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-6">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto rounded-full"
              src="https://img.freepik.com/free-vector/detailed-podcast-logo-template_23-2148786067.jpg?semt=ais_hybrid&w=740"
              alt="Logo"
            />
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex lg:gap-x-10">
          <a href="#" className="text-sm font-semibold text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-sm font-semibold text-white hover:text-gray-300">Episode</a>
          <a href="#" className="text-sm font-semibold text-white hover:text-gray-300">E-Guide</a>
          <a href="#" className="text-sm font-semibold text-white hover:text-gray-300">About</a>
          <a href="#" className="text-sm font-semibold text-white hover:text-gray-300">Contact</a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <FiMenu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>
          {/* Drawer */}
          <div className="fixed inset-y-0 right-0 z-50 w-72 bg-gray-900 p-6">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  className="h-8 w-auto rounded-full"
                  src="https://img.freepik.com/free-vector/detailed-podcast-logo-template_23-2148786067.jpg?semt=ais_hybrid&w=740"
                  alt="Logo"
                />
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Close menu</span>
                <FiX className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <a href="#" className="block text-base font-semibold text-white hover:text-gray-300">Home</a>
              <a href="#" className="block text-base font-semibold text-white hover:text-gray-300">Episode</a>
              <a href="#" className="block text-base font-semibold text-white hover:text-gray-300">E-Guide</a>
              <a href="#" className="block text-base font-semibold text-white hover:text-gray-300">About</a>
              <a href="#" className="block text-base font-semibold text-white hover:text-gray-300">Contact</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
