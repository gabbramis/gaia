import type { Metadata } from 'next';

const serviciosUrl = 'https://gaiastudio.com.uy/servicios';

export const metadata: Metadata = {
  title: 'Servicios de Marketing y Desarrollo Web',
  description:
    'Conocé los servicios de Gaia Studio en Montevideo: estrategia de marketing, contenido, redes, desarrollo web, SEO y branding para marcas de Uruguay.',
  openGraph: {
    title: 'Servicios de Marketing y Desarrollo Web | Gaia Studio',
    description:
      'Estrategia de marketing, contenido, redes y desarrollo web para marcas y pymes de Uruguay.',
    url: serviciosUrl,
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios de Marketing y Desarrollo Web | Gaia Studio',
    description:
      'Estrategia de marketing, contenido, redes y desarrollo web para marcas y pymes de Uruguay.',
    images: ['/gaia-fullname.png'],
  },
  alternates: {
    canonical: serviciosUrl,
  },
};

export default function ServiciosLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
