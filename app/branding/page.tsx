import type { Metadata } from 'next';
import { CustomBrandingLanding } from './CustomBrandingLanding';

const brandingUrl = 'https://gaiastudio.com.uy/branding';

export const metadata: Metadata = {
  title: 'Branding e Identidad Visual',
  description: 'Construimos la identidad visual de tu marca desde cero o la renovamos. Logo, paleta cromatica, tipografias y sistema visual coherente.',
  openGraph: {
    title: 'Branding e Identidad Visual | Gaia Studio',
    description: 'Construimos la identidad visual de tu marca desde cero o la renovamos. Logo, paleta cromatica, tipografias y sistema visual coherente.',
    url: brandingUrl,
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Branding e Identidad Visual | Gaia Studio',
    description: 'Construimos la identidad visual de tu marca desde cero o la renovamos. Logo, paleta cromatica, tipografias y sistema visual coherente.',
    images: ['/gaia-fullname.png'],
  },
  alternates: {
    canonical: brandingUrl,
  },
};

export default function BrandingPage() {
  return <CustomBrandingLanding />;
}

