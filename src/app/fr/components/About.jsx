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
          {`Nichée au cœur de la mythique place Djema el Fna, Le Salama est un véritable refuge après une immersion dans les souks colorés et effervescents.`}
          <br />
          {`Ici, vous pourrez savourer un cocktail en toute quiétude, tout en vous délectant des trésors culinaires marocains.`}
          <br />
          {`Au menu, les incontournables : l’épaule d’agneau fondant, la délicieuse Tangia, ou encore les délicates Kemias, le tout préparé avec une finesse et un savoir-faire qui subliment les saveurs traditionnelles.`}
          <br />
          {`L'ambiance n'est pas en reste : chaque soir un show de danse orientale ajoute une touche de magie à l’atmosphère.`}
          <br />
          {`Mais ce lieu ne se dévoile pas entièrement au premier regard... Des secrets attendent d’être découverts, pour ceux qui osent explorer au-delà de l’évidence. Venez, et laissez-vous emporter par l'âme mystérieuse de ce lieu enchanteur.`}
          <br />
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
