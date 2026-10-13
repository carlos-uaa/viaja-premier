import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Fuel, ShieldCheck, Users, ArrowRight, Sparkles, CheckCircle2, Star } from 'lucide-react';
import { buildQuickContactWhatsAppUrl, TOURS_UNICO_DISPLAY_PHONE } from '../../utils/whatsapp';

export const Hero: React.FC = () => {
  const highlights = [
    {
      icon: ShieldCheck,
      title: 'VIAJA SEGURO',
      desc: 'Unidades cómodas y en excelente estado mecánico.',
    },
    {
      icon: UserCheck,
      title: 'OPERADOR PROFESIONAL',
      desc: 'Experiencia y responsabilidad en cada viaje.',
    },
    {
      icon: Fuel,
      title: 'TODO INCLUIDO',
      desc: 'Combustible, casetas y viáticos de operador.',
    },
    {
      icon: Users,
      title: 'VIAJES PARA GRUPOS',
      desc: 'Camionetas Sprinter de 8 a 20 pasajeros.',
    },
  ];

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-surface via-background to-background">
      {/* Halos de luz decorativos de alta gama */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-primary/10 dark:bg-brand-primary/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-12 right-12 w-96 h-96 bg-brand-secondary/5 dark:bg-brand-secondary/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna Izquierda: Información Animada */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Chip Superior - Con contraste asegurado en Light (#0B2D4F) y Dark (#FFFFFF) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chip-bg text-chip-text border border-border shadow-soft text-xs sm:text-sm font-bold tracking-wider uppercase"
            >
              <div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
              </div>
              <span className="font-heading">Viaja Seguro, Viaja Cómodo, Viaja con Nosotros</span>
            </motion.div>

            {/* Gran Título del Flyer Oficial */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] font-heading">
                <span className="text-title block">
                  TÚ DISFRUTA
                </span>
                <span className="text-brand-primary block text-5xl sm:text-6xl lg:text-7xl font-black">
                  NOSOTROS
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold italic text-title font-serif tracking-normal pt-1">
                  nos encargamos del camino
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Renta de camionetas tipo Sprinter para <strong className="text-title font-semibold">8 a 20 pasajeros</strong> con chofer profesional certificado. Rutas turísticas, familiares y ejecutivas desde Aguascalientes a cualquier destino del país.
            </p>

            {/* Los 4 Pilares Oficiales */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.08, duration: 0.5 }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-surface-card border border-border/80 shadow-soft hover:border-brand-primary/50 transition-all text-left group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xs font-black uppercase tracking-wider text-title">
                        {item.title}
                      </h2>
                      <p className="text-xs text-text-muted mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#cotizador"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-primary hover:bg-brand-primary-hover text-white font-black text-base px-8 py-4 rounded-xl shadow-lg shadow-brand-primary/25 hover:shadow-glow transition-all duration-300 group cursor-pointer"
              >
                <span>¡Arma tu Grupo y Vámonos!</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#flota"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white dark:bg-surface-card hover:bg-surface-hover text-title font-bold text-base px-6 py-4 rounded-xl border border-border transition-colors shadow-soft"
              >
                <span>Ver Unidades Disponibles</span>
              </motion.a>
            </div>

            {/* Garantía de confianza con estrellas */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-text-muted pt-2">
              <div className="flex items-center gap-1 text-amber-500 font-bold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-title font-black ml-1">4.9/5</span>
                <span className="text-text-muted font-normal">(Viajes Calificados)</span>
              </div>
              <span className="text-border hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                Seguro de Viajero SICT
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                GPS Satelital 24/7
              </span>
            </div>
          </motion.div>

          {/* Columna Derecha: Tarjeta Fotográfica Interactiva Animada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Tarjeta Principal Flotante con animación continua suave */}
              <div className="animate-float relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-surface-card bg-surface">
                
                {/* Imagen del Vehículo */}
                <div className="relative overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80"
                    alt="Camioneta Sprinter Tours Único"
                    className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/90 via-black/20 to-transparent" />
                </div>

                {/* Badge Superior Izquierdo con contraste adaptativo */}
                <div className="absolute top-4 left-4 bg-chip-bg border border-border/80 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md">
                  <span className="text-chip-text font-black text-xs uppercase tracking-wider font-heading">
                    Tours Único
                  </span>
                </div>

                {/* Badge Capacidad */}
                <div className="absolute top-4 right-4 bg-brand-primary text-white font-black text-xs px-3.5 py-1.5 rounded-full shadow-md uppercase tracking-wider">
                  8 a 20 Pax
                </div>

                {/* Botón Inferior Integrado al WhatsApp */}
                <div className="absolute bottom-4 inset-x-4">
                  <a
                    href={buildQuickContactWhatsAppUrl('Renta directa desde la portada')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 bg-brand-primary hover:bg-brand-primary-hover text-white rounded-2xl shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white text-brand-primary flex items-center justify-center font-bold text-lg shadow-sm">
                        📞
                      </div>
                      <div className="text-left leading-tight">
                        <span className="text-[11px] font-bold uppercase tracking-wider block text-white/90">
                          Cotiza tu viaje por WhatsApp
                        </span>
                        <span className="text-lg font-black tracking-tight font-heading text-white">
                          {TOURS_UNICO_DISPLAY_PHONE}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-black uppercase bg-white text-brand-primary px-3.5 py-2 rounded-xl group-hover:scale-105 transition-transform shadow-sm">
                      Cotizar
                    </span>
                  </a>
                </div>
              </div>

              {/* Badges Flotantes de Credibilidad */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:flex absolute -bottom-6 -left-6 bg-white dark:bg-surface-card p-3.5 rounded-2xl border border-border shadow-card items-center gap-3 z-10"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-bold text-title">Póliza Amplia Vigente</div>
                  <div className="text-[11px] text-text-muted">Aprobado por la SICT</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:flex absolute -top-5 -right-5 bg-white dark:bg-surface-card p-3.5 rounded-2xl border border-border shadow-card items-center gap-3 z-10"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold text-lg">
                  📡
                </div>
                <div>
                  <div className="text-xs font-bold text-title">Monitoreo Satelital</div>
                  <div className="text-[11px] text-text-muted">Rastreo activo 24 hrs</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
