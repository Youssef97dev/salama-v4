import Image from "next/image";
import Link from "next/link";

const MenuButton = () => {
  return (
    <div className=" fixed left-24 bottom-6 hover:scale-105 transition-all ease-in-out">
      <Link
        href="https://www.lesalamamarrakech.com/menu/lunch/"
        target="_blank"
      >
        <Image
          src="/images/iconmenu.png"
          alt="menu"
          width={70}
          height={70}
          className="w-14 h-14 md:w-16 md:h-16"
        />
      </Link>
    </div>
  );
};

export default MenuButton;
