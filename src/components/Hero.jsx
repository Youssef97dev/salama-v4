"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div id="hero" className="relative h-screen w-full ">
      {/* Image Background */}
      <Image
        src="/images/hero-1.jpg"
        alt="le salama main"
        width={1000}
        height={1000}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0000004d] h-screen mix-blend-multiply "></div>
      {/* Hero Content */}

      <div className="absolute h-full w-full flex flex-col justify-center items-center text-white space-y-3">
        <span className="text-4xl md:text-7xl text-center">
          Moroccan Soul Food
        </span>
      </div>
    </div>
  );
};

export default Hero;
