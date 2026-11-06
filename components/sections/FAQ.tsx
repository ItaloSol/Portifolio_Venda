"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso entender de tecnologia para ter um site?",
    answer: "Não. Você me conta como funciona o seu negócio e me envia as fotos dos produtos. Eu escrevo os textos, monto o site, coloco no ar e te explico como divulgar. Você só aprova.",
  },
  {
    question: "Em quanto tempo meu site fica pronto?",
    answer: "O Site Essencial fica pronto, em média, em 72 horas após a aprovação do conteúdo. O Site Completo e os projetos sob medida têm prazo combinado antes de começar, de acordo com a quantidade de páginas e produtos.",
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Você paga 30% para iniciar e o restante só na entrega. Aceito PIX, débito ou cartão de crédito (o parcelamento segue as taxas da maquininha). Não existe mensalidade obrigatória.",
  },
  {
    question: "Já tenho Instagram. O site substitui?",
    answer: "Não substitui, complementa. O Instagram atrai pessoas e o site organiza seus produtos, diferenciais, endereço e contato em um endereço próprio, que aparece no Google e que você coloca na bio, no WhatsApp e nos materiais da loja.",
  },
  {
    question: "Meu site vai aparecer no Google?",
    answer: "O site é entregue com as configurações recomendadas para o Google: títulos, descrições, velocidade e versão para celular. Ninguém pode garantir honestamente o primeiro lugar, mas um site bem feito é a base para sua empresa ser encontrada. Também te oriento a conectar o site ao Perfil da Empresa no Google (Maps).",
  },
  {
    question: "Um site garante mais vendas?",
    answer: "Nenhum site sozinho garante vendas. Isso também depende de divulgação, oferta e atendimento. O que ele faz é transformar melhor quem já procura por você: o cliente encontra as informações, confia na empresa e chega ao seu WhatsApp pronto para comprar. Mais acima nesta página você pode calcular quantas vendas pagam o site.",
  },
  {
    question: "Qual plano é o certo para mim?",
    answer: "Se você quer divulgar um produto ou serviço principal, o Site Essencial resolve. Se quer apresentar a empresa inteira, com catálogo e diferenciais, o Site Completo é o mais indicado. Se quer vender pela internet com carrinho e pagamento, é um Projeto Sob Medida. Na dúvida, me chame no WhatsApp que eu te indico com sinceridade.",
  },
  {
    question: "Posso pedir alterações depois que o site estiver no ar?",
    answer: "Sim. Após a entrega há um período de revisões conforme o plano escolhido. Depois disso, atualizações podem ser feitas sob demanda, com valor combinado antes.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-gray-300">Tudo o que você precisa saber antes de ter o site da sua empresa.</p>
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