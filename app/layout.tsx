import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Monsieur_La_Doulaise } from "next/font/google";
import { FacebookPixel } from '@/components/analytics/FacebookPixel';

const monsieur = Monsieur_La_Doulaise({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-monsieur",
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
});

export const metadata: Metadata = {
  title: {
    default: "Gaia Studio | Agencia de Marketing, Producción y Desarrollo Web",
    template: "%s | Gaia Studio"
  },
  description: "Agencia creativa en Montevideo, Uruguay. Especialistas en marketing digital, diseño web, e-commerce, producción audiovisual, branding corporativo y gestión de social media.",
  keywords: [
    "agencia de marketing digital",
    "desarrollo web uruguay",
    "diseño de paginas web",
    "creacion de e-commerce",
    "producción audiovisual",
    "creación de contenido web",
    "fotografia y video corporativo",
    "cobertura de eventos",
    "diseño de branding",
    "identidad de marca",
    "community manager uruguay",
    "agencia social media",
    "campañas publicitarias 360",
    "agencia SEO",
    "posicionamiento web",
    "agencia creativa montevideo",
    "CRO y optimización web"
  ],
  authors: [{ name: "Gaia Studio" }],
  creator: "Gaia Studio",
  publisher: "Gaia Studio",
  openGraph: {
    title: "Gaia Studio | Agencia Creativa y Desarrollo Web",
    description: "Transformamos la esencia de tu proyecto en resultados. Especialistas en branding, contenido audiovisual, campañas 360 y sitios web funcionales.",
    siteName: "Gaia Studio",
    locale: "es_UY",
    type: "website",
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
        <FacebookPixel />
        {children}
      </body>
    </html>
  );
}
