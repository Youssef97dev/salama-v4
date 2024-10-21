import Link from "next/link";
import { BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center md:items-start bg-primary py-10">
        <div className="w-full h-full flex flex-col justify-center items-center gap-2 text-primary_2 px-10 py-3">
          <span className="uppercase text-sm lg:text-base font-semibold tracking-widest">
            Concept de partage
          </span>
          <p className="text-center text-base lg:text-lg">{`Vivez une aventure gastronomique mémorable au Salama, l'un des meilleurs restaurants de Marrakech. Parfait pour les célébrations comme les anniversaires ou les retrouvailles avec les amis et la famille, notre concept de dîner à partager favorise la chaleur et la convivialité.`}</p>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center gap-2 text-primary_2 px-10 py-3 text-sm lg:text-base">
          <span className="uppercase font-semibold tracking-widest">
            Réservations
          </span>
          <Link
            href="https://www.sevenrooms.com/explore/lessalamamarrakech/reservations/create/search/"
            target="_blank"
            className="uppercase border border-primary_2 px-3 py-1 hover:bg-primary_2 hover:text-primary transition-all ease-linear"
          >
            Réserver une table
          </Link>
          <span className="uppercase font-semibold tracking-widest pt-1">
            Horaires d'ouverture
          </span>
          <span className="text-center">Tous les jours : de 12h00 à 02h00</span>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center gap-2 text-primary_2 px-10 py-3 text-sm lg:text-base">
          <span className="uppercase font-semibold tracking-widest">
            Location
          </span>
          <span className="text-center">
            40 Rue des Banques, Marrakech 40000, Maroc
          </span>
          <span className="uppercase font-semibold tracking-widest pt-1">
            Téléphone
          </span>
          <Link
            href="http://wa.me/212675480018"
            className="text-center cursor-pointer"
          >
            +212 675-480018
          </Link>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center gap-2 text-primary_2 px-10 py-3 text-sm lg:text-base">
          <span className="uppercase font-semibold tracking-widest">Email</span>
          <span className="text-center">
            reservations@lesalamamarrakech.com
          </span>
          <span className="uppercase font-semibold tracking-widest pt-1">
            Réseaux sociaux
          </span>
          <div className="w-full flex justify-center items-center gap-2">
            <Link
              href="https://www.instagram.com/lesalamamarrakech/"
              target="_blank"
            >
              <BsInstagram size={18} />
            </Link>
            <Link
              href="https://www.facebook.com/lesalamamarrakech/"
              target="_blank"
            >
              <BsFacebook size={18} />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-full text-center py-5 bg-primary_9 text-primary_1 text-sm lg:text-base">
        © 2024 Le Salama. Tous droits réservés
      </div>
    </div>
  );
};

export default Footer;
