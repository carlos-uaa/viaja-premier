import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FLEET_DATA } from '../../data/fleetData';
import { Users, Briefcase, Snowflake, Tv, BatteryCharging, Navigation, Shield, UserCheck, Check, ArrowRight } from 'lucide-react';
import { buildTourWhatsAppUrl } from '../../utils/whatsapp';

export const Fleet: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(FLEET_DATA[0].id);
  const activeVehicle = FLEET_DATA.find((v) => v.id === selectedId) || FLEET_DATA[0];

  const getAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'snowflake': return <Snowflake className="w-5 h-5 text-brand-primary" />;
      case 'tv': return <Tv className="w-5 h-5 text-brand-primary" />;
      case 'battery-charging': return <BatteryCharging className="w-5 h-5 text-brand-primary" />;
      case 'navigation': return <Navigation className="w-5 h-5 text-brand-primary" />;
      case 'user-check': return <UserCheck className="w-5 h-5 text-brand-primary" />;
      case 'shield': return <Shield className="w-5 h-5 text-brand-primary" />;
      case 'briefcase': return <Briefcase className="w-5 h-5 text-brand-primary" />;
      default: return <Check className="w-5 h-5 text-brand-primary" />;
    }
  };

  return (
    <section id="flota" className="py-20 md:py-28 bg-background relative border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-brand-primary px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20">
            Nuestra Flota Mercedes-Benz
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-title mt-4 font-heading">
            Camionetas Sprinter de Alta Gama
          </h2>
          <p className="text-text-muted mt-3 text-base sm:text-lg leading-relaxed">
            Elige la capacidad exacta para tu grupo. Todas las unidades cuentan con chofer certificado, seguro de viajero y casetas incluidas.
          </p>

          {/* Selector de Pestañas */}
          <div className="inline-flex p-1.5 bg-surface-card rounded-2xl border border-border mt-8 shadow-soft">
            {FLEET_DATA.map((vehicle) => {
              const isSelected = vehicle.id === selectedId;
              return (
                <button
                  key={vehicle.id}
                  onClick={() => setSelectedId(vehicle.id)}
                  className={`relative flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                    isSelected
                      ? 'text-white'
                      : 'text-text-muted hover:text-title'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeFleetTab"
                      className="absolute inset-0 bg-brand-primary rounded-xl shadow-md"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Users className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">{vehicle.name} ({vehicle.capacity} Pax)</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Ficha Interactiva Animada */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVehicle.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-surface-card rounded-3xl border border-border shadow-card overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Visual de la Camioneta con Zoom */}
              <div className="lg:col-span-6 relative bg-slate-950 min-h-[350px] lg:min-h-full flex items-center justify-center p-6 overflow-hidden group">
                <img
                  src={activeVehicle.imageUrl}
                  alt={activeVehicle.name}
                  className="w-full h-full object-cover rounded-2xl shadow-xl max-h-[440px] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Badge de Modelo */}
                <div className="absolute top-10 left-10 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl text-white border border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider block text-slate-300">Modelo Oficial</span>
                  <span className="text-sm font-bold font-heading">{activeVehicle.model}</span>
                </div>

                {/* Tagline flotante con fondo azul marino oscuro permanente */}
                <div className="absolute bottom-10 inset-x-10 bg-[#0b2d4f]/95 dark:bg-[#071829]/95 backdrop-blur-md p-4 rounded-2xl text-white border border-white/10 hidden sm:block shadow-lg">
                  <p className="text-xs text-brand-primary font-bold uppercase tracking-wider mb-1">
                    Ideal Para:
                  </p>
                  <p className="text-sm font-medium leading-snug text-white">
                    {activeVehicle.tagline}
                  </p>
                </div>
              </div>

              {/* Detalles Técnicos y Beneficios */}
              <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black text-brand-primary uppercase tracking-widest bg-brand-primary/10 px-3 py-1 rounded-full border border-brand-primary/20">
                      Capacidad: {activeVehicle.capacity} Pasajeros
                    </span>
                    {activeVehicle.badge && (
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-chip-bg text-chip-text border border-border">
                        {activeVehicle.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-title font-heading mt-2">
                    {activeVehicle.name}
                  </h3>
                  
                  <p className="text-text-muted text-sm sm:text-base mt-2 leading-relaxed">
                    {activeVehicle.description}
                  </p>
                </div>

                {/* Ficha técnica rápida */}
                <div className="space-y-2.5 py-4 border-y border-border">
                  <div className="flex items-start gap-3 text-xs sm:text-sm">
                    <span className="font-bold text-title shrink-0 w-28 sm:w-32">Distribución:</span>
                    <span className="text-text-muted">{activeVehicle.specs.seating}</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm">
                    <span className="font-bold text-title shrink-0 w-28 sm:w-32">Maletero:</span>
                    <span className="text-text-muted">{activeVehicle.specs.luggage}</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm">
                    <span className="font-bold text-title shrink-0 w-28 sm:w-32">Clima:</span>
                    <span className="text-text-muted">{activeVehicle.specs.airConditioning}</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm">
                    <span className="font-bold text-title shrink-0 w-28 sm:w-32">Multimedia:</span>
                    <span className="text-text-muted">{activeVehicle.specs.multimedia}</span>
                  </div>
                </div>

                {/* Amenidades destacadas */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-3">
                    Equipamiento y confort incluido:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeVehicle.amenities.map((amenity) => (
                      <div
                        key={amenity.id}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-background border border-border/80 hover:border-brand-primary/40 transition-colors"
                      >
                        {getAmenityIcon(amenity.iconName)}
                        <span className="text-xs font-semibold text-text">{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA directo */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#cotizador"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white font-bold text-sm px-6 py-4 rounded-xl transition-all shadow-md active:scale-98"
                  >
                    <span>Cotizar {activeVehicle.capacity} Pasajeros</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>

                  <a
                    href={buildTourWhatsAppUrl(`Sprinter ${activeVehicle.name}`, activeVehicle.capacity)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white dark:bg-surface hover:bg-surface-hover text-title font-bold text-sm px-5 py-4 rounded-xl border border-border transition-colors shadow-soft"
                  >
                    <span>Consultar por WhatsApp</span>
                  </a>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
