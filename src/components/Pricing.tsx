import React from 'react';
import { CheckCircle2, Info } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

const plans = [
  {
    name: "Simples",
    price: "R$ 480",
    features: [
      "Landing page básica",
      "Design responsivo",
      "1 revisão",
      "Suporte por 15 dias",
      "DNS gratuito incluso"
    ]
  },
  {
    name: "Básico",
    price: "R$ 997",
    features: [
      "Landing page otimizada",
      "Design responsivo",
      "3 revisões",
      "Suporte por 30 dias",
      "DNS gratuito incluso"
    ]
  },
  {
    name: "Profissional",
    price: "R$ 1.997",
    features: [
      "Tudo do Básico +",
      "Copywriting avançado",
      "A/B Testing",
      "Suporte por 90 dias",
      "Integrações personalizadas",
      "DNS gratuito incluso"
    ]
  },
  {
    name: "Premium",
    price: "R$ 3.997",
    features: [
      "Tudo do Profissional +",
      "Consultoria estratégica",
      "Otimização mensal",
      "Suporte prioritário",
      "Relatórios avançados",
      "DNS gratuito incluso"
    ]
  }
];

export function Pricing() {
  const handlePlanClick = (planName: string, price: string) => {
    const message = `Olá! Tenho interesse no plano ${planName} por ${price}. Poderia me dar mais informações?`;
    openWhatsApp(message);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Valores de Landing Page
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`
              rounded-xl p-8 
              ${index === 2 ? 'bg-indigo-600 text-white' : 'bg-white border-2 border-gray-200'}
            `}>
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="text-3xl font-bold mb-8">{plan.price}</div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className={`w-5 h-5 ${index === 2 ? 'text-white' : 'text-indigo-600'}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => handlePlanClick(plan.name, plan.price)}
                className={`
                  w-full py-3 rounded-lg font-semibold
                  ${index === 2 
                    ? 'bg-white text-indigo-600 hover:bg-indigo-50' 
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'}
                  transition-colors
                `}
              >
                Começar Agora
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center text-gray-600 flex items-center justify-center gap-2">
          <Info className="w-4 h-4" />
          <p>
            Hospedagem e domínio personalizado são cobrados à parte. Oferecemos opção de DNS gratuito para todos os planos.
          </p>
        </div>
      </div>
    </section>
  );
}