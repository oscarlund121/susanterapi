import Image from "next/image";

export default function OmMigCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Billede */}
      <div className="relative h-96 bg-gray-100 rounded-sm overflow-hidden">
        <Image
          src="/images/om-mig.png"
          alt="Susan Albertsen - Psykoterapeut"
          fill
          className="object-cover"
        />
      </div>

      {/* Tekst */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-light text-gray-800 mb-4">Susan Albertsen</h3>
          <p className="text-gray-600 leading-relaxed">
            Mit navn er Susan Albertsen og jeg er uddannet psykoterapeut hos
            Essentiel integrativ essens, psyke, krop og helbredsterapi (EIP), ved
            Karen Aaes (Essentielt institut i Århus).
          </p>
        </div>

        <div className="border-l-2 border-gray-200 pl-6">
          <h4 className="text-base font-light text-gray-800 mb-2">Erfaring</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Jeg har arbejdet i skoleverden i næsten 20 år og har derigennem stor indblik i 
            børn, unge og familier, og fået erfaring med de forskellige udfordringer der kan 
            opstå i disse sammenhænge og relationer.
          </p>
        </div>

        <div className="border-l-2 border-gray-200 pl-6">
          <h4 className="text-base font-light text-gray-800 mb-2">Uddannelse</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Essentielt institut er godkendt af og medlem af EAIP (European Association for 
            integrativ Psychotherapy) siden 2004. De metoder jeg bruger i terapien er 
            anerkendt både i Danmark og i udlandet.
          </p>
        </div>
      </div>
    </div>
  );
}
