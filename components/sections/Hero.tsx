'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {
  const handleCTA = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-[var(--gaia-burgundy)] text-[var(--gaia-beige)]"
    >
      {/* Texture Overlay */}
      <div className="texture-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-6 md:px-12 py-20">

        <div className="max-w-7xl text-center flex flex-col items-center">
          <div className="relative w-full max-w-2xl h-14 sm:h-20 md:h-28 lg:h-32 mb-4 md:mb-8">
            <Image
              src="/gaia-name.png"
              alt="Gaia Studio"
              fill
              priority
              className="object-contain"
            />
          </div>
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-3xl sm:text-4xl md:text-7xl lg:text-[10rem] leading-[0.9] tracking-tight text-[var(--gaia-beige)] mb-2 md:mb-4 relative"
          >
            <span className="block">Donde tu negocio</span>
            <span className="block font-monsieur text-[var(--gaia-pink)] text-4xl sm:text-5xl md:text-8xl lg:text-[11rem] -mt-1 sm:-mt-2 md:-mt-8 lg:-mt-12 opacity-90">
              se vuelve arte
            </span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-16 md:w-24 h-[1px] bg-[var(--gaia-pink)] my-3 md:my-4"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            className="font-sans text-[11px] sm:text-xs md:text-base text-[var(--gaia-beige)]/80 tracking-[0.12em] sm:tracking-[0.15em] md:tracking-[0.2em] uppercase max-w-xl md:max-w-2xl mx-auto mb-4 md:mb-6 leading-relaxed"
          >
            Pensamos, diseñamos y ejecutamos soluciones digitales alineadas a
            los objetivos reales de tu negocio.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
          >
            <Button
              size="lg"
              onClick={handleCTA}
              className="bg-transparent border border-[var(--gaia-pink)] text-[var(--gaia-pink)] hover:bg-[var(--gaia-pink)] hover:text-[var(--gaia-burgundy)] rounded-none px-6 sm:px-10 md:px-12 py-3 sm:py-4 md:py-6 text-xs sm:text-sm tracking-[0.15em] uppercase transition-all duration-500"
            >
              Agenda una reunión
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
