"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, MoveHorizontal } from "lucide-react";
import Link from "next/link";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const whatsappMessage = encodeURIComponent("Olá! Gostaria de conversar sobre como posso melhorar minha presença online.");
  const whatsappLink = `https://wa.me/5561993003980?text=${whatsappMessage}`;

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setShowSwipeHint(false);
    setCurrentIndex((prev) => {
      let nextIndex = prev + newDirection;
      if (nextIndex < 0) nextIndex = questions.length - 1;
      if (nextIndex >= questions.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => paginate(1),
    onSwipedRight: () => paginate(-1),
    delta: 10,
    trackMouse: true
  });

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section ref={containerRef} className="relative py-20 bg-black overflow-hidden">
      <motion.div
        style={{ opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="relative" {...handlers}>
          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-between w-full px-4">
            <button
              onClick={() => paginate(-1)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="overflow-hidden relative h-[500px]"
          >


            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full"
            >
              <div className="w-full max-w-3xl mx-auto">
                <div className="h-full rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
                  <div className="relative h-48 md:h-64">
                    <Image
                      src={questions[currentIndex].image}
                      alt={questions[currentIndex].question}
                      fill
                      className="w-full h-full object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                  </div>
                  <div className="p-6 md:p-8 space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {questions[currentIndex].question}
                    </h3>
                    <p className="text-gray-300 text-lg">
                      {/* Description field is not defined in questions array */}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Swipe Hint */}
          {showSwipeHint && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute top-2/1 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 p-2 rounded-full"
            >
              <MoveHorizontal className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-gray-300">Deslize para navegar</span>
            </motion.div>
          )}
          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const newDirection = index > currentIndex ? 1 : -1;
                  setDirection(newDirection);
                  setCurrentIndex(index);
                  setShowSwipeHint(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'bg-blue-400 scale-110'
                    : 'bg-white/20 hover:bg-white/40'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="mt-12 text-center"
          style={{ y }}
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
      </motion.div>
    </section>
  );
}
