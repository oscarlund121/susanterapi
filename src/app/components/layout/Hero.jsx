"use client";

import Image from "next/image";
import StaticButton from "../ui/StaticButton.jsx";
import BulletList from "./BulletList.jsx";

const HeroElegantMinimal = () => (
  <section className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-sage-50 via-warm-beige-50 to-soft-peach-100">
    {/* Organic background shapes */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-sage-200/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -left-20 w-60 h-60 bg-soft-peach-200/40 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-sage-300/20 rounded-full blur-xl"></div>
    </div>

    {/* Content */}
    <div className="relative z-10 h-full">
      {/* Grid Layout - responsivt */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen lg:h-full">
        {/* Left side - Content */}
        <div className="lg:col-span-7 flex items-center order-2 lg:order-1 pb-8 lg:pb-20 md:pb-32 justify-center px-4 sm:px-6 md:px-12 lg:px-16 pt-8 lg:pt-20 md:pt-24">
            <div className="max-w-2xl w-full">
              {/* Warm welcome badge */}
              <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-sage-200/50 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-sage-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-text-secondary">Velkommen til et trygt rum</span>
              </div>

              <div className="mb-6 sm:mb-8 text-left flex flex-col items-start justify-top mt-2 sm:mt-4">
                <div className="mb-6 sm:mb-8">
                  <h1 className="text-text-primary leading-tight mb-4">
                    Find din indre ro
                    <span className="text-sage-600 block">med hjælp fra Susan</span>
                  </h1>
                  <div className="w-20 h-1 bg-gradient-to-r from-sage-500 to-sage-300 rounded-full mb-6"></div>
                </div>
                <p className="text-text-secondary max-w-2xl text-lg mb-8 leading-relaxed">
                  Som autoriseret psykoterapeut med over 20 års erfaring hjælper jeg børn, unge og familier 
                  med at finde balance og overvinde livets udfordringer. Mit mål er at skabe et trygt rum, 
                  hvor du kan vokse og udvikle dig.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col w-full sm:flex-row justify-start gap-3 sm:gap-4">
                  <StaticButton
                    href="/kontakt"
                    text="Book gratis samtale"
                    size="large"
                    variant="green"
                    direction="left"
                    iconDirection="right"
                    textColor="dark"
                  />
                  <button className="px-6 py-3 text-text-secondary bg-white/50 backdrop-blur-sm border border-sage-200/50 rounded-lg hover:bg-white/70 transition-all duration-300 font-medium text-base group">
                    <span className="flex items-center gap-2">
                      Læs om min tilgang
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-sage-200/30">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-sage-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-sage-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Autoriseret psykoterapeut</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-sage-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-sage-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>EMDR certificeret</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-sage-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-sage-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>20+ års erfaring</span>
                  </div>
                </div>
              </div>
            </div>
        </div>

        {/* Right side - Image - responsiv */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end order-1 lg:order-2 h-64 sm:h-80 lg:h-full">
            <div className="relative w-full h-full overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-sage-200/30 to-transparent z-10"></div>
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full z-20"></div>
              <div className="absolute bottom-8 left-6 w-24 h-24 bg-soft-peach-200/40 backdrop-blur-sm rounded-2xl z-20"></div>
              
              <Image
                src="/images/hand-on-chest.jpg"
                alt="Susan Albertsen - Psykoterapeut"
                fill
                className="object-cover object-[center_30%] rounded-3xl lg:rounded-l-3xl lg:rounded-r-none"
              />
              
              {/* Floating quote bubble */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 max-w-xs z-30 shadow-lg border border-sage-200/50">
                <p className="text-sm text-text-primary font-medium leading-relaxed">
                  "Mit mål er at skabe et trygt rum hvor du kan være dig selv"
                </p>
                <div className="mt-2 text-xs text-text-muted">- Susan Albertsen</div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroElegantMinimal;
