import React from 'react';
import { Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export function DeveloperCredits() {
  return (
    <section className="py-8 bg-gradient-to-b from-transparent to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src="./src/img/foto.jpg"
            alt="Ítalo Sol - Desenvolvedor Web"
            className="w-24 h-24 rounded-full object-cover shadow-lg mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          />
          <motion.h3 
            className="text-xl font-bold text-gray-800 mb-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Ítalo Sol
          </motion.h3>
          <motion.p 
            className="text-gray-600 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Desenvolvedor Web
          </motion.p>
          <motion.a
            href="https://www.linkedin.com/in/italo-sol/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Linkedin className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700">Conecte-se no LinkedIn</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}