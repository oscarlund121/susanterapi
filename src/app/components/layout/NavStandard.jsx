"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const NavStandard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const mainMenuItems = [
    { name: "Hjem", href: "/" },
    { name: "Om mig", href: "/ommig" },
    { name: "Priser", href: "/priser" },
  ];

  const therapyItems = [
    { name: "EMDR Terapi", href: "/ydelser#emdr" },
    { name: "Mentalisering", href: "/ydelser#mentalisering" },
    { name: "Chok-forløsning", href: "/ydelser#chok" },
    { name: "Familieterapi", href: "/ydelser#familie" },
  ];

  return (
    <nav className="absolute top-0 right-0 z-50 p-6">
      {/* Menu button - All screen sizes */}
      <button
        onClick={toggleMenu}
        className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-white/20 hover:text-white hover:bg-[#1cc18e] transition-all duration-600 shadow-lg"
        aria-label="Toggle menu"
      >
        <HiMenuAlt3 className="h-5 w-5" />
        <span className="text-sm font-light">Menu</span>
      </button>

        {/* Mobile Navigation Overlay - All screen sizes */}
        {isMenuOpen && (
          <>
            {/* Background Overlay - Green tint with less opacity */}
            <div 
              className={`fixed inset-0 bg-[#fff100]/10 backdrop-blur-sm z-40 transition-opacity duration-600 ${
                isMenuOpen ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <div className="fixed inset-0 z-50">
              <div className="flex h-full justify-end">
                {/* Menu Panel - Cleaner design */}
                <div className="w-[100%] md:w-[70%] bg-white/95 backdrop-blur-md shadow-2xl animate-smooth-slide-in rounded-tl-[40px] rounded-bl-[40px] overflow-hidden">
                  
                  {/* Menu Header - Simplified */}
                  <div className="flex items-end justify-end py-4 border-b border-gray-100">
                  
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="w-10 h-10 rounded-full bg-white hover:bg-[#1cc18e] flex items-center px-6 py-6 justify-center transition duration-400"
                    >
                      <HiX className="h-6 w-6" />
                    </button>
                  </div>

                  {/* Menu Content - Redesigned */}
                  <div className="flex-1 p-8 overflow-y-auto">
                    
                    {/* Navigation Grid - Simplified */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                      
                      {/* Navigation Column 1 - Hovedmenu */}
                      <div className="space-y-4">
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
                          Hovedmenu
                        </h3>
                        <div className="space-y-3">
                          {mainMenuItems.map((item, index) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block text-gray-800 hover:text-[#1cc18e] transition-colors duration-200 text-lg font-light py-1"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Navigation Column 2 - Terapi */}
                      <div className="space-y-4">
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
                          Terapi
                        </h3>
                        <div className="space-y-3">
                          {therapyItems.map((item, index) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block text-gray-800 hover:text-[#1cc18e] transition-colors duration-200 text-lg font-light py-1"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Navigation Column 3 - Kontakt & Social */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
                            Kontakt
                          </h3>
                          <div className="space-y-4">
                            <Link
                              href="/kontakt"
                              className="block text-gray-800 hover:text-[#1cc18e] transition-colors duration-200 text-lg font-light py-1"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              Book tid
                            </Link>
                            <div className="text-gray-600">
                              <p className="text-sm text-gray-400 mb-1">Email</p>
                              <p className="text-base font-light">info@susanterapi.dk</p>
                            </div>
                            <div className="text-gray-600">
                              <p className="text-sm text-gray-400 mb-1">Telefon</p>
                              <p className="text-base font-light">+45 XX XX XX XX</p>
                            </div>
                          </div>
                        </div>

                        {/* Social Media */}
                        <div>
                          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
                            Følg med
                          </h3>
                          <div className="flex space-x-4">
                            <a
                              href="https://instagram.com/susanterapi"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-xl flex items-center justify-center text-white hover:scale-105 transition-transform duration-200"
                            >
                              <FaInstagram className="h-5 w-5" />
                            </a>
                            <a
                              href="https://facebook.com/susanterapi"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:scale-105 transition-transform duration-200"
                            >
                              <FaFacebookF className="h-5 w-5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Section - Simplified */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-100">
                      <Link
                        href="/kontakt"
                        className="inline-flex items-center justify-center bg-[#1cc18e] text-white px-8 py-4 rounded-2xl hover:bg-[#1cc18e]/90 transition-all duration-200 font-medium text-lg hover:scale-[1.02] shadow-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Book en samtale
                      </Link>
                      <Link
                        href="/ydelser"
                        className="inline-flex items-center justify-center border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 font-medium text-lg hover:scale-[1.02]"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Se terapi former
                      </Link>
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
