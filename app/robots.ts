import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://gaiastudio.com.uy/sitemap.xml',
    host: 'https://gaiastudio.com.uy',
  };
}
