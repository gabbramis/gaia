import type { Metadata } from 'next';
import { CustomRedesLanding } from './CustomRedesLanding';

export const metadata: Metadata = {
  title: 'Gestion de Redes Sociales | Gaia Studio',
  description: 'Estrategia integral de redes sociales para construir y fortalecer la presencia digital de tu marca. Social media, community management y produccion de contenido.',
  openGraph: {
    title: 'Gestion de Redes Sociales | Gaia Studio',
    description: 'Estrategia integral de redes sociales para construir y fortalecer la presencia digital de tu marca.',
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  alternates: {
    canonical: '/gestion-redes-sociales',
  },
};

export default function GestionRedesSocialesPage() {
  return <CustomRedesLanding />;
}

