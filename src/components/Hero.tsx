import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { openWhatsApp } from '../utils/whatsapp';

export function Hero() {
  const handleContact = () => {
    openWhatsApp("Olá! Gostaria de saber mais sobre seus serviços de Landing Page de Alta Conversão. Pode me ajudar?");
  };

  const titleWords = "Transforme Visitantes em Clientes com Landing Pages de Alta Conversão".split(" ");

  return (
    <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 flex flex-wrap">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  className="mr-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.p 
              className="text-xl mb-8 text-indigo-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Design moderno + copywriting persuasivo + estratégias comprovadas = Mais resultados para seu negócio
            </motion.p>
            <motion.button 
              onClick={handleContact}
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Solicite uma Proposta Gratuita
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
          <motion.div 
            className="relative aspect-video rounded-lg overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1200"
              alt="Landing page design example with analytics and metrics"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}