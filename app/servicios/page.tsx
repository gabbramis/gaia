'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import {
  ArrowRight,
  BarChart3,
  Bot,
  Camera,
  Code,
  Megaphone,
  Palette,
  Search,
} from 'lucide-react';
import { Navigation } from '@/components/ui/Navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Footer } from '@/components/sections/Footer';
import { fadeInUp } from '@/lib/animations';
import { trackCustomEvent } from '@/lib/analytics/facebook-pixel';

const mainCategories = [
  {
    id: 'redes-sociales',
    number: '01',
    title: 'Gestion de Redes Sociales',
    description:
      'Estrategia integral para construir y fortalecer la presencia de tu marca en redes sociales, combinando creatividad, planificacion y contenido de calidad.',
    includes: ['Social Media', 'Community Manager', 'Produccion y Edicion'],
    featured: true,
    href: '/gestion-redes-sociales',
    icon: Megaphone,
  },
  {
    id: 'diseno-web',
    number: '02',
    title: 'Diseño Web',
    description:
      'Creamos sitios web funcionales, esteticos y alineados con la identidad de tu marca. Desde landing pages hasta tiendas online completas con e-commerce.',
    includes: ['Diseño Web', 'E-commerce', 'Web Management Mensual'],
    featured: true,
    href: '/diseno-web',
    icon: Code,
  },
  {
    id: 'seo',
    number: '03',
    title: 'SEO y Posicionamiento',
    description:
      'Optimizamos tu presencia digital para que tu marca sea facilmente encontrada en buscadores, aumentando tu visibilidad y trafico organico de forma sostenible.',
    includes: ['SEO', 'SEO Local', 'Optimizacion para buscadores'],
    featured: true,
    href: '/seo',
    icon: Search,
  },
  {
    id: 'branding',
    number: '04',
    title: 'Branding',
    description:
      'Construimos la identidad visual de tu marca desde cero o la renovamos para que comunique tu esencia de forma coherente y profesional en cada punto de contacto.',
    includes: ['Diseño de Branding', 'Identidad Visual'],
    featured: false,
    href: '/branding',
    icon: Palette,
  },
  {
    id: 'campanas',
    number: '05',
    title: 'Campañas Publicitarias',
    description:
      'Disenamos y ejecutamos campañas 360 con ideas creativas, produccion de contenido y pauta digital estrategica para maximizar el impacto de cada accion.',
    includes: ['Campañas Publicitarias 360', 'Promociones', 'Lanzamientos'],
    featured: false,
    href: '/campanas-publicitarias',
    icon: BarChart3,
  },
  {
    id: 'automatizaciones-ia',
    number: '06',
    title: 'Automatizaciones IA',
    description:
      'Implementamos agentes inteligentes y flujos automatizados que trabajan 24/7 para tu negocio. Desde chatbots de WhatsApp hasta procesos completos conectados con IA.',
    includes: [
      'Agentes de WhatsApp',
      'Flujos con n8n',
      'Chatbots multicanal',
      'Integraciones con IA',
      'Automatizacion de procesos',
    ],
    featured: false,
    href: '/automatizaciones-ia',
    icon: Bot,
  },
  {
    id: 'cobertura-eventos',
    number: '07',
    title: 'Cobertura de Eventos',
    description:
      'Registramos la energia de tu evento con contenido en tiempo real y material final listo para publicar. Cobertura pensada para marcas, lanzamientos y experiencias presenciales.',
    includes: ['Cobertura en vivo', 'Foto y video', 'Contenido para redes'],
    featured: false,
    href: '/cobertura-de-eventos',
    icon: Camera,
  }
  
];

const secondaryServices = [
  'Produccion audiovisual',
  'Fotografia',
  'Edicion de contenido',
];

