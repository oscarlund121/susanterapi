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

const FooterMinimal = () => {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-none">
        <div className="px-8 lg:px-16 xl:px-20 2xl:px-24 py-24">
          
          {/* Minimal central design */}
          <div className="max-w-5xl mx-auto">
            
            {/* Top section - side by side layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">
              
              {/* Branding - venstre */}
              <div className="lg:col-span-1 flex flex-col items-start space-y-6">
                <div className="flex items-center space-x-4">
                  <LuHexagon
                    size={40}
                    className="text-gray-700 rotate-[30deg]"
                    strokeWidth={1}
                  />
                  <div>
                    <div className="text-lg font-light text-[#333333] tracking-wide">Psykoterapi</div>
                    <div className="text-sm text-gray-500 tracking-wider">v. Susan Albertsen</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-lg font-light text-gray-700 leading-relaxed">
                    {footerContent.tagline}
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    {footerContent.subtitle}
                  </p>
                </div>
              </div>

              {/* Kontakt og adresse - højre side */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
                
                {/* Kontakt */}
                <div className="space-y-6">
                  <h4 className="text-sm uppercase tracking-widest text-gray-500 font-medium">Kontakt</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="text-lg text-[#333333] font-light">{footerContent.contact.name}</div>
                      <div className="text-sm text-gray-600 mt-1">Psykoterapeut</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-gray-700">
                        <span className="text-gray-500 text-sm">Telefon: </span>
                        {footerContent.contact.phone}
                      </div>
                      <div className="text-gray-700">
                        <span className="text-gray-500 text-sm">E-mail: </span>
                        {footerContent.contact.email}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Adresse */}
                <div className="space-y-6">
                  <h4 className="text-sm uppercase tracking-widest text-gray-500 font-medium">Klinik</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="text-lg text-[#333333] font-light">{footerContent.address.clinic}</div>
                      <div className="text-sm text-gray-600 mt-1">{footerContent.address.location}</div>
                    </div>
                    <div className="space-y-1 text-gray-700">
                      <div>{footerContent.address.street}</div>
                      <div>{footerContent.address.city}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom line */}
            <div className="mt-20 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-xs text-gray-500 tracking-wide">
                  © {new Date().getFullYear()} {footerContent.copyright}
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
 
export default FooterMinimal;
