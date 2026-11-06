"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

// "Investigação Inversa": as perguntas que eu faria pessoalmente na sua loja,
// para o próprio visitante perceber onde pode estar perdendo vendas.
const blocks = [
  {
    question: "De onde vêm seus clientes novos hoje?",
    reflection:
      "Se a resposta é \"indicação e quem passa na frente\", sua empresa depende de sorte e de calçada. Quem mora a três bairros de distância e procura pelo que você vende simplesmente não sabe que você existe.",
  },
  {
    question: "Quando alguém pesquisa seu nome no Google, o que aparece?",
    reflection:
      "Até quem chega por indicação pesquisa antes de vir. Se não encontra nada, ou encontra informação desatualizada, a confiança cai antes mesmo do primeiro contato.",
  },
  {
    question: "Quantas vezes por dia sua equipe responde \"qual o preço?\", \"onde fica?\", \"abre sábado?\"",
    reflection:
      "Cada pergunta repetida é tempo de vendedor gasto com o que um site responderia sozinho, 24 horas por dia, inclusive com a loja fechada.",
  },
  {
    question: "Quantos clientes perguntaram no WhatsApp e sumiram?",
    reflection:
      "Muitas vezes ele não desistiu de comprar: só não encontrou o que precisava para decidir: fotos, modelos, condições, um motivo para escolher você. E foi comprar onde estava tudo mais claro.",
  },
  {
    question: "Se o cliente compara você e mais duas lojas pelo celular, por que ele escolheria a sua?",
    reflection:
      "Se seus diferenciais só aparecem quando ele já está dentro da loja, você está competindo apenas por preço com quem se apresenta melhor online.",
  },
  {
    question: "Quanto vale uma única venda para a sua empresa?",
    reflection:
      "Faça a conta: se uma ou duas vendas a mais pagam o site, cada mês sem ele é um mês em que essas vendas podem estar indo para outro lugar.",
  },
];

export function ReverseInvestigation() {
  const ctaLink = whatsappLink(
    "Olá, Ítalo! Respondi às perguntas do seu site e quero que você dê uma olhada na presença online da minha empresa."
  );

  return (
    <section id="diagnostico" className="relative py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="text-blue-400 font-semibold uppercase tracking-wider text-sm">Diagnóstico rápido</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Responda com sinceridade: sua empresa está deixando dinheiro na mesa?
          </h2>
          <p className="text-gray-300 text-lg">
            São as mesmas perguntas que eu faço quando visito um comércio. Leva um minuto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-colors"
            >
              <div className="text-blue-400 font-bold text-sm mb-2">Pergunta {index + 1}</div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">{block.question}</h3>
              <p className="text-gray-300 leading-relaxed">{block.reflection}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center space-y-3">
          <p className="text-lg text-gray-200">
            Se você hesitou em pelo menos duas respostas, vale uma conversa de 5 minutos.
          </p>
          <Link
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xl text-blue-400 hover:text-blue-300 transition-colors group font-semibold"
          >
            Quero que você analise a presença online da minha empresa
            <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
          <p className="text-sm text-gray-400">Sem compromisso. Se não fizer sentido para você, eu mesmo digo.</p>
        </div>
      </div>
    </section>
  );
}
