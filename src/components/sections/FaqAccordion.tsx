import React, { useState } from 'react';
import { FAQS_DATA } from '../../data/faqsData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { buildQuickContactWhatsAppUrl } from '../../utils/whatsapp';

export const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS_DATA[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-background relative border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-brand-primary px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20">
            Dudas Comunes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-title mt-4 font-heading">
            Preguntas Frecuentes
          </h2>
          <p className="text-text-muted mt-3 text-base sm:text-lg">
            Conoce nuestras condiciones sobre anticipos, contratos formales, seguros y cancelaciones antes de reservar.
          </p>
        </div>

        {/* Lista de Acordeón */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white dark:bg-surface-card rounded-2xl border border-border shadow-soft overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle className="w-5 h-5 text-brand-primary shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-title font-heading">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-brand-primary' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-text-muted leading-relaxed border-t border-border/40">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ¿Tienes otra duda? */}
        <div className="mt-12 text-center bg-white dark:bg-surface-card p-6 sm:p-8 rounded-3xl border border-border flex flex-col sm:flex-row items-center justify-between gap-4 shadow-soft">
          <div className="text-left">
            <h4 className="font-bold text-base text-title font-heading">¿Tienes una pregunta específica sobre tu ruta?</h4>
            <p className="text-xs text-text-muted mt-0.5">Escríbenos directamente y un asesor te responderá al instante.</p>
          </div>
          <a
            href={buildQuickContactWhatsAppUrl('Duda particular sobre servicio de renta')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-md transition-all shrink-0 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
