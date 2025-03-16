"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const questions = [
  {
    id: 1,
    question: "Você está satisfeito com a taxa de conversão do seu site?",
    description: "Descubra se sua página atual está realmente transformando visitantes em clientes.",
    image: "/questions/1.avif",
    align: "left"
  },
  {
    id: 2,
    question: "Seu site atrai e engaja os visitantes de forma eficaz?",
    description: "Uma landing page otimizada pode prender a atenção do público e aumentar o engajamento.",
    image: "/questions/2.avif",
    align: "right"
  },
  {
    id: 3,
    question: "Você já percebeu que sua concorrência investe pesado em marketing digital?",
    description: "Destaque-se com um design moderno e copywriting persuasivo que converte.",
    image: "/questions/3.avif",
    align: "left"
  },
  {
    id: 4,
    question: "Você sabia que uma landing page bem construída pode aumentar suas conversões em até 300%?",
    description: "Imagine o impacto positivo que isso pode ter nos resultados do seu negócio.",
    image: "/questions/4.avif",
    align: "right"
  },
  {
    id: 5,
    question: "Seu site oferece uma experiência de usuário que incentiva ações imediatas?",
    description: "Uma landing page de alta performance pode transformar curiosos em clientes fiéis.",
    image: "/questions/5.avif",
    align: "left"
  }
];

export function ImmersiveQuestions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre como aumentar minhas conversões com uma landing page profissional.");
  const whatsappLink = `https://wa.me/5561993003980?text=${whatsappMessage}`;

  return (
    <section ref={containerRef} className="relative py-40 bg-black overflow-hidden">
      <motion.div 
        style={{ opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-40"
      >
        {questions.map((item) => (
          <motion.div
            key={item.id}
            style={{ y }}
            className={`flex items-center gap-12 ${
              item.align === "right" ? "flex-row-reverse" : ""
            }`}
          >
            <div className="w-1/2">
              <div className="group relative h-[400px] overflow-hidden rounded-xl">
                <img 
                  src={item.image} 
                  alt={item.question}
                  className="w-full h-full object-cover scale-110 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              </div>
            </div>
            <div className="w-1/2 space-y-6">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {item.question}
              </h3>
              <p className="text-xl text-gray-300">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}

        <motion.div
          style={{ y }}
          className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm p-12 text-center"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2670&auto=format&fit=crop" 
              alt="Call to action"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
          </div>
          <div className="relative z-10 space-y-8">
            <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Pronto para revolucionar suas conversões?
            </h3>
            <Link 
              href={whatsappLink} 
              target="_blank"
              className="inline-flex items-center gap-3 text-2xl text-blue-400 hover:text-blue-300 transition-colors group/arrow"
            >
              Começar agora
              <ArrowUpRight className="w-8 h-8 group-hover/arrow:translate-x-1 group-hover/arrow:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}