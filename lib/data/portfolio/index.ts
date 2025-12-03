import webDesignsData from './web-designs.json';
import fotosData from './fotos.json';
import reelsData from './reels.json';
import campanasData from './campanas.json';

import type {
  WebDesignProject,
  FotoItem,
  ReelItem,
  CampanaProject
} from '../types/portfolio';

// Type-safe data exports with type assertions
export const webDesigns: WebDesignProject[] = webDesignsData.projects as WebDesignProject[];
export const fotos: FotoItem[] = fotosData.items as FotoItem[];
export const reels: ReelItem[] = reelsData.items as ReelItem[];
export const campanas: CampanaProject[] = campanasData.campaigns as CampanaProject[];

// Utility functions for Web Designs
export const getWebDesignById = (id: string): WebDesignProject | undefined =>
  webDesigns.find(project => project.id === id);

export const getFeaturedWebDesigns = (): WebDesignProject[] =>
  webDesigns
    .filter(project => project.featured)
    .sort((a, b) => a.order - b.order);

export const getWebDesignsByCategory = (category: WebDesignProject['category']): WebDesignProject[] =>
  webDesigns
    .filter(project => project.category === category)
    .sort((a, b) => a.order - b.order);

// Utility functions for Fotos
export const getFotoById = (id: string): FotoItem | undefined =>
  fotos.find(item => item.id === id);

export const getFeaturedFotos = (): FotoItem[] =>
  fotos
    .filter(item => item.featured)
    .sort((a, b) => a.order - b.order);

export const getFotosByCategory = (category: FotoItem['category']): FotoItem[] =>
  fotos
    .filter(item => item.category === category)
    .sort((a, b) => a.order - b.order);

// Utility functions for Reels
export const getReelById = (id: string): ReelItem | undefined =>
  reels.find(item => item.id === id);

export const getFeaturedReels = (): ReelItem[] =>
  reels
    .filter(item => item.featured)
    .sort((a, b) => a.order - b.order);

// Utility functions for Campañas
export const getCampanaBySlug = (slug: string): CampanaProject | undefined =>
  campanas.find(campaign => campaign.id === slug);

export const getFeaturedCampanas = (): CampanaProject[] =>
  campanas
    .filter(campaign => campaign.featured)
    .sort((a, b) => a.order - b.order);

export const getCampanasByCategory = (category: CampanaProject['category']): CampanaProject[] =>
  campanas
    .filter(campaign => campaign.category === category)
    .sort((a, b) => a.order - b.order);

export const getCampanasByYear = (year: number): CampanaProject[] =>
  campanas
    .filter(campaign => campaign.year === year)
    .sort((a, b) => a.order - b.order);
