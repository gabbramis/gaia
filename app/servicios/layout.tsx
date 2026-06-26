import type { Metadata } from 'next';

const serviciosUrl = 'https://gaiastudio.com.uy/servicios';

export const metadata: Metadata = {
  title: 'Servicios de Marketing y Desarrollo Web',
  description:
    'Conoce los servicios de Gaia Studio: redes sociales, diseno web, SEO, branding y campanas publicitarias para marcas que buscan crecer con estrategia.',
  openGraph: {
    title: 'Servicios de Marketing y Desarrollo Web | Gaia Studio',
    description:
      'Conoce los servicios de Gaia Studio: redes sociales, diseno web, SEO, branding y campanas publicitarias para marcas que buscan crecer con estrategia.',
    url: serviciosUrl,
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios de Marketing y Desarrollo Web | Gaia Studio',
    description:
      'Conoce los servicios de Gaia Studio: redes sociales, diseno web, SEO, branding y campanas publicitarias para marcas que buscan crecer con estrategia.',
    images: ['/gaia-fullname.png'],
  },
  alternates: {
    canonical: serviciosUrl,
  },
};

export default function ServiciosLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
