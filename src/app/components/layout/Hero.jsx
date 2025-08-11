"use client";

import Image from "next/image";
import Link from "next/link";
import StaticButton from "../ui/StaticButton.jsx";
import BulletList from "./BulletList.jsx";

// Optional: disable anim classes when user foretrækker mindre bevægelse
const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function HeroElegantMinimal() {
  return (
    <header
      className="relative w-full min-h-svh bg-white"
      aria-label="Indledende sektion med præsentation og book-knap"
    >
      <div className="container mx-auto h-full px-6 md:px-10 lg:px-16">
        <div className="grid h-full grid-cols-1 lg:grid-cols-2">
          {/* Venstre: indhold */}
          <div className="flex items-center py-12 lg:py-0">
            <div className="max-w-2xl">
              <div className={!prefersReducedMotion ? "animate-fade-in-up" : ""}>
                <h1 className="text-3xl md:text-4xl font-light text-neutral-800 tracking-tight">
                  Susan Albertsen
                </h1>

                <p className="mt-1 text-xl md:text-2xl font-light text-emerald-600">
                  Psykoterapi
                </p>

                <p className="mt-6 text-lg font-light text-neutral-800 leading-relaxed">
                  Jeg hjælper dig med at skabe ønsket forandring med:
                </p>

                <div className="mt-4">
                  <BulletList
                    items={[
                      "Mere glæde, frihed og lethed i livet",
                      "Særlig støtte til unge og studerende",
                      "Terapi for børn, familier og voksne",
                      "Chok-forløsning og EMDR behandling",
                    ]}
                  />
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <StaticButton
                    href="/kontakt"
                    text="Book en session"
                    size="large"
                    variant="green" // sørg for at denne har god kontrast (emerald-600/700)
                    direction="left"
                    iconDirection="right"
                    textColor="dark"
                    ariaLabel="Book en terapisession"
                  />
                  <Link
                    href="#om-mig"
                    className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-5 py-3 text-sm md:text-base font-medium text-neutral-800 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    Læs mere
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Højre: billede */}
          <div className="relative flex h-[40vh] min-h-[280px] items-center justify-center lg:h-auto lg:min-h-svh">
            <div
              className={`relative w-full h-full overflow-hidden ${
                !prefersReducedMotion ? "animate-fade-in-down" : ""
              }`}
            >
              <Image
                src="/images/hand-on-chest.jpg"
                alt="Susan Albertsen i naturen – ro og nærvær"
                fill
                priority
                quality={80}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[center_40%] [view-transition-name:hero-image]"
                // placeholder="blur"
                // blurDataURL="/images/hand-on-chest-blur.jpg"
              />
              {/* Valgfrit: subtil gradient for at sikre læsbarhed ved overlay-tekst i andre layouts */}
              {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/10 to-transparent" /> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
