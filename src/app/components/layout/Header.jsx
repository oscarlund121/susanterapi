"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { LuHexagon } from "react-icons/lu";

const Header = () => {
  return (
    <div className="flex flex-col items-center mt-10 ">
      <nav className="fixed place-items-center bg-white z-30">
        <LuHexagon
          size={70}
          className=" text-black rotate-[30deg]"
          strokeWidth={1}
        />
        <h1 className="font-normal text-4xl text-center leading-loose">
          Psykoterapi
        </h1>
        <h2 className="font-light text-xl mb-12 text-center">
          v. Susan Albertsen
        </h2>
        <div className="flex flex-col gap-8 items-center font-light mb-12 text-base">
          <Link href="/">Forside</Link>
          <Link href="/ydelser">Terapi</Link>
          <Link href="/ommig">Om mig</Link>
          <Link href="/priser">Priser</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>
        <div className="flex gap-4">
          <Link href={"https://www.instagram.com/susanalbertsen69/"} target="_blank">
            <FaInstagram size={36} className="text-black" />
          </Link>
          <Link href={"https://www.facebook.com/essensterapi.nu"} target="_blank">
            <FaFacebookF
              size={36}
              className="text-white bg-black rounded-full"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
