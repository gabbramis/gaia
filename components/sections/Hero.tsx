'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

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
      className="relative h-screen w-full overflow-hidden bg-[#500712]"
    >
      {/* Texture Overlay */}
      <div className="texture-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 md:px-12">
        <div className="max-w-7xl text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-7xl md:text-9xl lg:text-[12rem] leading-[0.85] tracking-premium text-white mb-8"
          >
            <span className="block text-tight">Donde las</span>
            <span className="block text-[#ED9ABC] text-tight italic">marcas</span>
            <span className="block text-tight">se vuelven</span>
            <span className="block text-[#FFB8D5] text-tight italic">arte</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="font-sans text-lg md:text-xl lg:text-2xl text-[#FFB8D5] tracking-wide max-w-3xl mx-auto mb-12"
          >
            Un estudio creativo que eleva marcas con intención, estética y visión.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          >
            <Button
              size="lg"
              onClick={handleCTA}
              className="bg-[#ED9ABC] text-[#500712] hover:bg-[#FFB8D5] shadow-pink text-lg px-10 py-6 h-auto font-semibold transition-all duration-300 hover:scale-105"
            >
              Contáctanos
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-[#FFB8D5] rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-[#FFB8D5] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
