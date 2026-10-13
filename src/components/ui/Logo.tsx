import React from 'react';

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
      {/* Isotipo: U Verde con Órbita Azul Marino Petróleo */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 120 110"
          className="w-10 h-10 sm:w-11 sm:h-11 drop-shadow-sm transition-transform hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* U Dinámica Verde */}
          <path
            d="M24 16 V 60 C 24 82, 38 94, 60 94 C 82 94, 96 82, 96 60 V 16"
            stroke="var(--color-primary)"
            strokeWidth="18"
            strokeLinecap="round"
          />

          {/* Anillo / Órbita Azul Marino Petróleo */}
          <path
            d="M6 74 C 20 62, 54 44, 98 40 C 114 38, 118 48, 108 58 C 88 78, 48 88, 18 84"
            fill="var(--color-secondary)"
            className="dark:fill-brand-accent opacity-95"
          />

          {/* Destello de trazado interior */}
          <path
            d="M28 66 C 45 56, 75 48, 98 48"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="opacity-75"
          />
        </svg>
      </div>

      {/* Tipografía Oficial: TOURS ÚNICO */}
      <div className="flex flex-col text-left">
        <span 
          className={`text-xs sm:text-sm font-black tracking-[0.2em] leading-none font-heading transition-colors ${
            isFooter 
              ? 'text-white' 
              : 'text-[#0b2d4f] dark:text-white'
          }`}
        >
          TOURS
        </span>
        <span className="text-xl sm:text-2xl font-black tracking-tight text-brand-primary leading-none font-heading">
          ÚNICO
        </span>
        {showSlogan && (
          <span 
            className={`text-[9px] sm:text-[10px] tracking-wider font-semibold uppercase mt-0.5 whitespace-nowrap ${
              isFooter ? 'text-slate-300' : 'text-text-muted'
            }`}
          >
            Viaja seguro, viaja cómodo
          </span>
        )}
      </div>
    </div>
  );
};
