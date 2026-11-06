"use client";
import { useState } from "react";
import Link from "next/link";
import { Instagram, Store, Users, Clock, Wallet, Search } from "lucide-react";
import { whatsappLink, formatBRL, PRECO_ESSENCIAL, PRECO_COMPLETO } from "@/lib/whatsapp";

const objections = [
  {
    icon: Instagram,
    title: "\"Já tenho Instagram, não preciso de site.\"",
    answer:
      "Continue com o Instagram, ele é ótimo para ser visto. Mas lá seu cliente precisa rolar dezenas de posts para achar um produto, um preço ou o endereço. No site, tudo está organizado e é seu: não depende de algoritmo, não some se a conta for bloqueada e aparece quando alguém pesquisa no Google. O ideal é o Instagram levar para o site, e o site levar para o seu WhatsApp.",
  },
  {
    icon: Store,
    title: "\"Meu negócio é 100% físico.\"",
    answer:
      "E pode continuar sendo. O site não precisa vender pela internet: ele faz a pessoa conhecer seus produtos, ver que a loja é séria, conferir endereço e horário e sair de casa decidida a visitar você.",
  },
  {
    icon: Users,
    title: "\"Meus clientes vêm por indicação.\"",
    answer:
      "Indicação é um ótimo canal, e o site deixa ela mais forte. Quem recebe a indicação pesquisa seu nome antes de vir. Encontrar um site profissional confirma a recomendação; não encontrar nada gera dúvida.",
  },
  {
    icon: Clock,
    title: "\"Não tenho tempo para cuidar de site.\"",
    answer:
      "Você não precisa. Eu escrevo os textos, organizo as informações e coloco tudo no ar. De você, só preciso de uma conversa sobre o negócio e das fotos dos produtos. Depois de pronto, o site trabalha sozinho.",
  },
  {
    icon: Search,
    title: "\"Site não traz cliente.\"",
    answer:
      "Sozinho, nenhum site faz milagre, e eu não vou te prometer isso. O que ele faz é converter melhor quem já te procura: quem vem do Instagram, do Google, de uma indicação ou de um panfleto encontra um motivo claro para chamar você, e não o concorrente.",
  },
];

export function Objections() {
  const [ticket, setTicket] = useState<string>("");
  const ticketValue = Number(ticket.replace(/\D/g, ""));
  const salesEssencial = ticketValue > 0 ? Math.ceil(PRECO_ESSENCIAL / ticketValue) : null;
  const salesCompleto = ticketValue > 0 ? Math.ceil(PRECO_COMPLETO / ticketValue) : null;

  const ctaLink = whatsappLink(
    "Olá, Ítalo! Fiz a conta no seu site e quero entender qual site profissional faz sentido para a minha empresa."
  );

  return (
    <section id="objecoes" className="relative py-20 bg-black/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">&quot;Mas eu realmente preciso de um site?&quot;</h2>
          <p className="text-gray-300 text-lg">As dúvidas que eu mais escuto de donos de empresa, com respostas diretas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {objections.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-white/5 border border-white/10 ${index === 0 ? "md:col-span-2" : ""}`}
            >
              <item.icon className="h-8 w-8 text-blue-400 mb-3" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.answer}</p>
            </div>
          ))}

          {/* "Está caro?": responde com uma conta, não com uma promessa */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-blue-500/20 to-purple-500/20 border-2 border-blue-500/40 md:col-span-2">
            <Wallet className="h-8 w-8 text-blue-400 mb-3" aria-hidden="true" />
            <h3 className="text-xl font-semibold mb-2">&quot;Está caro.&quot; Vamos fazer a conta juntos?</h3>
            <p className="text-gray-300 mb-4">
              Quanto sua empresa lucra, em média, com uma venda? Digite o valor e veja quantas vendas a mais pagam o seu site.
            </p>
            <label htmlFor="ticket" className="sr-only">Lucro médio por venda em reais</label>
            <div className="flex items-center gap-2 max-w-xs">
              <span className="text-gray-300">R$</span>
              <input
                id="ticket"
                inputMode="numeric"
                placeholder="Ex.: 300"
                value={ticket}
                onChange={(e) => setTicket(e.target.value)}
                className="w-full px-4 py-2 bg-black/40 border border-white/20 rounded-lg focus:border-blue-500 focus:outline-none text-white"
              />
            </div>
            {salesEssencial !== null && salesCompleto !== null && (
              <p className="mt-4 text-lg text-white" aria-live="polite">
                Com {formatBRL(ticketValue)} por venda, o <strong>Site Essencial</strong> se paga com{" "}
                <strong className="text-blue-300">{salesEssencial} {salesEssencial === 1 ? "venda" : "vendas"}</strong> a mais
                e o <strong>Site Completo</strong> com{" "}
                <strong className="text-blue-300">{salesCompleto} {salesCompleto === 1 ? "venda" : "vendas"}</strong> a mais.
                O que vier depois disso é retorno.
              </p>
            )}
            <p className="mt-3 text-sm text-gray-400">
              Não é promessa de resultado: é uma referência para você decidir com números.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md px-8 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-opacity"
          >
            Quero descobrir qual site faz sentido para mim
          </Link>
        </div>
      </div>
    </section>
  );
}
