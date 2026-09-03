import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Monsieur_La_Doulaise } from "next/font/google";
import { FacebookPixel } from '@/components/analytics/FacebookPixel';
import { WhatsAppFloatingButton } from '@/components/ui/WhatsAppFloatingButton';

const siteUrl = new URL("https://gaiastudio.com.uy");

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Gaia Studio",
  url: siteUrl.href,
  logo: `${siteUrl.href}/logo-pink.png`,
  image: `${siteUrl.href}/gaia-fullname.png`,
  description:
    "Agencia creativa en Montevideo, Uruguay. Especialistas en marketing digital, diseño web, branding, SEO y contenido para marcas.",
  areaServed: "Uruguay",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Montevideo",
    addressCountry: "UY",
  },
  sameAs: [
    "https://www.instagram.com/gaia_studio?igsh=MWszOGh5ZnN0MWxpag==",
    "https://wa.me/59891099805",
  ],
};

const monsieur = Monsieur_La_Doulaise({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-monsieur",
  display: 'swap',
  preload: false,
});


// Using Inter as a clean, modern sans-serif (approximating Codec Pro)
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// Using Playfair Display as an elegant serif (approximating Symphony)
const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Gaia Studio | Agencia Creativa y Desarrollo Web",
    template: "%s | Gaia Studio"
  },
  description: "Agencia creativa en Montevideo, Uruguay. Especialistas en marketing digital, diseño web, e-commerce, producción audiovisual, branding corporativo y gestión de social media.",
  authors: [{ name: "Gaia Studio" }],
  creator: "Gaia Studio",
  publisher: "Gaia Studio",
  openGraph: {
    title: "Gaia Studio | Agencia Creativa y Desarrollo Web",
    description: "Transformamos la esencia de tu proyecto en resultados. Especialistas en branding, contenido audiovisual, campañas 360 y sitios web funcionales.",
    url: siteUrl.href,
    siteName: "Gaia Studio",
    locale: "es_UY",
    type: "website",
    images: [
      {
        url: `${siteUrl.href}/gaia-fullname.png`,
        width: 1200,
        height: 630,
        alt: "Gaia Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaia Studio | Agencia Creativa y Desarrollo Web",
    description: "Transformamos la esencia de tu proyecto en resultados. Especialistas en branding, contenido audiovisual, campañas 360 y sitios web funcionales.",
    images: [`${siteUrl.href}/gaia-fullname.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    "facebook-domain-verification": "0psw2jz8o4parvsgrd98ggam7paiox",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="overflow-x-hidden">
      <body
        className={`${monsieur.variable} ${inter.variable} ${playfairDisplay.variable} antialiased font-sans overflow-x-hidden`}
      >
        <Script
          id="gaia-organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="gaia-google-analytics"
          src="https://www.googletagmanager.com/gtag/js?id=G-CW45R8E3FG"
          strategy="lazyOnload"
        />
        <Script
          id="gaia-google-analytics-init"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CW45R8E3FG');
            `,
          }}
        />
        <FacebookPixel />
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
