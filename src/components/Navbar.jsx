"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-30 bg-primary shadow-md px-5">
        <div className="flex justify-between items-center p-2">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logo-salama-white.png"
              alt="le salama logo"
              width={120}
              height={120}
              className="cursor-pointer"
            />
          </Link>
          <div className="flex justify-center items-center space-x-6">
            {/* Book table button */}
            <div className="hidden md:block">
              <Link
                href="https://www.sevenrooms.com/explore/lessalamamarrakech/reservations/create/search/"
                target="_blank"
                className="border border-primary_2 bg-transparent text-primary_2 px-4 py-2 hover:bg-primary_2 hover:text-primary transition-all ease-linear"
              >
                Book a Table
              </Link>
            </div>
            {/* Menu Icon */}
            <div className="">
              <button onClick={() => setIsOpen(!isOpen)}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="#fff"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Full-screen mobile menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-700"
        enterFrom="transform -translate-y-full"
        enterTo="transform translate-y-0"
        leave="transition ease-in duration-500"
        leaveFrom="transform translate-y-0"
        leaveTo="transform -translate-y-full"
      >
        <div className="fixed top-0 left-0 w-full h-screen bg-primary z-20 flex flex-col items-center justify-center">
          <ul className="space-y-5 md:space-y-10 text-center text-white text-xl md:text-4xl font-medium">
            <li>
              <Link
                href="#about"
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-primary_2"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-primary_2"
              >
                CONTACT
              </Link>
            </li>
            <li>
              <Link
                href="#location"
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-primary_2"
              >
                LOCATION
              </Link>
            </li>
            <li>
              <Link
                href="https://www.lesalamamarrakech.com/menu/lunch/"
                target="_blank"
                className="hover:text-primary_2"
              >
                MENU
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-primary_2">
                GALLERY
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </>
  );
};

export default Navbar;