'use client';

import { motion } from 'motion/react';
import { fadeInLeft, fadeInRight } from '@/lib/animations';
import Image from 'next/image';
import { aboutImages } from '@/lib/images';

export function About() {
  return (
    <section
      id="nosotros"
      className="relative min-h-screen bg-[#F1DFD1] py-32 px-6 md:px-12 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInLeft}
          >
            <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl text-[#500712] mb-8 text-tight tracking-premium">
              Nosotras
            </h2>

            <div className="font-sans text-xl md:text-2xl text-[#500712]/90 leading-relaxed space-y-6 text-relaxed">
              <p>
                Somos un estudio creativo que cree en el{' '}
                <span className="text-[#ED9ABC] font-semibold">poder de la estética</span>{' '}
                y la estrategia para construir marcas memorables.
              </p>

              <p>
                Nuestro enfoque combina{' '}
                <span className="text-[#ED9ABC] font-semibold">diseño editorial</span>,{' '}
                pensamiento estratégico y una sensibilidad femenina que transforma lo ordinario en extraordinario.
              </p>

              <p>
                Trabajamos con marcas que buscan algo más que lo convencional. Marcas que{' '}
                <span className="text-[#ED9ABC] font-semibold">aspiran a ser arte</span>.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInRight}
            className="relative"
          >
            <div className="relative aspect-[3/4] organic-shape-2 overflow-hidden border-offset-pink">
              <Image
                src={aboutImages.large.url}
                alt={aboutImages.large.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
