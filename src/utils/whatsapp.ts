import type { QuoteRequest } from '../types/quote';

export const TOURS_UNICO_PHONE = '524491224635'; // 449 122 4635 (Aguascalientes, México)
export const TOURS_UNICO_DISPLAY_PHONE = '449 122 4635';

/**
 * Genera la URL de WhatsApp para una solicitud formal de cotización
 */
export function buildQuoteWhatsAppUrl(quote: QuoteRequest): string {
  const parts: string[] = [
    '🚐 *HOLA TOURS ÚNICO - SOLICITUD FORMAL DE ITINERARIO*',
    '',
    `👤 *Nombre del Cliente:* ${quote.clientName || 'Cliente interesado'}`,
    quote.clientPhone ? `📱 *Teléfono de Contacto:* ${quote.clientPhone}` : '',
    '',
    `📍 *Punto de Abordaje (Origen):* ${quote.origin}`,
    `🏁 *Destino Final:* ${quote.destination}`,
    `👥 *Capacidad Solicitada:* Sprinter para ${quote.passengers} Pasajeros`,
    `🔄 *Modalidad:* ${quote.tripType === 'redondo' ? 'Viaje Redondo' : 'Solo Ida'}`,
    `📅 *Fecha y Hora de Salida:* ${quote.departureDate}${quote.departureTime ? ` a las ${quote.departureTime}` : ''}`,
  ];

  if (quote.tripType === 'redondo' && quote.returnDate) {
    parts.push(`🔙 *Fecha y Hora de Regreso:* ${quote.returnDate}${quote.returnTime ? ` a las ${quote.returnTime}` : ''}`);
  }

  if (quote.additionalStops) {
    parts.push(`🗺️ *Escalas / Paradas previstas:* ${quote.additionalStops}`);
  }

  parts.push('');
  parts.push('¿Me podrían brindar la cotización exacta para este itinerario con casetas, combustible y seguro incluidos, y los pasos para apartar fecha con anticipo? ¡Muchas gracias!');

  const text = encodeURIComponent(parts.filter(Boolean).join('\n'));
  return `https://wa.me/${TOURS_UNICO_PHONE}?text=${text}`;
}

/**
 * Genera la URL de WhatsApp para un tour o ruta frecuente
 */
export function buildTourWhatsAppUrl(tourTitle: string, passengers: 14 | 20): string {
  const parts: string[] = [
    '✨ *HOLA TOURS ÚNICO - COTIZACIÓN DE DESTINO*',
    '',
    `🗺️ *Me interesa cotizar la ruta a:* ${tourTitle}`,
    `👥 *Capacidad:* Sprinter para ${passengers} Pasajeros`,
    '',
    '¿Me podrían compartir disponibilidad para mis fechas tentativas y la cotización con casetas, chofer y combustible incluidos? ¡Quedo atento a su respuesta!',
  ];

  const text = encodeURIComponent(parts.join('\n'));
  return `https://wa.me/${TOURS_UNICO_PHONE}?text=${text}`;
}

/**
 * Mensaje genérico de consulta rápida
 */
export function buildQuickContactWhatsAppUrl(customSubject?: string): string {
  const text = encodeURIComponent(
    customSubject 
      ? `Hola Tours Único, me comunico desde su sitio web con respecto a: ${customSubject}. ¿Podrían brindarme información y disponibilidad?`
      : 'Hola Tours Único, vi su página web y me gustaría recibir información sobre la renta de camionetas Sprinter con chofer (8 a 20 pasajeros). ¡Viaja seguro, viaja cómodo!'
  );
  return `https://wa.me/${TOURS_UNICO_PHONE}?text=${text}`;
}
