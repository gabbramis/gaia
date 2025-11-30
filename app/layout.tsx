import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Monsieur_La_Doulaise } from "next/font/google";

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
  title: "Gaia - Marketing, Publicidad y Desarrollo Web",
  description: "Agencia especializada en marketing digital, publicidad, branding, desarrollo web, redes sociales y contenido creativo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
       className={`${monsieur.variable} ${inter.variable} ${playfairDisplay.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
