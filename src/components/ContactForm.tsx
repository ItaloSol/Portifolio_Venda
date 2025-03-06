import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { openWhatsApp } from '../utils/whatsapp';
import { formatPhone, validateEmail, validatePhone } from '../utils/formatters';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  budget?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    consent: false
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = 'Nome deve ter pelo menos 3 caracteres';
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Telefone deve estar no formato (61) 9 0000-0000';
    }

    if (formData.company.trim().length < 2) {
      newErrors.company = 'Nome da empresa é obrigatório';
    }

    if (!formData.budget) {
      newErrors.budget = 'Selecione uma opção de orçamento';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData({ ...formData, phone: formatted });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      const message = `Olá! Me chamo ${formData.name} da empresa ${formData.company}.\n\nGostaria de solicitar uma proposta para uma Landing Page.\n\nOrçamento: ${formData.budget}\nEmail: ${formData.email}\nTelefone: ${formData.phone}`;
      openWhatsApp(message);
    }
  };

  const formTitle = "Solicite uma Proposta".split(" ");

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16 flex justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {formTitle.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <label className="block text-sm font-medium mb-2">Nome</label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-indigo-600 focus:border-transparent`}
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </motion.div>
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <label className="block text-sm font-medium mb-2">Email</label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-indigo-600 focus:border-transparent`}
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </motion.div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label className="block text-sm font-medium mb-2">Telefone</label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="tel"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-indigo-600 focus:border-transparent`}
                  required
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="(61) 9 0000-0000"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
              </motion.div>
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label className="block text-sm font-medium mb-2">Empresa</label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.company ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-indigo-600 focus:border-transparent`}
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
                {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
              </motion.div>
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label className="block text-sm font-medium mb-2">Orçamento</label>
              <motion.select
                whileFocus={{ scale: 1.01 }}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.budget ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-indigo-600 focus:border-transparent`}
                value={formData.budget}
                onChange={(e) => setFormData({...formData, budget: e.target.value})}
                required
              >
                <option value="">Selecione uma opção</option>
                <option value="300-500">R$ 300 - R$ 500</option>
                <option value="500-1000">R$ 500 - R$ 1.000</option>
                <option value="1000-3000">R$ 1.000 - R$ 3.000</option>
                <option value="3000-5000">R$ 3.000 - R$ 5.000</option>
                <option value="5000+">R$ 5.000+</option>
              </motion.select>
              {errors.budget && <p className="mt-1 text-sm text-red-500">{errors.budget}</p>}
            </motion.div>
            <motion.div 
              className="flex items-start gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.input
                whileHover={{ scale: 1.1 }}
                type="checkbox"
                className="mt-1"
                required
                checked={formData.consent}
                onChange={(e) => setFormData({...formData, consent: e.target.checked})}
              />
              <label className="text-sm text-gray-600">
                Concordo com o processamento dos meus dados de acordo com a LGPD
              </label>
            </motion.div>
            <motion.button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Enviar Solicitação
            </motion.button>
            <motion.p 
              className="text-center text-sm text-gray-600 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Clock className="inline-block w-4 h-4 mr-1" />
              Tempo médio de resposta: 24 horas úteis
            </motion.p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}