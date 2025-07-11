'use client'

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-none">
        <div className="grid grid-cols-4">
          {/* Tom venstre side - 1/4 */}
          <div></div>
          
          {/* Footer indhold - 3/4 */}
          <div className="col-span-3 px-8 lg:pl-16 lg:pr-8 xl:pr-16 2xl:pr-20 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Kontakt */}
              <div className="space-y-4">
                <h3 className="text-lg font-light text-gray-800 tracking-wide">Kontakt</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>Susan Albertsen</div>
                  <div>Telefon: 25 39 25 39</div>
                  <div>E-mail: susanalbertsen69@gmail.com</div>
                </div>
              </div>

              {/* Adresse */}
              <div className="space-y-4">
                <h3 className="text-lg font-light text-gray-800 tracking-wide">Adresse</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>Essens-terapi</div>
                  <div>ved Psykologerne på Skolebakken</div>
                  <div>Skolebakken 7, st.th</div>
                  <div>8000 Århus C</div>
                </div>
              </div>

              {/* Navigation */}
              <div className="space-y-4">
                <h3 className="text-lg font-light text-gray-800 tracking-wide">Navigation</h3>
                <nav className="space-y-2 text-sm">
                  <a href="/" className="block text-gray-600 hover:text-gray-800 transition-colors">Forside</a>
                  <a href="/ommig" className="block text-gray-600 hover:text-gray-800 transition-colors">Om mig</a>
                  <a href="/ydelser" className="block text-gray-600 hover:text-gray-800 transition-colors">Ydelser</a>
                  <a href="/priser" className="block text-gray-600 hover:text-gray-800 transition-colors">Priser</a>
                  <a href="/kontakt" className="block text-gray-600 hover:text-gray-800 transition-colors">Kontakt</a>
                </nav>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Susan Albertsen - Psykoterapi og Traumeforløsning
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;