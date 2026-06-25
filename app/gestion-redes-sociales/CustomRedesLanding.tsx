'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Check, 
  Plus, 
  Minus, 
  Heart, 
  Users, 
  Camera
} from 'lucide-react';
import { Navigation } from '@/components/ui/Navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Footer } from '@/components/sections/Footer';
import { fadeInUp, easings } from '@/lib/animations';
import { trackCustomEvent } from '@/lib/analytics/facebook-pixel';

export function CustomRedesLanding() {
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
      q: '¿Cuántas publicaciones por semana incluyen?',
      a: 'Dependiendo del plan que elijas, trabajamos con frecuencias de 3 a 5 publicaciones semanales en cada red. Definimos la cadencia ideal según tu audiencia y objetivos, siempre priorizando calidad sobre cantidad.'
    },
    {
      q: '¿Quién crea el contenido gráfico y los textos?',
      a: 'Todo el contenido es creado por nuestro equipo: diseñadores, redactores y productores audiovisuales. Trabajamos en base a la identidad de tu marca y te presentamos un calendario editorial para aprobación antes de publicar.'
    },
    {
      q: '¿También responden comentarios y mensajes?',
      a: 'No. En esa parte se trabaja en equipo con el cliente para no dejar afuera ningún detalle.'
    },
    {
      q: '¿Cómo miden los resultados?',
      a: 'Generamos reportes trimestrales con métricas clave: alcance, interacciones, crecimiento de seguidores, rendimiento de contenido y conversiones. Así podés ver exactamente qué funciona y ajustar la estrategia.'
    },
    {
      q: '¿Puedo ver el contenido antes de que se publique?',
      a: 'Por supuesto. Todo el contenido pasa por tu aprobación antes de salir. Trabajamos con calendarios editoriales organizados para que tengas visibilidad completa de lo que se va a publicar.'
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
            <div className="mb-6 flex items-start">
              <Breadcrumbs />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easings.premium }}
            >
              <span className="block text-[var(--gaia-pink)] text-xs sm:text-sm tracking-[0.3em] uppercase mb-4">
                Comunidad y presencia digital
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-[var(--gaia-beige)] tracking-tight">
                Tu marca que <br />
                <span className="font-monsieur text-[var(--gaia-pink)] text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] block -mt-1 sm:-mt-2 md:-mt-4 lowercase">
                  conecta y crece
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: easings.premium }}
              className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl"
            >
              No se trata de publicar por publicar. Creamos estrategia, contenido y comunidad para que tu marca tenga una presencia digital cuidada, coherente y constante.
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
                href="#servicios-teaser"
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
                <span className="block font-serif text-2xl md:text-3xl text-[var(--gaia-pink)]">360°</span>
                <span className="block text-[var(--gaia-beige)]/40 text-[10px] tracking-wider uppercase mt-1">Gestión Integral</span>
              </div>
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-[var(--gaia-pink)]">+40%</span>
                <span className="block text-[var(--gaia-beige)]/40 text-[10px] tracking-wider uppercase mt-1">Engagement</span>
              </div>
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-[var(--gaia-pink)]">24/7</span>
                <span className="block text-[var(--gaia-beige)]/40 text-[10px] tracking-wider uppercase mt-1">Comunidad Activa</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Gaia Instagram Mockup */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: easings.premium }}
              className="relative w-full max-w-[380px] aspect-[9/16] bg-[var(--gaia-pink)]/5 border border-[var(--gaia-pink)]/20 p-1.5 shadow-elevated rounded-2xl animate-float-slow"
            >
              {/* Phone frame */}
              <div className="w-full h-full bg-[var(--gaia-burgundy)] rounded-xl overflow-hidden relative">
                {/* Speaker indicator */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-[var(--gaia-pink)]/20 rounded-full z-10" />
                
                {/* Instagram feed mockup */}
                <div className="mt-6 p-3 space-y-3">
                  <div className="bg-[var(--gaia-pink)]/[0.03] border border-[var(--gaia-pink)]/10 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="relative w-6 h-6 rounded-full overflow-hidden border border-[var(--gaia-pink)]/30 bg-[var(--gaia-beige)]/90 shrink-0">
                        <Image
                          src="/logo-pink.png"
                          alt="Gaia Studio"
                          fill
                          className="object-cover p-1"
                          sizes="24px"
                        />
                      </div>
                      <div className="h-2 w-20 bg-[var(--gaia-pink)]/20 rounded" />
                    </div>
                    <div className="relative aspect-square rounded mb-2 overflow-hidden bg-[var(--gaia-pink)]/[0.05]">
                      <Image
                        src="/portfolio-content.jpg"
                        alt="Placeholder post"
                        fill
                        className="object-cover"
                        sizes="320px"
                      />
                    </div>
                    <div className="flex gap-3 mb-1">
                      <Heart size={14} className="text-[var(--gaia-pink)]/40" />
                      <div className="h-2 w-4 bg-[var(--gaia-pink)]/20 rounded" />
                    </div>
                    <div className="h-2 w-full bg-[var(--gaia-pink)]/10 rounded" />
                    <div className="h-2 w-2/3 bg-[var(--gaia-pink)]/10 rounded mt-1" />
                  </div>

                  <div className="bg-[var(--gaia-pink)]/[0.03] border border-[var(--gaia-pink)]/10 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="relative w-6 h-6 rounded-full overflow-hidden border border-[var(--gaia-pink)]/30 bg-[var(--gaia-beige)]/90 shrink-0">
                        <Image
                          src="/logo-pink.png"
                          alt="Gaia Studio"
                          fill
                          className="object-cover p-1"
                          sizes="24px"
                        />
                      </div>
                      <div className="h-2 w-16 bg-[var(--gaia-pink)]/20 rounded" />
                    </div>
                    <div className="relative aspect-[4/5] rounded mb-2 overflow-hidden bg-[var(--gaia-pink)]/[0.05]">
                      <Image
                        src="/portfolio-branding.jpg"
                        alt="Placeholder post"
                        fill
                        className="object-cover"
                        sizes="320px"
                      />
                    </div>
                    <div className="flex gap-3 mb-1">
                      <Heart size={14} className="text-[var(--gaia-pink)]/40" />
                      <div className="h-2 w-4 bg-[var(--gaia-pink)]/20 rounded" />
                    </div>
                    <div className="h-2 w-full bg-[var(--gaia-pink)]/10 rounded" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Small floating notification */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: easings.premium }}
              className="absolute top-12 -right-4 bg-[var(--gaia-burgundy)] border border-[var(--gaia-pink)]/20 rounded-lg px-3 py-2 shadow-elevated animate-float hidden sm:block"
            >
              <div className="flex items-center gap-2">
                <Users size={12} className="text-[var(--gaia-pink)]" />
                <span className="text-[10px] text-[var(--gaia-beige)]/60">+128 seguidores</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      

      {/* Modalidades de Servicio */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-[var(--gaia-burgundy)] relative overflow-hidden border-b border-[var(--gaia-pink)]/10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
            <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-4">
              SERVICIOS DE REDES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
              Formatos de Gestión
            </h2>
            <p className="font-sans text-[var(--gaia-beige)]/60 text-xs sm:text-sm md:text-base mt-4 leading-relaxed">
              Cada marca necesita un nivel de presencia distinto. Estructuramos nuestros servicios para adaptarse al tamaño y ambición de tu proyecto en redes sociales.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            
            {/* Social Media Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.01] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] tracking-widest text-[var(--gaia-pink)] uppercase">Estrategia y Planificación</span>
                <h3 className="font-serif text-2xl text-[var(--gaia-beige)] mt-2 mb-4">Social Media</h3>
                <p className="font-sans text-xs sm:text-sm text-[var(--gaia-beige)]/50 leading-relaxed mb-6">
                  Pensamos y creamos contenido visual alineado a la identidad de tu marca. Desarrollamos piezas gráficas y audiovisuales listas para usar, pensadas para sostener una presencia digital cuidada y coherente. 
                </p>
                <div className="w-full h-[1px] bg-[var(--gaia-pink)]/10 my-4" />
                <ul className="space-y-3">
                  {[ 'Definición de ejes y pilares de contenido', 'Calendario editorial mensual (si requiere)', 'Optimización continua de estrategia'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[var(--gaia-beige)]/70">
                      <Check size={14} className="text-[var(--gaia-pink)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleCTA('Social Media')}
                className="mt-8 w-full py-3 bg-transparent border border-[var(--gaia-pink)]/40 hover:border-[var(--gaia-pink)] text-[var(--gaia-beige)] hover:text-[var(--gaia-pink)] text-xs tracking-wider uppercase font-sans transition-all duration-300 cursor-pointer"
              >
                Solicitar Social Media
              </button>
            </motion.div>

            {/* Community Manager */}
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
                <span className="text-[10px] tracking-widest text-[var(--gaia-pink)] uppercase">Interacción y Comunidad</span>
                <h3 className="font-serif text-2xl text-[var(--gaia-beige)] mt-2 mb-4">Community Manager</h3>
                <p className="font-sans text-xs sm:text-sm text-[var(--gaia-beige)]/50 leading-relaxed mb-6">
                  Gestión integral de tus redes sociales, creatividad, planificación, grabación, edición y publicación de contenido. Trabajamos la comunicación diaria para construir comunidad, generar interacción y fortalecer la marca.
                </p>
                <div className="w-full h-[1px] bg-[var(--gaia-pink)]/20 my-4" />
                <ul className="space-y-3">
                  {['Publicación programada en redes', 'Moderación de comunidad activa', 'Stories y contenido efímero diario', 'Reporte trimestral de interacciones'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[var(--gaia-beige)]/70">
                      <Check size={14} className="text-[var(--gaia-pink)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleCTA('Community Manager')}
                className="mt-8 w-full py-3 bg-[var(--gaia-pink)] text-[var(--gaia-burgundy)] hover:bg-[var(--gaia-beige)] text-xs tracking-wider uppercase font-sans transition-all duration-300 font-medium cursor-pointer"
              >
                Solicitar CM
              </button>
            </motion.div>

            {/* Producción de Contenido */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.01] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] tracking-widest text-[var(--gaia-pink)] uppercase">Creación Visual y Audiovisual</span>
                <h3 className="font-serif text-2xl text-[var(--gaia-beige)] mt-2 mb-4">Producción y Edición</h3>
                <p className="font-sans text-xs sm:text-sm text-[var(--gaia-beige)]/50 leading-relaxed mb-6">
                  Creamos todo el contenido visual que tu marca necesita: piezas gráficas, reels, videos, fotos y adaptaciones para cada red y formato.
                </p>
                <div className="w-full h-[1px] bg-[var(--gaia-pink)]/10 my-4" />
                <ul className="space-y-3">
                  {['Diseño de piezas gráficas para feed', 'Producción y edición de reels', 'Fotografía de productos o servicios', 'Adaptaciones por red y formato', 'Banco de contenido mensual organizado'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[var(--gaia-beige)]/70">
                      <Check size={14} className="text-[var(--gaia-pink)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleCTA('Producción')}
                className="mt-8 w-full py-3 bg-transparent border border-[var(--gaia-pink)]/40 hover:border-[var(--gaia-pink)] text-[var(--gaia-beige)] hover:text-[var(--gaia-pink)] text-xs tracking-wider uppercase font-sans transition-all duration-300 cursor-pointer"
              >
                Solicitar Producción
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Engagement & Growth section */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side text */}
            <div className="space-y-6">
              <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-4">
                CRECIMIENTO ORGÁNICO
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
                ¿Por qué importa la constancia en redes?
              </h2>
              <p className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed">
                El 78% de los consumidores investigan una marca en redes sociales antes de comprar. Una presencia inconsistente o descuidada genera desconfianza y pierde oportunidades de conversión.
              </p>
              <p className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed">
                En Gaia Studio trabajamos con <strong>estrategia + constancia + creatividad</strong>. Cada publicación tiene un propósito, cada interacción cuida la relación con tu audiencia, y cada métrica nos ayuda a mejorar. El resultado es una comunidad que crece de forma orgánica y comprometida.
              </p>
            </div>

            {/* Right side comparison box */}
            <div className="p-6 md:p-8 bg-[var(--gaia-pink)]/[0.02] border border-[var(--gaia-pink)]/10 space-y-6">
              <h4 className="font-serif text-lg text-[var(--gaia-beige)]">Impacto de la Gestión Profesional</h4>
              
              {/* Metric 1: Engagement */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs tracking-wider font-sans uppercase">
                  <span className="text-[var(--gaia-pink)] font-bold">Con gestión profesional</span>
                  <span className="text-[var(--gaia-pink)]">+40% engagement</span>
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

              {/* Metric 2: Sin gestión */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs tracking-wider font-sans uppercase text-[var(--gaia-beige)]/40">
                  <span>Sin estrategia definida</span>
                  <span>+5% engagement</span>
                </div>
                <div className="h-2 bg-[var(--gaia-burgundy)] border border-[var(--gaia-pink)]/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '15%' }}
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
                    <li className="flex items-center gap-1.5"><Heart size={10} className="text-[var(--gaia-pink)]" /> Contenido con propósito</li>
                    <li className="flex items-center gap-1.5"><Users size={10} className="text-[var(--gaia-pink)]" /> Comunidad comprometida</li>
                    <li className="flex items-center gap-1.5"><Camera size={10} className="text-[var(--gaia-pink)]" /> Producción profesional</li>
                  </ul>
                </div>
                <div className="space-y-2 text-[var(--gaia-beige)]/30">
                  <span className="block uppercase">Sin Estrategia:</span>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-1.5">Publicaciones improvisadas</li>
                    <li className="flex items-center gap-1.5">Sin interacción constante</li>
                    <li className="flex items-center gap-1.5">Contenido genérico y repetitivo</li>
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
                trackCustomEvent('Solicitar asesoramiento - Redes Sociales', {
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
