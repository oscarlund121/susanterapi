"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import StaticButton from "../ui/StaticButton";

// Data arrays for dropdowns
const ydelserLinks = [
  { href: "/ydelser", title: "Alle Ydelser", description: "Se alle terapiformer og behandlinger jeg tilbyder" },
  { href: "/ydelser#emdr", title: "EMDR Terapi", description: "Behandling af traumer og negative oplevelser" },
  { href: "/ydelser#mentalisering", title: "Mentalisering", description: "Forståelse af følelser og tanker" },
  { href: "/ydelser#essens", title: "Essens Terapi", description: "Holistisk behandling med energiarbejde" },
  { href: "/ydelser#chok", title: "Chok & Traumeterapi", description: "Behandling af chok og traumer" },
  { href: "/ydelser#angst", title: "Angst & Stress", description: "Hjælp mod angst og bekymring" },
];

const problemerLinks = [
  { href: "/ydelser#angst", title: "Angst & Panik", description: "Behandling af social angst, panik og generaliseret angst" },
  { href: "/ydelser#depression", title: "Depression & Tristhed", description: "Hjælp til depression og sorg" },
  { href: "/ydelser#traumer", title: "Traumer & PTSD", description: "Behandling af traumatiske oplevelser" },
  { href: "/ydelser#stress", title: "Stress & Udbrændthed", description: "Forebyggelse og behandling af stress" },
  { href: "/ydelser#selvvaerd", title: "Selvværd & Selvtillid", description: "Opbygning af selvværd" },
  { href: "/ydelser#forhold", title: "Forhold & Kommunikation", description: "Forbedring af relationer" },
];

export default function NavigationMenuComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-1">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
           
            <div>
              <span className="block text-lg font-light text-gray-900 group-hover:text-emerald-600">Psykoterapi</span>
              <span className="block text-sm text-gray-600">v. Susan Albertsen</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList className="gap-6">
                <NavLink href="/" label="Hjem" />
                <NavLink href="/ommig" label="Om mig" />
                <Dropdown label="Ydelser" links={ydelserLinks} />
                <Dropdown label="Problemområder" links={problemerLinks} />
                <NavLink href="/priser" label="Priser" />
              </NavigationMenuList>
            </NavigationMenu>
            <StaticButton href="/kontakt" text="Book Samtale" size="small" variant="green" />
          </nav>

          {/* Mobile menu button */}
          <button onClick={toggleMobileMenu} className="lg:hidden p-2 rounded-lg hover:bg-gray-100">
            {isMobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-50" onClick={toggleMobileMenu}>
          <div className="absolute right-0 top-0 w-80 bg-white h-full shadow-xl p-6 space-y-6" onClick={(e) => e.stopPropagation()}>
            <MobileNavLink href="/" label="Hjem" onClick={toggleMobileMenu} />
            <MobileNavLink href="/ommig" label="Om mig" onClick={toggleMobileMenu} />
            <MobileNavLink href="/ydelser" label="Ydelser" onClick={toggleMobileMenu} />
            <MobileNavLink href="/priser" label="Priser" onClick={toggleMobileMenu} />
            <StaticButton href="/kontakt" text="Book Samtale" size="medium" variant="green" className="w-full" />
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, label }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink href={href} className="text-gray-700 hover:text-emerald-600 transition-colors">
        {label}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

function Dropdown({ label, links }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 w-[600px] md:grid-cols-2">
          {links.map((link) => (
            <li key={link.href}>
              <NavigationMenuLink asChild>
                <Link href={link.href} className="block rounded-md p-3 hover:bg-gray-50 transition">
                  <div className="font-medium text-sm">{link.title}</div>
                  <p className="text-sm text-gray-500">{link.description}</p>
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

function MobileNavLink({ href, label, onClick }) {
  return (
    <Link href={href} onClick={onClick} className="block text-lg text-gray-900 hover:text-emerald-600">
      {label}
    </Link>
  );
}
