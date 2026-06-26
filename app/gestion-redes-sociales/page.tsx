import type { Metadata } from 'next';
import { CustomRedesLanding } from './CustomRedesLanding';

const redesUrl = 'https://gaiastudio.com.uy/gestion-redes-sociales';

export const metadata: Metadata = {
  title: 'Gestion de Redes Sociales',
  description: 'Estrategia integral de redes sociales para construir y fortalecer la presencia digital de tu marca. Social media, community management y produccion de contenido.',
  openGraph: {
    title: 'Gestion de Redes Sociales | Gaia Studio',
    description: 'Estrategia integral de redes sociales para construir y fortalecer la presencia digital de tu marca. Social media, community management y produccion de contenido.',
    url: redesUrl,
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gestion de Redes Sociales | Gaia Studio',
    description: 'Estrategia integral de redes sociales para construir y fortalecer la presencia digital de tu marca. Social media, community management y produccion de contenido.',
    images: ['/gaia-fullname.png'],
  },
  alternates: {
    canonical: redesUrl,
  },
};

export default function GestionRedesSocialesPage() {
  return <CustomRedesLanding />;
}

