'use client';

import { motion } from 'motion/react';
import { fadeInLeft, fadeInRight } from '@/lib/animations';


export function About() {
  return (
    <section
      id="nosotras"
      className="relative bg-[#500712] py-16 md:py-32 px-6 md:px-12 border-t border-[#ED9ABC]/10"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

          {/* Left Column: Title & Context */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <span className="block text-[#ED9ABC] text-sm tracking-[0.3em] uppercase mb-8 flex items-center gap-4">
                <span className="w-12 h-px bg-[#ED9ABC]" />
                Who We Are
              </span>

              <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#F1DFD1] mb-12 tracking-tighter leading-[0.8]">
                Noso<br />tras<span className="text-[#ED9ABC]">.</span>
              </h2>

              <div className="hidden lg:block w-full h-px bg-[#ED9ABC]/20 my-12" />

              <p className="font-sans text-[#F1DFD1]/60 text-sm tracking-widest uppercase">
                Est. 2025 — Montevideo
              </p>
            </motion.div>
          </div>

          {/* Right Column: Editorial Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="lg:col-span-7 space-y-12"
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
                Nuestro enfoque combina <span className="text-[#ED9ABC] italic font-serif">diseño editorial</span>, pensamiento estratégico y una sensibilidad femenina que transforma lo ordinario en extraordinario.
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
    </section>
  );
}
