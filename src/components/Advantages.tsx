import React from 'react';
import { Target, Lightbulb, BarChart3, LineChart, DollarSign, Smile } from 'lucide-react';
import { motion } from 'framer-motion';

const advantages = [
  {
    title: "Foco na Conversão",
    description: "Direcione visitantes para ações específicas como cadastros, vendas ou agendamentos",
    icon: <Target className="w-8 h-8" />,
    stat: "+300%",
    statLabel: "em conversões"
  },
  {
    title: "Clareza e Simplicidade",
    description: "Mensagem objetiva e focada que elimina distrações e destaca o valor do seu negócio",
    icon: <Lightbulb className="w-8 h-8" />,
    stat: "90%",
    statLabel: "retenção de atenção"
  },
  {
    title: "Otimização de Campanhas",
    description: "Integração perfeita com marketing digital e segmentação precisa de público",
    icon: <BarChart3 className="w-8 h-8" />,
    stat: "2x",
    statLabel: "ROI em campanhas"
  },
  {
    title: "Mensuração de Resultados",
    description: "Acompanhamento detalhado de métricas e ajuste contínuo de estratégias",
    icon: <LineChart className="w-8 h-8" />,
    stat: "100%",
    statLabel: "dados rastreáveis"
  },
  {
    title: "Custo-Benefício",
    description: "Desenvolvimento econômico e rápido para testar novos produtos ou serviços",
    icon: <DollarSign className="w-8 h-8" />,
    stat: "-40%",
    statLabel: "custo de aquisição"
  },
  {
    title: "Experiência do Usuário",
    description: "Navegação intuitiva que facilita a jornada e decisão do cliente",
    icon: <Smile className="w-8 h-8" />,
    stat: "95%",
    statLabel: "satisfação"
  }
];

export function Advantages() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que sua empresa precisa de uma Landing Page?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como uma landing page pode impulsionar seus resultados e transformar visitantes em clientes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold">{advantage.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                {advantage.description}
              </p>

              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-indigo-600">
                  {advantage.stat}
                </span>
                <span className="text-gray-500">
                  {advantage.statLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}