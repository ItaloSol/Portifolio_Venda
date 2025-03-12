"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

const cases = [
  {
    title: "E-commerce da Gráfica",
    description: "Aumento de 150% nas conversões após implementação da nova landing page de produtos",
    link: 'https://www.grafex.eb.mil.br/portifolio/',
    roi: "+150% ROI",
    image: "/cases/portifolio_grafex.png",
  },
  {
    title: "Landing Page Clinica Dentaria",
    description: "Crescimento de 40% no aumento de clicks sobre a clinica",
    link: 'https://sorrirmais.netlify.app/',
    roi: "+180% ROI",
    image: "/cases/dentista.png",
  },
  {
    title: "Landing Page Camping",
    description: "Cresimento de 50% na conversão de novos hospedes",
    link: 'https://pousadabjnoprice.netlify.app/',
    roi: "+200% ROI",
    image: "/cases/camping.png",
  },
  {
    title: "Landing Page Chalé",
    description: "Cresimento de 55% na conversão de novos hospedes",
    link: 'https://pousadabvnoprice.netlify.app/',
    roi: "+200% ROI",
    image: "/cases/chales.png",
  },
];

export function Cases() {
  return (
    <section id="cases" className="relative py-24 overflow-hidden bg-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Landing Pages de Sucesso</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Conheça alguns dos nossos casos de sucesso e resultados alcançados</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cases.map((case_, index) => (
            <CardContainer key={index} className="py-8">
              <Link href={case_.link} target="_blank" rel="noopener noreferrer" className="block">
                <CardBody className="relative group/card h-full rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl overflow-hidden transition-all duration-500 hover:border-blue-500/50">
                  <CardItem translateZ={50} className="w-full">
                    <div className="relative h-52 w-full overflow-hidden">
                      <Image
                        src={case_.image}
                        alt={case_.title}
                        width={400}
                        height={208}
                        quality={75}
                        loading="lazy"
                        className="object-cover object-center rounded-t-xl group-hover/card:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                    </div>
                  </CardItem>
                  <div className="p-6">
                    <CardItem translateZ={50}>
                      <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">{case_.title}</h3>
                    </CardItem>
                    <CardItem translateZ={30}>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">{case_.description}</p>
                    </CardItem>
                    <CardItem translateZ={60}>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                        <span className="text-blue-400 font-semibold text-sm">{case_.roi}</span>
                      </div>
                    </CardItem>
                  </div>
                </CardBody>
              </Link>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}