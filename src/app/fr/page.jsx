import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "./components/About";
import BookTable from "./components/BookTable";
import Location from "./components/Location";
import Footer from "./components/Footer";
import WtspButton from "@/components/WtspButton";
import MenuButton from "@/components/MenuButton";
import AboutSecond from "./components/AboutSecond";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center gap-2 md:gap-0">
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <AboutSecond />
      <BookTable />
      <Location />
      <Footer />
      <WtspButton />
      <MenuButton />
    </div>
  );
}
