import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Fleet } from './components/sections/Fleet';
import { PopularTours } from './components/sections/PopularTours';
import { QuickQuote } from './components/sections/QuickQuote';
import { ProcessSteps } from './components/sections/ProcessSteps';
import { Testimonials } from './components/sections/Testimonials';
import { FaqAccordion } from './components/sections/FaqAccordion';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-text flex flex-col transition-colors duration-300">
        {/* Barra de Navegación Fija */}
        <Navbar />

        {/* Contenido Principal */}
        <main className="flex-grow">
          {/* 1. Hero: Impacto visual y pilares del flyer */}
          <Hero />

          {/* 2. Flota Sprinter: 20 y 14 pasajeros */}
          <Fleet />

          {/* 3. Tours Frecuentes: Precios sugeridos y destinos comunes */}
          <PopularTours />

          {/* 4. Cotizador e Itinerario con botón a WhatsApp */}
          <QuickQuote />

          {/* 5. Proceso y Reglas de Reserva (Anticipo, Contrato, 48h, 24h) */}
          <ProcessSteps />

          {/* 6. Testimonios y Casos de Éxito */}
          <Testimonials />

          {/* 7. Preguntas Frecuentes */}
          <FaqAccordion />
        </main>

        {/* Pie de Página */}
        <Footer />

        {/* Botón Flotante Permanente de WhatsApp */}
        <FloatingWhatsApp />
      </div>
    </ThemeProvider>
  );
};

export default App;
