import type { Metadata } from 'next';
import { CustomComoFuncionaSeo } from './CustomComoFuncionaSeo';

export const metadata: Metadata = {
  title: '¿Cómo Funciona el SEO? | Guía Completa | Gaia Studio',
  description: 'Entendé cómo funciona el SEO, cómo Google posiciona sitios, y qué factores influyen en el ranking orgánico. Guía educativa de Gaia Studio.',
  openGraph: {
    title: '¿Cómo Funciona el SEO? | Guía Completa | Gaia Studio',
    description: 'Entendé cómo funciona el SEO, cómo Google posiciona sitios, y qué factores influyen en el ranking orgánico.',
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  alternates: {
    canonical: '/recursos/como-funciona-el-seo',
  },
};

export default function ComoFuncionaSeoPage() {
  return <CustomComoFuncionaSeo />;
}
