export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  unit: string;
  image: string;
  description: string;
  badge?: string;
  category: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  avatar: string;
  bio: string;
}
