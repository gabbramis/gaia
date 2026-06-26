import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios de Marketing y Desarrollo Web',
  description:
    'Conoce los servicios de Gaia Studio: redes sociales, diseno web, SEO, branding y campanas publicitarias para marcas que buscan crecer con estrategia.',
  openGraph: {
    title: 'Servicios de Marketing y Desarrollo Web | Gaia Studio',
    description:
      'Conoce los servicios de Gaia Studio: redes sociales, diseno web, SEO, branding y campanas publicitarias para marcas que buscan crecer con estrategia.',
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  alternates: {
    canonical: '/servicios',
  },
};

export default function ServiciosLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
