import React from 'react';
import { Logo } from '../ui/Logo';
import { MapPin, ShieldCheck, ArrowUp, MessageCircle, Heart } from 'lucide-react';
import { buildQuickContactWhatsAppUrl, TOURS_UNICO_DISPLAY_PHONE } from '../../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b2d4f] dark:bg-[#071829] text-white relative border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Luz ambiental sutil */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Lema Destacado del Flyer */}
        <div className="pb-10 mb-10 border-b border-white/10 text-center flex flex-col sm:flex-row items-center justify-center gap-2 text-sm sm:text-base text-slate-300">
          <Heart className="w-4 h-4 text-brand-primary fill-brand-primary" />
          <span>Más que un viaje, creamos</span>
          <span className="font-extrabold text-brand-primary font-heading">
            experiencias inolvidables
          </span>
          <Heart className="w-4 h-4 text-brand-primary fill-brand-primary hidden sm:inline" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Columna Marca */}
          <div className="lg:col-span-5 space-y-4">
            <Logo showSlogan={true} variant="footer" />
            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              Especialistas en renta de camionetas tipo Sprinter para hasta 20 pasajeros con chofer profesional desde Aguascalientes a toda la República Mexicana.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-brand-primary font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Unidades Cómodas con Seguro de Viajero y Rastreo Satelital 24/7</span>
            </div>
          </div>

          {/* Enlaces de Navegación */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-primary font-heading">
              Navegación Rápida
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#flota" className="hover:text-brand-primary transition-colors">
                  Flota Sprinter (hasta 20 Pasajeros)
                </a>
              </li>
              <li>
                <a href="#destinos" className="hover:text-brand-primary transition-colors">
                  Destinos que Inspiran
                </a>
              </li>
              <li>
                <a href="#cotizador" className="hover:text-brand-primary transition-colors">
                  Simulador de Presupuesto
                </a>
              </li>
              <li>
                <a href="#proceso" className="hover:text-brand-primary transition-colors">
                  Proceso y Contrato Formal
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-brand-primary transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto Directo */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-primary font-heading">
              Atención y Reservaciones
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <a
                href={buildQuickContactWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-primary/20 text-brand-primary flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block">WhatsApp / Teléfono</span>
                  <span className="font-bold text-white text-base">{TOURS_UNICO_DISPLAY_PHONE}</span>
                </div>
              </a>

              <div className="flex items-center gap-3 px-1 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-brand-primary shrink-0" />
                <span>Aguascalientes, Ags., México • Cobertura Nacional</span>
              </div>
            </div>
          </div>

        </div>

        {/* Fila Inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong>Tours Único</strong>. Todos los derechos reservados. ¡Viaja seguro, viaja cómodo!
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">Términos del Servicio</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Aviso de Privacidad</span>
            
            <button
              onClick={scrollToTop}
              className="ml-2 p-2 rounded-lg bg-white/5 hover:bg-brand-primary hover:text-white transition-colors"
              aria-label="Volver al inicio"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
