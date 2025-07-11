export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="mb-20 lg:mb-24">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight tracking-wide mb-8">
            Kontakt
          </h1>
          <p className="text-xl font-light text-gray-600 max-w-2xl leading-relaxed">
            Jeg glæder mig til at høre fra dig. Tag det første skridt mod en positiv forandring.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Kontaktinformationer */}
          <div className="lg:col-span-5 space-y-16">
            <div>
              <h2 className="text-3xl font-light mb-12 text-gray-800">Kontakt mig</h2>
              
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-xl font-light text-gray-800">Telefon</h3>
                  <div className="text-2xl lg:text-3xl font-light text-gray-800">25 39 25 39</div>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Indtal gerne navn og telefonnummer hvis jeg ikke tager telefonen
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-light text-gray-800">E-mail</h3>
                  <div className="text-lg font-light text-gray-600">susanalbertsen69@gmail.com</div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-light text-gray-800">Adresse</h3>
                  <div className="text-gray-600 font-light leading-relaxed">
                    Essens-terapi<br />
                    ved Psykologerne på Skolebakken<br />
                    Skolebakken 7, st.th<br />
                    8000 Århus C
                  </div>
                </div>
              </div>
            </div>

            {/* Praktisk info */}
            <div>
              <h3 className="text-2xl font-light mb-8 text-gray-800">Praktisk information</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="text-lg font-light text-gray-800">Parkering</h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Parkér i gaderne omkring Skolebakken med parkerings-app, 
                    i parkeringshuset ved Navitas, Dokk1 eller Magasins parkeringshus.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-light text-gray-800">Faciliteter</h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                    I klinikken er der venteværelse og toilet til din rådighed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking sektion */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-light mb-12 text-gray-800">Book din session</h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-light mb-8 text-gray-800">Sådan booker du</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="text-lg font-light text-gray-800">01. Send en SMS eller e-mail</div>
                    <div className="text-gray-600 font-light">Til 25 39 25 39 eller susanalbertsen69@gmail.com</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-lg font-light text-gray-800">02. Beskriv dit ønske</div>
                    <div className="text-gray-600 font-light">Fortæl kort hvad du gerne vil tale om</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-lg font-light text-gray-800">03. Aftale tidspunkt</div>
                    <div className="text-gray-600 font-light">Vi finder et tidspunkt der passer dig</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-lg font-light text-gray-800">04. Første session</div>
                    <div className="text-gray-600 font-light">Varer ofte lidt længere end 1 time</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-light mb-6 text-gray-800">Før din første session</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-8">
                  Det er vigtigt for mig at du mærker efter, hvad du efterfølgende har brug for. 
                  Afhængig af det du ønsker at arbejde med, er min anbefaling at du har 2 til 10 sessioner i et forløb.
                </p>
              </div>

              <div className="space-y-4">
                <a 
                  href="tel:+4525392539" 
                  className="block w-full text-center bg-gray-800 text-white py-4 hover:bg-gray-900 transition-colors font-light"
                >
                  Ring nu: 25 39 25 39
                </a>
                <a 
                  href="mailto:susanalbertsen69@gmail.com" 
                  className="block w-full text-center border border-gray-800 text-gray-800 py-4 hover:bg-gray-800 hover:text-white transition-colors font-light"
                >
                  Send e-mail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
