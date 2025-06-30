"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="!bg-black shadow-sm">
      <nav
        className=" flex  items-center justify-between px-4 sm:px-6 lg:px-8 py-10"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://img.freepik.com/free-vector/detailed-podcast-logo-template_23-2148786067.jpg?semt=ais_hybrid&w=740"
              alt="Logo"
            />
          </a>
        </div>

        {/* Desktop Menu Links */}
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold !text-white hover:text-gray-700">
            Home
          </a>
          <a href="#" className="text-sm font-semibold text-white hover:text-gray-700">
            Episode
          </a>
          <a href="#" className="text-sm font-semibold text-white hover:text-gray-700">
            E-Guide
          </a>
          <a href="#" className="text-sm font-semibold text-white hover:text-gray-700">
            About
          </a>
          <a href="#" className="text-sm font-semibold text-white hover:text-gray-700">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <FiMenu className="h-6 w-6" />
          </button>
        </div>

      </nav>

      {isOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-30"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white p-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Logo"
                />
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Close menu</span>
                <FiX className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                {/* Mobile Links */}
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-50"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-50"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-50"
                  >
                    Company
                  </a>
                </div>

                {/* Mobile Login */}
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
