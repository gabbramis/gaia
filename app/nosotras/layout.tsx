import type { Metadata } from 'next';

const nosotrasUrl = 'https://gaiastudio.com.uy/nosotras';

export const metadata: Metadata = {
  title: 'Nosotras',
  description:
    'Conoce a Gaia Studio, un estudio creativo de Montevideo que une estrategia, diseno editorial y sensibilidad visual para construir marcas memorables.',
  openGraph: {
    title: 'Nosotras | Gaia Studio',
    description:
      'Conoce a Gaia Studio, un estudio creativo de Montevideo que une estrategia, diseno editorial y sensibilidad visual para construir marcas memorables.',
    url: nosotrasUrl,
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nosotras | Gaia Studio',
    description:
      'Conoce a Gaia Studio, un estudio creativo de Montevideo que une estrategia, diseno editorial y sensibilidad visual para construir marcas memorables.',
    images: ['/gaia-fullname.png'],
  },
  alternates: {
    canonical: nosotrasUrl,
  },
};

export default function NosotrasLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
