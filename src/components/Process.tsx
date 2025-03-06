import React from 'react';
import { Users, Layout, Code2, Rocket, CheckCircle2 } from 'lucide-react';

const process = [
  {
    title: "Análise",
    description: ["Estudo do mercado", "Definição do público-alvo", "Análise da concorrência"],
    icon: <Users className="w-8 h-8" />
  },
  {
    title: "Estratégia",
    description: ["Planejamento de conteúdo", "Definição de KPIs", "Escolha de tecnologias"],
    icon: <Layout className="w-8 h-8" />
  },
  {
    title: "Desenvolvimento",
    description: ["Design responsivo", "Otimização SEO", "Testes A/B"],
    icon: <Code2 className="w-8 h-8" />
  },
  {
    title: "Lançamento",
    description: ["Publicação", "Monitoramento", "Ajustes finais"],
    icon: <Rocket className="w-8 h-8" />
  }
];

export function Process() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Como Trabalhamos
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <ul className="text-gray-600">
                  {step.description.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {index < process.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-indigo-100" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}