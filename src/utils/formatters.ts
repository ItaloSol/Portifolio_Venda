export const formatPhone = (value: string): string => {
  // Remove todos os caracteres não numéricos e limita a 12 dígitos
  const numbers = value.replace(/\D/g, '').slice(0, 12);

  // Formata para o padrão (XX) 9 XXXX-XXXX
  return numbers.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})?$/, (_, ddd, first, middle, last) => {
    return last ? `(${ddd}) ${first} ${middle}-${last}` : `(${ddd}) ${first} ${middle}`;
  });
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const numbers = phone.replace(/\D/g, ''); // Remove caracteres não numéricos

  // Deve ter exatamente 11 dígitos (2 do DDD + 9 do celular)
  if (numbers.length !== 11) return false;

  // O primeiro número após o DDD deve ser '9' para celulares
  return numbers[2] === '9';
};