import type { Metadata } from 'next';
import { CustomWebLanding } from './CustomWebLanding';

const disenoWebUrl = 'https://gaiastudio.com.uy/diseno-web';

export const metadata: Metadata = {
  title: 'Diseño Web y E-commerce',
  description: 'Creamos sitios web funcionales, estéticos y alineados con la identidad de tu marca. Landing pages, sitios institucionales y tiendas online completas.',
  openGraph: {
    title: 'Diseño Web y E-commerce | Gaia Studio',
    description: 'Creamos sitios web funcionales, estéticos y alineados con la identidad de tu marca. Landing pages, sitios institucionales y tiendas online completas.',
    url: disenoWebUrl,
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diseño Web y E-commerce | Gaia Studio',
    description: 'Creamos sitios web funcionales, estéticos y alineados con la identidad de tu marca. Landing pages, sitios institucionales y tiendas online completas.',
    images: ['/gaia-fullname.png'],
  },
  alternates: {
    canonical: disenoWebUrl,
  },
};

export default function DisenoWebPage() {
  return <CustomWebLanding />;
}
