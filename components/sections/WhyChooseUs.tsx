"use client";

import { HoverEffect } from "../ui/card-hover-effect";

const whyChooseUs = [
  {
    title: "Conversão Comprovada",
    link: 'https://google99.com',
    value: "500%",
    description: "Taxa média de conversão 3x maior que páginas tradicionais",
  },
  {
    title: "Design Otimizado",
    link: 'https://google92.com',
    value: "99.9%",
    description: "Templates testados e aprovados por especialistas em UX",
  },
  {
    title: "Resultados Rápidos",
    link: 'https://google93.com',
    value: "72h",
    description: "Implementação em até 72 horas após aprovação",
  },
  {
    title: "Suporte Dedicado",
    link: 'https://google94.com',
    value: "24/7",
    description: "Acompanhamento contínuo e otimizações mensais",
  },
];

const items = whyChooseUs.map(item => ({
  title: item.title,
  description: item.description,
  value: item.value
}));

export function WhyChooseUs() {
  return (
    <section className="relative py-20 bg-black/50">
       <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={whyChooseUs} />
    </div>
    </section>
  );
}