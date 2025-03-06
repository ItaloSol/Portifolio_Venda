export const formatPhone = (value: string): string => {
  // Remove all non-numeric characters
  const numbers = value.replace(/\D/g, '');
  
  // Format as (61) 9 0000-0000
  if (numbers.length <= 11) {
    return numbers
      .replace(/(\d{2})/, '($1) ')
      .replace(/(\d{1})(\d)/, '$1 $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  }
  
  return numbers.slice(0, 11)
    .replace(/(\d{2})/, '($1) ')
    .replace(/(\d{1})(\d)/, '$1 $2')
    .replace(/(\d{4})(\d)/, '$1-$2');
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const numbers = phone.replace(/\D/g, '');
  return numbers.length === 11;
};