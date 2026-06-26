import type { Metadata } from 'next';
import { CustomCampanasLanding } from './CustomCampanasLanding';

const campanasUrl = 'https://gaiastudio.com.uy/campanas-publicitarias';

export const metadata: Metadata = {
  title: 'Campañas Publicitarias 360',
  description: 'Disenamos y ejecutamos campañas publicitarias con ideas creativas, produccion de contenido y pauta digital estrategica para maximizar el impacto.',
  openGraph: {
    title: 'Campañas Publicitarias 360 | Gaia Studio',
    description: 'Disenamos y ejecutamos campañas publicitarias con ideas creativas, produccion de contenido y pauta digital estrategica para maximizar el impacto.',
    url: campanasUrl,
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Campañas Publicitarias 360 | Gaia Studio',
    description: 'Disenamos y ejecutamos campañas publicitarias con ideas creativas, produccion de contenido y pauta digital estrategica para maximizar el impacto.',
    images: ['/gaia-fullname.png'],
  },
  alternates: {
    canonical: campanasUrl,
  },
};

export default function CampanasPublicitariasPage() {
  return <CustomCampanasLanding />;
}

