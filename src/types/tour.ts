export interface TourPackage {
  id: string;
  title: string;
  category: 'Religioso' | 'Playa' | 'Pueblo Mágico' | 'Corporativo / Aeropuerto';
  origin: string;
  destination: string;
  durationText: string;
  distanceApprox: string;
  suggestedPrice14Pax: number;
  suggestedPrice20Pax: number;
  highlight: string;
  description: string;
  imageUrl: string;
  included: string[];
  isPopular?: boolean;
}
