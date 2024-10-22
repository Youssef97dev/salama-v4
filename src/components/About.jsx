import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-full md:h-screen flex flex-col md:flex-row justify-center items-center"
    >
      <div className="h-full w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-primary px-10 md:px-52 py-10 md:py-0 space-y-3">
        <span className="font-semibold text-lg md:text-2xl tracking-widest">
          ABOUT US
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
      </div>
      <div className="h-full w-full  md:w-1/2">
        <Image
          src="/images/rooftop-3.jpg"
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

export default About;
