"use client";
import React from "react";
import Image from "next/image";
import Button from "../../ui/Button";

// ...existing code...

const HjaelpeMedTabs = () => {
  return (
    <section>
      <div className="w-full px-4 md:px-0">
        {/* Header */}
        <div className="mb-20 md:mb-40 w-full text-left md:pl-4">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light mb-6">
            Hvad kan jeg hjælpe med?
          </h2>
          <p className="text-base md:text-lg italic font-light text-gray-500 mb-8 max-w-2xl">
            Kender du fornemmelsen af ikke at føle dig anerkendt som den du er,
            eller fastlåst i en situation? Jeg hjælper børn, unge og voksne med
            at komme videre.
          </p>
        </div>

        {/* Timeline/Flow */}
        <div className="relative w-full">
          <div className="flex flex-col gap-5 w-full items-center">
            {/* Kategorier med billeder til højre for hver */}
            <div className="flex flex-cols">
              <h3 className="text-xl md:text-2xl pl-0 md:pl-4 font-light mb-2 w-full">
                Følelser
              </h3>
              <p className="pl-0 md:pl-4 text-gray-500 italic mb-6 text-base md:text-lg w-full">
                Når følelser bliver overvældende eller svære at håndtere i
                hverdagen
              </p>
            </div>
            <div className="space-y-12 md:space-y-16 w-full">
              {/* Følelser */}

              <div className="flex flex-col md:grid md:grid-cols-3  gap-8">
                <div className="order-2 md:order-1 md:col-span-2 gap-5 pl-0">
                  <ul className="flex flex-col w-full border-y divide-y">
                    <li className="flex items-center justify-between w-full py-6 md:py-8 px-0 text-left">
                      <span className="pl-0 md:pl-4 font-light text-sm md:text-md">
                        Angst og fobier
                      </span>
                      <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-300 inline-block mr-0 md:mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-6 md:py-8 px-0 text-left">
                      <span className="pl-0 md:pl-4 font-light text-sm md:text-md">
                        Vrede og frustration
                      </span>
                      <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-300 inline-block mr-0 md:mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-6 md:py-8 px-0 text-left">
                      <span className="pl-0 md:pl-4 font-light text-sm md:text-md">
                        Tristhed/depression
                      </span>
                      <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-300 inline-block mr-0 md:mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-6 md:py-8 px-0 text-left">
                      <span className="pl-0 md:pl-4 font-light text-sm md:text-md">
                        Følelsesmæssig ustabilitet
                      </span>
                      <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-300 inline-block mr-0 md:mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-6 md:py-8 px-0 text-left">
                      <span className="pl-0 md:pl-4 font-light text-sm md:text-md">
                        Sorg og tab
                      </span>
                      <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-300 inline-block mr-0 md:mr-2" />
                    </li>
                  </ul>
                </div>
                <div className="order-1 md:order-2 col-span-1 mb-4 md:mb-0">
                  <div className="flex md:justify-center md:items-center md:h-full">
                    <Image
                      src="/images/tree-touch.jpg"
                      alt="Om mig"
                      width={400}
                      height={500}
                      className="object-cover w-full h-100 md:h-auto block rounded-2xl md:rounded-l-full"
                    />
                  </div>
                </div>
              </div>
              {/* Stress */}
              <div className="flex flex-col md:grid md:grid-cols-3  gap-8">
                <div className="order-2 md:order-1 md:col-span-2 gap-5 pl-0">
                  <h3 className="text-xl md:text-2xl font-light mb-2 pl-0 md:pl-4 w-full">
                    Stress
                  </h3>
                  <p className="text-gray-500 italic pl-0 md:pl-4 mb-6 text-base md:text-lg w-full">
                    Når kroppen og sindet er udmattet og har brug for hvile
                  </p>
                  <ul className="flex flex-col w-full border-y divide-y">
                    <li className="flex items-center justify-between w-full py-6 md:py-8 px-0 text-left">
                      <span className="pl-0 md:pl-4 font-light text-sm md:text-md">
                        Stress og udbrændthed
                      </span>
                      <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-300 inline-block mr-0 md:mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-6 md:py-8 px-0 text-left">
                      <span className="pl-0 md:pl-4 font-light text-sm md:text-md">
                        Søvnproblemer
                      </span>
                      <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-300 inline-block mr-0 md:mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-6 md:py-8 px-0 text-left">
                      <span className="pl-0 md:pl-4 font-light text-sm md:text-md">
                        Tankemylder
                      </span>
                      <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-300 inline-block mr-0 md:mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-6 md:py-8 px-0 text-left">
                      <span className="pl-0 md:pl-4 font-light text-sm md:text-md">
                        Præstationsangst
                      </span>
                      <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-300 inline-block mr-0 md:mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-6 md:py-8 px-0 text-left">
                      <span className="pl-0 md:pl-4 font-light text-sm md:text-md">
                        Udmattelse
                      </span>
                      <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-300 inline-block mr-0 md:mr-2" />
                    </li>
                  </ul>
                </div>
                <div className="order-1 md:order-2 col-span-1 mb-4 md:mb-0">
                  <div className="flex md:justify-center md:items-center md:h-full">
                    <Image
                      src="/images/purple-flower.jpg"
                      alt="Om mig"
                      width={400}
                      height={500}
                      className="object-cover w-full h-100 md:h-auto block rounded-2xl md:rounded-l-full"
                    />
                  </div>
                </div>
              </div>
              {/* Selvværd */}
              <div className="flex flex-col md:grid md:grid-cols-3 gap-8">
                <div className="order-2 md:order-1 md:col-span-2 gap-5 pl-0">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 pl-0 md:pl-4 w-full">
                    Selvværd
                  </h3>
                  <p className="text-gray-500 italic pl-0 md:pl-4 mb-6 text-base md:text-lg">
                    Når du kæmper med at finde og acceptere dig selv som du er
                  </p>
                  <ul className="flex flex-col w-full border-y divide-y">
                    <li className="flex items-center justify-between w-full py-6 md:py-8 px-0 text-left">
                      <span className="pl-0 md:pl-4 font-light text-sm md:text-md">
                        Lavt selvværd
                      </span>
                      <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-300 inline-block mr-0 md:mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-6 md:py-8 px-0 text-left">
                      <span className="pl-0 md:pl-4 font-light text-sm md:text-md">
                        Usikkerhed
                      </span>
                      <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-300 inline-block mr-0 md:mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-6 md:py-8 px-0 text-left">
                      <span className="pl-0 md:pl-4 font-light text-sm md:text-md">
                        Fastlåsthed
                      </span>
                      <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-300 inline-block mr-0 md:mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-6 md:py-8 px-0 text-left">
                      <span className="pl-0 md:pl-4 font-light text-sm md:text-md">
                        Sensitivitet
                      </span>
                      <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-300 inline-block mr-0 md:mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-6 md:py-8 px-0 text-left">
                      <span className="pl-0 md:pl-4 font-light text-sm md:text-md">
                        Selvkritik
                      </span>
                      <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-300 inline-block mr-0 md:mr-2" />
                    </li>
                  </ul>
                </div>
                <div className="order-1 md:order-2 col-span-1 mb-4 md:mb-0">
                  <div className="flex md:justify-center md:items-center md:h-full">
                    <Image
                      src="/images/susan-in-trees.jpg"
                      alt="Terapi-rum"
                      width={400}
                      height={500}
                      className="object-cover w-full h-100 md:h-auto block rounded-2xl md:rounded-l-full"
                    />
                  </div>
                </div>
              </div>
              {/* Relationer */}
              <div className="flex flex-col md:grid md:grid-cols-3  gap-8">
                <div className="order-2 md:order-1 md:col-span-2 gap-5 pl-0">
                  <h3 className="text-xl md:text-2xl font-light mb-2 pl-0 md:pl-4 w-full">
                    Relationer
                  </h3>
                  <p className="text-gray-500 pl-0 md:pl-4 italic mb-6 text-base md:text-lg w-full">
                    Når forbindelser til andre bliver vanskelige eller
                    smertefulde
                  </p>
                  <ul className="flex flex-col w-full border-y divide-y">
                    <li className="flex items-center justify-between w-full py-6 md:py-8 px-0 text-left">
                      <span className="pl-0 md:pl-4 font-light text-sm md:text-md">
                        Parforhold problemer
                      </span>
                      <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-300 inline-block mr-0 md:mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-6 md:py-8 px-0 text-left">
                      <span className="pl-0 md:pl-4 font-light text-sm md:text-md">
                        Familiekonflikter
                      </span>
                      <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-300 inline-block mr-0 md:mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-6 md:py-8 px-0 text-left">
                      <span className="pl-0 md:pl-4 font-light text-sm md:text-md">
                        Social angst
                      </span>
                      <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-300 inline-block mr-0 md:mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-6 md:py-8 px-0 text-left">
                      <span className="pl-0 md:pl-4 font-light text-sm md:text-md">
                        Ensomhed
                      </span>
                      <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-300 inline-block mr-0 md:mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-6 md:py-8 px-0 text-left">
                      <span className="pl-0 md:pl-4 font-light text-sm md:text-md">
                        Kommunikation
                      </span>
                      <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-300 inline-block mr-0 md:mr-2" />
                    </li>
                  </ul>
                </div>
                <div className="order-1 md:order-2 col-span-1 mb-4 md:mb-0">
                  <div className="flex md:justify-center md:items-center md:h-full">
                    <Image
                      src="/images/sand.jpg"
                      alt="Om mig"
                      width={400}
                      height={500}
                      className="object-cover w-full h-100 md:h-auto block rounded-2xl md:rounded-l-full"
                    />
                  </div>
                </div>
              </div>
              {/* Traumer */}
              <div className="flex flex-col md:grid md:grid-cols-3  gap-8">
                <div className="order-2 md:order-1 md:col-span-2 gap-5 pl-0">
                  <h3 className="text-xl md:text-2xl font-light pl-0 md:pl-4 mb-2 w-full">
                    Traumer
                  </h3>
                  <p className="text-gray-500 italic pl-0 md:pl-4 mb-6 text-base md:text-lg w-full">
                    Når tidligere oplevelser påvirker dit nuværende liv negativt
                  </p>
                  <ul className="flex flex-col w-full border-y divide-y">
                    <li className="flex items-center justify-between w-full py-6 md:py-8 px-0 text-left">
                      <span className="pl-0 md:pl-4 font-light text-sm md:text-md">
                        Traumer
                      </span>
                      <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-300 inline-block mr-0 md:mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-6 md:py-8 px-0 text-left">
                      <span className="pl-0 md:pl-4 font-light text-sm md:text-md">
                        ADHD
                      </span>
                      <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-300 inline-block mr-0 md:mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-6 md:py-8 px-0 text-left">
                      <span className="pl-0 md:pl-4 font-light text-sm md:text-md">
                        Chok og kriser
                      </span>
                      <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-300 inline-block mr-0 md:mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-6 md:py-8 px-0 text-left">
                      <span className="pl-0 md:pl-4 font-light text-sm md:text-md">
                        Skolefravær
                      </span>
                      <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-300 inline-block mr-0 md:mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-6 md:py-8 px-0 text-left">
                      <span className="pl-0 md:pl-4 font-light text-sm md:text-md">
                        Uforklarlige reaktioner
                      </span>
                      <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-300 inline-block mr-0 md:mr-2" />
                    </li>
                  </ul>
                </div>
                <div className="order-1 md:order-2 col-span-1 mb-4 md:mb-0">
                  <div className="flex md:justify-center md:items-center md:h-full">
                    <Image
                      src="/images/sitting-closed.jpg"
                      alt="Om mig"
                      width={400}
                      height={500}
                      className="object-cover w-full h-100 md:h-auto block rounded-2xl md:rounded-l-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-left mt-12 w-full">
          <p className="text-gray-500 pl-0 md:pl-4 w-full mb-8 font-light text-sm md:text-base">
            En terapisession hos mig er en samtale, hvor vi sammen finder frem
            til det du ønsker at arbejde med.
          </p>
          <Button href="/kontakt">Book session</Button>
        </div>
      </div>
    </section>
  );
};

export default HjaelpeMedTabs;
