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
    question: "Você está satisfeito com a taxa de conversão do seu site?",
    description: "Descubra se sua página atual está realmente transformando visitantes em clientes.",
    image: "questions/1.1.jpg",
    align: "left"
  },
  {
    id: 2,
    question: "Seu site atrai e engaja os visitantes de forma eficaz?",
    description: "Uma landing page otimizada pode prender a atenção do público e aumentar o engajamento.",
    image: "questions/2.1.jpg",
    align: "right"
  },
  {
    id: 3,
    question: "Você já percebeu que sua concorrência investe pesado em marketing digital?",
    description: "Destaque-se com um design moderno e copywriting persuasivo que converte.",
    image: "questions/3.1.jpg",
    align: "left"
  },
  {
    id: 4,
    question: "Você sabia que uma landing page bem construída pode aumentar suas conversões em até 300%?",
    description: "Imagine o impacto positivo que isso pode ter nos resultados do seu negócio.",
    image: "questions/4.1.jpg",
    align: "right"
  },
  {
    id: 5,
    question: "Seu site oferece uma experiência de usuário que incentiva ações imediatas?",
    description: "Uma landing page de alta performance pode transformar curiosos em clientes fiéis.",
    image: "questions/5.1.jpg",
    align: "left"
  },
  {
    id: 6,
    question: "Você está aproveitando ao máximo o potencial de SEO da sua página?",
    description: "Uma landing page otimizada para SEO pode aumentar sua visibilidade e atrair mais tráfego qualificado.",
    image: "questions/6.1.jpg",
    align: "right"
  }
];

export function ImmersiveQuestions() {
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

  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre como aumentar minhas conversões com uma landing page profissional.");
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
    touchEventOptions: { passive: false },
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
    <section ref={containerRef} className="relative py-40 bg-black overflow-hidden">
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
            {/* Swipe Hint */}
            {showSwipeHint && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-sm sm:px-1 mg:px-4 py-2 rounded-full"
              > 
                <MoveHorizontal className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-gray-300">Deslize para navegar</span>
              </motion.div>
            )}

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
              <div className="w-full max-w-4xl mx-auto">
                <div className="relative h-[500px] rounded-2xl overflow-hidden">
                  <Image 
                    src={`/${questions[currentIndex].image}`}
                    alt={questions[currentIndex].question}
                    fill
                    priority
                    className="absolute inset-0 object-cover brightness-50"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                  />
                  <div className="absolute inset-0 bg-black/70" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 md:p-12">
                    <div className="max-w-3xl">
                      <h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                        {questions[currentIndex].question}
                      </h3>
                      <p className="text-gray-200 text-lg md:text-xl">
                        {questions[currentIndex].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

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
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-400 scale-110' 
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          style={{ y }}
          className="mt-20 relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm p-8 md:p-12 text-center"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2670&auto=format&fit=crop"
              alt="Call to action"
              fill
              className="w-full h-full object-cover opacity-20"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
          </div>
          <div className="relative z-10 space-y-6 md:space-y-8">
            <h3 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Pronto para revolucionar suas conversões?
            </h3>
            <Link 
              href={whatsappLink} 
              target="_blank"
              className="inline-flex items-center gap-3 text-xl md:text-2xl text-blue-400 hover:text-blue-300 transition-colors group/arrow"
            >
              Começar agora
              <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 group-hover/arrow:translate-x-1 group-hover/arrow:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}