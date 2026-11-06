'use client';

import { FormEvent, useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { createHash } from 'crypto';
import Loader from '@/components/styled-components';
import { whatsappLink, formatBRL, PRECO_ESSENCIAL, PRECO_COMPLETO } from '@/lib/whatsapp';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    lgpd: false
  });

  const [isLoading, setIsLoading] = useState(false);
  const hasTrackedViewContent = useRef(false);

  useEffect(() => {
    if (!hasTrackedViewContent.current && (window as any).fbq) {
      // Track form view once - Event Data
      (window as any).fbq('track', 'ViewContent', {
        content_name: 'Contact Form',
        content_category: 'Lead Generation',
        content_type: 'form',
        status: 'visible'
      });

      hasTrackedViewContent.current = true;
    }
  }, []);

  const hashData = (data: string): string => {
    return createHash('sha256').update(data).digest('hex');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const message =
      `Olá, Ítalo! Me chamo ${formData.name}, da empresa ${formData.company}, e quero um site profissional.\n` +
      `Email: ${formData.email}\n` +
      `Telefone: ${formData.phone}\n` +
      `Interesse: ${formData.budget}`;

    // Track form submission with hashed data
    if ((window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Contact Form',
        content_category: 'Lead Generation',
        value: 0.00,
        currency: 'BRL',
        status: 'complete',
        hashed_name: hashData(formData.name),
        hashed_email: hashData(formData.email),
        hashed_phone: hashData(formData.phone),
        hashed_company: hashData(formData.company),
        budget: formData.budget
      });
    }

    try {
      const response = await fetch('https://api.sheetmonkey.io/form/ju15gVvTZkETacf4zTMqzT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          Company: formData.company,
          Budget: formData.budget,
          Created: 'x-sheetmonkey-current-date-time'
        }),
      });

      if (response.ok) {
        // Open WhatsApp in a new tab
        window.open(whatsappLink(message), '_blank');
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const formatPhoneNumber = (value: string): string => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length === 0) return '';
    
    const parts = {
      ddd: numbers.slice(0, 2),
      firstDigit: numbers.slice(2, 3),
      firstPart: numbers.slice(3, 7),
      lastPart: numbers.slice(7, 11)
    };

    let formatted = '';
    if (parts.ddd) formatted += `(${parts.ddd}`;
    if (parts.firstDigit) formatted += `) ${parts.firstDigit}`;
    if (parts.firstPart) formatted += ` ${parts.firstPart}`;
    if (parts.lastPart) formatted += `-${parts.lastPart}`;

    return formatted;
  };

  const handleInputChange = (name: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [name]: value }));

    // Track form field changes with hashed data
    if (!(window as any).fbq) return;

    const hashedValue = ['name', 'email', 'phone', 'company'].includes(name) ? hashData(value as string) : value;
    (window as any).fbq('trackCustom', 'FormFieldComplete', {
      field_name: name,
      field_value: hashedValue,
      form_name: 'Contact Form'
    });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const numbers = rawValue.replace(/\D/g, '');
    
    if (numbers.length <= 11) {
      const formattedValue = formatPhoneNumber(numbers);
      handleInputChange('phone', formattedValue);
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vamos tirar o site da sua empresa do papel?
            </h2>
            <p className="text-gray-300 text-lg">
              Preencha em 30 segundos. Eu te respondo no WhatsApp com uma proposta pensada para o seu negócio, sem compromisso.
            </p>
          </div>
          {isLoading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <Loader />
            </div>
          ) : (
            <form 
              className="space-y-6" 
              action="https://api.sheetmonkey.io/form/ju15gVvTZkETacf4zTMqzT" 
              method="post" 
              onSubmit={handleSubmit}>
            <input type="hidden" name="Created" value="x-sheetmonkey-current-date-time" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Input
                  placeholder="Seu nome"
                  name="Name"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  name="Email"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Telefone (61) 9 0000-0000"
                name="Phone"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                value={formData.phone}
                onChange={handlePhoneChange}
                maxLength={16}
                pattern="\([0-9]{2}\) [0-9]{1} [0-9]{4}-[0-9]{4}"
                title="Formato: (99) 9 9999-9999"
                required
              />
            </div>
            <div>
              <Input
                placeholder="Nome da sua empresa"
                name="Company"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                required
              />
            </div>
            <div>
              <Select 
                value={formData.budget}
                name="Budget"
                onValueChange={(value) => handleInputChange('budget', value)}
                required
              >
                <SelectTrigger 
                  className="bg-white/5 border-white/10 text-white"
                  aria-label="Selecione o tipo de site"
                >
                  <SelectValue placeholder="Qual site você procura?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={`Site Essencial (${formatBRL(PRECO_ESSENCIAL)})`}>
                    Site Essencial: {formatBRL(PRECO_ESSENCIAL)}
                  </SelectItem>
                  <SelectItem value={`Site Completo (${formatBRL(PRECO_COMPLETO)})`}>
                    Site Completo: {formatBRL(PRECO_COMPLETO)}
                  </SelectItem>
                  <SelectItem value="Projeto sob medida (loja virtual / e-commerce)">
                    Loja virtual / projeto sob medida
                  </SelectItem>
                  <SelectItem value="Ainda não sei, quero orientação">
                    Ainda não sei, quero uma orientação
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox 
                id="lgpd" 
                checked={formData.lgpd}
                onCheckedChange={(checked) => handleInputChange('lgpd', checked as boolean)}
                required
              />
              <label htmlFor="lgpd" className="text-sm text-gray-400">
                Concordo com a coleta e processamento dos meus dados de acordo com os Termos das Ferramentas da Meta para Empresas
              </label>
            </div>
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500"
              disabled={!formData.lgpd}
              aria-label="Receber minha proposta no WhatsApp"
            >
              Receber minha proposta no WhatsApp
            </Button>
            <p className="text-center text-sm text-gray-400">
              Seus dados são usados apenas para responder ao seu contato e são tratados conforme os Termos das Ferramentas da Meta para Empresas.
              <br />
              Tempo médio de resposta: 24 horas úteis
            </p>
          </form>
          )}
        </div>
      </div>
    </section>
  );
}