import type { Metadata } from 'next';

const portfolioBrandingUrl = 'https://gaiastudio.com.uy/portfolio/branding';

export const metadata: Metadata = {
  title: 'Portfolio de Branding',
  description:
    'Descubrí proyectos de branding e identidad visual desarrollados por Gaia Studio para marcas que buscan una imagen coherente, sofisticada y memorable.',
  openGraph: {
    title: 'Portfolio de Branding | Gaia Studio',
    description:
      'Descubrí proyectos de branding e identidad visual desarrollados por Gaia Studio para marcas que buscan una imagen coherente, sofisticada y memorable.',
    url: portfolioBrandingUrl,
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  alternates: {
    canonical: portfolioBrandingUrl,
  },
};

export default function PortfolioBrandingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
