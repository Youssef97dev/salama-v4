import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-full md:h-screen flex flex-col md:flex-row justify-center items-center"
    >
      <div className="h-full w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-primary px-10 xl:px-52 py-10 md:py-0 space-y-3">
        <span className="font-semibold text-lg md:text-2xl tracking-widest">
          À PROPOS DE NOUS
        </span>
        <p className="text-base md:text-xl text-center md:text-start">
          {`Situé au cœur de la place Djema el Fna, c'est un endroit confortable pour prendre un verre après une séance de shopping dans les souks ! En cuisine, vous trouverez les incontournables de la cuisine marocaine : épaule d'agneau, Tangia, Kemias... le tout cuisiné avec subtilité. Côté ambiance, il y a un DJ et des danseurs, selon les soirs. Et ce n'est pas tout ! Venez explorer les secrets que cache ce lieu fascinant.`}
        </p>
      </div>
      <div className="bg-primary_5 h-full w-full  md:w-1/2">
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
