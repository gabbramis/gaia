import type { Metadata } from 'next';
import { CustomIaLanding } from './CustomIaLanding';

const iaUrl = 'https://gaiastudio.com.uy/automatizaciones-ia';

export const metadata: Metadata = {
  title: 'Automatizaciones IA',
  description:
    'Agentes inteligentes, chatbots de WhatsApp y flujos automatizados con n8n. Automatiza tu negocio con IA.',
  openGraph: {
    title: 'Automatizaciones IA | Gaia Studio',
    description:
      'Agentes inteligentes, chatbots de WhatsApp y flujos automatizados con n8n. Automatiza tu negocio con IA.',
    url: iaUrl,
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automatizaciones IA | Gaia Studio',
    description:
      'Agentes inteligentes, chatbots de WhatsApp y flujos automatizados con n8n. Automatiza tu negocio con IA.',
    images: ['/gaia-fullname.png'],
  },
  alternates: {
    canonical: iaUrl,
  },
};

export default function AutomatizacionesIaPage() {
  return <CustomIaLanding />;
}
