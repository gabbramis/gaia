'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Plus, 
  Minus, 
  Search, 
  Globe, 
  BarChart3,
  Bookmark,
} from 'lucide-react';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/sections/Footer';
import { fadeInUp, easings } from '@/lib/animations';
import { trackCustomEvent } from '@/lib/analytics/facebook-pixel';

export function CustomSeoLanding() {
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

  const faqs = [
    {
      q: '¿Cuánto tiempo demora en verse resultados de SEO?',
      a: 'El SEO es una estrategia a mediano y largo plazo. Los primeros cambios técnicos se reflejan en semanas, pero el posicionamiento orgánico sostenido generalmente se consolida entre 3 y 6 meses. A diferencia de la pauta publicitaria, los resultados del SEO son acumulativos y permanentes.'
    },
    {
      q: '¿Qué incluye una auditoría SEO?',
      a: 'Analizamos tu sitio en profundidad: velocidad de carga, estructura de URLs, meta tags, indexación, enlaces internos y externos, contenido duplicado, experiencia mobile, y presencia en Google Search Console. Entregamos un reporte detallado con prioridades de acción.'
    },
    {
      q: '¿Trabajan solo con sitios web que ustedes desarrollaron?',
      a: 'No. Ofrecemos servicios de SEO para cualquier sitio web, independientemente de quién lo haya desarrollado. Si tu sitio tiene problemas de posicionamiento, podemos auditarlo, optimizarlo y mejorar su rendimiento en buscadores.'
    },
    {
      q: '¿Qué es el SEO local y por qué es importante?',
      a: 'El SEO local optimiza tu presencia para búsquedas con intención geográfica: "cerca de mí", "en Montevideo", etc. Es fundamental para negocios físicos o servicios locales. Incluye optimización de Google Business Profile, citas NAP consistentes y contenido localizado.'
    },
    {
      q: '¿Necesito seguir invirtiendo en SEO después de posicionar?',
      a: 'El SEO requiere mantenimiento continuo porque la competencia no se detiene y los algoritmos cambian. Sin embargo, una vez que alcanzaste buenas posiciones, el esfuerzo se enfoca en mantener y mejorar, no en empezar desde cero. Ofrecemos planes mensuales de seguimiento.'
    }
  ];

  return (
    <main className="bg-[var(--gaia-burgundy)] min-h-screen overflow-x-hidden w-full texture-overlay">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 md:pt-32 pb-16 px-6 md:px-12 overflow-hidden border-b border-[var(--gaia-pink)]/10">
        <div className="absolute inset-0 mesh-gradient-burgundy opacity-30 mix-blend-screen pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--gaia-pink)]/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-[var(--gaia-pink)] hover:text-[var(--gaia-beige)] transition-colors duration-300 text-xs tracking-widest uppercase mb-6"
            >
              <ArrowLeft size={14} />
              Servicios
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easings.premium }}
            >
              <span className="block text-[var(--gaia-pink)] text-xs sm:text-sm tracking-[0.3em] uppercase mb-4">
                Visibilidad orgánica y estrategia
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-[var(--gaia-beige)] tracking-tight">
                Tu marca que <br />
                <span className="font-monsieur text-[var(--gaia-pink)] text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] block -mt-1 sm:-mt-2 md:-mt-4 lowercase">
                  aparece primero
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: easings.premium }}
              className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl"
            >
              Aparecer en los primeros resultados de Google no es suerte: es estrategia. Optimizamos tu presencia digital para que te encuentren quienes ya buscan lo que ofrecés, aumentando tu visibilidad y tráfico orgánico.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button
                onClick={() => handleCTA('Hero - Reunión')}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-[var(--gaia-pink)] text-[var(--gaia-pink)] font-sans text-xs tracking-[0.15em] uppercase hover:bg-[var(--gaia-pink)] hover:text-[var(--gaia-burgundy)] transition-all duration-500 rounded-none cursor-pointer overflow-hidden shadow-premium hover:glow-pink-soft"
              >
                <span>Coordinar Reunión</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#seo-teaser"
                className="inline-flex items-center justify-center px-8 py-4 text-[var(--gaia-beige)]/80 hover:text-[var(--gaia-pink)] font-sans text-xs tracking-[0.15em] uppercase transition-colors duration-300"
              >
                Ver Servicios
              </a>
            </motion.div>

            {/* Micro Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-[var(--gaia-pink)]/15 max-w-lg"
            >
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-[var(--gaia-pink)]">+200%</span>
                <span className="block text-[var(--gaia-beige)]/40 text-[10px] tracking-wider uppercase mt-1">Tráfico Orgánico</span>
              </div>
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-[var(--gaia-pink)]">Top 3</span>
                <span className="block text-[var(--gaia-beige)]/40 text-[10px] tracking-wider uppercase mt-1">Posición Google</span>
              </div>
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-[var(--gaia-pink)]">24/7</span>
                <span className="block text-[var(--gaia-beige)]/40 text-[10px] tracking-wider uppercase mt-1">Visibilidad</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating SEO Search Mockup */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: easings.premium }}
              className="relative w-full max-w-[420px] bg-[var(--gaia-pink)]/5 border border-[var(--gaia-pink)]/20 p-4 shadow-elevated rounded-lg animate-float-slow"
            >
              {/* Search engine mockup */}
              <div className="space-y-4">
                {/* Search bar */}
                <div className="flex items-center gap-2 bg-[var(--gaia-burgundy)] border border-[var(--gaia-pink)]/20 rounded-full px-4 py-3">
                  <Search size={16} className="text-[var(--gaia-pink)]/40" />
                  <div className="flex-1 h-3 bg-[var(--gaia-pink)]/10 rounded" />
                </div>
                
                {/* Result 1 - Your site */}
                <div className="bg-[var(--gaia-pink)]/[0.05] border border-[var(--gaia-pink)]/20 rounded-lg p-3 relative">
                  <div className="absolute -left-1 -top-1 bg-[var(--gaia-pink)] text-[var(--gaia-burgundy)] text-[8px] font-bold px-1.5 py-0.5 rounded">TU SITIO</div>
                  <div className="h-2 w-32 bg-[var(--gaia-pink)]/30 rounded mb-2" />
                  <div className="h-2 w-full bg-[var(--gaia-pink)]/15 rounded mb-1" />
                  <div className="h-2 w-2/3 bg-[var(--gaia-pink)]/15 rounded" />
                </div>
                
                {/* Result 2 */}
                <div className="border border-[var(--gaia-pink)]/10 rounded-lg p-3 opacity-40">
                  <div className="h-2 w-28 bg-[var(--gaia-beige)]/20 rounded mb-2" />
                  <div className="h-2 w-full bg-[var(--gaia-beige)]/10 rounded mb-1" />
                  <div className="h-2 w-1/2 bg-[var(--gaia-beige)]/10 rounded" />
                </div>
                
                {/* Result 3 */}
                <div className="border border-[var(--gaia-pink)]/10 rounded-lg p-3 opacity-30">
                  <div className="h-2 w-24 bg-[var(--gaia-beige)]/15 rounded mb-2" />
                  <div className="h-2 w-full bg-[var(--gaia-beige)]/10 rounded mb-1" />
                  <div className="h-2 w-3/4 bg-[var(--gaia-beige)]/10 rounded" />
                </div>
              </div>

              {/* Decorative border */}
              <div className="absolute -inset-1 border border-[var(--gaia-pink)]/20 rounded-lg pointer-events-none scale-[1.03]" />
            </motion.div>

            {/* Small floating notification */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: easings.premium }}
              className="absolute top-8 -right-4 bg-[var(--gaia-burgundy)] border border-[var(--gaia-pink)]/20 rounded-lg px-3 py-2 shadow-elevated animate-float hidden sm:block"
            >
              <div className="flex items-center gap-2">
                <BarChart3 size={12} className="text-[var(--gaia-pink)]" />
                <span className="text-[10px] text-[var(--gaia-beige)]/60">+200% tráfico</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO Teaser Section */}
      <section id="seo-teaser" className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase">
                POSICIONAMIENTO ORGÁNICO
              </span>
              <h2 className="font-serif text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
                Aparecé cuando <br />te buscan
              </h2>
              <p className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed">
                El 75% de los usuarios nunca pasan de la primera página de Google. Si tu marca no está entre los primeros resultados, simplemente no existís para la mayoría de tus potenciales clientes.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => handleCTA('Ver SEO')}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-[var(--gaia-pink)] text-[var(--gaia-pink)] font-sans text-xs tracking-[0.15em] uppercase hover:bg-[var(--gaia-pink)] hover:text-[var(--gaia-burgundy)] transition-all duration-500 rounded-none cursor-pointer"
                >
                  <span>Conocer más</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right preview graphic */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] bg-[var(--gaia-pink)]/[0.02] border border-[var(--gaia-pink)]/10 rounded-lg overflow-hidden relative group hover:border-[var(--gaia-pink)]/30 transition-all duration-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Search size={32} className="text-[var(--gaia-pink)]/20 group-hover:text-[var(--gaia-pink)]/40 transition-colors" />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[9px] text-[var(--gaia-pink)] tracking-widest uppercase">SEO Técnico</span>
                  </div>
                </div>
                <div className="aspect-[3/4] bg-[var(--gaia-pink)]/[0.02] border border-[var(--gaia-pink)]/10 rounded-lg overflow-hidden relative group hover:border-[var(--gaia-pink)]/30 transition-all duration-500 mt-8">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe size={32} className="text-[var(--gaia-pink)]/20 group-hover:text-[var(--gaia-pink)]/40 transition-colors" />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[9px] text-[var(--gaia-pink)] tracking-widest uppercase">SEO Local</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modalidades de Servicio */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-[var(--gaia-burgundy)] relative overflow-hidden border-b border-[var(--gaia-pink)]/10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
            <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-4">
              SERVICIOS DE SEO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
              Formatos de Optimización
            </h2>
            <p className="font-sans text-[var(--gaia-beige)]/60 text-xs sm:text-sm md:text-base mt-4 leading-relaxed">
              Desde la corrección técnica hasta la estrategia de contenido. Cada capa del SEO trabaja para que tu sitio sea encontrado, indexado y preferido por los buscadores.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            
            {/* SEO Técnico */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.01] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] tracking-widest text-[var(--gaia-pink)] uppercase">La Base del Posicionamiento</span>
                <h3 className="font-serif text-2xl text-[var(--gaia-beige)] mt-2 mb-4">SEO Técnico</h3>
                <p className="font-sans text-xs sm:text-sm text-[var(--gaia-beige)]/50 leading-relaxed mb-6">
                  Optimizamos la estructura interna de tu sitio para que Google lo entienda, lo indexe correctamente y lo posicione. Velocidad, arquitectura, meta datos y más.
                </p>
                <div className="w-full h-[1px] bg-[var(--gaia-pink)]/10 my-4" />
                <ul className="space-y-3">
                  {['Auditoría técnica completa del sitio', 'Optimización de velocidad de carga', 'Estructura de URLs y sitemap XML', 'Meta tags, headings y schema markup', 'Corrección de errores de indexación'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[var(--gaia-beige)]/70">
                      <Check size={14} className="text-[var(--gaia-pink)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleCTA('SEO Técnico')}
                className="mt-8 w-full py-3 bg-transparent border border-[var(--gaia-pink)]/40 hover:border-[var(--gaia-pink)] text-[var(--gaia-beige)] hover:text-[var(--gaia-pink)] text-xs tracking-wider uppercase font-sans transition-all duration-300 cursor-pointer"
              >
                Solicitar SEO Técnico
              </button>
            </motion.div>

            {/* SEO Local */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 border-2 border-[var(--gaia-pink)] bg-[var(--gaia-pink)]/[0.03] flex flex-col justify-between relative shadow-pink"
            >
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-[var(--gaia-pink)] text-[var(--gaia-burgundy)] text-[8px] font-sans tracking-[0.2em] uppercase px-3 py-1 font-bold">
                MÁS POPULAR
              </div>
              <div>
                <span className="text-[10px] tracking-widest text-[var(--gaia-pink)] uppercase">Para Negocios Locales</span>
                <h3 className="font-serif text-2xl text-[var(--gaia-beige)] mt-2 mb-4">SEO Local</h3>
                <p className="font-sans text-xs sm:text-sm text-[var(--gaia-beige)]/50 leading-relaxed mb-6">
                  Si tu negocio atiende una zona geográfica específica, el SEO local es fundamental. Optimizamos tu presencia para que aparezcas cuando busquen servicios como el tuyo en tu área.
                </p>
                <div className="w-full h-[1px] bg-[var(--gaia-pink)]/20 my-4" />
                <ul className="space-y-3">
                  {['Optimización de Google Business Profile', 'Consistencia de citas NAP en directorios', 'Contenido localizado y geolocalizado', 'Estrategia de reseñas y reputación online', 'Posicionamiento en Google Maps'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[var(--gaia-beige)]/70">
                      <Check size={14} className="text-[var(--gaia-pink)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleCTA('SEO Local')}
                className="mt-8 w-full py-3 bg-[var(--gaia-pink)] text-[var(--gaia-burgundy)] hover:bg-[var(--gaia-beige)] text-xs tracking-wider uppercase font-sans transition-all duration-300 font-medium cursor-pointer"
              >
                Solicitar SEO Local
              </button>
            </motion.div>

            {/* Optimización para Buscadores */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.01] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] tracking-widest text-[var(--gaia-pink)] uppercase">Estrategia de Contenido SEO</span>
                <h3 className="font-serif text-2xl text-[var(--gaia-beige)] mt-2 mb-4">Optimización para Buscadores</h3>
                <p className="font-sans text-xs sm:text-sm text-[var(--gaia-beige)]/50 leading-relaxed mb-6">
                  Estrategia integral de keywords, contenido y link building para posicionar tu sitio en las búsquedas que importan a tu negocio. Trabajo constante y medible.
                </p>
                <div className="w-full h-[1px] bg-[var(--gaia-pink)]/10 my-4" />
                <ul className="space-y-3">
                  {['Investigación de palabras clave estratégicas', 'Optimización de contenido existente', 'Creación de contenido SEO-friendly', 'Estrategia de link building', 'Monitoreo de posiciones y tráfico orgánico'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[var(--gaia-beige)]/70">
                      <Check size={14} className="text-[var(--gaia-pink)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleCTA('Optimización')}
                className="mt-8 w-full py-3 bg-transparent border border-[var(--gaia-pink)]/40 hover:border-[var(--gaia-pink)] text-[var(--gaia-beige)] hover:text-[var(--gaia-pink)] text-xs tracking-wider uppercase font-sans transition-all duration-300 cursor-pointer"
              >
                Solicitar Optimización
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SEO Impact section */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side text */}
            <div className="space-y-6">
              <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-4">
                TRÁFICO ORGÁNICO
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
                ¿Por qué invertir en SEO?
              </h2>
              <p className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed">
                El 68% de las experiencias online comienzan con un buscador. A diferencia de la publicidad paga, el tráfico orgánico es gratuito, sostenible y genera mayor confianza en los usuarios.
              </p>
              <p className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed">
                En Gaia Studio trabajamos con <strong>técnica + contenido + constancia</strong>. Cada optimización tiene un propósito: que tu sitio sea más visible, más rápido y más relevante para Google y para tus usuarios.
              </p>
            </div>

            {/* Right side comparison box */}
            <div className="p-6 md:p-8 bg-[var(--gaia-pink)]/[0.02] border border-[var(--gaia-pink)]/10 space-y-6">
              <h4 className="font-serif text-lg text-[var(--gaia-beige)]">Impacto del SEO en tu Negocio</h4>
              
              {/* Metric 1: Con SEO */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs tracking-wider font-sans uppercase">
                  <span className="text-[var(--gaia-pink)] font-bold">Con estrategia SEO</span>
                  <span className="text-[var(--gaia-pink)]">+200% tráfico orgánico</span>
                </div>
                <div className="h-2 bg-[var(--gaia-burgundy)] border border-[var(--gaia-pink)]/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-[var(--gaia-pink)]"
                  />
                </div>
              </div>

              {/* Metric 2: Sin SEO */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs tracking-wider font-sans uppercase text-[var(--gaia-beige)]/40">
                  <span>Sin optimización</span>
                  <span>Tráfico limitado</span>
                </div>
                <div className="h-2 bg-[var(--gaia-burgundy)] border border-[var(--gaia-pink)]/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '25%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-[var(--gaia-pink)]/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--gaia-pink)]/15 text-xs font-sans">
                <div className="space-y-2">
                  <span className="block text-[var(--gaia-pink)] uppercase font-semibold">El Camino de Gaia:</span>
                  <ul className="space-y-1 text-[var(--gaia-beige)]/60">
                    <li className="flex items-center gap-1.5"><Search size={10} className="text-[var(--gaia-pink)]" /> Auditoría completa</li>
                    <li className="flex items-center gap-1.5"><Globe size={10} className="text-[var(--gaia-pink)]" /> SEO local y global</li>
                    <li className="flex items-center gap-1.5"><BarChart3 size={10} className="text-[var(--gaia-pink)]" /> Métricas y reportes</li>
                  </ul>
                </div>
                <div className="space-y-2 text-[var(--gaia-beige)]/30">
                  <span className="block uppercase">Sin SEO:</span>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-1.5">Dependencia de publicidad paga</li>
                    <li className="flex items-center gap-1.5">Invisible en buscadores</li>
                    <li className="flex items-center gap-1.5">Competencia te supera en Google</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Resource Highlight Block */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easings.premium }}
            className="relative p-8 md:p-12 border-2 border-[var(--gaia-pink)]/30 bg-[var(--gaia-pink)]/[0.03]"
          >
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-[var(--gaia-pink)] text-[var(--gaia-burgundy)] text-[8px] font-sans tracking-[0.2em] uppercase px-3 py-1 font-bold">
              RECURSO DESTACADO
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <Bookmark size={20} className="text-[var(--gaia-pink)]" />
                  <span className="text-[10px] text-[var(--gaia-pink)] uppercase tracking-widest font-sans">Guía Educativa</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-[var(--gaia-beige)] tracking-tight">
                  ¿Querés entender a fondo cómo funciona el SEO?
                </h3>
                <p className="font-sans text-sm text-[var(--gaia-beige)]/60 leading-relaxed max-w-xl">
                  Creamos una guía completa que explica paso a paso cómo Google posiciona sitios, qué factores influyen en el ranking, y cómo podés mejorar tu visibilidad orgánica. Ideal para quienes quieren tomar decisiones informadas sobre su estrategia digital.
                </p>
              </div>

              <div className="lg:col-span-5 flex lg:justify-end">
                <Link
                  href="/recursos/como-funciona-el-seo"
                  className="group inline-flex items-center gap-3 px-8 py-5 bg-[var(--gaia-pink)] text-[var(--gaia-burgundy)] font-sans text-xs tracking-[0.15em] uppercase hover:bg-[var(--gaia-beige)] transition-all duration-500 shadow-pink"
                >
                  <span>Leer la Guía Completa</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="absolute -inset-1 border border-[var(--gaia-pink)]/10 pointer-events-none scale-[1.01]" />
          </motion.div>
        </div>
      </section>

      {/* Accordion FAQ Component */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-[var(--gaia-burgundy)] relative overflow-hidden border-b border-[var(--gaia-pink)]/10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-4">
              DESPEJA TUS DUDAS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
              Preguntas Frecuentes
            </h2>
          </div>

          {/* Accordion */}
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
              Cada proyecto tiene necesidades distintas. Coordinemos una reunión y definamos juntos
              la mejor estrategia para potenciar tu presencia digital.
            </p>
            <Link
              href="#"
              onClick={() => {
                trackCustomEvent('Solicitar asesoramiento - SEO', {
                  category: 'Lead Generation',
                  action: 'Click',
                });
                const element = document.querySelector('#contacto');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#contacto';
                }
              }}
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3.5 md:py-4 bg-transparent border border-[var(--gaia-pink)] text-[var(--gaia-pink)] font-sans text-xs md:text-sm tracking-[0.15em] uppercase rounded-none hover:bg-[var(--gaia-pink)] hover:text-[var(--gaia-burgundy)] transition-all duration-500"
            >
              <span>Solicitar asesoramiento</span>
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
