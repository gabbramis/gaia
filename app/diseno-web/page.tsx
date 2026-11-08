import type { Metadata } from 'next';
import { CustomWebLanding } from './CustomWebLanding';

const disenoWebUrl = 'https://gaiastudio.com.uy/diseno-web';

export const metadata: Metadata = {
  title: 'Diseño y desarrollo web en Montevideo',
  description: 'Diseño y desarrollo web para marcas y pymes de Montevideo y Uruguay. Landing pages, sitios institucionales y tiendas online claras y fáciles de usar.',
  openGraph: {
    title: 'Diseño y desarrollo web en Montevideo | Gaia Studio',
    description: 'Sitios web para marcas y pymes de Uruguay: claros, cuidados y preparados para facilitar el contacto.',
    url: disenoWebUrl,
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diseño y desarrollo web en Montevideo | Gaia Studio',
    description: 'Sitios web para marcas y pymes de Uruguay: claros, cuidados y preparados para facilitar el contacto.',
    images: ['/gaia-fullname.png'],
  },
  alternates: {
    canonical: disenoWebUrl,
  },
};

export default function DisenoWebPage() {
  return <CustomWebLanding />;
}
