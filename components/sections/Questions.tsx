"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const questions = [
  {
    id: 1,
    question: "Você tem dificuldades em atrair novos clientes sem uma presença online?",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 2,
    question: "Como sua empresa se destaca no mercado se não possui uma vitrine digital?",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2676&auto=format&fit=crop"
  },
  {
    id: 3,
    question: "Você sabia que a maioria dos consumidores pesquisa online antes de fechar negócio?",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2674&auto=format&fit=crop"
  },
  {
    id: 4,
    question: "Já imaginou como um site profissional pode aumentar sua credibilidade e impulsionar suas vendas?",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2674&auto=format&fit=crop"
  },
  {
    id: 5,
    question: "Está pronto para transformar seu negócio e alcançar um público muito maior com um site personalizado?",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
  },
];

export function Questions() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-150%"]);
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar uma proposta para uma landing page.");
  const whatsappLink = `https://wa.me/5561993003980?text=${whatsappMessage}`;

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-64 pl-[50vw]">
          {questions.map((item) => (
            <div
              key={item.id}
              className="group relative h-[450px] w-[600px] overflow-hidden bg-white/5 backdrop-blur-sm rounded-lg flex-shrink-0"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.image} 
                  alt={item.question}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
              </div>
              <div className="relative z-10 h-full flex items-center p-8">
                <p className="text-3xl font-semibold leading-relaxed">{item.question}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
          <div className="group relative h-[450px] w-[600px] overflow-hidden bg-white/5 backdrop-blur-sm rounded-lg flex-shrink-0">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop" 
                alt="Call to action"
                className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
            </div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center gap-8 p-8">
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Venha construir sua landing page com a gente
              </p>
              <Link 
                href={whatsappLink} 
                target="_blank"
                className="group/arrow flex items-center gap-2 text-xl text-blue-400 hover:text-blue-300 transition-colors"
              >
                Solicitar agora
                <ArrowUpRight className="w-6 h-6 group-hover/arrow:translate-x-1 group-hover/arrow:-translate-y-1 transition-transform" />
              </Link>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}