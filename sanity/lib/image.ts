import imageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';
import { sanityClient } from './client';

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export function urlFor(source: Image) {
  if (!builder) {
    throw new Error('Sanity image builder is not configured');
  }

  return builder.image(source);
}
