"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, FormEvent, useEffect } from "react";
import Link from "next/link";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    lgpd: false
  });

  const [hasInitializedPixel, setHasInitializedPixel] = useState(false);

  useEffect(() => {
    if (!hasInitializedPixel && (window as any).fbq) {
      // Track form view once
      (window as any).fbq('track', 'ViewContent', {
        content_name: 'Contact Form',
        content_category: 'Lead Generation',
        content_type: 'form',
        status: 'visible'
      });

      setHasInitializedPixel(true);
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Olá! Me chamo ${formData.name} da empresa ${formData.company}.\n` +
      `Email: ${formData.email}\n` +
      `Telefone: ${formData.phone}\n` +
      `Orçamento desejado: ${formData.budget}`
    );

    // Track form submission
    if ((window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Contact Form',
        content_category: 'Lead Generation',
        value: 0.00,
        currency: 'BRL',
        status: 'complete',
        ...formData
      });
    }

    window.open(`https://wa.me/5561993003980?text=${message}`, '_blank');
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

    // Track form field changes
    if (!(window as any).fbq) return;

    (window as any).fbq('trackCustom', 'FormFieldComplete', {
      field_name: name,
      field_value: value,
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
            <h2 className="text-4xl font-bold mb-4">
              Solicite
              <br />
              uma
              <br />
              Proposta
            </h2>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Input
                  placeholder="Nome"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
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
                placeholder="Empresa"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                required
              />
            </div>
            <div>
              <Select 
                value={formData.budget}
                onValueChange={(value) => handleInputChange('budget', value)}
                required
              >
                <SelectTrigger className="bg-white/5 border-white/10 text-white">
                  <SelectValue placeholder="Selecione uma opção" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="300-500">R$ 300 - R$ 500</SelectItem>
                  <SelectItem value="500-1000">R$ 500 - R$ 1.000</SelectItem>
                  <SelectItem value="1000-3000">R$ 1.000 - R$ 3.000</SelectItem>
                  <SelectItem value="3000-5000">R$ 3.000 - R$ 5.000</SelectItem>
                  <SelectItem value="5000+">R$ 5.000+</SelectItem>
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
                Concordo com o processamento dos meus dados de acordo com a LGPD
              </label>
            </div>
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500"
            >
              Enviar Solicitação
            </Button>
            <p className="text-center text-sm text-gray-400">
              Tempo médio de resposta: 24 horas úteis
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}