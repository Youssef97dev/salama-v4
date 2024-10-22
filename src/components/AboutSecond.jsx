import Image from "next/image";

const AboutSecond = () => {
  return (
    <div
      id="about"
      className="w-full h-full md:h-screen flex flex-col-reverse md:flex-row justify-center items-center"
    >
      <div className="h-full w-full  md:w-1/2">
        <Image
          src="/images/rooftop.jpg"
          alt="le salama main"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-full w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-primary px-10 xl:px-52 py-10 md:py-0 space-y-3">
        <p className="text-base md:text-xl text-center md:text-start">
          {`Le Salama was born from a dream: to create a place where Moroccan tradition meets contemporary culture, where every dish tells a story, and where every meal becomes an unforgettable moment of sharing.`}
          <br />
          {`Le Salama is a celebration of flavors, an ode to balance, and an invitation to sensory journey in the heart of Marrakech.`}
          <br />
          {`Our dishes are crafted with a deep respect for Moroccan tradition, enhanced by global culinary creativity.`}
          <br />
          {`Signature Cocktails to Delight Your Senses. As the sun sets, Le Salama transforms into a lively evening spot.`}
          <br />
          {`Enjoy our curated cocktails and a more festive atmosphere. Whether you’re unwinding after a long day or celebrating with friends, our evening ambiance offers the perfect setting.`}
          <br />
        </p>
      </div>
    </div>
  );
  _5;
};

export default AboutSecond;
