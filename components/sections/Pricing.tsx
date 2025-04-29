"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const plans = [
  {
    name: "Pagina Simples",
    price: "R$489",
    features: [
      "Página única com scroll contínuo",
      "Headline direta e objetiva",
      "Imagem estática ou ilustração básica",
      "Um único CTA (botão de ação) acima da dobra",
      "Formulário mínimo (nome + e‑mail)",
      "Layout responsivo (adaptado ao mobile)",
      "Texto enxuto, sem seções extras",
      "Sem otimização SEO avançada",
      "Sem integrações (apenas direcionamento ao whatsapp)",
      "Carregamento rápido por ausência de scripts pesados",
    ],
  },
  {
    name: "Básico",
    price: "R$649",
    features: [
      "Multi‑seções: apresentação, benefícios, plano/preço, FAQ",
      "Design limpo com identidade visual da marca",
      "Formulário completo (nome, e‑mail, telefone)",
      "Botões de CTA repetidos ao longo da página",
      "Imagens otimizadas e de boa qualidade",
      "SEO on‑page: meta tags, títulos e descrições",
      "Google Analytics ou similar instalado",
      "Integração com WhatsApp ou chat simples",
      "Layout responsivo aprimorado (tablet + desktop)",
      "Velocidade de carregamento otimizada (compressão de imagens)",
    ],
  },
  {
    name: "Profissional",
    price: "R$ 1.489",
    features: [
      "Copywriting persuasivo em todas as seções",
      "Animações sutis e transições para engajamento",
      "Teste A/B de títulos ou CTAs",
      "Integrações com CRM (e‑mail marketing, automação)",
      "Chatbot ou atendimento em tempo real",
      "SEO técnico: schema markup, URLs amigáveis",
      "Prova social: depoimentos, selos de confiança",
      "Vídeo de apresentação ou background em loop",
      "Garantia e políticas claras (devolução, privacidade)",
      "Otimização contínua de performance e UX",
    ],
    highlighted: true,
  },
  {
    name: "Site e Landing page Premium",
    price: "De R$2.299 até R$3.897",
    features: [
      "Design exclusivo sob medida, sem templates",
      "Personalização dinâmica de conteúdo por visitante",
      "Multi‑idiomas e localização geográfica",
      "Análises avançadas (heatmaps, funil de conversão)",
      "Integração completa com plataformas de e‑commerce/ERP",
      "Chatbot inteligente e suporte 24/7",
      "CMS customizado para atualizações fáceis",
      "Vídeos interativos e backgrounds em alta resolução",
      "Certificações de segurança (SSL avançado, GDPR)",
      "Otimizações mensais e suporte prioritário 24/7",
    ],
  },
];

export function Pricing() {
  const getWhatsAppLink = (plan: string, price: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de contratar o plano ${plan} ${price} para minha landing page.`);
    return `https://wa.me/556199315616?text=${message}`;
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
          <span>Todos os planos recebem manutenção e revisão.</span>
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
                   aria-label="Aumentar vendas"
                >
                  {plan.highlighted ? "Quero Aumentar Minhas Vendas" : "Solicitar Proposta"}
                </Button>
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 mt-8" role="note">
          Hospedagem gratuita em todos os planos.
        </p>
      </div>
    </section>
  );
}