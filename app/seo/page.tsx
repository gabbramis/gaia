import type { Metadata } from 'next';
import { CustomSeoLanding } from './CustomSeoLanding';

const seoUrl = 'https://gaiastudio.com.uy/seo';

export const metadata: Metadata = {
  title: 'SEO y Posicionamiento',
  description: 'Optimizamos tu presencia digital para que tu marca sea facilmente encontrada en buscadores. SEO tecnico, SEO local y optimizacion para Google.',
  openGraph: {
    title: 'SEO y Posicionamiento | Gaia Studio',
    description: 'Optimizamos tu presencia digital para que tu marca sea facilmente encontrada en buscadores. SEO tecnico, SEO local y optimizacion para Google.',
    url: seoUrl,
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO y Posicionamiento | Gaia Studio',
    description: 'Optimizamos tu presencia digital para que tu marca sea facilmente encontrada en buscadores. SEO tecnico, SEO local y optimizacion para Google.',
    images: ['/gaia-fullname.png'],
  },
  alternates: {
    canonical: seoUrl,
  },
};

export default function SeoPage() {
  return <CustomSeoLanding />;
}
