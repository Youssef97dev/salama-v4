import Image from "next/image";
import Link from "next/link";

const BookTable = () => {
  return (
    <div
      id="contact"
      className="w-full h-full md:h-screen flex flex-col md:flex-row justify-center items-center"
    >
      <div className="h-full w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-primary px-10 xl:px-52 py-10 md:py-0 space-y-3">
        <span className="font-semibold text-lg md:text-2xl tracking-widest">
          RÉSERVEZ VOTRE TABLE
        </span>
        <p className="text-base md:text-xl text-center md:text-start">
          {`Vous êtes prêt à prendre un repas au SALAMA ? Nous avons facilité la réservation de votre table :`}
          <br />
          {`Appelez-nous ou envoyez un message WhatsApp à `}
          <Link
            href="http://wa.me/212675480018"
            target="_blank"
            className="underline"
          >
            +212 675-480018
          </Link>
          <br />
          {` ou cliquez sur le bouton ci-dessous.`}
          <br />
          <br />
          <Link
            href="https://www.sevenrooms.com/explore/lessalamamarrakech/reservations/create/search/"
            target="_blank"
            className="uppercase border border-primary text-primary px-4 py-2 hover:bg-primary hover:text-primary_2 transition-all ease-linear"
          >
            Réservez votre table
          </Link>
        </p>
      </div>
      <div className="bg-primary_5 h-full w-full md:w-1/2">
        <Image
          src="/images/gallery/salama2.jpg"
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

export default BookTable;
