'use client'

import Image from "next/image";

const OmMig = () => {
  return (
   
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center lg:min-h-screen">

            <Image
              src="/images/hand-on-chest.jpg"
              alt="Susan Albertsen - Psykoterapeut"
              width={600}
              height={800}
              className="object-cover"
            />

          {/* Tekst til højre */}
          <div className="py-12 px-8 flex flex-col justify-center space-y-10">
            <div>
              <h1 className="text-6xl font-light text-gray-800">
                Om mig
              </h1>
            </div>

            <div className="py-4">
              <h2 className="text-4xl font-light text-gray-800 mb-2">Susan Albertsen</h2>
              <p className="text-base ">
                Mit navn er Susan Albertsen og jeg er uddannet psykoterapeut hos
                Essentiel integrativ essens, psyke, krop og helbredsterapi (EIP), ved
                Karen Aaes (Essentielt institut i Århus).
              </p>
            </div>

            <div className="py-4">
              <h2 className="text-4xl font-light text-gray-800 mb-2">Erfaring</h2>
              <p className="text-base ">
                Jeg har arbejdet i skoleverden i næsten 20 år og har derigennem stor indblik i 
                børn, unge og familier, og fået erfaring med de forskellige udfordringer der kan 
                opstå i disse sammenhænge og relationer.
              </p>
            </div>

            <div className="py-4">
              <h2 className="text-4xl font-light text-gray-800 mb-2">Uddannelse</h2>
              <p className="text-base ">
                Essentielt institut er godkendt af og medlem af EAIP (European Association for 
                integrativ Psychotherapy) siden 2004. De metoder jeg bruger i terapien er 
                anerkendt både i Danmark og i udlandet.
              </p>
            </div>
          </div>
        </div>
      </div>

  );
};
export default OmMig;
