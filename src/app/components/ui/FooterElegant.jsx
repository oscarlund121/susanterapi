"use client";
import { LuHexagon } from "react-icons/lu";

const FooterElegant = () => {
  return (
    <footer className="bg-white border-t border-gray-100">

        {/* Hovedindhold - tre kolonner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Kontakt */}
          <div className="space-y-4">
            <h4 className="text-xs font-light text-gray-800 uppercase mb-6">
              Kontakt
            </h4>
            <div className="space-y-3">
              <p className="text-gray-700 font-light text-lg">
                Susan Albertsen
              </p>
              <p className="text-gray-600 text-sm">
                Telefon:{" "}
                <a href="tel:+4525392539" className="hover:text-gray-800">
                  25 39 25 39
                </a>
              </p>
              <p className="text-gray-600 text-sm">
                E-mail:{" "}
                <a
                  href="mailto:susanalbertsen69@gmail.com"
                  className="hover:text-gray-800"
                >
                  susanalbertsen69@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Adresse */}
          <div className="space-y-4">
            <h4 className="text-xs font-light text-gray-800 uppercase mb-6">
              Adresse
            </h4>
            <address className="space-y-3 not-italic">
              <p className="text-gray-700 text-sm">Essens-terapi</p>
              <p className="text-gray-600 text-sm">
                ved Psykologerne på Skolebakken
              </p>
              <p className="text-gray-600 text-sm">Skolebakken 7, st.th</p>
              <p className="text-gray-600 text-sm">8000 Århus C</p>
            </address>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-light text-gray-800 uppercase mb-6">
              Behandling
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Psykoterapi</li>
              <li>Traumeforløsning</li>
              <li>Individuelle samtaler</li>
              <li>Essens-terapi</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-center text-xs text-gray-500">
            © 2025 Susan Albertsen - Psykoterapi og Traumeforløsning
          </p>
        </div>
    
    </footer>
  );
};

export default FooterElegant;
