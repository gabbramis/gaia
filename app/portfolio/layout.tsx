import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Explora el portfolio de Gaia Studio con proyectos de branding, contenidos y diseno web creados para marcas que buscan una presencia digital cuidada.',
  openGraph: {
    title: 'Portfolio | Gaia Studio',
    description:
      'Explora el portfolio de Gaia Studio con proyectos de branding, contenidos y diseno web creados para marcas que buscan una presencia digital cuidada.',
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  alternates: {
    canonical: '/portfolio',
  },
};

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
