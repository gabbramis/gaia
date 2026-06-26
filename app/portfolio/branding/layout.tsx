import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio de Branding',
  description:
    'Descubrí proyectos de branding e identidad visual desarrollados por Gaia Studio para marcas que buscan una imagen coherente, sofisticada y memorable.',
  openGraph: {
    title: 'Portfolio de Branding | Gaia Studio',
    description:
      'Descubrí proyectos de branding e identidad visual desarrollados por Gaia Studio para marcas que buscan una imagen coherente, sofisticada y memorable.',
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  alternates: {
    canonical: '/portfolio/branding',
  },
};

export default function PortfolioBrandingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
