import type { Metadata } from 'next';

const portfolioUrl = 'https://gaiastudio.com.uy/portfolio';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Explora el portfolio de Gaia Studio con proyectos de branding, contenidos y diseno web creados para marcas que buscan una presencia digital cuidada.',
  openGraph: {
    title: 'Portfolio | Gaia Studio',
    description:
      'Explora el portfolio de Gaia Studio con proyectos de branding, contenidos y diseno web creados para marcas que buscan una presencia digital cuidada.',
    url: portfolioUrl,
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Gaia Studio',
    description:
      'Explora el portfolio de Gaia Studio con proyectos de branding, contenidos y diseno web creados para marcas que buscan una presencia digital cuidada.',
    images: ['/gaia-fullname.png'],
  },
  alternates: {
    canonical: portfolioUrl,
  },
};

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
