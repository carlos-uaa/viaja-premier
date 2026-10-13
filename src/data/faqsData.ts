export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Reservaciones' | 'Políticas' | 'Seguridad';
}

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'apartado-anticipo',
    question: '¿Cómo puedo apartar la camioneta y asegurar la fecha de mi viaje?',
    answer: 'Para garantizar la fecha y la unidad solicitada, es indispensable cubrir el porcentaje de anticipo convenido. Es importante considerar que mientras no se reciba el anticipo, la unidad permanece disponible para otros clientes. Una vez recibido el pago, la fecha queda formalmente reservada en el sistema.',
    category: 'Reservaciones'
  },
  {
    id: 'contrato-formal',
    question: '¿Se firma algún contrato de prestación de servicios?',
    answer: '¡Por supuesto! La formalidad es nuestra prioridad. Generamos un contrato formal de arrendamiento con chofer (en formato físico o digital escaneado). Este documento avala las condiciones del viaje, protege tus derechos como contratante y una copia es portada físicamente por el operador de la unidad asignada.',
    category: 'Políticas'
  },
  {
    id: 'itinerario-tiempos',
    question: '¿Con cuánto tiempo de anticipación se debe entregar el itinerario?',
    answer: 'El itinerario definitivo (puntos de abordaje, horarios de salida, paradas turísticas intermedias y destino final) debe quedar establecido a más tardar 48 horas antes de la fecha del viaje. Esto nos permite programar las rutas óptimas y asegurar la logística del operador.',
    category: 'Políticas'
  },
  {
    id: 'liquidacion-viaje',
    question: '¿Cuándo se debe liquidar el saldo restante del viaje?',
    answer: 'El viaje debe quedar 100% liquidado al menos 24 horas antes del horario de abordaje e inicio del viaje. Esto asegura que la unidad cuente con combustible cargado, viáticos asignados y la ruta autorizada sin demoras.',
    category: 'Políticas'
  },
  {
    id: 'paradas-adicionales',
    question: '¿Qué sucede si queremos hacer una parada o recorrido adicional no planeado?',
    answer: 'El presupuesto pactado incluye combustible y casetas para la ruta e itinerario establecidos. Si durante el viaje el grupo decide realizar traslados adicionales fuera de la ruta pactada, estos se cotizarán adicionalmente en acuerdo con el operador y la administración.',
    category: 'Políticas'
  },
  {
    id: 'seguro-viajero',
    question: '¿Qué cubre el seguro de viajero?',
    answer: 'Todas nuestras unidades Sprinter cuentan con póliza de seguro de viajero de cobertura amplia vigente, cumpliendo con los lineamientos de la Secretaría de Infraestructura, Comunicaciones y Transportes (SICT) para transporte turístico de pasajeros en autopistas federales.',
    category: 'Seguridad'
  },
  {
    id: 'monitoreo-satelital',
    question: '¿Cómo funciona el monitoreo satelital 24/7?',
    answer: 'Nuestras camionetas están conectadas en tiempo real mediante tecnología GPS satelital. Nuestra base operativa monitorea velocidad, paradas y ubicación exacta durante todo el día y la noche, brindando máxima tranquilidad a tu familia o empresa.',
    category: 'Seguridad'
  }
];
