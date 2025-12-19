export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  // Extended details for modal
  longDescription: string;
  benefits: string[];
  caseStudy?: {
    title: string;
    summary: string;
  };
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SectionId {
  HOME = 'home',
  SERVICES = 'services',
  ABOUT = 'about',
  GALLERY = 'gallery',
  CONTACT = 'contact',
}