"use client";
import { MessageCircle, PenLine, Smartphone, Rocket } from "lucide-react";

const workProcess = [
  {
    title: "1. Conversa",
    items: ["Entendo como seus clientes chegam até você", "O que eles mais perguntam", "O que diferencia sua empresa"],
    icon: MessageCircle,
  },
  {
    title: "2. Planejamento",
    items: ["Escrevo os textos de venda", "Organizo produtos e serviços", "Você aprova antes de eu construir"],
    icon: PenLine,
  },
  {
    title: "3. Construção",
    items: ["Site com a cara da sua marca", "Perfeito no celular", "WhatsApp em cada etapa"],
    icon: Smartphone,
  },
  {
    title: "4. No ar",
    items: ["Publico o site", "Configuro para o Google", "Ensino como divulgar no Instagram e WhatsApp"],
    icon: Rocket,
  },
];

export function WorkProcess() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simples para você: eu cuido de tudo</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Você não precisa entender de tecnologia. Precisa só conhecer o seu negócio. O resto fica comigo.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workProcess.map((process, index) => (
            <div key={index} className="p-6 rounded-xl bg-white/5 backdrop-blur-sm">
              <process.icon className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">{process.title}</h3>
              <ul className="space-y-2">
                {process.items.map((item, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
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
