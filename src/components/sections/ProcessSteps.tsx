import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, CreditCard, FileCheck2, MapPinned, BadgeCheck, Navigation } from 'lucide-react';

export const ProcessSteps: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: Calculator,
      title: 'Cotización Inicial',
      desc: 'Eliges destino, fechas y capacidad (8 a 20 pasajeros). Te brindamos un presupuesto con casetas, combustible y chofer.',
      badge: 'Paso 1'
    },
    {
      step: '02',
      icon: CreditCard,
      title: 'Apartado con Anticipo',
      desc: 'Se cubre el porcentaje de anticipo convenido para bloquear la fecha. Mientras no haya anticipo, la unidad permanece disponible.',
      badge: 'Garantía de Fecha'
    },
    {
      step: '03',
      icon: FileCheck2,
      title: 'Contrato y Chofer',
      desc: 'Generamos tu contrato formal (físico o digital escaneado). Se asigna la unidad y chofer con copia física en mano.',
      badge: 'Formalidad Legal'
    },
    {
      step: '04',
      icon: MapPinned,
      title: 'Itinerario Definitivo',
      desc: 'Se confirma la ruta final, horarios y puntos de abordaje al menos 48 horas antes de la salida para planificar la logística.',
      badge: '48 Horas Antes'
    },
    {
      step: '05',
      icon: BadgeCheck,
      title: 'Liquidación del Viaje',
      desc: 'El saldo restante debe liquidarse al menos 24 horas antes del inicio del viaje para autorizar la salida y viáticos.',
      badge: '24 Horas Antes'
    },
    {
      step: '06',
      icon: Navigation,
      title: '¡Viaja Seguro!',
      desc: 'Abordaje puntual. Tu grupo viaja tranquilo con seguro de viajero y monitoreo satelital GPS 24/7 durante todo el recorrido.',
      badge: 'Monitoreo 24/7'
    },
  ];

  return (
    <section id="proceso" className="py-20 md:py-28 bg-surface relative border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-brand-primary px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20">
            Transparencia y Certeza
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-title mt-4 font-heading">
            Proceso de Renta Claro y Sin Sorpresas
          </h2>
          <p className="text-text-muted mt-3 text-base sm:text-lg">
            Cuidamos cada detalle desde la primera cotización hasta el regreso seguro a tu destino.
          </p>
        </div>

        {/* Pasos en Cuadrícula Animada */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative bg-white dark:bg-surface-card rounded-3xl p-7 border border-border shadow-soft hover:shadow-card-hover hover:border-brand-primary/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Encabezado de la tarjeta */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center font-black group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-text-muted/20 font-heading">
                      {item.step}
                    </span>
                  </div>

                  <span className="text-[11px] font-black text-brand-primary uppercase tracking-wider block mb-1">
                    {item.badge}
                  </span>

                  <h3 className="text-lg font-bold text-title font-heading group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-text-muted text-xs sm:text-sm mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-border flex items-center gap-2 text-xs text-text-muted font-medium">
                  <span className="w-2 h-2 rounded-full bg-brand-primary" />
                  <span>Protocolo de Operación Formal</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
