"use client";
import { HoverEffect } from "../ui/card-hover-effect";

// Somente números verificáveis. Quando tiver resultados medidos de clientes
// (ex.: "+40% de contatos no WhatsApp em 3 meses"), substitua aqui citando o cliente.
const statsItems = [
  { title: "Empresas atendidas", description: "Clínicas, escritórios, pousadas, indústria e comércio", value: "+9" },
  { title: "Anos de experiência", description: "Desenvolvendo sites e soluções digitais", value: "4" },
  { title: "Prazo médio de entrega", description: "Após a aprovação do conteúdo", value: "72h" },
  { title: "Feito para o celular", description: "Onde seu cliente pesquisa antes de comprar", value: "100%" },
  { title: "Mensalidade", description: "Você paga uma vez e o site é seu, com hospedagem inclusa", value: "R$ 0" },
  { title: "Para começar", description: "Do restante, você só paga na entrega", value: "30%" },
];

export function Stats() {
  return (
    <section id="benefits" className="relative py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Por que empresas confiam em mim</h2>
        <HoverEffect items={statsItems} className="grid-cols-2 md:grid-cols-3" />
      </div>
    </section>
  );
}
