import Image from "next/image";
import Link from "next/link";

const WtspButton = () => {
  return (
    <div className=" fixed left-5 bottom-6 hover:scale-105 transition-all ease-in-out">
      <Link href="http://wa.me/212675480018" target="_blank">
        <Image
          src="/images/whatsapp.png"
          alt="whatsapp"
          width={70}
          height={70}
          className="w-14 h-14 md:w-16 md:h-16"
        />
      </Link>
    </div>
  );
};

export default WtspButton;
