
export enum Page {
  Home,
  Search,
  Detail,
  Login,
}

export interface Review {
  author: string;
  avatarUrl: string;
  date: string;
  comment: string;
  rating: number;
}

export interface Testimonial {
  author: string;
  avatarUrl: string;
  comment: string;
  rating: number;
}

export interface Car {
  id: number;
  name: string;
  description: string;
  pricePerDay: number;
  imageUrl: string;
  gallery: string[];
  specs: {
    year: number;
    seats: number;
    transmission: 'Automatic' | 'Manual';
    fuel: 'Electric' | 'Gasoline' | 'Diesel' | 'Hybrid';
    type: 'SUV' | 'Sedan' | 'Hatchback' | 'Convertible' | 'Coupe';
    ac: boolean;
  };
  features: string[];
  location: string;
  rating: number;
  reviews: Review[];
}
