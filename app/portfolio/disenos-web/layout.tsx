import type { Metadata } from 'next';

const portfolioDisenosWebUrl = 'https://gaiastudio.com.uy/portfolio/disenos-web';

export const metadata: Metadata = {
  title: 'Portfolio de Diseños Web',
  description:
    'Conocé sitios web y e-commerce creados por Gaia Studio para marcas que necesitan una presencia digital funcional, clara y alineada con su identidad.',
  openGraph: {
    title: 'Portfolio de Diseños Web | Gaia Studio',
    description:
      'Conocé sitios web y e-commerce creados por Gaia Studio para marcas que necesitan una presencia digital funcional, clara y alineada con su identidad.',
    url: portfolioDisenosWebUrl,
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  alternates: {
    canonical: portfolioDisenosWebUrl,
  },
};

export default function PortfolioDisenosWebLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
