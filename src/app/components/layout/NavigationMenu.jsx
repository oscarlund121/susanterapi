"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import StaticButton from "../ui/StaticButton";

const NavigationMenuComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-[#1cc18e] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <h6 className="text-white font-bold text-lg m-0" style={{ fontFamily: 'var(--font-archivo)' }}>S</h6>
              </div>
              <div className="flex flex-col">
                <h6 className="text-lg font-light text-gray-900 group-hover:text-[#1cc18e] transition-colors duration-300 m-0" style={{ fontFamily: 'var(--font-archivo)' }}>
                  Psykoterapi
                </h6>
                <h6 className="text-sm text-gray-600 font-light m-0" style={{ fontFamily: 'var(--font-archivo)' }}>
                  v. Susan Albertsen
                </h6>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex">
            <NavigationMenu className="justify-end">
              <NavigationMenuList className="gap-8">
            {/* Hjem */}
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                Hjem
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Om mig */}
            <NavigationMenuItem>
              <NavigationMenuLink href="/ommig" className={navigationMenuTriggerStyle()}>
                Om mig
              </NavigationMenuLink>
            </NavigationMenuItem>

        {/* Ydelser med dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Ydelser</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem
                href="/ydelser"
                title="Alle Ydelser"
                description="Se alle terapiformer og behandlinger jeg tilbyder"
              />
              <ListItem
                href="/ydelser#emdr"
                title="EMDR Terapi"
                description="Behandling af traumer og negative oplevelser gennem øjenbevægelser"
              />
              <ListItem
                href="/ydelser#mentalisering"
                title="Mentalisering"
                description="Forståelse af egne og andres følelser og tanker"
              />
              <ListItem
                href="/ydelser#essens"
                title="Essens Terapi"
                description="Holistisk behandling der arbejder med kroppens energisystem"
              />
              <ListItem
                href="/ydelser#chok"
                title="Chok & Traumeterapi"
                description="Specialiseret behandling af chok og traumatiske oplevelser"
              />
              <ListItem
                href="/ydelser#angst"
                title="Angst & Stress"
                description="Behandling af angst, stress og bekymringstanker"
              />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Problemområder dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Problemområder</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem
                href="/ydelser#angst"
                title="Angst & Panik"
                description="Behandling af angstanfald, social angst og generel angst"
              />
              <ListItem
                href="/ydelser#depression"
                title="Depression & Tristhed"
                description="Hjælp til depression, sorg og vedvarende tristhed"
              />
              <ListItem
                href="/ydelser#traumer"
                title="Traumer & PTSD"
                description="Specialiseret behandling af traumatiske oplevelser"
              />
              <ListItem
                href="/ydelser#stress"
                title="Stress & Udbrændthed"
                description="Behandling af stress, udbrændthed og overbelastning"
              />
              <ListItem
                href="/ydelser#selvvaerd"
                title="Selvværd & Selvtillid"
                description="Styrk dit selvværd og byg selvtillid op"
              />
              <ListItem
                href="/ydelser#forhold"
                title="Forhold & Kommunikation"
                description="Forbedring af relationer og kommunikation"
              />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Priser */}
        <NavigationMenuItem>
          <NavigationMenuLink href="/priser" className={navigationMenuTriggerStyle()}>
            Priser
          </NavigationMenuLink>
        </NavigationMenuItem>

            {/* Kontakt */}
            <div className="flex items-center">
              <StaticButton 
                href="/kontakt"
                text="Book Samtale"
                size="small"
                variant="green"
                direction="left"
                iconDirection="right"
                textColor="dark"
                className="ml-4"
              />
            </div>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="h-6 w-6 text-gray-700" />
            ) : (
              <HiMenuAlt3 className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" onClick={toggleMobileMenu}>
            <div 
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h6 className="text-lg font-light text-gray-900" style={{ fontFamily: 'var(--font-archivo)' }}>
                  Menu
                </h6>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <HiX className="h-5 w-5 text-gray-700" />
                </button>
              </div>

              {/* Mobile Menu Content */}
              <div className="p-6 space-y-6" style={{ fontFamily: 'var(--font-archivo)' }}>
                {/* Navigation Links */}
                <div className="space-y-4">
                  <Link
                    href="/"
                    onClick={toggleMobileMenu}
                    className="block text-lg font-light text-gray-900 hover:text-[#1cc18e] transition-colors duration-300"
                  >
                    Hjem
                  </Link>
                  <Link
                    href="/ommig"
                    onClick={toggleMobileMenu}
                    className="block text-lg font-light text-gray-900 hover:text-[#1cc18e] transition-colors duration-300"
                  >
                    Om mig
                  </Link>
                  <Link
                    href="/ydelser"
                    onClick={toggleMobileMenu}
                    className="block text-lg font-light text-gray-900 hover:text-[#1cc18e] transition-colors duration-300"
                  >
                    Ydelser
                  </Link>
                  <Link
                    href="/priser"
                    onClick={toggleMobileMenu}
                    className="block text-lg font-light text-gray-900 hover:text-[#1cc18e] transition-colors duration-300"
                  >
                    Priser
                  </Link>
                </div>

                {/* Mobile CTA */}
                <div className="pt-6 border-t border-gray-200">
                  <StaticButton 
                    href="/kontakt"
                    text="Book Samtale"
                    size="medium"
                    variant="green"
                    direction="right"
                    iconDirection="right"
                    textColor="dark"
                    className="w-full justify-center"
                  />
                </div>

                {/* Quick Links */}
                <div className="pt-6 border-t border-gray-200">
                  <h6 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
                    Hurtige Links
                  </h6>
                  <div className="space-y-3">
                    <Link
                      href="/ydelser#emdr"
                      onClick={toggleMobileMenu}
                      className="block text-sm text-gray-600 hover:text-[#1cc18e] transition-colors duration-300"
                    >
                      EMDR Terapi
                    </Link>
                    <Link
                      href="/ydelser#angst"
                      onClick={toggleMobileMenu}
                      className="block text-sm text-gray-600 hover:text-[#1cc18e] transition-colors duration-300"
                    >
                      Angst & Panik
                    </Link>
                    <Link
                      href="/ydelser#traumer"
                      onClick={toggleMobileMenu}
                      className="block text-sm text-gray-600 hover:text-[#1cc18e] transition-colors duration-300"
                    >
                      Traumer & PTSD
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};const ListItem = React.forwardRef(({ className, title, children, href, description, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavigationMenuComponent;
