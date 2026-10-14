import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildQuickContactWhatsAppUrl } from '../../utils/whatsapp';
import { BRAND_CONFIG } from '../../config/brand';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label={`Contacto por WhatsApp con ${BRAND_CONFIG.name}`} className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip emergente */}
      <div className="hidden sm:block mr-3 bg-surface-card text-text border border-border shadow-xl px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Cotiza al {BRAND_CONFIG.displayPhone}
      </div>

      {/* Botón flotante verde característico de WhatsApp */}
      <a
        href={buildQuickContactWhatsAppUrl('Botón flotante de asistencia')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Contactar por WhatsApp a ${BRAND_CONFIG.name}`}
        className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Onda de pulso verde suave */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/35 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white text-white relative z-10" />
      </a>
    </aside>
  );
};
