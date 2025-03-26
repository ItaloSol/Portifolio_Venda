"use client";

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeadModal({ isOpen: controlledIsOpen, onClose }: LeadModalProps) {
  const [isOpen, setIsOpen] = useState(controlledIsOpen);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  useEffect(() => {
    setIsOpen(controlledIsOpen);
  }, [controlledIsOpen]);

  useEffect(() => {
    // Track modal view only when it becomes visible
    if (isOpen && (window as any).fbq) {
      // Track modal view once
      (window as any).fbq('track', 'ViewContent', {
        content_name: 'Lead Modal',
        content_category: 'Lead Generation',
        content_type: 'form',
        status: 'visible'
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (hasShown) return;

    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;
        
        if (scrollPosition >= pageHeight / 2 && !hasShown) {
          setIsOpen(true);
          setHasShown(true);
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [hasShown]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Track input changes in Meta Pixel
    if (!(window as any).fbq) return;

    // Send lead data to Meta Pixel
    (window as any).fbq('trackCustom', 'LeadFormProgress', {
      field_name: name,
      field_value: value,
      form_name: 'Landing Page Lead Form'
    });
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-b from-gray-900 to-black border border-blue-500/20 rounded-xl w-full max-w-md p-6 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Aumente Seus Lucros Hoje!
          </h2>
          <p className="text-gray-300 mt-2">
            Descubra como uma landing page profissional pode transformar seus visitantes em clientes.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
              placeholder="Seu nome completo"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
              placeholder="(00) 00000-0000"
            />
          </div>

          <Button
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-2 rounded-lg transition-all duration-200"
            onClick={(e) => {
              e.preventDefault();
              if (!(window as any).fbq) return;
              
              // Track form submission
              (window as any).fbq('track', 'Lead', {
                content_name: 'Landing Page Lead Form',
                content_category: 'Lead Generation',
                value: 0.00,
                currency: 'BRL',
                status: 'complete',
                ...formData
              });

              handleClose();
            }}
          >
            Quero Aumentar Minhas Vendas
          </Button>
        </form>

        <p className="text-xs text-gray-400 text-center mt-4">
          Seus dados estão seguros e nunca serão compartilhados.
        </p>
      </div>
    </div>
  );
}