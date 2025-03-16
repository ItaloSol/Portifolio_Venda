"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const questions = [
  {
    id: 1,
    question: "Você tem dificuldades em atrair novos clientes sem uma presença online?",
    image: "questions/1.avif"
  },
  {
    id: 2,
    question: "Como sua empresa se destaca no mercado se não possui uma vitrine digital?",
    image: "questions/2.avif"
  },
  {
    id: 3,
    question: "Você sabia que a maioria dos consumidores pesquisa online antes de fechar negócio?",
    image: "questions/3.avif"
  },
  {
    id: 4,
    question: "Já imaginou como um site profissional pode aumentar sua credibilidade e impulsionar suas vendas?",
    image: "questions/4.avif"
  },
  {
    id: 5,
    question: "Está pronto para transformar seu negócio e alcançar um público muito maior com um site personalizado?",
    image: "questions/5.avif"
  },
];


export function Questions() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const constraintsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-150%"]);
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar uma proposta para uma landing page.");
  const whatsappLink = `https://wa.me/5561993003980?text=${whatsappMessage}`;

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    const direction = info.offset.x > 0 ? -1 : 1;

    if (Math.abs(info.offset.x) > swipeThreshold) {
      let newIndex = currentIndex + direction;
      if (newIndex < 0) newIndex = questions.length - 1;
      if (newIndex >= questions.length) newIndex = 0;
      setCurrentIndex(newIndex);
    }
  };

  return (
    <section ref={targetRef} className="relative md:h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Mobile View */}
        <div className="md:hidden w-full h-full flex items-center">
          <div ref={constraintsRef} className="w-full h-[500px] overflow-hidden">
            <motion.div
              className="flex w-full h-full"
              drag="x"
              dragConstraints={{ left: -((questions.length) * window.innerWidth), right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.5 }}
            >

              {questions.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="w-full h-full flex-shrink-0 px-4"
                >
                  <div className="group relative h-full w-full overflow-hidden bg-white/5 backdrop-blur-sm rounded-lg">
                    <div className="absolute inset-0 z-0">
                      <img
                        src={item.image}
                        alt={item.question}
                        className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
                    </div>
                    <div className="relative z-10 h-full flex items-center p-6">
                      <p className="text-2xl font-semibold leading-relaxed">{item.question}</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              ))}
              <motion.div
                className="w-full h-full flex-shrink-0 px-4"
              >
                <div className="group relative h-full w-full overflow-hidden bg-white/5 backdrop-blur-sm rounded-lg">
                  <div className="absolute inset-0 z-0">
                    <img
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop"
                      alt="Call to action"
                      className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
                  </div>
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center gap-6 p-6">
                    <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
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
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
            {questions.map((_, index) => (
              <button
                type="button"
                title={`Go to slide ${index + 1}`}
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${currentIndex === index ? "bg-blue-400" : "bg-white/20"
                  }`}
              />
            ))}
            <button
              type="button"
              title="Go to call to action slide"
              onClick={() => setCurrentIndex(questions.length)}
              className={`w-2 h-2 rounded-full transition-colors ${currentIndex === questions.length ? "bg-blue-400" : "bg-white/20"
                }`}
            />
          </div>
        </div>

        {/* Desktop View */}
        <motion.div style={{ x }} className="hidden md:flex gap-64 pl-[50vw]">
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