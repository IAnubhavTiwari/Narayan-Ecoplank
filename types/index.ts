export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  images: string[];
  description: string;
  shortDescription: string;
  features: string[];
  applications: string[];
  specifications: Record<string, string>;
  downloads?: { name: string; url: string }[];
  featured: boolean;
  badge?: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
  location: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: string;
  featured: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  gst?: string;
  workingHours: string;
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
