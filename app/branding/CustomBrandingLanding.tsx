'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Plus, 
  Minus, 
  Palette, 
  Layers, 
  Sparkles
} from 'lucide-react';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/sections/Footer';
import { fadeInUp, easings } from '@/lib/animations';
import { trackCustomEvent } from '@/lib/analytics/facebook-pixel';

export function CustomBrandingLanding() {
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
      q: '¿Cuánto tiempo demora un proyecto de branding?',
      a: 'Un proyecto completo de identidad visual toma entre 3 y 6 semanas dependiendo de la complejidad. Incluye la fase de descubrimiento, desarrollo conceptual, diseño del sistema visual y entrega de archivos finales con guía de uso.'
    },
    {
      q: '¿Qué incluye exactamente el sistema de identidad visual?',
      a: 'Entregamos logo principal y variantes, paleta cromática definida, tipografías seleccionadas, patrones o elementos gráficos complementarios, y una guía de aplicación que establece reglas de uso para mantener coherencia en todos los puntos de contacto.'
    },
    {
      q: '¿Puedo pedir cambios durante el proceso?',
      a: 'Por supuesto. El proceso es colaborativo: presentamos propuestas en cada etapa y trabajamos las revisiones necesarias dentro del alcance acordado. Tu feedback es fundamental para que el resultado refleje realmente tu marca.'
    },
    {
      q: 'Ya tengo logo pero necesito renovar mi imagen. ¿Pueden ayudarme?',
      a: 'Sí. Muchas marcas llegan a nosotros con una identidad que ya no las representa. Hacemos un rediseño respetando lo que funciona y evolucionando lo que necesita actualizarse, siempre manteniendo el reconocimiento que tu audiencia ya tiene.'
    },
    {
      q: '¿Entregan los archivos editables?',
      a: 'Sí. Al finalizar el proyecto entregamos todos los archivos en formatos vectoriales (AI, SVG, EPS), formatos web (PNG, JPG, WebP) y la guía de marca en PDF. Todo organizado para que puedas usar tu identidad correctamente en cualquier contexto.'
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
                Identidad y esencia visual
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-[var(--gaia-beige)] tracking-tight">
                Tu marca que <br />
                <span className="font-monsieur text-[var(--gaia-pink)] text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] block -mt-1 sm:-mt-2 md:-mt-4 lowercase">
                  se ve y se siente
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: easings.premium }}
              className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl"
            >
              Una marca es mucho más que un logo. Es lo que se ve, lo que se siente y lo que se recuerda. Creamos sistemas visuales sólidos que traducen la esencia de tu proyecto en una identidad coherente y profesional.
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
                href="#branding-teaser"
                className="inline-flex items-center justify-center px-8 py-4 text-[var(--gaia-beige)]/80 hover:text-[var(--gaia-pink)] font-sans text-xs tracking-[0.15em] uppercase transition-colors duration-300"
              >
                Ver Portfolio
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
                <span className="block font-serif text-2xl md:text-3xl text-[var(--gaia-pink)]">100%</span>
                <span className="block text-[var(--gaia-beige)]/40 text-[10px] tracking-wider uppercase mt-1">Personalizado</span>
              </div>
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-[var(--gaia-pink)]">3-6</span>
                <span className="block text-[var(--gaia-beige)]/40 text-[10px] tracking-wider uppercase mt-1">Semanas</span>
              </div>
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-[var(--gaia-pink)]">Full</span>
                <span className="block text-[var(--gaia-beige)]/40 text-[10px] tracking-wider uppercase mt-1">Archivos + Guía</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Brand Identity Mockup */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: easings.premium }}
              className="relative w-full max-w-[400px] aspect-square bg-[var(--gaia-pink)]/5 border border-[var(--gaia-pink)]/20 p-6 shadow-elevated rounded-lg animate-float-slow"
            >
              {/* Brand identity showcase */}
              <div className="w-full h-full flex flex-col justify-between">
                {/* Logo placeholder */}
                <div className="flex-1 flex items-center justify-center border border-[var(--gaia-pink)]/10 rounded-lg mb-4 bg-[var(--gaia-pink)]/[0.02]">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full border-2 border-[var(--gaia-pink)]/30 flex items-center justify-center">
                      <Palette size={28} className="text-[var(--gaia-pink)]/40" />
                    </div>
                    <span className="text-[9px] text-[var(--gaia-pink)]/40 tracking-widest uppercase">Logo Principal</span>
                  </div>
                </div>
                
                {/* Color palette */}
                <div className="flex gap-2 mb-4">
                  <div className="flex-1 h-10 bg-[var(--gaia-pink)]/30 rounded" />
                  <div className="flex-1 h-10 bg-[var(--gaia-beige)]/20 rounded" />
                  <div className="flex-1 h-10 bg-[var(--gaia-burgundy)] border border-[var(--gaia-pink)]/20 rounded" />
                  <div className="flex-1 h-10 bg-[var(--gaia-pink)]/10 rounded" />
                </div>
                
                {/* Typography samples */}
                <div className="space-y-2">
                  <div className="h-3 bg-[var(--gaia-pink)]/15 rounded w-3/4" />
                  <div className="h-2 bg-[var(--gaia-pink)]/10 rounded w-1/2" />
                  <div className="h-2 bg-[var(--gaia-pink)]/5 rounded w-2/3" />
                </div>
              </div>

              {/* Decorative border */}
              <div className="absolute -inset-1 border border-[var(--gaia-pink)]/20 rounded-lg pointer-events-none scale-[1.03]" />
            </motion.div>

            {/* Small floating brand element */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: easings.premium }}
              className="absolute bottom-[-20px] left-[-10px] sm:left-4 w-28 aspect-square bg-[var(--gaia-burgundy)] border border-[var(--gaia-pink)]/20 rounded-lg shadow-elevated p-3 overflow-hidden hidden sm:block animate-float"
            >
              <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[var(--gaia-pink)]/20" />
                <div className="w-full h-1.5 bg-[var(--gaia-pink)]/10 rounded" />
                <div className="w-2/3 h-1.5 bg-[var(--gaia-pink)]/10 rounded" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Teaser Section */}
      <section id="branding-teaser" className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase">
                CASOS DE ÉXITO
              </span>
              <h2 className="font-serif text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
                Identidades que <br />trascienden
              </h2>
              <p className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed">
                Cada marca que creamos o renovamos cuenta una historia visual única. Desde emprendimientos que nacen hasta marcas que necesitan evolucionar.
              </p>
              <div className="pt-2">
                <Link
                  href="/portfolio/branding"
                  onClick={() => {
                    trackCustomEvent('Ver Portfolio - Branding', {
                      category: 'Navigation',
                      action: 'Click',
                    });
                  }}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-[var(--gaia-pink)] text-[var(--gaia-pink)] font-sans text-xs tracking-[0.15em] uppercase hover:bg-[var(--gaia-pink)] hover:text-[var(--gaia-burgundy)] transition-all duration-500 rounded-none cursor-pointer"
                >
                  <span>Ver nuestros proyectos</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right preview graphic */}
            <div className="lg:col-span-6">
              <Link 
                href="/portfolio/branding"
                className="group block relative w-full aspect-[16/10] bg-[var(--gaia-pink)]/[0.02] border border-[var(--gaia-pink)]/10 group-hover:border-[var(--gaia-pink)]/30 rounded-lg overflow-hidden shadow-premium transition-all duration-500"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Layers size={48} className="text-[var(--gaia-pink)]/20 group-hover:text-[var(--gaia-pink)]/40 transition-colors duration-500" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] text-[var(--gaia-pink)] tracking-widest uppercase">Portfolio Branding</span>
                  <h3 className="font-serif text-lg text-[var(--gaia-beige)]/80 group-hover:text-[var(--gaia-beige)] transition-colors">Ver identidades visuales</h3>
                </div>
              </Link>
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
              SERVICIOS DE BRANDING
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
              Formatos de Identidad
            </h2>
            <p className="font-sans text-[var(--gaia-beige)]/60 text-xs sm:text-sm md:text-base mt-4 leading-relaxed">
              Desde la creación completa de una marca hasta la renovación visual. Cada etapa del branding está diseñada para darle a tu proyecto una identidad sólida y coherente.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            
            {/* Diseño de Logo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.01] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] tracking-widest text-[var(--gaia-pink)] uppercase">El Corazón de tu Marca</span>
                <h3 className="font-serif text-2xl text-[var(--gaia-beige)] mt-2 mb-4">Diseño de Branding</h3>
                <p className="font-sans text-xs sm:text-sm text-[var(--gaia-beige)]/50 leading-relaxed mb-6">
                  Creamos el logo y los elementos fundamentales de tu marca desde cero. Un proceso de descubrimiento profundo que traduce tu esencia en un símbolo visual memorable.
                </p>
                <div className="w-full h-[1px] bg-[var(--gaia-pink)]/10 my-4" />
                <ul className="space-y-3">
                  {['Investigación de marca y competencia', 'Desarrollo de concepto creativo', 'Logo principal y variantes', 'Paleta cromática y tipografías', 'Archivos en todos los formatos'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[var(--gaia-beige)]/70">
                      <Check size={14} className="text-[var(--gaia-pink)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleCTA('Diseño de Branding')}
                className="mt-8 w-full py-3 bg-transparent border border-[var(--gaia-pink)]/40 hover:border-[var(--gaia-pink)] text-[var(--gaia-beige)] hover:text-[var(--gaia-pink)] text-xs tracking-wider uppercase font-sans transition-all duration-300 cursor-pointer"
              >
                Solicitar Branding
              </button>
            </motion.div>

            {/* Identidad Visual Completa */}
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
                <span className="text-[10px] tracking-widest text-[var(--gaia-pink)] uppercase">Sistema Visual Completo</span>
                <h3 className="font-serif text-2xl text-[var(--gaia-beige)] mt-2 mb-4">Identidad Visual</h3>
                <p className="font-sans text-xs sm:text-sm text-[var(--gaia-beige)]/50 leading-relaxed mb-6">
                  Más allá del logo: construimos un sistema visual completo con reglas de aplicación, patrones gráficos y guías de uso para que tu marca sea coherente en todo punto de contacto.
                </p>
                <div className="w-full h-[1px] bg-[var(--gaia-pink)]/20 my-4" />
                <ul className="space-y-3">
                  {['Todo lo del diseño de branding', 'Patrones y elementos gráficos', 'Guía de aplicación de marca', 'Mockups y aplicaciones reales', 'Manual de identidad en PDF'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[var(--gaia-beige)]/70">
                      <Check size={14} className="text-[var(--gaia-pink)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleCTA('Identidad Visual')}
                className="mt-8 w-full py-3 bg-[var(--gaia-pink)] text-[var(--gaia-burgundy)] hover:bg-[var(--gaia-beige)] text-xs tracking-wider uppercase font-sans transition-all duration-300 font-medium cursor-pointer"
              >
                Solicitar Identidad
              </button>
            </motion.div>

            {/* Rediseño de Marca */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.01] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] tracking-widest text-[var(--gaia-pink)] uppercase">Para Marcas que Evolucionan</span>
                <h3 className="font-serif text-2xl text-[var(--gaia-beige)] mt-2 mb-4">Renovación de Marca</h3>
                <p className="font-sans text-xs sm:text-sm text-[var(--gaia-beige)]/50 leading-relaxed mb-6">
                  Tu marca creció y su imagen actual ya no la representa. Rediseñamos tu identidad respetando el reconocimiento existente mientras la actualizamos a una nueva etapa.
                </p>
                <div className="w-full h-[1px] bg-[var(--gaia-pink)]/10 my-4" />
                <ul className="space-y-3">
                  {['Auditoría de identidad actual', 'Análisis de percepción de marca', 'Rediseño estratégico del logo', 'Actualización de sistema visual', 'Transición guiada de la nueva imagen'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[var(--gaia-beige)]/70">
                      <Check size={14} className="text-[var(--gaia-pink)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleCTA('Renovación')}
                className="mt-8 w-full py-3 bg-transparent border border-[var(--gaia-pink)]/40 hover:border-[var(--gaia-pink)] text-[var(--gaia-beige)] hover:text-[var(--gaia-pink)] text-xs tracking-wider uppercase font-sans transition-all duration-300 cursor-pointer"
              >
                Solicitar Rediseño
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Brand Impact section */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side text */}
            <div className="space-y-6">
              <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-4">
                IMPACTO DE UNA MARCA SÓLIDA
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
                ¿Por qué invertir en branding profesional?
              </h2>
              <p className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed">
                El 59% de los consumidores prefieren comprar marcas que les resultan familiares. Una identidad visual profesional genera confianza inmediata y diferenciación real frente a la competencia.
              </p>
              <p className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed">
                En Gaia Studio diseñamos marcas con <strong>estrategia + estética + coherencia</strong>. Cada decisión visual tiene un propósito: comunicar quién sos, qué hacés y por qué deberían elegirte. Sin necesidad de explicarlo con palabras.
              </p>
            </div>

            {/* Right side comparison box */}
            <div className="p-6 md:p-8 bg-[var(--gaia-pink)]/[0.02] border border-[var(--gaia-pink)]/10 space-y-6">
              <h4 className="font-serif text-lg text-[var(--gaia-beige)]">Percepción de Marca Profesional</h4>
              
              {/* Metric 1: Confianza */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs tracking-wider font-sans uppercase">
                  <span className="text-[var(--gaia-pink)] font-bold">Marca profesional</span>
                  <span className="text-[var(--gaia-pink)]">+80% confianza</span>
                </div>
                <div className="h-2 bg-[var(--gaia-burgundy)] border border-[var(--gaia-pink)]/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '80%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-[var(--gaia-pink)]"
                  />
                </div>
              </div>

              {/* Metric 2: Improvisada */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs tracking-wider font-sans uppercase text-[var(--gaia-beige)]/40">
                  <span>Marca improvisada</span>
                  <span>+20% confianza</span>
                </div>
                <div className="h-2 bg-[var(--gaia-burgundy)] border border-[var(--gaia-pink)]/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '20%' }}
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
                    <li className="flex items-center gap-1.5"><Palette size={10} className="text-[var(--gaia-pink)]" /> Diseño estratégico</li>
                    <li className="flex items-center gap-1.5"><Layers size={10} className="text-[var(--gaia-pink)]" /> Sistema coherente</li>
                    <li className="flex items-center gap-1.5"><Sparkles size={10} className="text-[var(--gaia-pink)]" /> Diferenciación real</li>
                  </ul>
                </div>
                <div className="space-y-2 text-[var(--gaia-beige)]/30">
                  <span className="block uppercase">Sin Branding:</span>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-1.5">Logo genérico o hecho en casa</li>
                    <li className="flex items-center gap-1.5">Sin guía visual definida</li>
                    <li className="flex items-center gap-1.5">Imagen inconsistente y amateur</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
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
                trackCustomEvent('Solicitar asesoramiento - Branding', {
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
