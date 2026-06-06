'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  Search,
  Globe,
  BarChart3,
  Clock,
  AlertTriangle,
  FileText,
  MapPin,
  Code,
  Layers,
  TrendingUp,
  Eye,
  Zap,
  Bookmark,
  Plus,
  Minus,
  ChevronRight,
  ExternalLink,
  Target,
  Star,
  Shield,
  Gauge,
} from 'lucide-react';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/sections/Footer';
import { fadeInUp, easings } from '@/lib/animations';
import { trackCustomEvent } from '@/lib/analytics/facebook-pixel';

export function CustomComoFuncionaSeo() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleCTA = (label: string) => {
    trackCustomEvent(`Solicitar asesoramiento - ${label}`, {
      category: 'Lead Generation',
      action: 'Click',
    });
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contacto';
    }
  };

  const sections = [
    { id: 'que-es-seo', label: 'Qué es el SEO', icon: Search },
    { id: 'como-funciona-google', label: 'Cómo funciona Google', icon: Globe },
    { id: 'seo-tecnico', label: 'SEO Técnico', icon: Code },
    { id: 'seo-local', label: 'SEO Local', icon: MapPin },
    { id: 'contenido', label: 'Creación de Contenido', icon: FileText },
    { id: 'tiempo', label: 'Cuánto demora', icon: Clock },
    { id: 'errores', label: 'Errores frecuentes', icon: AlertTriangle },
  ];

  const faqs = [
    {
      q: '¿Qué es el SEO y por qué es importante?',
      a: 'Placeholder para respuesta sobre qué es SEO y su importancia.'
    },
    {
      q: '¿Cuánto tiempo demora en verse resultados?',
      a: 'Placeholder para respuesta sobre tiempos de resultados SEO.'
    },
    {
      q: '¿Necesito un sitio web para hacer SEO?',
      a: 'Placeholder para respuesta sobre necesidad de sitio web.'
    },
    {
      q: '¿El SEO reemplaza la publicidad paga?',
      a: 'Placeholder para respuesta sobre SEO vs publicidad paga.'
    },
    {
      q: '¿Puedo hacer SEO yo mismo?',
      a: 'Placeholder para respuesta sobre SEO DIY vs profesional.'
    },
  ];

  return (
    <main className="bg-[var(--gaia-burgundy)] min-h-screen overflow-x-hidden w-full texture-overlay">
      <Navigation />

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative pt-24 md:pt-32 pb-16 px-6 md:px-12 overflow-hidden border-b border-[var(--gaia-pink)]/10">
        <div className="absolute inset-0 mesh-gradient-burgundy opacity-30 mix-blend-screen pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--gaia-pink)]/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          <div className="lg:col-span-7 space-y-6 text-left">
            <Link
              href="/recursos"
              className="inline-flex items-center gap-2 text-[var(--gaia-pink)] hover:text-[var(--gaia-beige)] transition-colors duration-300 text-xs tracking-widest uppercase mb-6"
            >
              <ArrowLeft size={14} />
              Recursos
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easings.premium }}
            >
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[var(--gaia-beige)] tracking-tight">
                Por qué algunas marcas aparecen primero en Google <br />
                <span className="text-[var(--gaia-pink)]">(y cómo funciona el SEO)</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: easings.premium }}
              className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed max-w-xl"
            >
              El SEO es el proceso que hace que Google encuentre, entienda y recomiende tu sitio a quienes ya buscan lo que ofrecés. En esta guía vas a entender cómo funciona y por qué marca la diferencia entre ser invisible o ser encontrado.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link
                href="/seo"
                onClick={() => trackCustomEvent('Conocer servicio SEO desde recurso', { category: 'Internal Navigation', action: 'Click' })}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-[var(--gaia-pink)] text-[var(--gaia-pink)] font-sans text-xs tracking-[0.15em] uppercase hover:bg-[var(--gaia-pink)] hover:text-[var(--gaia-burgundy)] transition-all duration-500 rounded-none shadow-premium hover:glow-pink-soft"
              >
                <span>Conocer nuestro servicio SEO</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#indice"
                className="inline-flex items-center justify-center px-8 py-4 text-[var(--gaia-beige)]/80 hover:text-[var(--gaia-pink)] font-sans text-xs tracking-[0.15em] uppercase transition-colors duration-300"
              >
                Explorar la guía
              </a>
            </motion.div>
          </div>

          {/* Right Column: SEO Flow Visualization (Static) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px]">
              {/* Flow Steps */}
              <div className="space-y-0">
                {[
                  { step: '1', label: 'Alguien busca tu servicio', desc: 'Una persona escribe en Google lo que necesita', icon: Search },
                  { step: '2', label: 'Google evalúa miles de sitios', desc: 'El algoritmo analiza contenido, autoridad y experiencia', icon: Globe },
                  { step: '3', label: 'Compara y decide', desc: 'Solo los más relevantes pasan el filtro', icon: Target },
                  { step: '4', label: 'Tu marca aparece primero', desc: 'El usuario te encuentra antes que a tu competencia', icon: Star },
                ].map((item, index) => {
                  const Icon = item.icon;
                  const isLast = index === 3;
                  return (
                    <div
                      key={item.step}
                      className={`relative flex items-start gap-4 ${isLast ? 'pt-2' : ''}`}
                    >
                      {/* Step number + icon */}
                      <div className="relative flex flex-col items-center">
                        <div className={`flex items-center justify-center shrink-0 transition-all duration-500 ${
                          isLast
                            ? 'w-14 h-14 bg-[var(--gaia-pink)]/20 border-2 border-[var(--gaia-pink)]/50 glow-pink-soft'
                            : 'w-12 h-12 border border-[var(--gaia-pink)]/30 bg-[var(--gaia-pink)]/[0.05]'
                        }`}>
                          <Icon size={isLast ? 22 : 18} className={isLast ? 'text-[var(--gaia-pink)]' : 'text-[var(--gaia-pink)]/80'} />
                        </div>
                        {!isLast && (
                          <div className="w-px h-8 bg-gradient-to-b from-[var(--gaia-pink)]/30 to-[var(--gaia-pink)]/10" />
                        )}
                      </div>

                      {/* Content */}
                      <div className={`pb-6 ${isLast ? 'pt-3' : 'pt-2'}`}>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`font-sans text-[10px] tracking-wider uppercase ${
                            isLast ? 'text-[var(--gaia-pink)] font-semibold' : 'text-[var(--gaia-pink)]/40'
                          }`}>
                            {isLast ? 'Resultado' : `Paso ${item.step}`}
                          </span>
                        </div>
                        <h3 className={`font-serif leading-tight ${
                          isLast ? 'text-lg text-[var(--gaia-beige)]' : 'text-sm text-[var(--gaia-beige)]/80'
                        }`}>
                          {item.label}
                        </h3>
                        <p className={`font-sans leading-relaxed mt-1 ${
                          isLast ? 'text-xs text-[var(--gaia-beige)]/60' : 'text-[11px] text-[var(--gaia-beige)]/35'
                        }`}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Decorative border */}
              <div className="absolute -inset-3 border border-[var(--gaia-pink)]/10 rounded-lg pointer-events-none" />
              <div className="absolute -inset-6 border border-[var(--gaia-pink)]/5 rounded-lg pointer-events-none" />
            </div>

            {/* Floating badge */}
            <div className="absolute -top-2 -right-6 bg-[var(--gaia-burgundy)] border border-[var(--gaia-pink)]/20 rounded-lg px-3 py-2 shadow-elevated hidden lg:block">
              <div className="flex items-center gap-2">
                <Zap size={12} className="text-[var(--gaia-pink)]" />
                <span className="text-[10px] text-[var(--gaia-beige)]/60 font-sans">200+ factores de ranking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== INDICE / TABLE OF CONTENTS ==================== */}
      <section id="indice" className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
            <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-4">
              ÍNDICE DE LA GUÍA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
              Explorá cada tema
            </h2>
            <p className="font-sans text-[var(--gaia-beige)]/60 text-xs sm:text-sm md:text-base mt-4 leading-relaxed">
              Navegá por las secciones que más te interesen. Cada capítulo cubre un aspecto clave del posicionamiento orgánico.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.a
                  key={section.id}
                  href={`#${section.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group p-6 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.01] hover:border-[var(--gaia-pink)]/30 hover:bg-[var(--gaia-pink)]/[0.03] transition-all duration-500 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-[var(--gaia-pink)]/10 rounded-lg group-hover:bg-[var(--gaia-pink)]/20 transition-colors">
                      <Icon size={18} className="text-[var(--gaia-pink)]" />
                    </div>
                    <ChevronRight size={16} className="text-[var(--gaia-pink)]/30 group-hover:text-[var(--gaia-pink)] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="font-serif text-lg text-[var(--gaia-beige)] group-hover:text-[var(--gaia-pink)] transition-colors">
                    {section.label}
                  </h3>
                  <span className="block text-[9px] text-[var(--gaia-beige)]/30 uppercase tracking-widest mt-2 font-sans">
                    Sección {String(index + 1).padStart(2, '0')}
                  </span>
                </motion.a>
              );
            })}
          </div>

          {/* Additional resources cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8">
            <Link
              href="/seo"
              className="group p-6 border border-[var(--gaia-pink)]/20 bg-[var(--gaia-pink)]/[0.02] hover:border-[var(--gaia-pink)]/40 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-3">
                <Bookmark size={16} className="text-[var(--gaia-pink)]" />
                <span className="text-[10px] text-[var(--gaia-pink)] uppercase tracking-widest">Servicio Relacionado</span>
              </div>
              <h3 className="font-serif text-xl text-[var(--gaia-beige)] group-hover:text-[var(--gaia-pink)] transition-colors mb-2">
                Servicio de SEO
              </h3>
              <p className="font-sans text-xs text-[var(--gaia-beige)]/50 leading-relaxed">
                Placeholder descripción del servicio SEO.
              </p>
            </Link>

            <Link
              href="/diseno-web"
              className="group p-6 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.01] hover:border-[var(--gaia-pink)]/30 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-3">
                <Layers size={16} className="text-[var(--gaia-pink)]/70" />
                <span className="text-[10px] text-[var(--gaia-pink)]/70 uppercase tracking-widest">Complementario</span>
              </div>
              <h3 className="font-serif text-xl text-[var(--gaia-beige)] group-hover:text-[var(--gaia-pink)] transition-colors mb-2">
                Diseño Web
              </h3>
              <p className="font-sans text-xs text-[var(--gaia-beige)]/50 leading-relaxed">
                Placeholder descripción de diseño web.
              </p>
            </Link>

            <Link
              href="/branding"
              className="group p-6 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.01] hover:border-[var(--gaia-pink)]/30 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-3">
                <ExternalLink size={16} className="text-[var(--gaia-pink)]/70" />
                <span className="text-[10px] text-[var(--gaia-pink)]/70 uppercase tracking-widest">También te interesa</span>
              </div>
              <h3 className="font-serif text-xl text-[var(--gaia-beige)] group-hover:text-[var(--gaia-pink)] transition-colors mb-2">
                Branding
              </h3>
              <p className="font-sans text-xs text-[var(--gaia-beige)]/50 leading-relaxed">
                Placeholder descripción de branding.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== QUÉ ES EL SEO ==================== */}
      <section id="que-es-seo" className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase">
                SECCIÓN 01
              </span>
              <h2 className="font-serif text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
                Qué es <br />
                <span className="font-monsieur text-[var(--gaia-pink)] text-5xl md:text-7xl lowercase">el SEO</span>
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed">
                  Placeholder: Definición de SEO (Search Engine Optimization) y su propósito fundamental.
                </p>
                <p className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed">
                  Placeholder: Explicación de cómo el SEO conecta la intención del usuario con la oferta de negocios.
                </p>
              </div>

              {/* Key concept box */}
              <div className="p-6 border-l-2 border-[var(--gaia-pink)] bg-[var(--gaia-pink)]/[0.03]">
                <p className="font-serif text-lg text-[var(--gaia-beige)] italic">
                  "Placeholder: Cita o concepto clave sobre SEO para destacar."
                </p>
              </div>

              <Link
                href="/seo"
                className="inline-flex items-center gap-2 text-[var(--gaia-pink)] hover:text-[var(--gaia-beige)] transition-colors text-sm font-sans group"
              >
                <span>Conocer nuestro servicio de SEO</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="lg:col-span-6">
              <div className="relative p-8 bg-[var(--gaia-pink)]/[0.02] border border-[var(--gaia-pink)]/10 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-[var(--gaia-burgundy)]/50 border border-[var(--gaia-pink)]/10 rounded-lg flex items-center justify-center">
                    <Search size={40} className="text-[var(--gaia-pink)]/20" />
                  </div>
                  <div className="aspect-square bg-[var(--gaia-burgundy)]/50 border border-[var(--gaia-pink)]/10 rounded-lg flex items-center justify-center mt-8">
                    <TrendingUp size={40} className="text-[var(--gaia-pink)]/20" />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-[10px] text-[var(--gaia-beige)]/30 uppercase tracking-widest font-sans">
                    Placeholder: Visual representation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CÓMO FUNCIONA GOOGLE ==================== */}
      <section id="como-funciona-google" className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-4">
              SECCIÓN 02
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
              Cómo funciona Google
            </h2>
            <p className="font-sans text-[var(--gaia-beige)]/60 text-xs sm:text-sm md:text-base mt-4 leading-relaxed">
              Placeholder: Introducción al funcionamiento del algoritmo de Google.
            </p>
          </div>

          {/* Three-step process */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { step: '01', title: 'Rastreo', desc: 'Placeholder: Cómo Google descubre páginas web.', icon: Globe },
              { step: '02', title: 'Indexación', desc: 'Placeholder: Cómo Google organiza y clasifica el contenido.', icon: Layers },
              { step: '03', title: 'Ranking', desc: 'Placeholder: Cómo Google decide qué mostrar primero.', icon: BarChart3 },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative p-8 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.01]"
                >
                  <span className="absolute top-4 right-4 font-serif text-4xl text-[var(--gaia-pink)]/10">
                    {item.step}
                  </span>
                  <div className="p-3 bg-[var(--gaia-pink)]/10 rounded-lg w-fit mb-6">
                    <Icon size={24} className="text-[var(--gaia-pink)]" />
                  </div>
                  <h3 className="font-serif text-2xl text-[var(--gaia-beige)] mb-3">{item.title}</h3>
                  <p className="font-sans text-sm text-[var(--gaia-beige)]/50 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== SEO TÉCNICO ==================== */}
      <section id="seo-tecnico" className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase">
                SECCIÓN 03
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-[var(--gaia-beige)] tracking-tight">
                SEO Técnico
              </h2>
              <p className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed">
                Placeholder: Qué es el SEO técnico y por qué es la base de todo posicionamiento.
              </p>
              <Link
                href="/diseno-web"
                className="inline-flex items-center gap-2 text-[var(--gaia-pink)] hover:text-[var(--gaia-beige)] transition-colors text-sm font-sans group"
              >
                <span>Ver diseño web optimizado para SEO</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Velocidad de carga',
                  'Estructura de URLs',
                  'Meta tags y headings',
                  'Sitemap XML',
                  'Schema markup',
                  'Mobile-first indexing',
                  'Core Web Vitals',
                  'HTTPS y seguridad',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3 p-4 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.01]"
                  >
                    <div className="w-2 h-2 bg-[var(--gaia-pink)] rounded-full shrink-0" />
                    <span className="font-sans text-sm text-[var(--gaia-beige)]/70">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SEO LOCAL ==================== */}
      <section id="seo-local" className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <div className="relative p-8 bg-[var(--gaia-burgundy)]/50 border border-[var(--gaia-pink)]/10 rounded-lg">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin size={24} className="text-[var(--gaia-pink)]" />
                  <span className="font-serif text-xl text-[var(--gaia-beige)]">Google Business Profile</span>
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-[var(--gaia-pink)]/10 rounded w-3/4" />
                  <div className="h-3 bg-[var(--gaia-pink)]/10 rounded w-1/2" />
                  <div className="h-3 bg-[var(--gaia-pink)]/10 rounded w-5/6" />
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-3 h-3 bg-[var(--gaia-pink)]/30 rounded-sm" />
                    ))}
                  </div>
                  <span className="text-[10px] text-[var(--gaia-beige)]/40">Placeholder: Reseñas</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase">
                SECCIÓN 04
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-[var(--gaia-beige)] tracking-tight">
                SEO Local
              </h2>
              <p className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed">
                Placeholder: Qué es el SEO local y por qué es crucial para negocios con presencia física.
              </p>

              <div className="space-y-3">
                {[
                  'Google Business Profile optimizado',
                  'Citas NAP consistentes',
                  'Contenido geolocalizado',
                  'Estrategia de reseñas',
                  'Posicionamiento en Google Maps',
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[var(--gaia-pink)] rounded-full shrink-0" />
                    <span className="font-sans text-sm text-[var(--gaia-beige)]/60">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CREACIÓN DE CONTENIDO ==================== */}
      <section id="contenido" className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-4">
              SECCIÓN 05
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
              Creación de <span className="font-monsieur text-[var(--gaia-pink)] text-5xl md:text-7xl lowercase">Contenido</span>
            </h2>
            <p className="font-sans text-[var(--gaia-beige)]/60 text-xs sm:text-sm md:text-base mt-4 leading-relaxed">
              Placeholder: El rol del contenido en la estrategia SEO.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Keyword Research', desc: 'Placeholder: Identificar las búsquedas de tu audiencia.', icon: Search },
              { title: 'Contenido Optimizado', desc: 'Placeholder: Crear contenido que responda la intención del usuario.', icon: FileText },
              { title: 'Estrategia Continua', desc: 'Placeholder: Mantener y actualizar contenido para sostener posiciones.', icon: TrendingUp },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="p-8 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.01]"
                >
                  <div className="p-3 bg-[var(--gaia-pink)]/10 rounded-lg w-fit mb-6">
                    <Icon size={24} className="text-[var(--gaia-pink)]" />
                  </div>
                  <h3 className="font-serif text-xl text-[var(--gaia-beige)] mb-3">{item.title}</h3>
                  <p className="font-sans text-sm text-[var(--gaia-beige)]/50 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== CUÁNTO DEMORA EL SEO ==================== */}
      <section id="tiempo" className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase">
                SECCIÓN 06
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-[var(--gaia-beige)] tracking-tight">
                Cuánto demora <br />
                <span className="font-monsieur text-[var(--gaia-pink)] text-5xl md:text-7xl lowercase">el SEO</span>
              </h2>
              <p className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed">
                Placeholder: Explicación realista sobre los tiempos del SEO y por qué es una inversión a mediano/largo plazo.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.02]">
                <h4 className="font-serif text-lg text-[var(--gaia-beige)] mb-6">Timeline esperado</h4>

                {/* Timeline bars */}
                <div className="space-y-6">
                  {[
                    { label: 'Mes 1-2', desc: 'Placeholder: Auditoría y correcciones técnicas', progress: '30%' },
                    { label: 'Mes 3-4', desc: 'Placeholder: Primeros movimientos en rankings', progress: '55%' },
                    { label: 'Mes 5-6', desc: 'Placeholder: Consolidación de posiciones', progress: '75%' },
                    { label: 'Mes 6+', desc: 'Placeholder: Crecimiento sostenido y mantenimiento', progress: '90%' },
                  ].map((item, index) => (
                    <div key={item.label} className="space-y-2">
                      <div className="flex justify-between text-xs tracking-wider font-sans uppercase">
                        <span className="text-[var(--gaia-pink)] font-bold">{item.label}</span>
                        <span className="text-[var(--gaia-beige)]/40">{item.progress}</span>
                      </div>
                      <div className="h-2 bg-[var(--gaia-burgundy)] border border-[var(--gaia-pink)]/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: item.progress }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.2, ease: 'easeOut' }}
                          className="h-full bg-[var(--gaia-pink)]"
                        />
                      </div>
                      <p className="text-xs text-[var(--gaia-beige)]/40 font-sans">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ERRORES FRECUENTES ==================== */}
      <section id="errores" className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-4">
              SECCIÓN 07
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
              Errores <span className="font-monsieur text-[var(--gaia-pink)] text-5xl md:text-7xl lowercase">frecuentes</span>
            </h2>
            <p className="font-sans text-[var(--gaia-beige)]/60 text-xs sm:text-sm md:text-base mt-4 leading-relaxed">
              Placeholder: Los errores más comunes que impiden el posicionamiento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Placeholder: Error 1', desc: 'Placeholder: Descripción del error y su impacto.' },
              { title: 'Placeholder: Error 2', desc: 'Placeholder: Descripción del error y su impacto.' },
              { title: 'Placeholder: Error 3', desc: 'Placeholder: Descripción del error y su impacto.' },
              { title: 'Placeholder: Error 4', desc: 'Placeholder: Descripción del error y su impacto.' },
              { title: 'Placeholder: Error 5', desc: 'Placeholder: Descripción del error y su impacto.' },
              { title: 'Placeholder: Error 6', desc: 'Placeholder: Descripción del error y su impacto.' },
            ].map((error, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex gap-4 p-6 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.01]"
              >
                <div className="shrink-0 mt-1">
                  <AlertTriangle size={20} className="text-[var(--gaia-pink)]/60" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[var(--gaia-beige)] mb-2">{error.title}</h3>
                  <p className="font-sans text-sm text-[var(--gaia-beige)]/50 leading-relaxed">{error.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-[var(--gaia-burgundy)] relative overflow-hidden border-b border-[var(--gaia-pink)]/10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-4">
              DESPEJA TUS DUDAS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="border-t border-[var(--gaia-pink)]/15 divide-y divide-[var(--gaia-pink)]/15">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className="py-4 sm:py-6">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left font-serif text-lg sm:text-xl text-[var(--gaia-beige)] hover:text-[var(--gaia-pink)] transition-colors duration-300 py-2 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[var(--gaia-pink)] shrink-0 ml-4">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="font-sans text-xs sm:text-sm leading-relaxed text-[var(--gaia-beige)]/60 pt-2 pb-4 max-w-3xl">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
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
              ¿Listo para posicionar tu marca?
            </span>
            <h2 className="font-serif text-2xl md:text-4xl text-[var(--gaia-beige)] tracking-tight mb-3">
              Llevá tu visibilidad al siguiente nivel.
            </h2>
            <p className="font-sans text-[var(--gaia-beige)]/50 text-xs md:text-sm leading-relaxed max-w-lg mx-auto mb-6">
              Ahora que entendés cómo funciona el SEO, es momento de actuar. En Gaia Studio diseñamos estrategias personalizadas para que tu marca aparezca cuando te buscan.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/seo"
                onClick={() => trackCustomEvent('Ver servicio SEO desde recurso', { category: 'Internal Navigation', action: 'Click' })}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-[var(--gaia-pink)] text-[var(--gaia-pink)] font-sans text-xs tracking-[0.15em] uppercase hover:bg-[var(--gaia-pink)] hover:text-[var(--gaia-burgundy)] transition-all duration-500 rounded-none shadow-premium hover:glow-pink-soft"
              >
                <span>Ver Servicio de SEO</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => handleCTA('CTA Final - Recurso SEO')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--gaia-pink)] text-[var(--gaia-burgundy)] font-sans text-xs tracking-[0.15em] uppercase hover:bg-[var(--gaia-beige)] transition-all duration-500 rounded-none cursor-pointer"
              >
                <span>Coordinar Reunión</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
