import React from "react";
import Image from "next/image";
import Link from "next/link";

const imagesUrl = [
  "/images/gallery/menu-gallery-4.jpg",
  "/images/gallery/menu-gallery-25.jpg",
  "/images/gallery/menu-gallery-16.jpg",
];

const Gallery = () => {
  return (
    <>
      <div className="hidden md:flex w-full justify-between items-center space-x-2 py-2">
        {imagesUrl.map((image, index) => (
          <Link href="/gallery" target="_blank" className="cursor-pointer">
            <div key={index} className="relative">
              <Image
                src={image}
                alt="le salama gallery"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
      <Link href="/gallery" className="cursor-pointer">
        <div className="flex h-full w-full justify-center items-center  relative md:hidden">
          <Image
            src="/images/gallery/menu-gallery-25.jpg"
            alt="le salama gallery"
            width={600}
            height={700}
            className="w-full h-full object-cover"
          />
          <div className="z-10 absolute inset-0 bg-[#000] h-full mix-blend-multiply opacity-35"></div>
          <span className="absolute w-full h-full flex justify-center items-center text-4xl text-white z-20">
            GALLERY
          </span>
        </div>
      </Link>
    </>
  );
};

export default Gallery;