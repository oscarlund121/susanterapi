"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import StaticButton from "../ui/StaticButton";

const NavStandard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Forhindre scroll når menu er åben
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup når component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 right-0 z-50 p-4 sm:p-6">
      {/* Menu button - Moderne design */}
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center space-x-2 px-4 py-3 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 hover:bg-[#1cc18e] hover:text-white transition-all duration-300 shadow-lg group"
        aria-label="Toggle menu"
      >
        <HiMenuAlt3 className="h-5 w-5 transition-transform group-hover:scale-110" />
        <span className="text-sm font-medium">Menu</span>
      </button>

      {/* Navigation Overlay */}
      {isMenuOpen && (
        <>
          {/* Background Overlay */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Content - Elegant moderne design */}
          <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="flex h-full justify-end">
              <div className="w-full sm:w-[90%] lg:w-[75%] bg-white shadow-2xl animate-smooth-slide-in overflow-hidden">
                
                {/* Menu Header - Minimalistisk */}
                <div className="flex items-center justify-end p-8">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="w-16 h-16 rounded-full bg-gray-50 hover:bg-[#1cc18e] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                  >
                    <HiX className="h-6 w-6" />
                  </button>
                </div>

                {/* Menu Content - Ny elegant layout */}
                <div className="flex-1 px-8 pb-8 overflow-y-auto">
                  
                  {/* Navigation Grid - Større spacing */}
                  <div className="grid lg:grid-cols-2 gap-16 mb-16">
                    
                    {/* Venstre side - Navigation */}
                    <div className="space-y-12">
                      {/* Hovedmenu */}
                      <div>
                        <div className="space-y-6">
                          <Link
                            href="/"
                            className="block text-[#333333] hover:text-[#1cc18e] transition-colors duration-300 text-3xl py-2 underline-animate"
                            style={{ fontFamily: 'var(--font-syne)', fontWeight: '300' }}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Hjem
                          </Link>
                          <Link
                            href="/ommig"
                            className="block text-[#333333] hover:text-[#1cc18e] transition-colors duration-300 text-3xl py-2 underline-animate"
                            style={{ fontFamily: 'var(--font-syne)', fontWeight: '300' }}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Om mig
                          </Link>
                          <Link
                            href="/ydelser"
                            className="block text-[#333333] hover:text-[#1cc18e] transition-colors duration-300 text-3xl py-2 underline-animate"
                            style={{ fontFamily: 'var(--font-syne)', fontWeight: '300' }}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Ydelser
                          </Link>
                          <Link
                            href="/priser"
                            className="block text-[#333333] hover:text-[#1cc18e] transition-colors duration-300 text-3xl py-2 underline-animate"
                            style={{ fontFamily: 'var(--font-syne)', fontWeight: '300' }}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Priser
                          </Link>
                        </div>
                      </div>

                      {/* Terapi Former - Elegant styling */}
                      <div>
                        <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-8" style={{ fontFamily: 'var(--font-archivo)' }}>
                          Terapi Former
                        </h3>
                        <div className="space-y-4">
                          <Link
                            href="/ydelser#emdr"
                            className="flex items-center space-x-4 group py-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span className="inline-block text-xs px-3 py-2 bg-[#1cc18e] text-white rounded-full font-medium tracking-wide">
                              01
                            </span>
                            <span className="text-[#333333] group-hover:text-[#1cc18e] transition-colors duration-300 text-xl underline-animate" style={{ fontFamily: 'var(--font-syne)', fontWeight: '300' }}>
                              EMDR Terapi
                            </span>
                          </Link>
                          
                          <Link
                            href="/ydelser#mentalisering"
                            className="flex items-center space-x-4 group py-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span className="inline-block text-xs px-3 py-2 bg-[#1cc18e] text-white rounded-full font-medium tracking-wide">
                              02
                            </span>
                            <span className="text-[#333333] group-hover:text-[#1cc18e] transition-colors duration-300 text-xl underline-animate" style={{ fontFamily: 'var(--font-syne)', fontWeight: '300' }}>
                              Mentalisering
                            </span>
                          </Link>
                          
                          <Link
                            href="/ydelser#chok"
                            className="flex items-center space-x-4 group py-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span className="inline-block text-xs px-3 py-2 bg-[#1cc18e] text-white rounded-full font-medium tracking-wide">
                              03
                            </span>
                            <span className="text-[#333333] group-hover:text-[#1cc18e] transition-colors duration-300 text-xl underline-animate" style={{ fontFamily: 'var(--font-syne)', fontWeight: '300' }}>
                              Chok-forløsning
                            </span>
                          </Link>
                          
                          <Link
                            href="/ydelser#familie"
                            className="flex items-center space-x-4 group py-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span className="inline-block text-xs px-3 py-2 bg-[#1cc18e] text-white rounded-full font-medium tracking-wide">
                              04
                            </span>
                            <span className="text-[#333333] group-hover:text-[#1cc18e] transition-colors duration-300 text-xl underline-animate" style={{ fontFamily: 'var(--font-syne)', fontWeight: '300' }}>
                              Familieterapi
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Højre side - Kontakt & CTA */}
                    <div className="space-y-12">
                      {/* Kontakt Information */}
                      <div>
                        <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-8" style={{ fontFamily: 'var(--font-archivo)' }}>
                          Kontakt
                        </h3>
                        <div className="space-y-6">
                          <div>
                            <p className="text-sm text-gray-400 mb-2" style={{ fontFamily: 'var(--font-archivo)' }}>Email</p>
                            <p className="text-lg text-[#333333]" style={{ fontFamily: 'var(--font-syne)', fontWeight: '300' }}>info@susanterapi.dk</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400 mb-2" style={{ fontFamily: 'var(--font-archivo)' }}>Telefon</p>
                            <p className="text-lg text-[#333333]" style={{ fontFamily: 'var(--font-syne)', fontWeight: '300' }}>+45 XX XX XX XX</p>
                          </div>
                        </div>
                      </div>

                      {/* Social Media - Elegant styling */}
                      <div>
                        <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-8" style={{ fontFamily: 'var(--font-archivo)' }}>
                          Følg med
                        </h3>
                        <div className="flex space-x-4">
                          <a
                            href="https://instagram.com/susanterapi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 border border-gray-200 rounded-full flex items-center justify-center text-[#333333] hover:border-[#1cc18e] hover:text-[#1cc18e] hover:bg-gray-50 transition-all duration-300"
                          >
                            <FaInstagram className="h-6 w-6" />
                          </a>
                          <a
                            href="https://facebook.com/susanterapi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 border border-gray-200 rounded-full flex items-center justify-center text-[#333333] hover:border-[#1cc18e] hover:text-[#1cc18e] hover:bg-gray-50 transition-all duration-300"
                          >
                            <FaFacebookF className="h-6 w-6" />
                          </a>
                        </div>
                      </div>

                      {/* CTA Buttons - Elegant placering */}
                      <div className="pt-8">
                        <div className="space-y-4">
                          <StaticButton
                            text="Book en session"
                            href="/kontakt"
                            variant="green"
                            size="large"
                            direction="left"
                            iconDirection="right"
                          />
                          <StaticButton
                            text="Se alle ydelser"
                            href="/ydelser"
                            variant="yellow"
                            size="large"
                            direction="left"
                            iconDirection="right"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavStandard;
