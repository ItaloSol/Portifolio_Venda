"use client";
import { HoverEffect } from "../ui/card-hover-effect";

const statsItems = [
  { title: "Em conversões", description: "Aumento significativo nas taxas de conversão",link: 'https://google1.com', value: "+300%" },
  { title: "Retenção de atenção", description: "Alta taxa de engajamento com o conteúdo",link: 'https://google2.com', value: "90%" },
  { title: "ROI em campanhas", description: "Retorno sobre investimento duplicado",link: 'https://google3.com', value: "2x" },
  { title: "Dados rastreáveis", description: "Rastreamento completo de métricas",link: 'https://google4.com', value: "100%" },
  { title: "Custo de aquisição", description: "Redução significativa no CAC",link: 'https://google5.com', value: "-40%" },
  { title: "Satisfação", description: "Elevada taxa de satisfação dos clientes",link: 'https://google6.com', value: "95%" },
];

export function Stats() {
  return (
    <section className="relative py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HoverEffect items={statsItems} className="grid-cols-2 md:grid-cols-3" />
      </div>
    </section>
  );
}