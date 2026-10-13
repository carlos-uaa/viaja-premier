export interface QuoteRequest {
  origin: string;
  destination: string;
  passengers: 14 | 20;
  tripType: 'redondo' | 'solo-ida';
  departureDate: string;
  departureTime: string;
  returnDate?: string;
  returnTime?: string;
  clientName: string;
  clientPhone: string;
  additionalStops?: string;
}

export interface QuoteCalculationResult {
  estimatedTotal: number;
  perPersonCost: number;
  details: {
    baseVehicleRate: number;
    estimatedTollsAndFuel: number;
    insuranceAndTracking: string;
  };
  whatsappUrl: string;
}
