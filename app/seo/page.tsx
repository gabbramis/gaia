import type { Metadata } from 'next';
import { CustomSeoLanding } from './CustomSeoLanding';

export const metadata: Metadata = {
  title: 'SEO y Posicionamiento | Gaia Studio',
  description: 'Optimizamos tu presencia digital para que tu marca sea facilmente encontrada en buscadores. SEO tecnico, SEO local y optimizacion para Google.',
  openGraph: {
    title: 'SEO y Posicionamiento | Gaia Studio',
    description: 'Optimizamos tu presencia digital para que tu marca sea facilmente encontrada en buscadores.',
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  alternates: {
    canonical: '/seo',
  },
};

export default function SeoPage() {
  return <CustomSeoLanding />;
}
