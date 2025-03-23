"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const plans = [
  
  {
    name: "Redesing",
    price: "R$ 430",
    features: [
      "Design responsivo mobile-first",
      "Elementos de urgência/escassez",
      "Formulários otimizados",
      "Animações e interatividades",
      "CTAs estrategicamente posicionados",
      "Carregamento otimizado",
      "1 revisão de conversão",
      "Suporte por 30 dias",
    ],
  },
  {
    name: "Básico",
    price: "R$ 897",
    features: [
      "Landing page otimizada",
      "Design responsivo",
      "3 revisões",
      "Suporte por 30 dias",
      "DNS incluso",
      "Elementos de social proof",
      "Seção de depoimentos",
      "Integração com redes sociais",
      "Analytics básico",
      "Otimização de velocidade",
    ],
  },
  {
    name: "Profissional",
    price: "R$ 1.480",
    features: [
      "Tudo do Básico +",
      "Copywriting avançado",
      "A/B Testing",
      "Suporte por 90 dias",
      "Integrações personalizadas",
      "DNS incluso",
      "Pop-ups inteligentes",
      "Análise de comportamento",
      "Otimização SEO avançada",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "Faça um orçamento",
    features: [
      "Tudo do Profissional +",
      "Consultoria estratégica",
      "Otimização mensal",
      "Suporte prioritário",
      "Relatórios avançados",
      "DNS incluso",
      "Chat ao vivo",
      "Integração com CRM",
      "Automação de marketing",
      "Testes multivariados",
      "Personalização dinâmica",
      "Segmentação avançada",
      "Remarketing integrado",
      "Dashboard personalizado",
    ],
  },
];

export function Pricing() {
  const getWhatsAppLink = (plan: string, price: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de contratar o plano ${plan} por ${price} para minha landing page.`);
    return `https://wa.me/5561993003980?text=${message}`;
  };

  return (
    <section 
      id="pricing" 
      className="relative py-20 bg-black/50"
      aria-labelledby="pricing-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="pricing-title" className="text-4xl font-bold mb-4">
            Valores de Landing Page
          </h2>
        </div>
        <div className="flex items-center gap-4 text-gray-400" role="note">
          <div className="h-px flex-1 bg-white/20" aria-hidden="true" />
          <span>Parcerias de ganho mutúo tendem a conseguir um preço menor que a tabela de preços fixos!</span>
          <div className="h-px flex-1 bg-white/20" aria-hidden="true" />
        </div>
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
          aria-label="Planos de preço disponíveis"
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              role="listitem"
              className={`p-6 rounded-xl flex flex-col h-full ${
                plan.highlighted
                  ? "bg-gradient-to-b from-blue-500/20 to-purple-500/20 border-2 border-blue-500/50"
                  : "bg-white/5"
              } backdrop-blur-sm`}
              aria-labelledby={`plan-${index}`}
            >
              <div className="flex-1">
                <h3 id={`plan-${index}`} className="text-xl font-semibold mb-2">
                  {plan.name}
                  {plan.highlighted && <span className="sr-only">(Plano recomendado)</span>}
                </h3>
                <div className="text-3xl font-bold text-blue-400 mb-6" aria-label={`Preço: ${plan.price}`}>
                  {plan.price}
                </div>
                <ul 
                  className="space-y-4 mb-8" 
                  aria-label={`Recursos inclusos no plano ${plan.name}`}
                >
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300">
                      <div 
                        className="h-1.5 w-1.5 rounded-full bg-blue-400" 
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link 
                href={getWhatsAppLink(plan.name, plan.price)} 
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Contratar plano ${plan.name} por ${plan.price}`}
              >
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-blue-500 to-purple-500"
                      : "bg-white/10 hover:bg-blue-800"
                  }`}
                >
                  {plan.highlighted ? "Quero Aumentar Minhas Vendas" : "Solicitar Proposta"}
                </Button>
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 mt-8" role="note">
          Hospedagem e domínio personalizado estão inclusos em todos os planos até o momento.
        </p>
      </div>
    </section>
  );
}