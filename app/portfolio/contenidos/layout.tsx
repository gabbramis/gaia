import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio de Contenidos',
  description:
    'Explorá el portfolio de contenidos de Gaia Studio con fotografía, reels y campañas para marcas de gastronomía, moda, joyería y más.',
  openGraph: {
    title: 'Portfolio de Contenidos | Gaia Studio',
    description:
      'Explorá el portfolio de contenidos de Gaia Studio con fotografía, reels y campañas para marcas de gastronomía, moda, joyería y más.',
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  alternates: {
    canonical: '/portfolio/contenidos',
  },
};

export default function PortfolioContenidosLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
