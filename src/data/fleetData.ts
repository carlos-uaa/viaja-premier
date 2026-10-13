import type { Vehicle } from '../types/vehicle';

export const FLEET_DATA: Vehicle[] = [
  {
    id: 'sprinter-20',
    name: 'Sprinter Gran Turismo',
    model: 'Mercedes-Benz Sprinter 516 / 517 CDI',
    capacity: 20,
    tagline: 'Máxima capacidad para grupos grandes, familias y peregrinaciones',
    description: 'Nuestra unidad estelar diseñada para transportar hasta 20 pasajeros con confort total. Equipada con asientos ergonómicos reclinables, aire acondicionado de alto rendimiento y maletero posterior optimizado.',
    badge: 'Más Solicitada',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      seating: '20 asientos reclinables con cabecera y cinturón de 3 puntos',
      luggage: 'Espacio posterior para 18-20 maletas medianas',
      airConditioning: 'Doble clima independiente (cabina y pasajeros)',
      multimedia: 'Pantalla HD 24", sistema de audio Bluetooth y micrófono de guía',
      safety: 'Frenos ABS, control de estabilidad ESP y rastreo satelital GPS 24/7'
    },
    amenities: [
      { id: '1', name: 'Aire Acondicionado Bi-Zona', description: 'Climatización homogénea en todas las filas', iconName: 'snowflake' },
      { id: '2', name: 'Pantalla HD y Sonido Estéreo', description: 'Entretenimiento durante todo el trayecto', iconName: 'tv' },
      { id: '3', name: 'Conexiones de Carga USB', description: 'Mantén tus dispositivos siempre con batería', iconName: 'battery-charging' },
      { id: '4', name: 'Seguimiento Satelital 24/7', description: 'Monitoreo en tiempo real desde nuestra central', iconName: 'navigation' },
      { id: '5', name: 'Operador Certificado', description: 'Chofer con licencia federal y amplia experiencia en carretera', iconName: 'user-check' },
      { id: '6', name: 'Seguro de Viajero Amplio', description: 'Póliza de seguro vigente en autopistas y carreteras federales', iconName: 'shield' },
    ],
    includedBenefits: [
      'Casetas de peaje y combustible incluidos',
      'Seguro de viajero con cobertura amplia',
      'Operador federal certificado y viáticos',
      'Monitoreo satelital GPS en tiempo real',
      'Unidad sanitizada antes del abordaje'
    ]
  },
  {
    id: 'sprinter-14',
    name: 'Sprinter Ejecutiva VIP',
    model: 'Mercedes-Benz Sprinter 415 CDI VIP',
    capacity: 14,
    tagline: 'Confort premium y espacio extra para viajes corporativos y bodas',
    description: 'La opción ideal para grupos medianos que buscan el máximo nivel de confort. Asientos de piel tipo capitán con mayor distancia entre filas y espacio extendido de equipaje.',
    badge: 'Confort Premium',
    imageUrl: 'https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      seating: '14 butacas reclinables tipo capitán con vestiduras de tactopiel',
      luggage: 'Maletero extra amplio para 14 maletas grandes + equipaje de mano',
      airConditioning: 'Aire acondicionado automático digital de alta potencia',
      multimedia: 'Smart TV, audio envolvente y puertos USB individuales por asiento',
      safety: 'Asistente de frenado activo, sensores de carril y GPS satelital en vivo'
    },
    amenities: [
      { id: '1', name: 'Asientos de Piel Ejecutivos', description: 'Mayor distancia entre filas para descansar plenamente', iconName: 'briefcase' },
      { id: '2', name: 'Clima Digital Independiente', description: 'Control de temperatura individualizado', iconName: 'snowflake' },
      { id: '3', name: 'Puertos de Carga Individuales', description: 'Conexión tipo USB/Tipo-C en cada asiento', iconName: 'battery-charging' },
      { id: '4', name: 'Seguimiento Satelital 24/7', description: 'Control satelital de velocidad y ruta', iconName: 'navigation' },
      { id: '5', name: 'Operador Ejecutivo Uniformado', description: 'Trato profesional, puntual y discreto', iconName: 'user-check' },
      { id: '6', name: 'Seguro de Viajero Integral', description: 'Protección integral para todos los pasajeros', iconName: 'shield' },
    ],
    includedBenefits: [
      'Casetas y combustible 100% cubiertos en la ruta pactada',
      'Seguro de viajero y póliza médica a bordo',
      'Operador profesional y calificado',
      'Asistencia telefónica y rastreo 24/7',
      'Itinerario flexible según tus necesidades'
    ]
  }
];
