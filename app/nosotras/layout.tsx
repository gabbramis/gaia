import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nosotras',
  description:
    'Conoce a Gaia Studio, un estudio creativo de Montevideo que une estrategia, diseno editorial y sensibilidad visual para construir marcas memorables.',
  openGraph: {
    title: 'Nosotras | Gaia Studio',
    description:
      'Conoce a Gaia Studio, un estudio creativo de Montevideo que une estrategia, diseno editorial y sensibilidad visual para construir marcas memorables.',
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  alternates: {
    canonical: '/nosotras',
  },
};

export default function NosotrasLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
