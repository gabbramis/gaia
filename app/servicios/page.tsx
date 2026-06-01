'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/sections/Footer';
import { fadeInUp } from '@/lib/animations';
import { trackCustomEvent } from '@/lib/analytics/facebook-pixel';

const mainCategories = [
  {
    id: 'redes-sociales',
    number: '01',
    title: 'Gestión de Redes Sociales',
    description: 'Estrategia integral para construir y fortalecer la presencia de tu marca en redes sociales, combinando creatividad, planificación y contenido de calidad.',
    includes: ['Social Media', 'Community Manager', 'Producción y Edición'],
    featured: true,
  },
  {
    id: 'diseno-web',
    number: '02',
    title: 'Diseño Web',
    description: 'Creamos sitios web funcionales, estéticos y alineados con la identidad de tu marca. Desde landing pages hasta tiendas online completas con e-commerce.',
    includes: ['Diseño Web', 'E-commerce', 'Web Management Mensual'],
    featured: true,
  },
  {
    id: 'seo',
    number: '03',
    title: 'SEO y Posicionamiento',
    description: 'Optimizamos tu presencia digital para que tu marca sea fácilmente encontrada en buscadores, aumentando tu visibilidad y tráfico orgánico de forma sostenible.',
    includes: ['SEO', 'SEO Local', 'Optimización para buscadores'],
    featured: true,
  },
  {
    id: 'branding',
    number: '04',
    title: 'Branding',
    description: 'Construimos la identidad visual de tu marca desde cero o la renovamos para que comunique tu esencia de forma coherente y profesional en cada punto de contacto.',
    includes: ['Diseño de Branding', 'Identidad Visual'],
    featured: false,
  },
  {
    id: 'campanas',
    number: '05',
    title: 'Campañas Publicitarias',
    description: 'Diseñamos y ejecutamos campañas 360° con ideas creativas, producción de contenido y pauta digital estratégica para maximizar el impacto de cada acción.',
    includes: ['Campañas Publicitarias 360°', 'Promociones', 'Lanzamientos'],
    featured: false,
  },
];

const secondaryServices = [
  'Cobertura de eventos',
  'Producción audiovisual',
  'Fotografía',
  'Edición de contenido',
];

export default function ServiciosPage() {
  return (
    <main className="bg-[var(--gaia-burgundy)] min-h-screen overflow-x-hidden w-full">
      <Navigation />

      {/* Hero */}
      <section className="pt-16 md:pt-20 pb-6 md:pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[var(--gaia-pink)] hover:text-[var(--gaia-beige)] transition-colors duration-300 text-sm tracking-widest uppercase"
          >
            <ArrowLeft size={16} />
            Home
          </Link>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mt-6 md:mt-8 text-center"
          >
            <span className="block text-[var(--gaia-pink)] text-sm tracking-[0.3em] uppercase mb-4">
              NUESTROS SERVICIOS
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-[var(--gaia-beige)] tracking-tight mb-5">
              Qué hacemos
            </h1>
            <p className="font-sans text-[var(--gaia-beige)]/60 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
              Trabajamos junto a marcas que buscan construir una presencia digital sólida, coherente
              y alineada con sus objetivos de negocio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Servicios — grilla */}
      <section className="px-6 md:px-12 pb-8 md:pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
            {mainCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div
                  className={
                    'group h-full border flex flex-col transition-all duration-500 p-5 md:p-6 ' +
                    (category.featured
                      ? 'border-[var(--gaia-pink)]/15 border-t-2 border-t-[var(--gaia-pink)]/60 bg-[var(--gaia-pink)]/[0.06] hover:bg-[var(--gaia-pink)]/10'
                      : 'border-[var(--gaia-pink)]/10 border-t-2 border-t-[var(--gaia-pink)]/35 bg-[var(--gaia-pink)]/[0.02] hover:bg-[var(--gaia-pink)]/8')
                  }
                >
                  <span className="block font-serif text-4xl md:text-5xl text-[var(--gaia-pink)]/25 leading-none mb-2 select-none">
                    {category.number}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-[var(--gaia-beige)] mb-2 leading-tight group-hover:text-[var(--gaia-pink)] transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="font-sans text-[var(--gaia-beige)]/50 text-xs md:text-sm leading-relaxed mb-3">
                    {category.description}
                  </p>
                  <div className="mb-4 space-y-1">
                    {category.includes.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="text-[var(--gaia-pink)] text-[10px]">✦</span>
                        <span className="font-sans text-[var(--gaia-beige)]/70 text-xs md:text-sm">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="#"
                    onClick={() => {
                      trackCustomEvent(`Conocer servicio - ${category.title}`, {
                        category: 'Service Category',
                        action: 'Click',
                      });
                    }}
                    className="inline-flex items-center gap-2 text-[var(--gaia-pink)] text-xs tracking-widest uppercase group-hover:gap-4 transition-all duration-300 mt-auto"
                  >
                    <span>Conocer servicio</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios complementarios */}
      <section className="px-6 md:px-12 pb-6 md:pb-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            className="border-t border-[var(--gaia-pink)]/10 pt-8 md:pt-10 text-center"
          >
            <span className="block text-[var(--gaia-pink)]/50 text-xs tracking-[0.3em] uppercase mb-2">
              Servicios complementarios
            </span>
            <p className="font-sans text-[var(--gaia-beige)]/45 text-xs max-w-md mx-auto mb-5">
              También acompañamos proyectos con servicios específicos según las necesidades de cada
              marca.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {secondaryServices.map((service) => (
                <span
                  key={service}
                  className="inline-block px-4 py-1.5 border border-[var(--gaia-pink)]/10 text-[var(--gaia-beige)]/40 font-sans text-xs tracking-wide hover:border-[var(--gaia-pink)]/30 hover:text-[var(--gaia-beige)]/60 transition-all duration-300"
                >
                  {service}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA final */}
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
              Cada proyecto tiene necesidades distintas. Coordinemos una reunión y definamos juntos
              la mejor estrategia para potenciar tu presencia digital.
            </p>
            <Link
              href="#"
              onClick={() => {
                trackCustomEvent('Solicitar asesoramiento - Servicios', {
                  category: 'Lead Generation',
                  action: 'Click',
                });
              }}
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3.5 md:py-4 bg-transparent border border-[var(--gaia-pink)] text-[var(--gaia-pink)] font-sans text-xs md:text-sm tracking-[0.15em] uppercase rounded-none hover:bg-[var(--gaia-pink)] hover:text-[var(--gaia-burgundy)] transition-all duration-500"
            >
              Solicitar asesoramiento
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
