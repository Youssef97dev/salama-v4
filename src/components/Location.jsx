import Image from "next/image";
import Link from "next/link";

const Location = () => {
  return (
    <div
      id="location"
      className="w-full h-full md:h-screen flex flex-col md:flex-row justify-center items-center"
    >
      <div className="h-full w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-primary px-10 py-10 md:py-0 space-y-3">
        <span className="font-semibold text-lg md:text-2xl tracking-widest">
          LOCATION
        </span>
        <p className="text-base md:text-xl text-center md:text-start">
          {`Located in the heart of Djema el Fna square, it’s a cozy place to
          enjoy a drink after a shopping spree in the souks! In the kitchen,
          you’ll find the must-try dishes of Moroccan cuisine: shoulder of lamb,
          Tangia, Kemias... all cooked with subtlety. As for the ambiance,
          there’s a pianist, DJ, or dancers, depending on the evening. And
          there’s more to discover! Come and explore the secrets this
          fascinating place hides.`}
        </p>
        <Link
          href="https://www.google.com/maps/place/Le+Salama/@31.6264969,-7.9874887,173m/data=!3m1!1e3!4m6!3m5!1s0xdafee422b547dcb:0x77d12fb6b8ea2d42!8m2!3d31.6264238!4d-7.98697!16s%2Fg%2F1tcxr074?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          className="uppercase border border-primary text-primary px-4 py-2 hover:bg-primary hover:text-primary_2 transition-all ease-linear"
        >
          Open the map
        </Link>
      </div>
      <div className="bg-primary_5 h-full w-full md:w-1/2">
        <Image
          src="/images/gallery/salama7.jpg"
          alt="le salama main"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
  _5;
};

export default Location;
