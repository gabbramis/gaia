import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Navigation } from '@/components/ui/Navigation';
import { Hero } from '@/components/sections/Hero';
import { Process } from '@/components/sections/Process';
import { Cta } from '@/components/sections/Cta';
import { FeaturedWork } from '@/components/sections/FeaturedWork';
import { ServicesStrip } from '@/components/sections/ServicesStrip';
import { Reviews } from '@/components/sections/Reviews';
import { Footer } from '@/components/sections/Footer';

const Contact = dynamic(
  () => import('@/components/sections/Contact').then((module) => module.Contact),
  {
    loading: () => (
      <section
        id="contacto"
        className="relative bg-[var(--gaia-burgundy)] py-12 md:py-20 px-6 md:px-12 flex items-center border-t border-[var(--gaia-pink)]/10"
      >
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-8 md:mb-12">
            <span className="block text-[var(--gaia-pink)] text-sm tracking-[0.3em] uppercase mb-4">Contacto</span>
            <h2 className="font-serif text-4xl md:text-6xl text-[var(--gaia-beige)] mb-4 tracking-tight">Hablemos de tu marca.</h2>
            <p className="font-sans text-[var(--gaia-beige)]/60 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Cargando formulario...
            </p>
          </div>
        </div>
      </section>
    ),
  }
);

export const metadata: Metadata = {
  title: 'Marketing y desarrollo web en Montevideo, Uruguay | Gaia Studio',
  description: 'Estrategia, contenido, gestión de redes y desarrollo web para marcas y pymes en Montevideo y Uruguay. Conocé nuestro trabajo y contanos tu proyecto.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Marketing y desarrollo web en Montevideo | Gaia Studio',
    description: 'Estrategia, contenido, redes y sitios web para marcas que quieren crecer con intención.',
    url: '/',
  },
};

export default function Home() {
  return (
    <main className="bg-[var(--gaia-burgundy)] min-h-screen overflow-x-hidden w-full">
      <Navigation />
      <Hero />
      <Cta />
      <FeaturedWork />
      <ServicesStrip />
      <Process />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
