'use client';

import { motion } from 'motion/react';
import { fadeInUp } from '@/lib/animations';
import Link from 'next/link';
import { ArrowRight, Sparkles, Eye, Heart } from 'lucide-react';

const cards = [
  {
    title: 'Servicios',
    description: 'Descubrí cómo podemos transformar tu marca con soluciones digitales a medida.',
    href: '/servicios',
    icon: Sparkles,
  },
  {
    title: 'Portfolio',
    description: 'Explorá los proyectos que ya confiaron en nuestra visión creativa.',
    href: '/portfolio',
    icon: Eye,
  },
  {
    title: 'Nosotras',
    description: 'Conocé la historia y el equipo detrás de Gaia Studio.',
    href: '/nosotras',
    icon: Heart,
  },
];

export function Cta() {
  return (
    <section className="relative bg-[var(--gaia-burgundy)] py-24 md:py-40 px-6 md:px-12 border-t border-[var(--gaia-pink)]/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16 md:mb-24"
        >
          <span className="block text-[var(--gaia-pink)] text-sm tracking-[0.3em] uppercase mb-4">
            Explorá
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-[var(--gaia-beige)] tracking-tight">
            Descubrí Gaia
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link
                href={card.href}
                className="group block h-full border border-[var(--gaia-pink)]/20 bg-[var(--gaia-pink)]/5 hover:bg-[var(--gaia-pink)]/10 transition-all duration-500 p-8 md:p-10"
              >
                <card.icon
                  size={28}
                  className="text-[var(--gaia-pink)] mb-6 group-hover:scale-110 transition-transform duration-500"
                />
                <h3 className="font-serif text-3xl md:text-4xl text-[var(--gaia-beige)] mb-4 group-hover:text-[var(--gaia-pink)] transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="font-sans text-[var(--gaia-beige)]/60 text-sm leading-relaxed mb-8">
                  {card.description}
                </p>
                <div className="flex items-center gap-2 text-[var(--gaia-pink)] text-xs tracking-widest uppercase group-hover:gap-4 transition-all duration-300">
                  <span>Explorar</span>
                  <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
