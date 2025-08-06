'use client'
import { LuHexagon } from "react-icons/lu";

// Footer content for easy editing
const footerContent = {
  tagline: "Hvor transformation møder tryghed",
  subtitle: "En rejse mod helbredelse og indre balance",
  contact: {
    name: "Susan Albertsen",
    phone: "25 39 25 39",
    email: "susanalbertsen69@gmail.com"
  },
  address: {
    clinic: "Essens-terapi",
    location: "ved Psykologerne på Skolebakken",
    street: "Skolebakken 7, st.th",
    city: "8000 Århus C"
  },
  copyright: "Susan Albertsen - Psykoterapi og Traumeforløsning"
};

const FooterElegant = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Øverste sektion - hexagon centreret */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
            <LuHexagon
              size={80}
              className="text-gray-700 rotate-[30deg] mb-6"
              strokeWidth={0.8}
              />
          <div className="mb-8">
            <h3 className="text-2xl font-light text-[#333333] tracking-wide mb-3">
              {footerContent.tagline}
            </h3>
            <p className="text-sm text-gray-500 italic tracking-wider max-w-sm mx-auto">
              {footerContent.subtitle}
            </p>
          </div>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Hovedindhold - tre kolonner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Kontakt */}
          <div className="space-y-4">
            <h4 className="text-xs font-light text-[#333333] tracking-wide uppercase mb-6">Kontakt</h4>
            <div className="space-y-3">
              <div className="text-gray-700 font-light text-lg">{footerContent.contact.name}</div>
              <div className="text-gray-600 text-sm">Telefon: {footerContent.contact.phone}</div>
              <div className="text-gray-600 text-sm">E-mail: {footerContent.contact.email}</div>
            </div>
          </div>

          {/* Adresse */}
          <div className="space-y-4">
            <h4 className="text-xs font-light text-[#333333] tracking-wide uppercase mb-6">Adresse</h4>
            <div className="space-y-3">
              <div className="text-gray-700 text-sm">{footerContent.address.clinic}</div>
              <div className="text-gray-600 text-sm">{footerContent.address.location}</div>
              <div className="text-gray-600 text-sm">{footerContent.address.street}</div>
              <div className="text-gray-600 text-sm">{footerContent.address.city}</div>
            </div>
          </div>

          {/* Social/ekstra */}
          <div className="space-y-4">
            <h4 className="text-xs font-light text-[#333333] tracking-wide uppercase mb-6">Behandling</h4>
            <div className="space-y-3 text-sm text-gray-600">
              <div>Psykoterapi</div>
              <div>Traumeforløsning</div>
              <div>Individuelle samtaler</div>
              <div>Essens-terapi</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="text-center text-xs text-gray-500 tracking-widest">
            © {new Date().getFullYear()} {footerContent.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}
 
export default FooterElegant;
