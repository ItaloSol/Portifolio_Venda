"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a fase de Análise?",
    answer: "Na fase de análise, realizamos um estudo aprofundado do seu mercado, identificamos seu público-alvo ideal e analisamos a concorrência para criar uma estratégia efetiva.",
  },
  {
    question: "O que envolve a fase de Estratégia?",
    answer: "A fase de estratégia inclui o planejamento detalhado do conteúdo, definição de métricas de sucesso (KPIs) e seleção das tecnologias mais adequadas para seu projeto.",
  },
  {
    question: "Como é realizada a fase de Desenvolvimento?",
    answer: "Durante o desenvolvimento, criamos um design responsivo, implementamos práticas de SEO e realizamos testes A/B para garantir a melhor performance.",
  },
  {
    question: "O que acontece na fase de Lançamento?",
    answer: "No lançamento, publicamos sua landing page, iniciamos o monitoramento de métricas e realizamos ajustes finais para otimizar o desempenho.",
  },
  {
    question: "O que é otimização para SEO?",
    answer: "A otimização para SEO inclui técnicas para melhorar o posicionamento da sua página nos resultados de busca, incluindo otimização de conteúdo e performance.",
  },
  {
    question: "Quanto tempo leva para criar uma landing page?",
    answer: "O tempo médio é de 72 horas após a aprovação do projeto, podendo variar de acordo com a complexidade e personalizações necessárias.",
  },
  {
    question: "As landing pages são otimizadas para SEO?",
    answer: "Sim, todas as nossas landing pages são desenvolvidas seguindo as melhores práticas de SEO para garantir boa visibilidade nos mecanismos de busca.",
  },
  {
    question: "Posso solicitar alterações após o lançamento?",
    answer: "Sim, oferecemos período de suporte e revisões conforme o plano escolhido, permitindo ajustes e otimizações após o lançamento.",
  },
];

export function FAQ() {
  return (
    <section className="relative py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Perguntas Frequentes</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="bg-white/5 rounded-xl overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white/10">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}