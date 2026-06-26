import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Navigation } from '@/components/ui/Navigation';
import { Hero } from '@/components/sections/Hero';
import { Process } from '@/components/sections/Process';
import { Cta } from '@/components/sections/Cta';
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
            <span className="block text-[var(--gaia-pink)] text-sm tracking-[0.3em] uppercase mb-4">HABLEMOS</span>
            <h2 className="font-serif text-4xl md:text-6xl text-[var(--gaia-beige)] mb-6 tracking-tight">Contacto</h2>
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
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <main className="bg-[var(--gaia-burgundy)] min-h-screen overflow-x-hidden w-full">
      <Navigation />
      <Hero />
      <Cta />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
