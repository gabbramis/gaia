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
      className="relative min-h-[78svh] w-full overflow-hidden bg-[var(--gaia-burgundy)] text-[var(--gaia-beige)] md:min-h-screen"
    >
      {/* Texture Overlay */}
      <div className="texture-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[78svh] w-full flex-col items-center justify-center px-6 py-14 md:min-h-screen md:px-12 md:py-20">

        <div className="max-w-7xl text-center flex flex-col items-center">
          <div className="relative mb-3 h-12 w-full max-w-2xl sm:h-20 md:mb-8 md:h-28 lg:h-32">
            <Image
              src="/gaia-name.png"
              alt="Gaia Studio"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 42rem"
              className="object-contain"
            />
          </div>
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-1 font-serif text-3xl leading-[0.92] tracking-tight text-[var(--gaia-beige)] sm:text-4xl md:mb-4 md:text-7xl lg:text-[10rem]"
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
            className="my-2 h-[1px] w-16 bg-[var(--gaia-pink)] md:my-4 md:w-24"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            className="mx-auto mb-3 max-w-xl font-sans text-[11px] leading-relaxed tracking-[0.12em] text-[var(--gaia-beige)]/80 uppercase sm:text-xs sm:tracking-[0.15em] md:mb-6 md:max-w-2xl md:text-base md:tracking-[0.2em]"
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
              className="rounded-none border border-[var(--gaia-pink)] bg-transparent px-6 py-3 text-xs tracking-[0.15em] text-[var(--gaia-pink)] uppercase transition-all duration-500 hover:bg-[var(--gaia-pink)] hover:text-[var(--gaia-burgundy)] sm:px-10 sm:py-4 sm:text-sm md:px-12 md:py-6"
            >
              Agenda una reunión
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
