'use client';

import { motion } from 'motion/react';
import { fadeInLeft, fadeInRight, fadeInUp } from '@/lib/animations';
import Image from 'next/image';


export function About() {
  return (
    <section
      id="nosotras"
      className="relative bg-[#500712] py-16 md:py-32 px-6 md:px-12 border-t border-[#ED9ABC]/10"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

          {/* Left Column: Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="lg:col-span-5 relative order-2 lg:order-1"
          >
            {/* Decorative frame offset */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full border border-[#ED9ABC]/30 rounded-sm" />

            {/* Image container with overlay */}
            <div className="relative overflow-hidden rounded-sm">
              {/* Soft gradient overlay for brand cohesion */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#500712]/40 via-transparent to-[#500712]/10 z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-[#ED9ABC]/5 mix-blend-overlay z-10 pointer-events-none" />

              <Image
                src="/who-we-are.jpeg"
                alt="Fundadoras de Gaia Studio"
                width={500}
                height={600}
                className="w-full h-auto object-cover grayscale-[15%] contrast-[1.02] brightness-[0.98]"
                priority
              />
            </div>

            {/* Decorative accent */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t border-l border-[#ED9ABC]/50" />
          </motion.div>

          {/* Right Column: Title & Text */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <span className="block text-[#ED9ABC] text-sm tracking-[0.3em] uppercase mb-8 flex items-center gap-4">
                <span className="w-12 h-px bg-[#ED9ABC]" />
                Who We Are
              </span>

              <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#F1DFD1] mb-8 tracking-tighter leading-[0.8]">
                Nosotras<span className="text-[#ED9ABC]">.</span>
              </h2>

              <p className="font-sans text-[#F1DFD1]/60 text-sm tracking-widest uppercase mb-8">
                Est. 2025 — Montevideo
              </p>

              <div className="w-full h-px bg-[#ED9ABC]/20 mb-10" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-10"
            >
              {/* Lead Paragraph with Drop Cap */}
              <div className="relative">
                <p className="font-serif text-2xl md:text-3xl text-[#F1DFD1] leading-relaxed">
                  <span className="float-left text-7xl md:text-8xl text-[#ED9ABC] font-serif mr-4 mt-[-10px] leading-none">S</span>
                  omos un estudio creativo que cree en el poder de la estética y la estrategia para construir marcas memorables.
                </p>
              </div>

              {/* Secondary Text Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-[#F1DFD1]/80 text-lg leading-relaxed tracking-wide">
                <p>
                  Nuestro enfoque combina <span className="text-[#ED9ABC] italic font-serif">diseño editorial</span>, pensamiento estratégico y compromiso con la calidad que transforma lo ordinario en extraordinario.
                </p>
                <p>
                  Trabajamos con marcas que buscan algo más que lo convencional. Marcas que aspiran a <span className="text-[#ED9ABC] italic font-serif">ser arte</span>.
                </p>
              </div>

              {/* Signature / Decorative End */}
              <div className="pt-6 border-t border-[#ED9ABC]/10 flex justify-end">
                <div className="font-serif italic text-[#ED9ABC] text-2xl">
                  Gaia Studio
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
