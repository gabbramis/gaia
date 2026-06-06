'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/sections/Footer';
import { fadeInUp } from '@/lib/animations';
import { trackCustomEvent } from '@/lib/analytics/facebook-pixel';

export interface ServiceLandingProps {
  slug: string;
  breadcrumb: string;
  title: string;
  subtitle: string;
  description: string;
  includes: string[];
  problems: string[];
  process: { step: string; title: string; description: string }[];
  results: string[];
  ctaText?: string;
}

export function ServiceLanding({
  slug,
  breadcrumb,
  title,
  subtitle,
  description,
  includes,
  problems,
  process,
  results,
  ctaText = 'Coordinar una reunion',
}: ServiceLandingProps) {
  return (
    <main className="bg-[var(--gaia-burgundy)] min-h-screen overflow-x-hidden w-full">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-6 md:pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-[var(--gaia-pink)] hover:text-[var(--gaia-beige)] transition-colors duration-300 text-xs tracking-widest uppercase mb-6"
            >
              <ArrowLeft size={14} />
              {breadcrumb}
            </Link>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mt-6 md:mt-8"
          >
            <span className="block text-[var(--gaia-pink)] text-sm tracking-[0.3em] uppercase mb-4">
              NUESTROS SERVICIOS
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-[var(--gaia-beige)] tracking-tight mb-5">
              {title}
            </h1>
            <p className="font-sans text-[var(--gaia-beige)]/60 text-sm md:text-base leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduccion */}
      <section className="px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            className="border-t border-[var(--gaia-pink)]/15 pt-10 md:pt-14"
          >
            <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-4">
              QUE ES
            </span>
            <p className="font-sans text-[var(--gaia-beige)]/70 text-sm md:text-base leading-relaxed max-w-3xl">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Que incluye */}
      <section className="px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            className="border-t border-[var(--gaia-pink)]/15 pt-10 md:pt-14"
          >
            <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-6">
              QUE INCLUYE
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {includes.map((item, index) => (
                <div
                  key={item}
                  className="group p-5 md:p-6 border border-[var(--gaia-pink)]/10 border-t-2 border-t-[var(--gaia-pink)]/40 bg-[var(--gaia-pink)]/[0.03] hover:bg-[var(--gaia-pink)]/8 transition-all duration-500"
                >
                  <span className="block font-serif text-3xl md:text-4xl text-[var(--gaia-pink)]/20 leading-none mb-3 select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl text-[var(--gaia-beige)] group-hover:text-[var(--gaia-pink)] transition-colors duration-300">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problemas que resuelve */}
      <section className="px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            className="border-t border-[var(--gaia-pink)]/15 pt-10 md:pt-14"
          >
            <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-6">
              PARA QUIEN ES
            </span>
            <div className="space-y-3">
              {problems.map((problem) => (
                <div key={problem} className="flex items-start gap-3">
                  <Check size={18} className="text-[var(--gaia-pink)] mt-0.5 shrink-0" />
                  <p className="font-sans text-[var(--gaia-beige)]/70 text-sm md:text-base leading-relaxed">
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proceso de trabajo */}
      <section className="px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            className="border-t border-[var(--gaia-pink)]/15 pt-10 md:pt-14"
          >
            <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-8">
              COMO TRABAJAMOS
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {process.map((item, index) => (
                <div key={item.step} className="relative">
                  <span className="block font-serif text-5xl md:text-6xl text-[var(--gaia-pink)]/15 leading-none mb-3 select-none">
                    {item.step}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl text-[var(--gaia-beige)] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[var(--gaia-beige)]/50 text-xs md:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resultados esperados */}
      <section className="px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            className="border-t border-[var(--gaia-pink)]/15 pt-10 md:pt-14"
          >
            <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-6">
              RESULTADOS ESPERADOS
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {results.map((result) => (
                <div
                  key={result}
                  className="p-5 md:p-6 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.02]"
                >
                  <p className="font-sans text-[var(--gaia-beige)]/70 text-sm leading-relaxed">
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-6 md:px-12 pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            className="border-t border-[var(--gaia-pink)]/15 pt-10 md:pt-14 text-center"
          >
            <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-3">
              Trabajemos juntos
            </span>
            <h2 className="font-serif text-2xl md:text-4xl text-[var(--gaia-beige)] tracking-tight mb-3">
              Hablemos de tu marca.
            </h2>
            <p className="font-sans text-[var(--gaia-beige)]/50 text-xs md:text-sm leading-relaxed max-w-lg mx-auto mb-6">
              Cada proyecto tiene necesidades distintas. Coordinemos una reunion y definamos juntos
              la mejor estrategia para potenciar tu presencia digital.
            </p>
            <Link
              href="#"
              onClick={() => {
                trackCustomEvent(`CTA - ${title}`, {
                  category: 'Lead Generation',
                  action: 'Click',
                });
              }}
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3.5 md:py-4 bg-transparent border border-[var(--gaia-pink)] text-[var(--gaia-pink)] font-sans text-xs md:text-sm tracking-[0.15em] uppercase rounded-none hover:bg-[var(--gaia-pink)] hover:text-[var(--gaia-burgundy)] transition-all duration-500"
            >
              <span>{ctaText}</span>
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
