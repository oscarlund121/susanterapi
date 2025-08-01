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

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-none">
        <div className="grid grid-cols-4">
          {/* Tom venstre side - 1/4 */}
          <div></div>
          
          {/* Footer indhold - 3/4 */}
          <div className="col-span-3 px-8 lg:pl-16 lg:pr-8 xl:pr-16 2xl:pr-20 py-20">
            
            {/* Header med hexagon og prædikat - centreret */}
            <div className="text-center mb-16">
              <div className="flex flex-col items-center space-y-6">
                <LuHexagon
                  size={70}
                  className="text-gray-800 rotate-[30deg]"
                  strokeWidth={1}
                />
                <div className="space-y-3">
                  <h3 className="text-3xl font-light text-gray-800 tracking-wide">
                    {footerContent.tagline}
                  </h3>
                  <p className="text-base font-light text-gray-500 tracking-wider italic max-w-md">
                    {footerContent.subtitle}
                  </p>
                </div>
                <div className="w-24 h-px bg-gray-300 mt-8"></div>
              </div>
            </div>

            {/* Kontakt og adresse - pænere grid */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                {/* Kontakt */}
                <div className="text-center lg:text-left">
                  <h4 className="text-xl font-light text-gray-800 tracking-wide mb-6">Kontakt</h4>
                  <div className="space-y-3 text-gray-600">
                    <div className="text-lg font-light">{footerContent.contact.name}</div>
                    <div className="text-base">Telefon: {footerContent.contact.phone}</div>
                    <div className="text-base">E-mail: {footerContent.contact.email}</div>
                  </div>
                </div>

                {/* Adresse */}
                <div className="text-center lg:text-right">
                  <h4 className="text-xl font-light text-gray-800 tracking-wide mb-6">Adresse</h4>
                  <div className="space-y-3 text-gray-600">
                    <div className="text-base">{footerContent.address.clinic}</div>
                    <div className="text-base">{footerContent.address.location}</div>
                    <div className="text-base">{footerContent.address.street}</div>
                    <div className="text-base">{footerContent.address.city}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright - mere luft */}
            <div className="mt-20 pt-8 border-t border-gray-200">
              <div className="text-center text-sm text-gray-500 tracking-wide">
                © {new Date().getFullYear()} {footerContent.copyright}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;