import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  tripType: string;
  rating: number;
  comment: string;
  avatarUrl: string;
}

export const Testimonials: React.FC = () => {
  const reviews: Testimonial[] = [
    {
      id: '1',
      name: 'Ing. Roberto Macías',
      role: 'Coordinador de Eventos',
      tripType: 'Convención Corporativa (20 Pax)',
      rating: 5,
      comment: 'Rentamos la Sprinter de 20 pasajeros para un traslado corporativo de directivos y conferencistas. La puntualidad del operador, la limpieza de la unidad y el aire acondicionado impecable. Facturación inmediata sin complicaciones.',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: '2',
      name: 'Familia González R.',
      role: 'Vacaciones Familiares',
      tripType: 'Viaje a Puerto Vallarta (4 Días)',
      rating: 5,
      comment: 'Viajamos 18 familiares a la playa. Nos dio muchísima paz saber que el chofer estaba descansado, el seguro vigente y las casetas ya incluidas en el contrato. Cero estrés en la carretera. 100% recomendados.',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: '3',
      name: 'Mtra. Elena Villalobos',
      role: 'Grupo Parroquial',
      tripType: 'Basílica de Guadalupe, CDMX',
      rating: 5,
      comment: 'Excelente experiencia de peregrinación. El operador fue muy atento con los adultos mayores y respetó todos los horarios del itinerario. El contrato firmado nos dio total certeza desde el primer momento.',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-surface relative border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-brand-primary px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20">
            Opiniones de Nuestros Viajeros
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-title mt-4 font-heading">
            Experiencias que Inspiran Confianza
          </h2>
          <p className="text-text-muted mt-3 text-base sm:text-lg">
            La tranquilidad de tu familia o equipo es nuestra mejor carta de recomendación.
          </p>
        </div>

        {/* Tarjetas de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-surface-card rounded-3xl p-7 border border-border shadow-soft hover:shadow-card-hover hover:border-brand-primary/40 transition-all flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-brand-primary/20 absolute top-6 right-6 pointer-events-none group-hover:text-brand-primary/40 transition-colors" />

              <div>
                {/* Estrellas */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-text-muted ml-2">5.0</span>
                </div>

                {/* Comentario */}
                <p className="text-text text-sm sm:text-base leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Perfil del Cliente */}
              <div className="pt-4 border-t border-border flex items-center gap-3.5">
                <img
                  src={rev.avatarUrl}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-primary/30"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-title font-heading">
                      {rev.name}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                  </div>
                  <span className="text-xs text-text-muted block">
                    {rev.role}
                  </span>
                  <span className="text-[11px] font-bold text-brand-primary block mt-0.5">
                    {rev.tripType}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
