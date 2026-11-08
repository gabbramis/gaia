import type { Metadata } from 'next';
import { CustomRedesLanding } from './CustomRedesLanding';

const redesUrl = 'https://gaiastudio.com.uy/gestion-redes-sociales';

export const metadata: Metadata = {
  title: 'Estrategia, contenido y redes en Montevideo',
  description: 'Estrategia de comunicación, producción de contenido y gestión de redes para marcas y pymes de Montevideo y Uruguay. Conocé cómo trabaja Gaia Studio.',
  openGraph: {
    title: 'Estrategia, contenido y redes en Montevideo | Gaia Studio',
    description: 'Marketing para marcas de Uruguay: estrategia de comunicación, contenido y gestión de redes.',
    url: redesUrl,
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estrategia, contenido y redes en Montevideo | Gaia Studio',
    description: 'Marketing para marcas de Uruguay: estrategia de comunicación, contenido y gestión de redes.',
    images: ['/gaia-fullname.png'],
  },
  alternates: {
    canonical: redesUrl,
  },
};

export default function GestionRedesSocialesPage() {
  return <CustomRedesLanding />;
}

