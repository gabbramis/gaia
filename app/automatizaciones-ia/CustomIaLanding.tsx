'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Check,
  Plus,
  Minus,
  Bot,
  Workflow,
  MessageCircle,
  Zap,
  Clock,
  TrendingUp,
} from 'lucide-react';
import { Navigation } from '@/components/ui/Navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Footer } from '@/components/sections/Footer';
import { fadeInUp, easings } from '@/lib/animations';
import { trackCustomEvent } from '@/lib/analytics/facebook-pixel';

export function CustomIaLanding() {
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
      q: '¿Cuánto tiempo tarda en estar funcionando una automatización?',
      a: 'Depende de la complejidad del flujo. Un agente de WhatsApp simple puede estar activo en 1 a 2 semanas. Proyectos más completos con múltiples integraciones y flujos personalizados toman entre 3 a 4 semanas.',
    },
    {
      q: '¿Necesito saber programar para tener automatizaciones con IA?',
      a: 'No. Nosotras nos encargamos de todo el desarrollo técnico. Vos solo nos contás qué necesitás automatizar y nosotras diseñamos, construimos y activamos el flujo completo.',
    },
    {
      q: '¿Qué mantenimiento requieren las automatizaciones?',
      a: 'Una vez activas, funcionan de forma autónoma. Nosotras hacemos seguimiento mensual para optimizar rendimiento, ajustar respuestas y asegurarnos de que todo siga funcionando correctamente.',
    },
    {
      q: '¿Se pueden conectar con WhatsApp Business?',
      a: 'Sí. Trabajamos con la API oficial de WhatsApp Business para crear agentes inteligentes que respondan consultas, envíen catálogos, agenden turnos o deriven a un asesor humano cuando sea necesario.',
    },
    {
      q: '¿Puedo automatizar varios procesos a la vez?',
      a: 'Por supuesto. Diseñamos flujos escalables que se pueden conectar entre sí. Desde la captación de un lead hasta el seguimiento post-venta, todo puede estar automatizado y sincronizado.',
    },
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
                Automatizaciones con Inteligencia Artificial
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-[var(--gaia-beige)] tracking-tight">
                Tu negocio{' '}
                <span className="font-monsieur text-[var(--gaia-pink)] text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] block -mt-1 sm:-mt-2 md:-mt-4 lowercase">
                  trabaja solo
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: easings.premium }}
              className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl"
            >
              Implementamos agentes inteligentes y flujos automatizados que
              trabajan 24/7 para tu negocio. Desde chatbots de WhatsApp hasta
              procesos completos conectados con IA.
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
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </motion.div>

            {/* Micro Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-[var(--gaia-pink)]/15 max-w-lg"
            >
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-[var(--gaia-pink)]">
                  24/7
                </span>
                <span className="block text-[var(--gaia-beige)]/40 text-[10px] tracking-wider uppercase mt-1">
                  Operativo
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-[var(--gaia-pink)]">
                  3x
                </span>
                <span className="block text-[var(--gaia-beige)]/40 text-[10px] tracking-wider uppercase mt-1">
                  Conversiones
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-[var(--gaia-pink)]">
                  IA
                </span>
                <span className="block text-[var(--gaia-beige)]/40 text-[10px] tracking-wider uppercase mt-1">
                  Personalizado
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Automation Mockup */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: easings.premium }}
              className="relative w-full max-w-[400px] aspect-square bg-[var(--gaia-pink)]/5 border border-[var(--gaia-pink)]/20 p-6 shadow-elevated rounded-lg animate-float-slow"
            >
              <div className="w-full h-full flex flex-col justify-between">
                {/* Bot icon */}
                <div className="flex-1 flex items-center justify-center border border-[var(--gaia-pink)]/10 rounded-lg mb-4 bg-[var(--gaia-pink)]/[0.02]">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full border-2 border-[var(--gaia-pink)]/30 flex items-center justify-center">
                      <Bot size={28} className="text-[var(--gaia-pink)]/40" />
                    </div>
                    <span className="text-[9px] text-[var(--gaia-pink)]/40 tracking-widest uppercase">
                      Agente IA
                    </span>
                  </div>
                </div>

                {/* Flow indicators */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MessageCircle
                      size={12}
                      className="text-[var(--gaia-pink)]/30"
                    />
                    <div className="h-2 bg-[var(--gaia-pink)]/15 rounded w-full" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Workflow
                      size={12}
                      className="text-[var(--gaia-pink)]/30"
                    />
                    <div className="h-2 bg-[var(--gaia-pink)]/10 rounded w-3/4" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap size={12} className="text-[var(--gaia-pink)]/30" />
                    <div className="h-2 bg-[var(--gaia-pink)]/10 rounded w-1/2" />
                  </div>
                </div>
              </div>

              <div className="absolute -inset-1 border border-[var(--gaia-pink)]/20 rounded-lg pointer-events-none scale-[1.03]" />
            </motion.div>

            {/* Small floating element */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: easings.premium }}
              className="absolute bottom-[-20px] left-[-10px] sm:left-4 w-28 aspect-square bg-[var(--gaia-burgundy)] border border-[var(--gaia-pink)]/20 rounded-lg shadow-elevated p-3 overflow-hidden hidden sm:block animate-float"
            >
              <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[var(--gaia-pink)]/20 flex items-center justify-center">
                  <Clock size={14} className="text-[var(--gaia-pink)]/40" />
                </div>
                <div className="w-full h-1.5 bg-[var(--gaia-pink)]/10 rounded" />
                <div className="w-2/3 h-1.5 bg-[var(--gaia-pink)]/10 rounded" />
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
              SERVICIOS DE AUTOMATIZACIÓN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
              Planes de Automatización
            </h2>
            <p className="font-sans text-[var(--gaia-beige)]/60 text-xs sm:text-sm md:text-base mt-4 leading-relaxed">
              Desde un agente de WhatsApp hasta un ecosistema completo de
              procesos automatizados. Elegí el plan que se adapte a tu negocio.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {/* Básico */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.01] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] tracking-widest text-[var(--gaia-pink)] uppercase">
                  Para Empezar
                </span>
                <h3 className="font-serif text-2xl text-[var(--gaia-beige)] mt-2 mb-4">
                  Básico
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[var(--gaia-beige)]/50 leading-relaxed mb-6">
                  Un agente inteligente que responde consultas y automatiza tareas
                  simples las 24 horas del día.
                </p>
                <div className="w-full h-[1px] bg-[var(--gaia-pink)]/10 my-4" />
                <ul className="space-y-3">
                  {[
                    '1 agente de WhatsApp con IA',
                    'Integración con tu número actual',
                    'Respuestas 24/7 personalizadas',
                    'Configuración de horarios y reglas',
                    'Reporte mensual de actividad',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs text-[var(--gaia-beige)]/70"
                    >
                      <Check
                        size={14}
                        className="text-[var(--gaia-pink)] shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleCTA('Plan Básico')}
                className="mt-8 w-full py-3 bg-transparent border border-[var(--gaia-pink)]/40 hover:border-[var(--gaia-pink)] text-[var(--gaia-beige)] hover:text-[var(--gaia-pink)] text-xs tracking-wider uppercase font-sans transition-all duration-300 cursor-pointer"
              >
                Solicitar Plan
              </button>
            </motion.div>

            {/* Profesional */}
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
                <span className="text-[10px] tracking-widest text-[var(--gaia-pink)] uppercase">
                  Para Negocios en Crecimiento
                </span>
                <h3 className="font-serif text-2xl text-[var(--gaia-beige)] mt-2 mb-4">
                  Profesional
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[var(--gaia-beige)]/50 leading-relaxed mb-6">
                  Múltiples canales conectados con flujos automatizados que
                  nutren leads y optimizan tu operación diaria.
                </p>
                <div className="w-full h-[1px] bg-[var(--gaia-pink)]/20 my-4" />
                <ul className="space-y-3">
                  {[
                    'Chatbots multicanal (WhatsApp, Instagram, Web)',
                    'Flujos con n8n personalizados',
                    'Conexión con Google Calendar y Gmail',
                    'Integración con Mercado Pago',
                    'Automatización de seguimiento de leads',
                    'Soporte prioritario',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs text-[var(--gaia-beige)]/70"
                    >
                      <Check
                        size={14}
                        className="text-[var(--gaia-pink)] shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleCTA('Plan Profesional')}
                className="mt-8 w-full py-3 bg-[var(--gaia-pink)] text-[var(--gaia-burgundy)] hover:bg-[var(--gaia-beige)] text-xs tracking-wider uppercase font-sans transition-all duration-300 font-medium cursor-pointer"
              >
                Solicitar Plan
              </button>
            </motion.div>

            {/* Enterprise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.01] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] tracking-widest text-[var(--gaia-pink)] uppercase">
                  Full Personalizado
                </span>
                <h3 className="font-serif text-2xl text-[var(--gaia-beige)] mt-2 mb-4">
                  Enterprise
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[var(--gaia-beige)]/50 leading-relaxed mb-6">
                  Ecosistema completo de automatización diseñado a medida para
                  operaciones que necesitan escalar sin límites.
                </p>
                <div className="w-full h-[1px] bg-[var(--gaia-pink)]/10 my-4" />
                <ul className="space-y-3">
                  {[
                    'Agentes de IA avanzados con personalidad',
                    'Flujos complejos multi-etapa',
                    'Integraciones API personalizadas',
                    'Conexión con Google Calendar, Gmail, Drive y más',
                    'Automatización de cobros con Mercado Pago',
                    'Dashboard de métricas en tiempo real',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs text-[var(--gaia-beige)]/70"
                    >
                      <Check
                        size={14}
                        className="text-[var(--gaia-pink)] shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleCTA('Plan Enterprise')}
                className="mt-8 w-full py-3 bg-transparent border border-[var(--gaia-pink)]/40 hover:border-[var(--gaia-pink)] text-[var(--gaia-beige)] hover:text-[var(--gaia-pink)] text-xs tracking-wider uppercase font-sans transition-all duration-300 cursor-pointer"
              >
                Solicitar Plan
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impacto section */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side text */}
            <div className="space-y-6">
              <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-4">
                EL IMPACTO DE LA AUTOMATIZACIÓN
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
                ¿Por qué automatizar con IA?
              </h2>
              <p className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed">
                Tus clientes esperan respuestas inmediatas. Tu equipo necesita
                enfocarse en lo que importa. La automatización con IA elimina
                tareas repetitivas y libera tiempo para crear, vender y hacer
                crecer tu negocio.
              </p>
              <p className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed">
                En Gaia Studio diseñamos automatizaciones con{' '}
                <strong>estrategia + tecnología + personalización</strong>. Cada
                flujo está pensado para resolver un problema real de tu negocio,
                no para ser una herramienta más que nadie usa.
              </p>
            </div>

            {/* Right side comparison box */}
            <div className="p-6 md:p-8 bg-[var(--gaia-pink)]/[0.02] border border-[var(--gaia-pink)]/10 space-y-6">
              <h4 className="font-serif text-lg text-[var(--gaia-beige)]">
                Negocio Automatizado vs Sin Automatizar
              </h4>

              {/* Metric 1: Disponibilidad */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs tracking-wider font-sans uppercase">
                  <span className="text-[var(--gaia-pink)] font-bold">
                    Con automatización
                  </span>
                  <span className="text-[var(--gaia-pink)]">24/7 activo</span>
                </div>
                <div className="h-2 bg-[var(--gaia-burgundy)] border border-[var(--gaia-pink)]/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '90%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-[var(--gaia-pink)]"
                  />
                </div>
              </div>

              {/* Metric 2: Sin automatizar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs tracking-wider font-sans uppercase text-[var(--gaia-beige)]/40">
                  <span>Sin automatización</span>
                  <span>Horario laboral</span>
                </div>
                <div className="h-2 bg-[var(--gaia-burgundy)] border border-[var(--gaia-pink)]/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '35%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-[var(--gaia-pink)]/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--gaia-pink)]/15 text-xs font-sans">
                <div className="space-y-2">
                  <span className="block text-[var(--gaia-pink)] uppercase font-semibold">
                    Con Gaia:
                  </span>
                  <ul className="space-y-1 text-[var(--gaia-beige)]/60">
                    <li className="flex items-center gap-1.5">
                      <Bot size={10} className="text-[var(--gaia-pink)]" />{' '}
                      Agentes que aprenden
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Workflow
                        size={10}
                        className="text-[var(--gaia-pink)]"
                      />{' '}
                      Flujos conectados
                    </li>
                    <li className="flex items-center gap-1.5">
                      <TrendingUp
                        size={10}
                        className="text-[var(--gaia-pink)]"
                      />{' '}
                      Resultados medibles
                    </li>
                  </ul>
                </div>
                <div className="space-y-2 text-[var(--gaia-beige)]/30">
                  <span className="block uppercase">Sin IA:</span>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-1.5">
                      Respuestas manuales y lentas
                    </li>
                    <li className="flex items-center gap-1.5">
                      Leads perdidos por demora
                    </li>
                    <li className="flex items-center gap-1.5">
                      Tareas repetitivas infinitas
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
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
              Hablemos de automatizar.
            </h2>
            <p className="font-sans text-[var(--gaia-beige)]/50 text-xs md:text-sm leading-relaxed max-w-lg mx-auto mb-6">
              Cada negocio tiene procesos distintos. Coordinemos una reunión y
              definamos juntos qué automatizar primero para que tu negocio
              trabaje solo.
            </p>
            <Link
              href="#"
              onClick={() => {
                trackCustomEvent('Solicitar asesoramiento - Automatizaciones IA', {
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
