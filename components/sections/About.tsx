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
      <div className="max-w-4xl mx-auto w-full">
        {/* Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInLeft}
          className="relative text-center"
        >
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
      </div>
    </section>
  );
}
