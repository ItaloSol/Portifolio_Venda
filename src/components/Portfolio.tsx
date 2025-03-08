import React from 'react';
import { LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

const clients = [
  {
    name: "E-commerce da Gráfica",
    description: "Aumento de 150% nas conversões após implementação da nova landing page de produtos",
    image: "./src/img/portifolio.jpg",
    roi: "+150% ROI"
  },
  {
    name: "Landing Page Clinica Dentaria",
    description: "Crescimento de 40% no aumento de clicks sobre a clinica",
    image: "./src/img/dentista.png",
    roi: "+180% ROI"
  },
  {
    name: "Landing Page Camping",
    description: "Cresimento de 50% na conversão de novos hospedes",
    image: "./src/img/camping.png",
    roi: "+200% ROI"
  }
];

export function Portfolio() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Landing Pages de Sucesso
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.img 
                src={client.image}
                alt={`Case study ${client.name}`}
                className="w-full h-48 object-cover"
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              />
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {client.name}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {client.description}
                </motion.p>
                <motion.div 
                  className="flex items-center gap-2 text-indigo-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <LineChart className="w-4 h-4" />
                  <span className="font-semibold">{client.roi}</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}