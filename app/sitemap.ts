import type { MetadataRoute } from 'next';

const siteUrl = 'https://gaiastudio.com.uy';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/servicios',
    '/gestion-redes-sociales',
    '/diseno-web',
    '/seo',
    '/branding',
    '/campanas-publicitarias',
    '/nosotras',
    '/portfolio',
    '/portfolio/contenidos',
    '/portfolio/disenos-web',
    '/portfolio/branding',
    '/blog',
    '/recursos',
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/portfolio') ? 0.8 : 0.7,
  }));
}
