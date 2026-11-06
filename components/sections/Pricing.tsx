"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";
import { whatsappLink, formatBRL, PRECO_ESSENCIAL, PRECO_COMPLETO } from "@/lib/whatsapp";

// Escassez honesta: preencha SOMENTE com a sua agenda real (ex.: { mes: "dezembro", vagas: 2 }).
// Deixe null para não exibir nada.
const AGENDA: { mes: string; vagas: number } | null = null;

type Plan = {
  name: string;
  price: string;
  priceNote: string;
  idealFor: string;
  features: string[];
  cta: string;
  message: string;
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Site Essencial",
    price: formatBRL(PRECO_ESSENCIAL),
    priceNote: "pagamento único",
    idealFor: "Ideal para quem quer vender um produto ou serviço principal, com uma página feita só para ele.",
    features: [
      "Uma página completa focada no seu produto ou serviço",
      "Textos de venda escritos por mim, na linguagem do seu cliente",
      "Botão de WhatsApp com mensagem pronta",
      "Perfeito no celular, tablet e computador",
      "Endereço, horário e formas de contato",
      "Configuração básica para aparecer no Google",
      "Hospedagem inclusa",
    ],
    cta: "Quero começar pelo Essencial",
    message: `Olá, Ítalo! Tenho interesse no Site Essencial (${formatBRL(PRECO_ESSENCIAL)}). Pode me explicar como funciona?`,
  },
  {
    name: "Site Completo",
    price: formatBRL(PRECO_COMPLETO),
    priceNote: "pagamento único",
    idealFor: "Ideal para pequenas e médias empresas que querem mostrar tudo o que oferecem e passar confiança.",
    features: [
      "Tudo do Essencial, e mais:",
      "Site completo: quem somos, produtos/serviços, diferenciais, depoimentos e contato",
      "Catálogo organizado dos seus produtos ou serviços",
      "Visual com a identidade da sua marca",
      "Botões de WhatsApp em cada seção, com mensagem por assunto",
      "Formulário de contato e mapa de localização",
      "Google Analytics para saber quantas pessoas visitam o site",
      "Otimização para o Google (títulos, descrições e velocidade)",
      "Rodada de revisões após a entrega",
    ],
    cta: "Quero o site completo da minha empresa",
    message: `Olá, Ítalo! Quero o Site Completo (${formatBRL(PRECO_COMPLETO)}) para a minha empresa. Vamos conversar?`,
    highlighted: true,
  },
  {
    name: "Projeto Sob Medida",
    price: "Orçamento personalizado",
    priceNote: "calculado conforme o projeto",
    idealFor: "Para quem quer vender pela internet ou precisa de algo maior: loja virtual, e-commerce e sistemas.",
    features: [
      "Loja virtual com carrinho e pagamento online",
      "Cadastro de muitos produtos, categorias e estoque",
      "Integrações com sistemas, ERP ou plataformas",
      "Área do cliente, agendamentos ou funções específicas",
      "Painel para você mesmo atualizar o conteúdo",
      "Projeto planejado do zero para o seu negócio",
    ],
    cta: "Quero um orçamento sob medida",
    message: "Olá, Ítalo! Preciso de um projeto maior (loja virtual / e-commerce). Pode fazer um orçamento?",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 bg-black/50" aria-labelledby="pricing-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 id="pricing-title" className="text-3xl md:text-5xl font-bold mb-4">
            Quanto custa ter um site profissional?
          </h2>
          <p className="text-gray-300 text-lg">
            Preço claro, sem mensalidade escondida. Você paga uma vez e o site é da sua empresa.
          </p>
          {AGENDA && (
            <p className="mt-4 inline-block px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-200 text-sm">
              Agenda de {AGENDA.mes}: {AGENDA.vagas} {AGENDA.vagas === 1 ? "vaga disponível" : "vagas disponíveis"} para início de projeto
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch" role="list" aria-label="Planos disponíveis">
          {plans.map((plan, index) => (
            <div
              key={index}
              role="listitem"
              className={`relative p-6 md:p-8 rounded-2xl flex flex-col h-full backdrop-blur-sm ${
                plan.highlighted
                  ? "bg-gradient-to-b from-blue-500/20 to-purple-500/20 border-2 border-blue-500/60 lg:scale-105"
                  : "bg-white/5 border border-white/10"
              }`}
              aria-labelledby={`plan-${index}`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-xs font-bold uppercase tracking-wide">
                  Recomendado
                </span>
              )}
              <div className="flex-1">
                <h3 id={`plan-${index}`} className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{plan.idealFor}</p>
                <div className="text-3xl md:text-4xl font-bold text-blue-400">{plan.price}</div>
                <div className="text-sm text-gray-400 mb-6">{plan.priceNote}</div>
                <ul className="space-y-3 mb-8" aria-label={`O que está incluso no ${plan.name}`}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-200">
                      <Check className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href={whatsappLink(plan.message)} target="_blank" rel="noopener noreferrer">
                <Button
                  className={`w-full h-auto py-3 whitespace-normal ${
                    plan.highlighted ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-white/10 hover:bg-blue-800"
                  }`}
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 mt-10 text-sm" role="note">
          30% para iniciar e o restante na entrega | PIX, débito ou cartão de crédito (parcelamento sujeito às taxas da maquininha)
        </p>
      </div>
    </section>
  );
}
