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
          {`Le Salama est né d'un rêve : créer un lieu où la tradition marocaine rencontre la culture contemporaine, où chaque plat raconte une histoire et où chaque repas devient un moment de partage inoubliable.`}
          <br />
          {`Le Salama est une célébration des saveurs, une ode à l'équilibre et une invitation au voyage sensoriel au cœur de Marrakech.`}
          <br />
          {`Nos plats sont élaborés dans le plus grand respect de la tradition marocaine, rehaussée par la créativité culinaire mondiale.`}
          <br />
          {`Des cocktails de marque pour le plaisir des sens. Au coucher du soleil, Le Salama se transforme en un lieu animé pour la soirée.`}
          <br />
          {`Profitez de nos cocktails élaborés et d'une atmosphère plus festive. Que vous vous détendiez après une longue journée ou que vous fassiez la fête avec des amis, notre ambiance nocturne offre le cadre idéal.`}
          <br />
        </p>
      </div>
    </div>
  );
  _5;
};

export default AboutSecond;
