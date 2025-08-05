"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NavStandard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: "Hjem", href: "/" },
    { name: "Om mig", href: "/ommig" },
    { name: "Ydelser", href: "/ydelser" },
    { name: "Priser", href: "/priser" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  return (
    <nav className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#fff100] rounded-lg flex items-center justify-center">
              <span className="text-xl md:text-2xl font-bold text-gray-800">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-light text-gray-800">
                Susan Albertsen
              </span>
              <span className="text-sm text-gray-600 -mt-1">
                Psykoterapi
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Hidden, replaced with Menu button */}
          {/* <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#1cc18e] transition-colors duration-200 font-light"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="bg-[#1cc18e] text-white px-6 py-2 rounded-full hover:bg-[#1cc18e]/90 transition-colors duration-200 font-light"
            >
              Book samtale
            </Link>
          </div> */}

          {/* Menu button - All screen sizes */}
          <button
            onClick={toggleMenu}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-all duration-200 shadow-sm"
            aria-label="Toggle menu"
          >
            <HiMenuAlt3 className="h-5 w-5" />
            <span className="text-sm font-light">Menu</span>
          </button>
        </div>

        {/* Mobile Navigation Overlay - All screen sizes */}
        {isMenuOpen && (
          <>
            {/* Background Overlay */}
            <div 
              className={`fixed inset-0 bg-white/90 backdrop-blur-sm z-40 transition-opacity duration-500 ${
                isMenuOpen ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <div className="fixed inset-0 z-50">
              <div className="flex h-full justify-end">
                {/* Menu Panel - Clean white design */}
                <div className={`w-[90%] md:w-[75%] bg-white shadow-2xl transition-transform duration-700 ease-out rounded-tl-[60px] rounded-bl-[60px] overflow-hidden border-l border-gray-100 ${
                  isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                  
                  {/* Menu Header - Minimal */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#fff100] rounded-2xl flex items-center justify-center">
                        <span className="text-xl font-bold text-gray-800">S</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xl font-light text-gray-800">
                          Susan Albertsen
                        </span>
                        <span className="text-sm text-gray-500 font-light">
                          Psykoterapeut
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-all duration-200 shadow-sm text-sm font-light"
                    >
                      <HiX className="h-5 w-5" />
                      <span>Luk</span>
                    </button>
                  </div>

                  {/* Menu Content - Japanese inspired layout */}
                  <div className="flex-1 p-6 overflow-y-auto">
                    
                    {/* Navigation Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                      
                      {/* Navigation Column 1 */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
                            • Hovedmenu
                          </h3>
                          <div className="space-y-3">
                            {menuItems.slice(0, 3).map((item, index) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block text-gray-700 hover:text-[#1cc18e] transition-colors duration-200 font-light text-lg py-1"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Navigation Column 2 */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
                            • Information
                          </h3>
                          <div className="space-y-3">
                            {menuItems.slice(3).map((item, index) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block text-gray-700 hover:text-[#1cc18e] transition-colors duration-200 font-light text-lg py-1"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right side - Contact info */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
                            • Kontakt
                          </h3>
                          <div className="space-y-3">
                            <div className="text-gray-600 font-light">
                              <p className="text-sm text-gray-400">Email</p>
                              <p className="text-base">info@susanterapi.dk</p>
                            </div>
                            <div className="text-gray-600 font-light">
                              <p className="text-sm text-gray-400">Telefon</p>
                              <p className="text-base">+45 XX XX XX XX</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons - Moved up */}
                    <div className="space-y-4 mb-8">
                      <Link
                        href="/kontakt"
                        className="inline-block bg-[#1cc18e] text-white px-8 py-3 rounded-full hover:bg-[#1cc18e]/90 transition-all duration-200 font-light text-lg hover:scale-105"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Book en samtale
                      </Link>
                      <Link
                        href="/ydelser"
                        className="inline-block ml-4 border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-all duration-200 font-light text-lg hover:scale-105"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Se ydelser
                      </Link>
                    </div>

                    {/* Stats - Compact version */}
                    <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                      <div className="text-center">
                        <div className="text-2xl font-light text-gray-800">20+</div>
                        <div className="text-sm text-gray-500">Års erfaring</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-light text-gray-800">500+</div>
                        <div className="text-sm text-gray-500">Hjulpne klienter</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavStandard;
