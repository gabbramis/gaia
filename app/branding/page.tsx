import type { Metadata } from 'next';
import { CustomBrandingLanding } from './CustomBrandingLanding';

export const metadata: Metadata = {
  title: 'Branding e Identidad Visual',
  description: 'Construimos la identidad visual de tu marca desde cero o la renovamos. Logo, paleta cromatica, tipografias y sistema visual coherente.',
  openGraph: {
    title: 'Branding e Identidad Visual | Gaia Studio',
    description: 'Construimos la identidad visual de tu marca desde cero o la renovamos. Logo, paleta cromatica, tipografias y sistema visual coherente.',
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  alternates: {
    canonical: '/branding',
  },
};

export default function BrandingPage() {
  return <CustomBrandingLanding />;
}

