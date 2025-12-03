// Portfolio Data Type Definitions

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface VideoEmbed {
  platform: 'youtube' | 'tiktok' | 'instagram' | 'vimeo';
  embedUrl: string;
  videoId?: string;
  thumbnail?: ImageAsset;
  aspectRatio?: '16:9' | '9:16' | '1:1' | '4:5';
}

export interface WebDesignProject {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: 'ecommerce' | 'landing' | 'corporate' | 'portfolio' | 'blog';
  images: {
    cover: ImageAsset;
    mockup?: ImageAsset;
    screenshots?: ImageAsset[];
  };
  url: string;
  technologies?: string[];
  year: number;
  featured: boolean;
  publishedAt: string;
  order: number;
}

export interface FotoItem {
  id: string;
  title: string;
  description?: string;
  category?: 'editorial' | 'product' | 'lifestyle' | 'event';
  client?: string;
  images: ImageAsset[];
  isCarousel: boolean;
  date: string;
  featured: boolean;
  order: number;
  tags?: string[];
}

export interface ReelItem {
  id: string;
  title: string;
  description?: string;
  client?: string;
  video: VideoEmbed;
  thumbnail?: ImageAsset;
  date: string;
  featured: boolean;
  order: number;
  tags?: string[];
}

export interface CampanaProject {
  id: string;
  title: string;
  subtitle?: string;
  client: string;
  description: string;
  longDescription?: string;
  category: 'lanzamiento' | 'apertura' | 'promocion' | 'evento' | 'aniversario';
  hero: {
    image?: ImageAsset;
    video?: VideoEmbed;
  };
  content: CampanaContentBlock[];
  date: string;
  year: number;
  duration?: string;
  featured: boolean;
  order: number;
  preview: {
    image: ImageAsset;
    excerpt: string;
  };
}

export type CampanaContentBlock =
  | { type: 'text'; content: string }
  | { type: 'image'; image: ImageAsset; caption?: string }
  | { type: 'images-grid'; images: ImageAsset[]; columns?: 2 | 3 | 4 }
  | { type: 'video'; video: VideoEmbed; caption?: string }
  | { type: 'quote'; text: string; author?: string }
  | { type: 'divider' }
  | { type: 'image-text'; image: ImageAsset; text: string; layout: 'left' | 'right' };
