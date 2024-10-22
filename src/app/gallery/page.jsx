import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const images = [
  "/images/salama.jpg",
  "/images/rooftop-4.jpg",
  "/images/gallery/menu-gallery-1.jpg",
  "/images/gallery/menu-gallery-2.jpg",
  "/images/gallery/menu-gallery-3.jpg",
  "/images/hero-4.jpg",
  "/images/gallery/menu-gallery-4.jpg",
  "/images/gallery/menu-gallery-5.jpg",
  "/images/gallery/menu-gallery-6.jpg",
  "/images/gallery/menu-gallery-8.jpg",
  "/images/gallery/menu-gallery-9.jpg",
  "/images/gallery/menu-gallery-10.jpg",
  "/images/poeple.jpg",
  "/images/gallery/menu-gallery-11.jpg",
  "/images/gallery/menu-gallery-12.jpg",
  "/images/gallery/menu-gallery-13.jpg",
  "/images/gallery/menu-gallery-14.jpg",
  "/images/gallery/menu-gallery-15.jpg",
  "/images/gallery/menu-gallery-16.jpg",
  "/images/gallery/menu-gallery-17.jpg",
  "/images/gallery/menu-gallery-18.jpg",
  "/images/gallery/menu-gallery-19.jpg",
  "/images/plats.jpg",
  "/images/gallery/menu-gallery-20.jpg",
  "/images/gallery/menu-gallery-21.jpg",
  "/images/gallery/menu-gallery-22.jpg",
  "/images/gallery/menu-gallery-23.jpg",
  "/images/gallery/menu-gallery-24.jpg",
];

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 mt-16  md:gap-0">
      <Navbar />
      <div className="container py-5 w-full h-full">
        <div className="masonry">
          {images.map((src, index) => (
            <div
              key={index}
              className="masonry-item relative shadow-lg hover:scale-105 transition-all ease-linear overflow-hidden"
            >
              <Image
                src={src}
                alt={`Image ${index}`}
                layout="responsive"
                width={300}
                height={300}
                className="rounded-sm"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
