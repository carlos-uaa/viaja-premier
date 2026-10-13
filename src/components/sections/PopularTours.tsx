import React, { useState } from 'react';
import { TOURS_DATA } from '../../data/toursData';
import { MapPin, Clock, ShieldCheck, Fuel, Users, ArrowUpRight, Palmtree, Church, Mountain, Building2, Plane, MessageSquareText } from 'lucide-react';
import { buildTourWhatsAppUrl } from '../../utils/whatsapp';

export const PopularTours: React.FC = () => {
  const [selectedPax, setSelectedPax] = useState<14 | 20>(20);

  const inspirationalCategories = [
    { icon: Palmtree, title: 'PLAYAS', action: 'relájate' },
    { icon: Church, title: 'PUEBLOS MÁGICOS', action: 'descubre' },
    { icon: Mountain, title: 'NATURALEZA', action: 'explora' },
    { icon: Building2, title: 'CIUDADES', action: 'vive experiencias únicas' },
    { icon: Plane, title: 'AEROPUERTOS', action: 'llegamos a tiempo' },
  ];

  return (
    <section id="destinos" className="py-20 bg-surface relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bloque Destinos Que Inspiran (Directo del Flyer Oficial) */}
        <div className="mb-20 text-center">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-brand-primary block mb-2 font-heading">
            DESTINOS QUE INSPIRAN
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-4">
            {inspirationalCategories.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-surface-card border border-border shadow-soft flex flex-col items-center justify-center text-center group hover:border-brand-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6 text-brand-primary" />
                  </div>
                  <span className="text-xs font-black tracking-wider text-title uppercase font-heading">
                    {cat.title}
                  </span>
                  <span className="text-xs italic text-brand-primary font-medium mt-0.5">
                    {cat.action}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cabecera de Tours Populares */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-primary px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20">
              Rutas y Paquetes Frecuentes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-title mt-3 font-heading">
              Destinos Populares con Todo Incluido
            </h2>
            <p className="text-text-muted mt-2 text-base">
              Selecciona tu ruta de interés y solicita tu cotización exacta. Incluye casetas completas, combustible, seguro de viajero y chofer federal certificado.
            </p>
          </div>

          {/* Selector de capacidad para la solicitud de cotización */}
          <div className="flex items-center gap-2 bg-background p-1.5 rounded-2xl border border-border shrink-0 self-start md:self-auto">
            <span className="text-xs font-bold text-text-muted px-2">Unidad:</span>
            <button
              onClick={() => setSelectedPax(20)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedPax === 20
                  ? 'bg-brand-primary text-white shadow-sm'
                  : 'text-title hover:bg-surface-hover'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>20 Pasajeros</span>
            </button>
            <button
              onClick={() => setSelectedPax(14)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedPax === 14
                  ? 'bg-brand-primary text-white shadow-sm'
                  : 'text-title hover:bg-surface-hover'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>14 Pasajeros</span>
            </button>
          </div>
        </div>

        {/* Rejilla de Tours */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOURS_DATA.map((tour) => {
            return (
              <div
                key={tour.id}
                className="group bg-white dark:bg-surface-card rounded-3xl border border-border shadow-soft hover:shadow-card-hover hover:border-brand-primary/50 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Imagen del Destino con Badges */}
                <div className="relative h-52 overflow-hidden bg-slate-800">
                  <img
                    src={tour.imageUrl}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Badge de Categoría */}
                  <div className="absolute top-3 left-3 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-title border border-border">
                    {tour.category}
                  </div>

                  {tour.isPopular && (
                    <div className="absolute top-3 right-3 bg-brand-primary text-white px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md">
                      Alta Demanda
                    </div>
                  )}

                  {/* Destino y Duración en el overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="flex items-center gap-1 font-semibold truncate">
                      <MapPin className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                      {tour.destination}
                    </span>
                    <span className="flex items-center gap-1 font-medium text-slate-300 shrink-0">
                      <Clock className="w-3.5 h-3.5" />
                      {tour.durationText}
                    </span>
                  </div>
                </div>

                {/* Contenido de la Tarjeta */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-title group-hover:text-brand-primary transition-colors font-heading leading-tight">
                      {tour.title}
                    </h3>
                    <p className="text-text-muted text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                      {tour.description}
                    </p>
                  </div>

                  {/* Lo que incluye en viñetas rápidas */}
                  <div className="bg-background/80 p-3 rounded-xl border border-border/70 space-y-1.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-text-muted flex items-center gap-1.5">
                      <Fuel className="w-3.5 h-3.5 text-brand-primary" />
                      <span>Casetas y combustible cubiertos</span>
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-text-muted flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-primary" />
                      <span>Seguro de viajero y chofer federal</span>
                    </div>
                  </div>

                  {/* Botón de Cotización Directa por WhatsApp */}
                  <div className="pt-2 border-t border-border flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-brand-primary block tracking-wider">
                        Cotización Inmediata
                      </span>
                      <span className="text-xs font-semibold text-text-muted">
                        Para Sprinter {selectedPax} Pax
                      </span>
                    </div>

                    <a
                      href={buildTourWhatsAppUrl(tour.title, selectedPax)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-primary hover:bg-brand-primary-hover text-white rounded-xl text-xs font-bold transition-all shadow-md group/btn"
                      title="Solicitar cotización para esta ruta"
                    >
                      <MessageSquareText className="w-4 h-4" />
                      <span>Cotizar Ruta</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Banner de ruta a la medida con fondo azul marino oscuro permanente */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0b2d4f] via-[#082038] to-[#04111f] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
          <div>
            <h4 className="text-xl sm:text-2xl font-black font-heading text-white">
              ¿Tu destino o evento no está en la lista?
            </h4>
            <p className="text-slate-300 text-sm mt-1 max-w-xl">
              Cotizamos viajes a cualquier ciudad de la República Mexicana, bodas, graduaciones, traslados corporativos o circuitos familiares a la medida.
            </p>
          </div>
          <a
            href="#cotizador"
            className="shrink-0 bg-brand-primary hover:bg-brand-primary-hover text-white font-black text-sm px-7 py-3.5 rounded-xl shadow-lg transition-transform active:scale-95"
          >
            Armar Itinerario Personalizado
          </a>
        </div>

      </div>
    </section>
  );
};
