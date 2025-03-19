"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar uma proposta para uma landing page.");
  const whatsappLink = `https://wa.me/5561993003980?text=${whatsappMessage}`;

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden relative">
          <motion.div
            className="flex"
            animate={{
              x: isPaused ? 0 : ["0%", "-100%"],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 30,
            }}
          >
            {[...questions, ...questions].map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`}
                className="flex-shrink-0 w-[300px] md:w-[400px] mx-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm h-full">
                  <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
                    <img
                      src={item.image}
                      alt={item.question}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold leading-relaxed text-white">
                    {item.question}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href={whatsappLink}
            target="_blank"
            className="inline-flex items-center gap-2 text-xl text-blue-400 hover:text-blue-300 transition-colors group"
          >
            Vamos conversar sobre seu projeto
            <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
