export type Locale = "en" | "ar";

export interface TranslationKeys {
  nav: {
    home: string;
    about: string;
    services: string;
    treatments: string;
    store: string;
    aiTools: string;
    blog: string;
    booking: string;
    language: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
    stat4Value: string;
    stat4Label: string;
  };
  doctor: {
    name: string;
    title: string;
    specialties: string[];
    bio: string;
    university: string;
    experience: string;
  };
  services: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  laser: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    benefits: string[];
    cta: string;
  };
  endoscopy: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    procedures: Array<{ name: string; description: string }>;
    cta: string;
  };
  store: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    addToCart: string;
    buy: string;
    currency: string;
    products: Array<{
      title: string;
      description: string;
      price: number;
      tag: string;
    }>;
  };
  aiTools: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    tryNow: string;
    comingSoon: string;
    tools: Array<{
      title: string;
      description: string;
      available: boolean;
    }>;
  };
  blog: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    readMore: string;
    articles: Array<{
      title: string;
      excerpt: string;
      category: string;
      date: string;
      readTime: string;
    }>;
  };
  booking: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    name: string;
    email: string;
    phone: string;
    service: string;
    date: string;
    message: string;
    submit: string;
    whatsapp: string;
    services: string[];
  };
  footer: {
    description: string;
    quickLinks: string;
    services: string;
    contact: string;
    address: string;
    phone: string;
    email: string;
    rights: string;
    disclaimer: string;
    privacy: string;
    terms: string;
  };
  whatsapp: {
    title: string;
    subtitle: string;
    cta: string;
  };
}
