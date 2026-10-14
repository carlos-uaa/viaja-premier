import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, PhoneCall, ShieldCheck } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { useTheme } from '../../context/ThemeContext';
import { buildQuickContactWhatsAppUrl } from '../../utils/whatsapp';
import { BRAND_CONFIG } from '../../config/brand';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Flota Sprinter', href: '#flota' },
    { label: 'Destinos Populares', href: '#destinos' },
    { label: 'Cotizador', href: '#cotizador' },
    { label: 'Proceso de Renta', href: '#proceso' },
    { label: 'Preguntas', href: '#faqs' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/90 dark:bg-surface/90 backdrop-blur-md shadow-md py-3 border-b border-border'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center focus:outline-none">
            <Logo showSlogan={true} />
          </a>

          {/* Menú Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-text hover:text-brand-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Acciones del Header */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Toggle Dark / Light Mode */}
            <button
              onClick={toggleTheme}
              aria-label="Cambiar tema claro / oscuro"
              className="p-2.5 rounded-full text-text-muted hover:text-text hover:bg-surface-hover border border-border transition-all cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            {/* Botón WhatsApp Directo */}
            <a
              href={buildQuickContactWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-lg shadow-brand-primary/20 hover:shadow-glow transition-all duration-300 active:scale-95"
            >
              <PhoneCall className="w-4 h-4 fill-white text-white" />
              <span>{BRAND_CONFIG.displayPhone}</span>
            </a>
          </div>

          {/* Botón Móvil Hamburguesa */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-text-muted hover:bg-surface-hover border border-border cursor-pointer"
              aria-label="Cambiar tema"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-text hover:bg-surface-hover border border-border cursor-pointer"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-surface dark:bg-surface border-b border-border px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-semibold text-text hover:bg-surface-hover rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-border">
            <a
              href={buildQuickContactWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-brand-primary text-white font-bold py-3 rounded-xl shadow-md"
            >
              <PhoneCall className="w-5 h-5 fill-white text-white" />
              <span>Cotizar al {BRAND_CONFIG.displayPhone}</span>
            </a>
            <div className="flex items-center justify-center gap-2 mt-3 text-xs text-text-muted">
              <ShieldCheck className="w-4 h-4 text-brand-primary" />
              <span>Seguro de Viajero y Casetas Incluidas</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
