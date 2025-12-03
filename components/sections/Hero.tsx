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
      className="relative h-screen w-full overflow-hidden bg-[#500712] text-[#F1DFD1]"
    >
      {/* Texture Overlay */}
      <div className="texture-overlay absolute inset-0" />



      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 md:px-12 pt-20">

        <div className="max-w-7xl text-center flex flex-col items-center">
          <div className="relative w-full max-w-2xl h-32 mb-8">
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
            className="font-serif text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] tracking-tight text-[#F1DFD1] mb-6 relative"
          >
            <span className="block">Donde tu negocio</span>
            <span className="block font-monsieur text-[#ED9ABC] text-7xl md:text-9xl lg:text-[11rem] -mt-4 md:-mt-8 lg:-mt-12 opacity-90">
              se vuelve arte
            </span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-[1px] bg-[#ED9ABC] my-8"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            className="font-sans text-sm md:text-base text-[#F1DFD1]/80 tracking-[0.2em] uppercase max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Un estudio creativo que eleva marcas con intención, estética y visión.

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
              className="bg-transparent border border-[#ED9ABC] text-[#ED9ABC] hover:bg-[#ED9ABC] hover:text-[#500712] rounded-none px-12 py-6 text-sm tracking-[0.15em] uppercase transition-all duration-500"
            >
              Agenda una reunion
            </Button>
          </motion.div>
        </div>
      </div>


    </section>
  );
}
