"use client";
import React from "react";
import Image from "next/image";
import Button from "../../ui/Button";

// ...existing code...

const HjaelpeMedTabs = () => {
  return (
    <section>
      <div className="w-full">
        {/* Header */}
        <div className="mb-40 w-full text-left pl-4">
          <h2 className="text-4xl lg:text-5xl font-light mb-6">
            Hvad kan jeg hjælpe med?
          </h2>
          <p className="text-lg italic font-light text-gray-500  mb-8 max-w-2xl">
            Kender du fornemmelsen af ikke at føle dig anerkendt som den du er,
            eller fastlåst i en situation? Jeg hjælper børn, unge og voksne med
            at komme videre.
          </p>
        </div>

        {/* Timeline/Flow */}
        <div className="relative w-full">
          <div className="flex flex-col gap-5 w-full items-center">
            {/* Kategorier med billeder til højre for hver */}
            <div className="space-y-16 w-full">
              {/* Følelser */}
              <div className="grid grid-cols-3 gap-10">
                <div className="col-span-2 gap-5 pl-0">
                  <h3 className="text-2xl pl-4 font-light mb-2  w-full">
                    Følelser
                  </h3>
                  <p className="pl-4 text-gray-500 italic mb-6 text-lg w-full">
                    Når følelser bliver overvældende eller svære at håndtere i
                    hverdagen
                  </p>
                  <ul className="flex flex-col w-full border-y divide-y ">
                    <li className="flex items-center justify-between w-full py-8 px-0 text-left">
                      <span className="pl-4 font-light text-md ">
                        Angst og fobier
                      </span>
                      <span className="w-6 h-6 rounded-full bg-gray-300 inline-block mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-8 px-0 text-left">
                      <span className="pl-4 font-light text-md">
                        Vrede og frustration
                      </span>
                      <span className="w-6 h-6 rounded-full bg-gray-300 inline-block mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-8 px-0 text-left">
                      <span className="pl-4 font-light text-md">
                        Tristhed/depression
                      </span>
                      <span className="w-6 h-6 rounded-full bg-gray-300 inline-block mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-8 px-0 text-left">
                      <span className="pl-4 font-light text-md">
                        Følelsesmæssig ustabilitet
                      </span>
                      <span className="w-6 h-6 rounded-full bg-gray-300 inline-block mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-8 px-0 text-left">
                      <span className="pl-4 font-light text-md">
                        Sorg og tab
                      </span>
                      <span className="w-6 h-6 rounded-full bg-gray-300 inline-block mr-2" />
                    </li>
                  </ul>
                </div>
                <div className="col-span-1">
                  <Image
                    src="/images/tree-touch.jpg"
                    alt="Om mig"
                    width={400}
                    height={500}
                    className="object-cover rounded-l-full md:border-t-40 md:border-b-40 md:border-l-40 border-t-10 border-b-10 border-l-10 border-gray-200 block"
                  />
                </div>
              </div>
              {/* Stress */}
              <div className="grid grid-cols-3 gap-10">
                <div className="col-span-2 gap-5 pl-0 ">
                  <h3 className="text-2xl font-light  mb-2  pl-4  w-full">
                    Stress
                  </h3>
                  <p className="text-gray-500 italic pl-4 mb-6 text-lg w-full">
                    Når kroppen og sindet er udmattet og har brug for hvile
                  </p>
                  <ul className="flex flex-col w-full border-y divide-y  ">
                    <li className="flex items-center justify-between w-full py-8 px-0 text-left">
                      <span className="pl-4 font-light text-md">
                        Stress og udbrændthed
                      </span>
                      <span className="w-6 h-6 rounded-full bg-gray-300 inline-block mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-8 px-0 text-left">
                      <span className="pl-4 font-light text-md">
                        Søvnproblemer
                      </span>
                      <span className="w-6 h-6 rounded-full bg-gray-300 inline-block mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-8 px-0 text-left">
                      <span className="pl-4 font-light text-md">
                        Tankemylder
                      </span>
                      <span className="w-6 h-6 rounded-full bg-gray-300 inline-block mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-8 px-0 text-left">
                      <span className="pl-4 font-light text-md">
                        Præstationsangst
                      </span>
                      <span className="w-6 h-6 rounded-full bg-gray-300 inline-block mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-8 px-0 text-left">
                      <span className="pl-4 font-light text-md">
                        Udmattelse
                      </span>
                      <span className="w-6 h-6 rounded-full bg-gray-300 inline-block mr-2" />
                    </li>
                  </ul>
                </div>
                <div className="col-span-1">
                  <Image
                    src="/images/purple-flower.jpg"
                    alt="Om mig"
                    width={400}
                    height={500}
                    className="object-cover rounded-l-full 
                    border-t-10 border-b-10 border-l-10 
                      md:border-t-40 md:border-b-40 md:border-l-40
                    border-gray-200 block"
                  />
                </div>
              </div>
              {/* Selvværd */}
              <div className="grid grid-cols-3 gap-10">
                <div className="col-span-2 gap-5 pl-0">
                  <h3 className="text-2xl font-light  mb-2  pl-4  w-full">
                    Selvværd
                  </h3>
                  <p className="text-gray-500 italic pl-4 mb-6 text-lg ">
                    Når du kæmper med at finde og acceptere dig selv som du er
                  </p>
                  <ul className="flex flex-col w-full border-y divide-y  ">
                    <li className="flex items-center justify-between w-full py-8 px-0 text-left">
                      <span className="pl-4 font-light   text-md">
                        Lavt selvværd
                      </span>
                      <span className="w-6 h-6 rounded-full bg-gray-300 inline-block mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-8 px-0 text-left">
                      <span className="pl-4 font-light   text-md">
                        Usikkerhed
                      </span>
                      <span className="w-6 h-6 rounded-full bg-gray-300 inline-block mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-8 px-0 text-left">
                      <span className="pl-4 font-light   text-md">
                        Fastlåsthed
                      </span>
                      <span className="w-6 h-6 rounded-full bg-gray-300 inline-block mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-8 px-0 text-left">
                      <span className="pl-4 font-light   text-md">
                        Sensitivitet
                      </span>
                      <span className="w-6 h-6 rounded-full bg-gray-300 inline-block mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-8 px-0 text-left">
                      <span className="pl-4 font-light   text-md">
                        Selvkritik
                      </span>
                      <span className="w-6 h-6 rounded-full bg-gray-300 inline-block mr-2" />
                    </li>
                  </ul>
                </div>
                <div className="col-span-1">
                  <div className="flex md:justify-center md:items-center md:h-full">
                    <Image
                      src="/images/susan-in-trees.jpg"
                      alt="Terapi-rum"
                      width={400}
                      height={500}
                      className="object-cover rounded-l-full border-t-10 border-b-10 border-l-10 
                      md:border-t-40 md:border-b-40 md:border-l-40 border-gray-800/50 block "
                    />
                  </div>
                </div>
              </div>
              {/* Relationer */}
              <div className="grid grid-cols-3 gap-10">
                <div className="col-span-2 gap-5 pl-0">
                  <h3 className="text-2xl font-light  mb-2  pl-4 w-full">
                    Relationer
                  </h3>
                  <p className="text-gray-500 pl-4 italic mb-6 text-lg w-full">
                    Når forbindelser til andre bliver vanskelige eller
                    smertefulde
                  </p>
                  <ul className="flex flex-col w-full border-y divide-y  ">
                    <li className="flex items-center justify-between w-full py-8 px-0 text-left">
                      <span className="pl-4 font-light   text-md">
                        Parforhold problemer
                      </span>
                      <span className="w-6 h-6 rounded-full bg-gray-300 inline-block mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-8 px-0 text-left">
                      <span className="pl-4 font-light   text-md">
                        Familiekonflikter
                      </span>
                      <span className="w-6 h-6 rounded-full bg-gray-300 inline-block mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-8 px-0 text-left">
                      <span className="pl-4 font-light   text-md">
                        Social angst
                      </span>
                      <span className="w-6 h-6 rounded-full bg-gray-300 inline-block mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-8 px-0 text-left">
                      <span className="pl-4 font-light   text-md">
                        Ensomhed
                      </span>
                      <span className="w-6 h-6 rounded-full bg-gray-300 inline-block mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-8 px-0 text-left">
                      <span className="pl-4 font-light   text-md">
                        Kommunikation
                      </span>
                      <span className="w-6 h-6 rounded-full bg-gray-300 inline-block mr-2" />
                    </li>
                  </ul>
                </div>
                <div className="col-span-1">
                  <Image
                    src="/images/sand.jpg"
                    alt="Om mig"
                    width={400}
                    height={500}
                    className="object-cover rounded-l-full md:border-t-40 md:border-b-40 md:border-l-40 border-t-10 border-b-10 border-l-10 border-gray-200 block"
                  />
                </div>  
              </div>
              {/* Traumer */}
              <div className="grid grid-cols-3 gap-10">
                <div className="col-span-2 gap-5 pl-0">
                  <h3 className="text-2xl font-light pl-4  mb-2   w-full">
                    Traumer
                  </h3>
                  <p className="text-gray-500 italic pl-4 mb-6 text-lg w-full">
                    Når tidligere oplevelser påvirker dit nuværende liv negativt
                  </p>
                  <ul className="flex flex-col w-full border-y divide-y  ">
                    <li className="flex items-center justify-between w-full py-8 px-0 text-left">
                      <span className="pl-4 font-light   text-md">Traumer</span>
                      <span className="w-6 h-6 rounded-full bg-gray-300 inline-block mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-8 px-0 text-left">
                      <span className="pl-4 font-light   text-md">ADHD</span>
                      <span className="w-6 h-6 rounded-full bg-gray-300 inline-block mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-8 px-0 text-left">
                      <span className="pl-4 font-light  text-md">
                        Chok og kriser
                      </span>
                      <span className="w-6 h-6 rounded-full bg-gray-300 inline-block mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-8 px-0 text-left">
                      <span className="pl-4 font-light   text-md">
                        Skolefravær
                      </span>
                      <span className="w-6 h-6 rounded-full bg-gray-300 inline-block mr-2" />
                    </li>
                    <li className="flex items-center justify-between w-full py-8 px-0 text-left">
                      <span className="pl-4 font-light   text-md">
                        Uforklarlige reaktioner
                      </span>
                      <span className="w-6 h-6 rounded-full bg-gray-300 inline-block mr-2" />
                    </li>
                  </ul>
                </div>
                <div className="col-span-1">
                  <Image
                    src="/images/sitting-closed.jpg"
                    alt="Om mig"
                    width={400}
                    height={500}
                    className="object-cover rounded-l-full md:border-t-40 md:border-b-40 md:border-l-40 border-t-10 border-b-10 border-l-10 border-gray-200 block "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-left mt-12 w-full">
          <p className="text-gray-500 pl-4  w-full mb-8 font-light">
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
