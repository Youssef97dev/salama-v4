import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-full md:h-screen flex flex-col md:flex-row justify-center items-center"
    >
      <div className="h-full w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-primary px-10 xl:px-52 py-10 md:py-0 space-y-3">
        <span className="font-semibold text-lg md:text-2xl tracking-widest">
          ABOUT US
        </span>
        <p className="text-base md:text-xl text-center md:text-start">
          {`Nestled in the heart of the mythical Djema el Fna square, Le Salama is a true refuge after an immersion in the colorful and effervescent souks.`}
          <br />
          {`Here, you can enjoy a cocktail in peace and quiet, while savoring Moroccan culinary treasures.`}
          <br />
          {`On the menu are the must-tries: melting shoulder of lamb, delicious Tangia, or delicate Kemias, all prepared with a finesse and savoir-faire that sublimates traditional flavors.`}
          <br />
          {`The ambiance is not to be outdone: every evening, an oriental dance show adds a touch of magic to the atmosphere. `}
          <br />
          {`But this place doesn't reveal all its secrets at first glance... There are secrets waiting to be discovered, for those who dare to explore beyond the obvious. Come and let yourself be carried away by the mysterious soul of this enchanting place.`}
          <br />
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
