import React from 'react';
import { LineChart, Palette, Rocket, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: "Conversão Comprovada",
    description: "Taxa média de conversão 3x maior que páginas tradicionais",
    icon: <LineChart className="w-12 h-12 text-indigo-600" />,
    stat: "300%"
  },
  {
    title: "Design Otimizado",
    description: "Templates testados e aprovados por especialistas em UX",
    icon: <Palette className="w-12 h-12 text-indigo-600" />,
    stat: "99.9%"
  },
  {
    title: "Resultados Rápidos",
    description: "Implementação em até 72 horas após aprovação",
    icon: <Rocket className="w-12 h-12 text-indigo-600" />,
    stat: "72h"
  },
  {
    title: "Suporte Dedicado",
    description: "Acompanhamento contínuo e otimizações mensais",
    icon: <MessageSquare className="w-12 h-12 text-indigo-600" />,
    stat: "24/7"
  }
];

export function Benefits() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Por que escolher nossas Landing Pages?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className="mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {benefit.icon}
              </motion.div>
              <motion.h3 
                className="text-2xl font-bold mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                {benefit.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600 mb-4"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {benefit.description}
              </motion.p>
              <motion.div 
                className="text-3xl font-bold text-indigo-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                {benefit.stat}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}