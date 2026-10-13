export interface Amenity {
  id: string;
  name: string;
  description: string;
  iconName: 'wifi' | 'shield' | 'tv' | 'snowflake' | 'battery-charging' | 'briefcase' | 'user-check' | 'navigation';
}

export interface Vehicle {
  id: string;
  name: string;
  model: string;
  capacity: 14 | 20;
  tagline: string;
  description: string;
  imageUrl: string;
  gallery: string[];
  specs: {
    seating: string;
    luggage: string;
    airConditioning: string;
    multimedia: string;
    safety: string;
  };
  amenities: Amenity[];
  includedBenefits: string[];
  badge?: string;
}
