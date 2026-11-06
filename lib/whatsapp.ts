// Ponto único de contato via WhatsApp. Troque o número aqui e ele muda no site inteiro.
export const WHATSAPP_NUMBER = "5561999315616";

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Valor de referência do salário mínimo (2026: R$ 1.621, Decreto 12.797/2025).
// Atualize em janeiro de cada ano: os preços dos planos são calculados a partir dele.
export const SALARIO_MINIMO = 1621;

export const formatBRL = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export const PRECO_ESSENCIAL = Math.floor(SALARIO_MINIMO / 2);
export const PRECO_COMPLETO = SALARIO_MINIMO;
