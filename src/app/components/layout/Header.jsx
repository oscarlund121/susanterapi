"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useState, useEffect } from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { LuHexagon, LuMenu, LuX } from "react-icons/lu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
      {/* Desktop/Tablet Sidebar - Hidden on small screens, visible on md+ */}
      <div className="hidden md:flex flex-col  shadow-sm items-center md:sticky top-0">
        <nav className="place-items-center z-30">
          <LuHexagon
            size={70}
            className="text-black rotate-[30deg]"
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
            <Link
              href={"https://www.instagram.com/susanalbertsen69/"}
              target="_blank"
            >
              <FaInstagram size={36} className="text-black" />
            </Link>
            <Link
              href={"https://www.facebook.com/essensterapi.nu"}
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

      {/* Mobile Header - Visible only on small screens */}
      <div className="md:hidden">
        {/* Mobile Header Bar */}
        <div className="flex items-center justify-between p-4 bg-white shadow-sm sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <LuHexagon
              size={40}
              className="text-black rotate-[30deg]"
              strokeWidth={1}
            />
            <div>
              <h1 className="font-normal text-xl">Psykoterapi</h1>
              <h2 className="font-light text-sm">v. Susan Albertsen</h2>
            </div>
          </div>

          {/* Burger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <LuX size={24} className="text-black" />
            ) : (
              <LuMenu size={24} className="text-black" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 pt-20">
            <nav className="flex flex-col items-center gap-8 p-8">
              <div className="flex flex-col gap-6 items-center font-light text-lg">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-gray-600 transition-colors"
                >
                  Forside
                </Link>
                <Link
                  href="/ydelser"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-gray-600 transition-colors"
                >
                  Terapi
                </Link>
                <Link
                  href="/ommig"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-gray-600 transition-colors"
                >
                  Om mig
                </Link>
                <Link
                  href="/priser"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-gray-600 transition-colors"
                >
                  Priser
                </Link>
                <Link
                  href="/kontakt"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-gray-600 transition-colors"
                >
                  Kontakt
                </Link>
              </div>

              {/* Social Icons in Mobile Menu */}
              <div className="flex gap-6 mt-8">
                <Link
                  href={"https://www.instagram.com/susanalbertsen69/"}
                  target="_blank"
                >
                  <FaInstagram size={36} className="text-black" />
                </Link>
                <Link
                  href={"https://www.facebook.com/essensterapi.nu"}
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