export default function ServiciosPage() {
  return (
    <main className="bg-[var(--gaia-burgundy)] min-h-screen overflow-x-hidden w-full texture-overlay">
      <Navigation />

      

      {/* ==================== SERVICIOS GRID ==================== */}
      <section
        id="servicios-grid"
        className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex items-start md:mb-10">
            <Breadcrumbs />
          </div>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-4">
              Lo que hacemos
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
              Nuestros servicios
            </h2>
            <p className="font-sans text-[var(--gaia-beige)]/60 text-xs sm:text-sm md:text-base mt-4 leading-relaxed">
              Cada servicio esta disenado para resolver una necesidad real de
              tu negocio. Explora y descubre cual se adapta mejor a tu
              estrategia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
            {mainCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div
                    className={
                      'group h-full border flex flex-col transition-all duration-500 relative overflow-hidden ' +
                      (category.featured
                        ? 'border-[var(--gaia-pink)]/15 border-t-2 border-t-[var(--gaia-pink)]/60 bg-gradient-to-b from-[var(--gaia-pink)]/[0.06] to-[var(--gaia-pink)]/[0.02] hover:border-[var(--gaia-pink)]/30 hover:from-[var(--gaia-pink)]/[0.1] hover:to-[var(--gaia-pink)]/[0.04] p-6 md:p-7'
                        : 'border-[var(--gaia-pink)]/10 border-t-2 border-t-[var(--gaia-pink)]/35 bg-[var(--gaia-pink)]/[0.015] hover:border-[var(--gaia-pink)]/20 hover:bg-[var(--gaia-pink)]/[0.035] p-5 md:p-6')
                    }
                  >
                    {/* Hover glow */}
                    <div className="absolute -right-8 -top-10 w-28 h-28 rounded-full bg-[var(--gaia-pink)]/0 blur-3xl group-hover:bg-[var(--gaia-pink)]/8 transition-all duration-700 pointer-events-none" />

                    {/* Top accent line */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gaia-pink)]/0 to-transparent group-hover:via-[var(--gaia-pink)]/40 transition-all duration-700" />

                    <div className="relative z-10 flex flex-col h-full">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="space-y-1.5 flex-1 min-w-0">
                          <span className="block font-serif text-[1.7rem] sm:text-[1.9rem] md:text-[2.1rem] leading-none text-[var(--gaia-pink)]/20 group-hover:text-[var(--gaia-pink)]/30 transition-colors duration-500 select-none">
                            {category.number}
                          </span>
                           <div className="flex items-center gap-2.5 sm:gap-3">
                             <Icon
                               size={16}
                               className="text-[var(--gaia-pink)] shrink-0"
                             />
                             <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-[var(--gaia-beige)] leading-tight group-hover:text-[var(--gaia-pink)] transition-colors duration-500 text-balance">
                               {category.title}
                             </h3>
                           </div>
                         </div>
                      </div>

                      {/* Title & description */}
                      <p className="font-sans text-[var(--gaia-beige)]/50 text-xs md:text-sm leading-relaxed mb-5">
                        {category.description}
                      </p>

                      {/* Includes */}
                      <div className="mb-6 space-y-2">
                        {category.includes.map((item) => (
                          <div key={item} className="flex items-center gap-2.5">
                            <div className="w-1 h-1 bg-[var(--gaia-pink)]/40 rounded-full shrink-0" />
                            <span className="font-sans text-[var(--gaia-beige)]/65 text-xs md:text-sm">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Divider */}
                      <div className="w-full h-px bg-[var(--gaia-pink)]/8 mb-5" />

                      {/* CTA */}
                      <Link
                        href={category.href}
                        onClick={() => {
                          trackCustomEvent(
                            `Conocer servicio - ${category.title}`,
                            {
                              category: 'Service Category',
                              action: 'Click',
                            }
                          );
                        }}
                        className="inline-flex items-center gap-2 text-[var(--gaia-pink)] text-xs tracking-widest uppercase group-hover:gap-3 transition-all duration-300 mt-auto"
                      >
                        <span>Conocer servicio</span>
                        <ArrowRight
                          size={12}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      

      {/* ==================== CTA FINAL ==================== */}
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
              Cada proyecto tiene necesidades distintas. Coordinemos una
              reunion y definamos juntos la mejor estrategia para potenciar tu
              presencia digital.
            </p>
            <Link
              href="/#contacto"
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
