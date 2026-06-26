import type { Metadata } from 'next';
import { CustomCampanasLanding } from './CustomCampanasLanding';

export const metadata: Metadata = {
  title: 'Campañas Publicitarias 360',
  description: 'Disenamos y ejecutamos campañas publicitarias con ideas creativas, produccion de contenido y pauta digital estrategica para maximizar el impacto.',
  openGraph: {
    title: 'Campañas Publicitarias 360 | Gaia Studio',
    description: 'Disenamos y ejecutamos campañas publicitarias con ideas creativas, produccion de contenido y pauta digital estrategica para maximizar el impacto.',
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  alternates: {
    canonical: '/campanas-publicitarias',
  },
};

export default function CampanasPublicitariasPage() {
  return <CustomCampanasLanding />;
}

