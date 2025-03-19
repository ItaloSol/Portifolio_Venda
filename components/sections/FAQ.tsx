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
    answer: "Na fase de análise, conduzimos um estudo completo do mercado em que sua empresa atua. Identificamos quem é o seu público-alvo ideal, estudamos as estratégias da concorrência e coletamos informações essenciais para desenvolver uma estratégia personalizada que garanta resultados concretos.",
  },
  {
    question: "O que envolve a fase de Estratégia?",
    answer: "A fase de estratégia é dedicada ao planejamento meticuloso de cada etapa do projeto. Isso inclui a criação de um cronograma detalhado para conteúdo, a definição de métricas claras de sucesso (KPIs) e a escolha das tecnologias mais inovadoras para atender às necessidades específicas do seu projeto.",
  },
  {
    question: "Como funciona a fase de Pagamento?",
    answer: "Durante a fase de pagamento, solicitamos um adiantamento correspondente a 30% do valor total para dar início ao projeto. O restante é pago na entrega, com diversas opções de pagamento disponíveis, incluindo débito ou PIX à vista, ou parcelamento no cartão de crédito (sujeito a taxas da maquininha).",
  },
  {
    question: "Como é realizada a fase de Desenvolvimento?",
    answer: "Na fase de desenvolvimento, focamos em criar uma experiência única para os usuários. Desenvolvemos um design responsivo que se adapta perfeitamente a qualquer dispositivo, aplicamos as melhores práticas de SEO e realizamos testes A/B para garantir que sua landing page entregue o máximo desempenho e conversões.",
  },
  {
    question: "O que acontece na fase de Lançamento?",
    answer: "Ao chegarmos à fase de lançamento, publicamos sua landing page em ambiente ao vivo. Também iniciamos o monitoramento de métricas de desempenho e realizamos ajustes finais para garantir que tudo esteja perfeitamente otimizado desde o primeiro momento.",
  },
  {
    question: "O que é otimização para SEO?",
    answer: "SEO, ou otimização para mecanismos de busca, é o processo de melhorar sua página para que ela alcance posições mais altas nos resultados de busca. Isso envolve otimizar o conteúdo, melhorar a performance geral do site e utilizar palavras-chave estratégicas para atrair mais tráfego qualificado.",
  },
  {
    question: "Quanto tempo leva para criar uma landing page?",
    answer: "A criação de uma landing page geralmente leva em média 72 horas após a aprovação do projeto, mas o prazo pode variar dependendo do nível de personalização e da complexidade do design solicitado.",
  },
  {
    question: "As landing pages são otimizadas para SEO?",
    answer: "Sim, todas as landing pages que criamos seguem rigorosamente as melhores práticas de SEO. Nosso objetivo é garantir que seu site tenha visibilidade máxima nos mecanismos de busca, aumentando o tráfego e as conversões.",
  },
  {
    question: "Posso solicitar alterações após o lançamento?",
    answer: "Sem dúvida! Após o lançamento, oferecemos um período de suporte que inclui revisões e ajustes, conforme o plano escolhido. Isso garante que sua landing page esteja sempre alinhada com seus objetivos de negócio.",
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