"use client";
import { Compass, BrainCircuit, Code2, Rocket } from "lucide-react";

const workProcess = [
  {
    title: "Análise",
    items: ["Estudo do mercado", "Definição do público-alvo", "Análise da concorrência"],
    icon: Compass,
  },
  {
    title: "Estratégia",
    items: ["Planejamento de conteúdo", "Definição de KPIs", "Escolha de tecnologias"],
    icon: BrainCircuit,
  },
  {
    title: "Desenvolvimento",
    items: ["Design responsivo", "Otimização SEO", "Testes A/B"],
    icon: Code2,
  },
  {
    title: "Lançamento",
    items: ["Publicação", "Monitoramento", "Ajustes finais"],
    icon: Rocket,
  },
];

export function WorkProcess() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Como Trabalhamos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workProcess.map((process, index) => (
            <div key={index} className="p-6 rounded-xl bg-white/5 backdrop-blur-sm">
              <process.icon className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">{process.title}</h3>
              <ul className="space-y-2">
                {process.items.map((item, idx) => (
                  <li key={idx} className="text-gray-400 flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}