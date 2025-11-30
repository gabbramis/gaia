// High-quality Unsplash images for the website
// These are placeholder images that can be replaced with custom brand photography

export const heroImages = {
  main: {
    url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=1400&fit=crop&q=80",
    alt: "Creative branding studio with pink aesthetic and modern workspace",
    search: "creative branding studio pink aesthetic workspace design",
  },
} as const;

export const serviceImages = {
  marketing: {
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop&q=80",
    alt: "Marketing digital workspace with analytics",
    search: "marketing digital workspace modern laptop",
  },
  branding: {
    url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=300&fit=crop&q=80",
    alt: "Brand identity design mockup",
    search: "brand identity design mockup minimalist",
  },
  content: {
    url: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=300&h=300&fit=crop&q=80",
    alt: "Creative content photography setup",
    search: "creative content photography pink aesthetic",
  },
} as const;

export const aboutImages = {
  large: {
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1000&fit=crop&q=80",
    alt: "Creative team collaborating in modern office",
    search: "creative team meeting modern office collaboration",
  },
  medium: {
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=600&fit=crop&q=80",
    alt: "Brand designer working on laptop",
    search: "brand designer workspace laptop design pink",
  },
  small: {
    url: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=300&h=400&fit=crop&q=80",
    alt: "Marketing strategy planning session",
    search: "marketing strategy planning coffee notepad aesthetic",
  },
} as const;

export const portfolioImages = {
  branding: {
    url: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&h=400&fit=crop&q=80",
    alt: "Premium branding mockup with business cards",
    search: "branding mockup business cards pink aesthetic",
  },
  website: {
    url: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=600&fit=crop&q=80",
    alt: "Modern website design on laptop",
    search: "website design mockup laptop modern interface",
  },
  social: {
    url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=800&fit=crop&q=80",
    alt: "Social media content grid layout",
    search: "social media content grid instagram pink",
  },
  packaging: {
    url: "https://images.unsplash.com/photo-1612033448550-9d6f9c17f07d?w=1200&h=600&fit=crop&q=80",
    alt: "Luxury brand packaging design",
    search: "luxury brand packaging design mockup",
  },
  advertising: {
    url: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=600&fit=crop&q=80",
    alt: "Modern advertising campaign poster",
    search: "advertising campaign poster modern design",
  },
  development: {
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&q=80",
    alt: "Web development code and UI design",
    search: "web development code screen ui design",
  },
  contentCreative: {
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=600&fit=crop&q=80",
    alt: "Creative content marketing photography",
    search: "creative content marketing photography",
  },
  brandGuidelines: {
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=800&fit=crop&q=80",
    alt: "Brand guidelines and design system",
    search: "brand guidelines design system mockup",
  },
} as const;

export const contactImages = {
  team: {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=200&fit=crop&q=80",
    alt: "Gaia creative team",
    search: "creative team portrait professional modern",
  },
} as const;

// Map portfolio items to images
export const getPortfolioImage = (id: number): string => {
  const imageMap: Record<number, string> = {
    1: portfolioImages.branding.url,
    2: portfolioImages.website.url,
    3: portfolioImages.social.url,
    4: portfolioImages.packaging.url,
    5: portfolioImages.advertising.url,
    6: portfolioImages.development.url,
    7: portfolioImages.contentCreative.url,
    8: portfolioImages.brandGuidelines.url,
  };
  return imageMap[id] || portfolioImages.branding.url;
};

// Map service IDs to images
export const getServiceImage = (id: number): { url: string; alt: string } | null => {
  const imageMap: Record<number, { url: string; alt: string }> = {
    1: serviceImages.marketing,
    3: serviceImages.branding,
    6: serviceImages.content,
  };
  return imageMap[id] || null;
};
