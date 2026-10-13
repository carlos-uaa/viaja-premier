import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { QuoteRequest } from '../../types/quote';
import { Send, Calculator, MapPin, Calendar, Users, Info, Sparkles, CheckCircle, Clock, Route, FileCheck } from 'lucide-react';
import { buildQuoteWhatsAppUrl, TOURS_UNICO_DISPLAY_PHONE } from '../../utils/whatsapp';

export const QuickQuote: React.FC = () => {
  const [formData, setFormData] = useState<QuoteRequest>({
    origin: 'Aguascalientes, Ags.',
    destination: 'Basílica de Guadalupe, CDMX',
    passengers: 20,
    tripType: 'redondo',
    departureDate: '',
    departureTime: '06:00',
    returnDate: '',
    returnTime: '20:00',
    clientName: '',
    clientPhone: '',
    additionalStops: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildQuoteWhatsAppUrl(formData);
    window.open(url, '_blank');
  };

  return (
    <section id="cotizador" className="py-20 md:py-28 bg-background relative border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-brand-primary px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20">
            Itinerario Personalizado
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-secondary dark:text-white mt-4 font-heading">
            Arma tu Itinerario y Solicita Cotización
          </h2>
          <p className="text-text-muted mt-3 text-base sm:text-lg">
            Configura los detalles de tu viaje. Tu solicitud se enviará a nuestro WhatsApp oficial para que un asesor te asigne la tarifa exacta con casetas y combustible incluidos.
          </p>
        </div>

        {/* Contenedor del Cotizador */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Formulario de Entrada */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-7 bg-white dark:bg-surface-card p-6 sm:p-8 md:p-10 rounded-3xl border border-border shadow-card space-y-6"
          >
            <div className="flex items-center gap-3 pb-4 border-b border-border">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-secondary dark:text-white font-heading">
                  Puntos del Viaje
                </h3>
                <p className="text-xs text-text-muted">
                  Completa los datos de tu grupo para coordinar con el operador
                </p>
              </div>
            </div>

            {/* Datos Personales */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-brand-secondary dark:text-white mb-2">
                  Nombre o Razón Social *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Familia Gómez / Ing. Martínez"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text placeholder:text-text-muted text-base sm:text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/15 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-secondary dark:text-white mb-2">
                  Teléfono / WhatsApp *
                </label>
                <input
                  type="tel"
                  placeholder="Ej. 449 123 4567"
                  value={formData.clientPhone}
                  onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text placeholder:text-text-muted text-base sm:text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/15 transition-all"
                />
              </div>
            </div>

            {/* Origen y Destino */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-brand-secondary dark:text-white mb-2 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-brand-primary" />
                  Punto de Abordaje (Origen) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Aguascalientes, Ags."
                  value={formData.origin}
                  onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text text-base sm:text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/15 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-secondary dark:text-white mb-2 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Destino Final *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Basílica de Guadalupe, CDMX"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text text-base sm:text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/15 transition-all"
                />
              </div>
            </div>

            {/* Capacidad y Modalidad */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-brand-secondary dark:text-white mb-2 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-brand-primary" />
                  Capacidad de la Unidad *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, passengers: 20 })}
                    className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                      formData.passengers === 20
                        ? 'bg-brand-primary text-white border-brand-primary shadow-md'
                        : 'bg-background text-text border-border hover:bg-surface-hover'
                    }`}
                  >
                    20 Pasajeros
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, passengers: 14 })}
                    className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                      formData.passengers === 14
                        ? 'bg-brand-primary text-white border-brand-primary shadow-md'
                        : 'bg-background text-text border-border hover:bg-surface-hover'
                    }`}
                  >
                    14 Pasajeros
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-secondary dark:text-white mb-2">
                  Modalidad del Viaje *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, tripType: 'redondo' })}
                    className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                      formData.tripType === 'redondo'
                        ? 'bg-brand-primary text-white border-brand-primary shadow-md'
                        : 'bg-background text-text border-border hover:bg-surface-hover'
                    }`}
                  >
                    Viaje Redondo
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, tripType: 'solo-ida' })}
                    className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                      formData.tripType === 'solo-ida'
                        ? 'bg-brand-primary text-white border-brand-primary shadow-md'
                        : 'bg-background text-text border-border hover:bg-surface-hover'
                    }`}
                  >
                    Solo Ida
                  </button>
                </div>
              </div>
            </div>

            {/* Fechas y Horas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-brand-secondary dark:text-white mb-2 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-brand-primary" />
                  Fecha de Salida *
                </label>
                <input
                  type="date"
                  required
                  value={formData.departureDate}
                  onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text text-base sm:text-sm focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-secondary dark:text-white mb-2 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-brand-primary" />
                  Hora de Salida Estimada
                </label>
                <input
                  type="time"
                  value={formData.departureTime}
                  onChange={(e) => setFormData({ ...formData, departureTime: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text text-base sm:text-sm focus:outline-none focus:border-brand-primary"
                />
              </div>
            </div>

            {formData.tripType === 'redondo' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-border/60">
                <div>
                  <label className="block text-xs font-bold text-brand-secondary dark:text-white mb-2 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-brand-primary" />
                    Fecha de Regreso
                  </label>
                  <input
                    type="date"
                    value={formData.returnDate}
                    onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text text-base sm:text-sm focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-secondary dark:text-white mb-2 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-brand-primary" />
                    Hora de Regreso Estimada
                  </label>
                  <input
                    type="time"
                    value={formData.returnTime}
                    onChange={(e) => setFormData({ ...formData, returnTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text text-base sm:text-sm focus:outline-none focus:border-brand-primary"
                  />
                </div>
              </div>
            )}

            {/* Paradas adicionales */}
            <div>
              <label className="block text-xs font-bold text-brand-secondary dark:text-white mb-2">
                Escalas o Paradas Deseadas en Ruta (Opcional)
              </label>
              <textarea
                rows={2}
                placeholder="Ej. Parada en caseta para recoger pasajeros, escala para comer en camino..."
                value={formData.additionalStops}
                onChange={(e) => setFormData({ ...formData, additionalStops: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text text-base sm:text-sm focus:outline-none focus:border-brand-primary"
              />
              <p className="text-[11px] text-text-muted mt-1.5">
                * Todas las paradas se convienen previamente en el contrato. Movimientos adicionales durante el viaje se cotizan por separado.
              </p>
            </div>

            {/* Botón de Envío */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full inline-flex items-center justify-center gap-3 bg-brand-primary hover:bg-brand-primary-hover text-white font-black text-base py-4 rounded-xl shadow-lg shadow-brand-primary/25 hover:shadow-glow transition-all active:scale-98 cursor-pointer"
            >
              <Send className="w-5 h-5" />
              <span>Enviar Itinerario para Cotización Inmediata</span>
            </motion.button>
          </motion.form>

          {/* Tarjeta Lateral: Ficha de Itinerario en Tiempo Real */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Ficha / Ticket de Itinerario */}
            <div className="bg-white dark:bg-surface-card p-6 sm:p-8 rounded-3xl border border-border shadow-card relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <span className="text-xs font-black uppercase tracking-wider text-brand-secondary dark:text-white flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-brand-primary" />
                  Ficha de Solicitud
                </span>
                <span className="px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold border border-brand-primary/20">
                  Listo para Enviar
                </span>
              </div>

              {/* Resumen del Itinerario Seleccionado */}
              <div className="my-5 space-y-3.5 bg-background p-4 rounded-2xl border border-border/80">
                <div className="flex items-start gap-2.5">
                  <Route className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div className="text-xs leading-snug">
                    <span className="font-bold text-text-muted uppercase text-[10px] block">Ruta:</span>
                    <span className="font-bold text-brand-secondary dark:text-white">
                      {formData.origin || 'Origen'} ➔ {formData.destination || 'Destino'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-border/50 text-xs">
                  <div>
                    <span className="text-[10px] text-text-muted uppercase font-bold block">Unidad:</span>
                    <span className="font-semibold text-text">Sprinter {formData.passengers} Pax</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-text-muted uppercase font-bold block">Modalidad:</span>
                    <span className="font-semibold text-text">
                      {formData.tripType === 'redondo' ? 'Viaje Redondo' : 'Solo Ida'}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-border/50 text-xs">
                  <span className="text-[10px] text-text-muted uppercase font-bold block">Salida Tentativa:</span>
                  <span className="font-semibold text-text">
                    {formData.departureDate ? `${formData.departureDate} a las ${formData.departureTime}` : 'Por definir en WhatsApp'}
                  </span>
                </div>
              </div>

              {/* Mensaje de Transparencia de la Tarifa */}
              <div className="p-4 rounded-2xl bg-brand-primary/5 border border-brand-primary/20 mb-5">
                <span className="text-xs font-black uppercase tracking-wider text-brand-primary block mb-1">
                  Cotización Exacta y Transparente
                </span>
                <p className="text-xs text-text-muted leading-relaxed">
                  Para tu seguridad, calculamos el presupuesto exacto según el kilometraje oficial, las casetas de autopista vigentes y los tiempos de estancia. <strong>Sin costos sorpresa ni tarifas infladas.</strong>
                </p>
              </div>

              {/* Beneficios Incluidos en Toda Cotización Oficial */}
              <div className="space-y-3 py-4 border-y border-border/80">
                <h4 className="text-xs font-black uppercase tracking-wider text-brand-secondary dark:text-white">
                  Incluido en tu Contrato Formal:
                </h4>
                
                <div className="flex items-start gap-2.5 text-xs text-text">
                  <CheckCircle className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <span><strong>Operador Federal Certificado</strong> y sus viáticos</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-text">
                  <CheckCircle className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <span><strong>Casetas y combustible</strong> de la ruta pactada</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-text">
                  <CheckCircle className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <span><strong>Seguro de Viajero Amplio</strong> (póliza SICT)</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-text">
                  <CheckCircle className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <span><strong>Monitoreo Satelital GPS 24/7</strong> permanente</span>
                </div>
              </div>

              {/* Nota de anticipo y disponibilidad */}
              <div className="mt-5 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold">
                  <Info className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Regla de Disponibilidad:</span>
                </div>
                <p className="leading-relaxed">
                  La unidad se aparta formalmente al cubrir el porcentaje de anticipo. Sin anticipo, la unidad permanece disponible para otros clientes.
                </p>
              </div>
            </div>

            {/* Banner de Contacto Inmediato con fondo azul marino oscuro permanente */}
            <div className="p-6 rounded-3xl bg-[#0b2d4f] dark:bg-[#071829] text-white border border-white/10 shadow-card flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-primary text-white flex items-center justify-center font-black text-xl shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold text-sm font-heading text-white">
                  ¿Prefieres atención telefónica directa?
                </h5>
                <p className="text-xs text-slate-300 mt-0.5">
                  Llámanos al <strong className="text-brand-primary">{TOURS_UNICO_DISPLAY_PHONE}</strong> y resolvemos tu itinerario en 3 minutos.
                </p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
