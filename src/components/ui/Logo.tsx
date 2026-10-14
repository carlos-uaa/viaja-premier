import React from 'react';
import { BRAND_CONFIG } from '../../config/brand';

interface LogoProps {
  className?: string;
  showSlogan?: boolean;
  variant?: 'navbar' | 'footer' | 'default';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = 'h-11', 
  showSlogan = false,
  variant = 'default'
}) => {
  const isFooter = variant === 'footer';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Isotipo Ejecutivo: Brújula / Estrella de Viaje Aerodinámica */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 100 100"
          className="w-10 h-10 sm:w-11 sm:h-11 drop-shadow-sm transition-transform hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Fondo circular suave */}
          <circle cx="50" cy="50" r="46" fill="var(--color-primary)" fillOpacity="0.12" />
          
          {/* Anillo de precisión exterior */}
          <circle cx="50" cy="50" r="42" stroke="var(--color-primary)" strokeWidth="2.5" strokeDasharray="6 3" />
          
          {/* Flecha / Monograma Aerodinámico de Ruta */}
          <path
            d="M50 18 L68 56 L50 48 L32 56 Z"
            fill="var(--color-primary)"
          />
          <path
            d="M50 48 L68 56 L50 82 L32 56 Z"
            fill="var(--color-accent)"
            className="opacity-90"
          />

          {/* Destello central */}
          <circle cx="50" cy="48" r="4" fill="white" />
        </svg>
      </div>

      {/* Tipografía Oficial de Marca Blanca */}
      <div className="flex flex-col text-left">
        <span 
          className={`text-xs sm:text-sm font-black tracking-[0.25em] leading-none font-heading transition-colors ${
            isFooter 
              ? 'text-white' 
              : 'text-title'
          }`}
        >
          VIAJA
        </span>
        <span className="text-xl sm:text-2xl font-black tracking-tight text-brand-primary leading-none font-heading">
          {BRAND_CONFIG.tradeName.toUpperCase()}
        </span>
        {showSlogan && (
          <span 
            className={`text-[9px] sm:text-[10px] tracking-wider font-semibold uppercase mt-0.5 whitespace-nowrap ${
              isFooter ? 'text-slate-300' : 'text-text-muted'
            }`}
          >
            {BRAND_CONFIG.slogan}
          </span>
        )}
      </div>
    </div>
  );
};
