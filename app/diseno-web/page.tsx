import type { Metadata } from 'next';
import { CustomWebLanding } from './CustomWebLanding';

export const metadata: Metadata = {
  title: 'Diseño Web y E-commerce | Gaia Studio',
  description: 'Creamos sitios web funcionales, estéticos y alineados con la identidad de tu marca. Landing pages, sitios institucionales y tiendas online completas.',
  openGraph: {
    title: 'Diseño Web y E-commerce | Gaia Studio',
    description: 'Creamos sitios web funcionales, estéticos y alineados con la identidad de tu marca.',
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  alternates: {
    canonical: '/diseno-web',
  },
};

export default function DisenoWebPage() {
  return <CustomWebLanding />;
}
