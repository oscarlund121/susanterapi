"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { LuHexagon, LuMenu, LuX } from "react-icons/lu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const getLinkClassName = (href) => {
    const isActive = pathname === href;
    return isActive 
      ? "bg-gray-800 block text-white px-8 py-3 w-full text-center" 
      : "hover:underline";
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop/Tablet Sidebar */}
      <div className="hidden lg:flex flex-col shadow-sm items-center md:sticky top-0">
        <nav className="place-items-center pt-20 z-30 min-h-screen w-full">
          <div className="flex flex-col items-center mb-4">
            <LuHexagon
              size={50}
              className="text-black rotate-[30deg] mb-2"
              strokeWidth={0.8}
            />
            <h4 className=" text-4xl text-center ">Psykoterapi</h4>
            <h6 className=" text-xl mb-12 text-center">v. Susan Albertsen</h6>
          </div>
          <div className="flex flex-col gap-8 items-center w-full mb-12 text-base">
            <Link className={getLinkClassName("/")} href="/">
              Forside
            </Link>
            <Link className={getLinkClassName("/ydelser")} href="/ydelser">
              Terapi
            </Link>
            <Link className={getLinkClassName("/ommig")} href="/ommig">
              Om mig
            </Link>
            <Link className={getLinkClassName("/priser")} href="/priser">
              Priser
            </Link>
            <Link className={getLinkClassName("/kontakt")} href="/kontakt">
              Kontakt
            </Link>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://www.instagram.com/susanalbertsen69/"
              target="_blank"
            >
              <FaInstagram size={36} className="text-black" />
            </Link>
            <Link
              href="https://www.facebook.com/essensterapi.nu"
              target="_blank"
            >
              <FaFacebookF
                size={36}
                className="text-white bg-black rounded-full"
              />
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Button */}
      <div className="lg:hidden">
        {!isMobileMenuOpen && (
          <button
            onClick={toggleMobileMenu}
            className="fixed top-6 right-6 z-50 w-16 h-16 rounded-full bg-black text-white flex items-center justify-center shadow-lg"
            aria-label="Åbn menu"
          >
            <LuMenu size={28} />
          </button>
        )}

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 px-8 flex flex-col items-center justify-top pt-20">
            <button
              onClick={toggleMobileMenu}
              className="absolute top-6 right-6 text-black p-2"
              aria-label="Luk menu"
            >
              <LuX size={28} />
            </button>
            <nav className="flex flex-col items-center z-30">
              <LuHexagon
                size={70}
                className="text-black rotate-[30deg]"
                strokeWidth={1}
              />
              <h1 className="font-normal text-4xl text-center ">Psykoterapi</h1>
              <h2 className="font-light text-xl mb-12 text-center">
                v. Susan Albertsen
              </h2>
              <div className="flex flex-col gap-8 items-center font-light mb-12 text-base">
                <Link className={getLinkClassName("/")} href="/" onClick={closeMobileMenu}>
                  Forside
                </Link>
                <Link className={getLinkClassName("/ydelser")} href="/ydelser" onClick={closeMobileMenu}>
                  Terapi
                </Link>
                <Link className={getLinkClassName("/ommig")} href="/ommig" onClick={closeMobileMenu}>
                  Om mig
                </Link>
                <Link className={getLinkClassName("/priser")} href="/priser" onClick={closeMobileMenu}>
                  Priser
                </Link>
                <Link className={getLinkClassName("/kontakt")} href="/kontakt" onClick={closeMobileMenu}>
                  Kontakt
                </Link>
              </div>
              <div className="flex gap-4">
                <Link
                  href="https://www.instagram.com/susanalbertsen69/"
                  target="_blank"
                >
                  <FaInstagram size={36} className="text-black" />
                </Link>
                <Link
                  href="https://www.facebook.com/essensterapi.nu"
                  target="_blank"
                >
                  <FaFacebookF
                    size={36}
                    className="text-white bg-black rounded-full"
                  />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
