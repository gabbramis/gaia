'use client';

import { motion } from 'motion/react';
import { fadeInLeft, fadeInRight } from '@/lib/animations';
import Image from 'next/image';

export function About() {
  return (
    <section
      id="nosotros"
      className="relative min-h-screen bg-[#500712] py-32 px-6 md:px-12 flex items-center border-t border-[#ED9ABC]/10"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInLeft}
            className="relative"
          >
            {/* Decorative Line */}
            <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-[#ED9ABC]/20 hidden md:block" />

            <span className="block text-[#ED9ABC] text-sm tracking-[0.3em] uppercase mb-6">
              Who We Are
            </span>

            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#F1DFD1] mb-10 tracking-tight leading-[0.9]">
              Nosotras
            </h2>

            <div className="font-sans text-lg md:text-xl text-[#F1DFD1]/80 leading-relaxed space-y-8 tracking-wide">
              <p>
                Somos un estudio creativo que cree en el{' '}
                <span className="text-[#ED9ABC] italic font-serif text-2xl">poder de la estética</span>{' '}
                y la estrategia para construir marcas memorables.
              </p>

              <p>
                Nuestro enfoque combina{' '}
                <span className="text-[#ED9ABC] italic font-serif text-2xl">diseño editorial</span>,{' '}
                pensamiento estratégico y una sensibilidad femenina que transforma lo ordinario en extraordinario.
              </p>

              <p>
                Trabajamos con marcas que buscan algo más que lo convencional. Marcas que{' '}
                <span className="text-[#ED9ABC] italic font-serif text-2xl">aspiran a ser arte</span>.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInRight}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden border border-[#ED9ABC]/30 p-4">
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src="about-section.jpg"
                  alt="about-section"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Overlay Texture */}
                <div className="absolute inset-0 bg-[#500712]/20 mix-blend-multiply pointer-events-none" />
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-[#ED9ABC] z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
