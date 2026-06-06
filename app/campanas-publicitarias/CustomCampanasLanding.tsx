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
  Megaphone, 
  Target, 
  TrendingUp
} from 'lucide-react';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/sections/Footer';
import { fadeInUp, easings } from '@/lib/animations';
import { trackCustomEvent } from '@/lib/analytics/facebook-pixel';

export function CustomCampanasLanding() {
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
      q: '¿Cuánto tiempo antes debo planificar una campaña?',
      a: 'Lo ideal es comenzar a planificar con 3 a 4 semanas de anticipación para campañas estándar, y 6 a 8 semanas para lanzamientos grandes o fechas clave como Black Friday. Esto nos permite desarrollar la idea creativa, producir el contenido y coordinar toda la ejecución sin apuros.'
    },
    {
      q: '¿Qué tipo de contenido producen para las campañas?',
      a: 'Producimos todo el contenido necesario: piezas gráficas para redes y web, videos y reels, copys y textos persuasivos, banners para pauta digital, y adaptaciones para cada canal. Todo alineado al concepto creativo central de la campaña.'
    },
    {
      q: '¿También gestionan la pauta publicitaria?',
      a: 'Sí. Además de la parte creativa, nos encargamos de la planificación y gestión de pauta digital en Meta Ads, Google Ads y otras plataformas. Definimos presupuestos, segmentación y optimizamos durante la campaña para maximizar resultados.'
    },
    {
      q: '¿Cómo miden el éxito de una campaña?',
      a: 'Definimos KPIs claros desde el briefing: alcance, impresiones, clics, conversiones, costo por resultado, y retorno de inversión. Al finalizar la campaña entregamos un reporte completo con análisis y aprendizajes para la siguiente.'
    },
    {
      q: '¿Trabajan con campañas para marcas pequeñas o solo grandes empresas?',
      a: 'Trabajamos con marcas de todos los tamaños. Lo que importa es tener un objetivo claro y ganas de generar impacto. Adaptamos la estrategia y el presupuesto a la realidad de cada proyecto para obtener los mejores resultados posibles.'
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
                Impacto estratégico 360
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-[var(--gaia-beige)] tracking-tight">
                Campañas que <br />
                <span className="font-monsieur text-[var(--gaia-pink)] text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] block -mt-1 sm:-mt-2 md:-mt-4 lowercase">
                  generan movimiento
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: easings.premium }}
              className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl"
            >
              No se trata solo de publicar algo bonito. Desarrollamos la idea creativa, producimos el contenido, planificamos la pauta y acompañamos la ejecución para que cada acción tenga sentido dentro de un todo coordinado.
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
                href="#campanas-teaser"
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
                <span className="block text-[var(--gaia-beige)]/40 text-[10px] tracking-wider uppercase mt-1">Campaña Integral</span>
              </div>
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-[var(--gaia-pink)]">+150%</span>
                <span className="block text-[var(--gaia-beige)]/40 text-[10px] tracking-wider uppercase mt-1">Alcance Promedio</span>
              </div>
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-[var(--gaia-pink)]">ROI</span>
                <span className="block text-[var(--gaia-beige)]/40 text-[10px] tracking-wider uppercase mt-1">Medición Real</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Campaign Mockup */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: easings.premium }}
              className="relative w-full max-w-[420px] aspect-[4/3] bg-[var(--gaia-pink)]/5 border border-[var(--gaia-pink)]/20 p-4 shadow-elevated rounded-lg animate-float-slow"
            >
              {/* Campaign dashboard mockup */}
              <div className="w-full h-full flex flex-col gap-3">
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-[var(--gaia-pink)] tracking-widest uppercase">Campaña Activa</span>
                  <div className="px-2 py-0.5 bg-[var(--gaia-pink)]/20 rounded text-[9px] text-[var(--gaia-pink)]">LIVE</div>
                </div>
                
                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-[var(--gaia-pink)]/[0.03] border border-[var(--gaia-pink)]/10 rounded p-2 text-center">
                    <span className="block font-serif text-lg text-[var(--gaia-pink)]">45K</span>
                    <span className="text-[8px] text-[var(--gaia-beige)]/40 uppercase">Alcance</span>
                  </div>
                  <div className="bg-[var(--gaia-pink)]/[0.03] border border-[var(--gaia-pink)]/10 rounded p-2 text-center">
                    <span className="block font-serif text-lg text-[var(--gaia-pink)]">2.8K</span>
                    <span className="text-[8px] text-[var(--gaia-beige)]/40 uppercase">Clics</span>
                  </div>
                  <div className="bg-[var(--gaia-pink)]/[0.03] border border-[var(--gaia-pink)]/10 rounded p-2 text-center">
                    <span className="block font-serif text-lg text-[var(--gaia-pink)]">6.2%</span>
                    <span className="text-[8px] text-[var(--gaia-beige)]/40 uppercase">CTR</span>
                  </div>
                </div>
                
                {/* Chart placeholder */}
                <div className="flex-1 bg-[var(--gaia-pink)]/[0.02] border border-[var(--gaia-pink)]/10 rounded p-3 flex items-end gap-1">
                  {[35, 45, 30, 55, 40, 65, 50, 70, 60, 80, 75, 90].map((h, i) => (
                    <div key={i} className="flex-1 bg-[var(--gaia-pink)]/20 rounded-t" style={{ height: `${h}%` }} />
                  ))}
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
                <TrendingUp size={12} className="text-[var(--gaia-pink)]" />
                <span className="text-[10px] text-[var(--gaia-beige)]/60">+150% alcance</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campanas Teaser Section 
      <section id="campanas-teaser" className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text 
            <div className="lg:col-span-6 space-y-6">
              <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase">
                MOMENTOS DE IMPACTO
              </span>
              <h2 className="font-serif text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
                Campañas que <br />conectan
              </h2>
              <p className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed">
                Una campaña publicitaria es un momento de intensidad para una marca: un lanzamiento, una promoción, una fecha clave. Coordinamos cada acción para generar impacto real, no solo ruido.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => handleCTA('Ver Campañas')}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-[var(--gaia-pink)] text-[var(--gaia-pink)] font-sans text-xs tracking-[0.15em] uppercase hover:bg-[var(--gaia-pink)] hover:text-[var(--gaia-burgundy)] transition-all duration-500 rounded-none cursor-pointer"
                >
                  <span>Conocer más</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right preview graphic }
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] bg-[var(--gaia-pink)]/[0.02] border border-[var(--gaia-pink)]/10 rounded-lg overflow-hidden relative group hover:border-[var(--gaia-pink)]/30 transition-all duration-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Megaphone size={32} className="text-[var(--gaia-pink)]/20 group-hover:text-[var(--gaia-pink)]/40 transition-colors" />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[9px] text-[var(--gaia-pink)] tracking-widest uppercase">360° Campaigns</span>
                  </div>
                </div>
                <div className="aspect-[3/4] bg-[var(--gaia-pink)]/[0.02] border border-[var(--gaia-pink)]/10 rounded-lg overflow-hidden relative group hover:border-[var(--gaia-pink)]/30 transition-all duration-500 mt-8">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Target size={32} className="text-[var(--gaia-pink)]/20 group-hover:text-[var(--gaia-pink)]/40 transition-colors" />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[9px] text-[var(--gaia-pink)] tracking-widest uppercase">Lanzamientos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Modalidades de Servicio */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-[var(--gaia-burgundy)] relative overflow-hidden border-b border-[var(--gaia-pink)]/10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
            <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-4">
              TIPOS DE CAMPAÑA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
              Formatos de Campaña
            </h2>
            <p className="font-sans text-[var(--gaia-beige)]/60 text-xs sm:text-sm md:text-base mt-4 leading-relaxed">
              Cada objetivo requiere una estrategia distinta. Estructuramos nuestras campañas para adaptarse al momento y la ambición de tu marca.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            
            {/* Campaña 360 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.01] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] tracking-widest text-[var(--gaia-pink)] uppercase">Integración Total de Canales</span>
                <h3 className="font-serif text-2xl text-[var(--gaia-beige)] mt-2 mb-4">Campaña 360°</h3>
                <p className="font-sans text-xs sm:text-sm text-[var(--gaia-beige)]/50 leading-relaxed mb-6">
                  Campaña integral que coordina todos los canales: redes sociales, pauta digital, email marketing y acciones offline. Un mensaje unificado que genera máximo impacto.
                </p>
                <div className="w-full h-[1px] bg-[var(--gaia-pink)]/10 my-4" />
                <ul className="space-y-3">
                  {['Concepto creativo central unificado', 'Producción de contenido multi-canal', 'Coordinación de calendario de lanzamiento', 'Pauta digital segmentada y optimizada', 'Reporte final con métricas completas'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[var(--gaia-beige)]/70">
                      <Check size={14} className="text-[var(--gaia-pink)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleCTA('Campaña 360')}
                className="mt-8 w-full py-3 bg-transparent border border-[var(--gaia-pink)]/40 hover:border-[var(--gaia-pink)] text-[var(--gaia-beige)] hover:text-[var(--gaia-pink)] text-xs tracking-wider uppercase font-sans transition-all duration-300 cursor-pointer"
              >
                Solicitar 360°
              </button>
            </motion.div>

            {/* Promociones */}
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
                <span className="text-[10px] tracking-widest text-[var(--gaia-pink)] uppercase">Para Fechas Clave y Ventas</span>
                <h3 className="font-serif text-2xl text-[var(--gaia-beige)] mt-2 mb-4">Promociones</h3>
                <p className="font-sans text-xs sm:text-sm text-[var(--gaia-beige)]/50 leading-relaxed mb-6">
                  Campañas focalizadas en fechas estratégicas: Black Friday, Día de la Madre, fin de temporada. Diseñamos la oferta, el mensaje y la distribución para maximizar conversiones.
                </p>
                <div className="w-full h-[1px] bg-[var(--gaia-pink)]/20 my-4" />
                <ul className="space-y-3">
                  {['Definición de oferta y propuesta de valor', 'Piezas gráficas y videos promocionales', 'Landing page o sección dedicada', 'Pauta publicitaria intensiva', 'Monitoreo y ajuste en tiempo real'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[var(--gaia-beige)]/70">
                      <Check size={14} className="text-[var(--gaia-pink)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleCTA('Promociones')}
                className="mt-8 w-full py-3 bg-[var(--gaia-pink)] text-[var(--gaia-burgundy)] hover:bg-[var(--gaia-beige)] text-xs tracking-wider uppercase font-sans transition-all duration-300 font-medium cursor-pointer"
              >
                Solicitar Promo
              </button>
            </motion.div>

            {/* Lanzamientos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.01] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] tracking-widest text-[var(--gaia-pink)] uppercase">Para Productos o Servicios Nuevos</span>
                <h3 className="font-serif text-2xl text-[var(--gaia-beige)] mt-2 mb-4">Lanzamientos</h3>
                <p className="font-sans text-xs sm:text-sm text-[var(--gaia-beige)]/50 leading-relaxed mb-6">
                  El debut de un producto o servicio merece una entrada triunfal. Creamos expectativa, revelamos con impacto y sostenemos el momentum post-lanzamiento.
                </p>
                <div className="w-full h-[1px] bg-[var(--gaia-pink)]/10 my-4" />
                <ul className="space-y-3">
                  {['Estrategia de pre-lanzamiento y expectativa', 'Pieza revelación y contenido de impacto', 'Secuencia de comunicación post-lanzamiento', 'Acciones de PR digital e influencers', 'Análisis de recepción y ajustes'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[var(--gaia-beige)]/70">
                      <Check size={14} className="text-[var(--gaia-pink)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleCTA('Lanzamiento')}
                className="mt-8 w-full py-3 bg-transparent border border-[var(--gaia-pink)]/40 hover:border-[var(--gaia-pink)] text-[var(--gaia-beige)] hover:text-[var(--gaia-pink)] text-xs tracking-wider uppercase font-sans transition-all duration-300 cursor-pointer"
              >
                Solicitar Lanzamiento
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Campaign Impact section */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side text */}
            <div className="space-y-6">
              <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-4">
                IMPACTO MEDIBLE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
                ¿Por qué una campaña integrada funciona mejor?
              </h2>
              <p className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed">
                Las marcas que ejecutan campañas coordinadas en múltiples canales logran hasta 3 veces más alcance que aquellas que publican de forma aislada. La clave está en la coherencia del mensaje y la sincronización de acciones.
              </p>
              <p className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed">
                En Gaia Studio diseñamos campañas con <strong>estrategia + creatividad + ejecución</strong>. Cada pieza tiene un rol, cada canal un propósito, y cada métrica nos ayuda a optimizar en tiempo real para maximizar tu inversión.
              </p>
            </div>

            {/* Right side comparison box */}
            <div className="p-6 md:p-8 bg-[var(--gaia-pink)]/[0.02] border border-[var(--gaia-pink)]/10 space-y-6">
              <h4 className="font-serif text-lg text-[var(--gaia-beige)]">Rendimiento de Campañas</h4>
              
              {/* Metric 1: Integrada */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs tracking-wider font-sans uppercase">
                  <span className="text-[var(--gaia-pink)] font-bold">Campaña integrada 360°</span>
                  <span className="text-[var(--gaia-pink)]">3x más alcance</span>
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

              {/* Metric 2: Aislada */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs tracking-wider font-sans uppercase text-[var(--gaia-beige)]/40">
                  <span>Acciones aisladas</span>
                  <span>1x alcance base</span>
                </div>
                <div className="h-2 bg-[var(--gaia-burgundy)] border border-[var(--gaia-pink)]/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '30%' }}
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
                    <li className="flex items-center gap-1.5"><Megaphone size={10} className="text-[var(--gaia-pink)]" /> Mensaje unificado</li>
                    <li className="flex items-center gap-1.5"><Target size={10} className="text-[var(--gaia-pink)]" /> Segmentación precisa</li>
                    <li className="flex items-center gap-1.5"><TrendingUp size={10} className="text-[var(--gaia-pink)]" /> Optimización continua</li>
                  </ul>
                </div>
                <div className="space-y-2 text-[var(--gaia-beige)]/30">
                  <span className="block uppercase">Sin Estrategia:</span>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-1.5">Publicaciones sin coordinación</li>
                    <li className="flex items-center gap-1.5">Sin métricas claras de éxito</li>
                    <li className="flex items-center gap-1.5">Presupuesto mal invertido</li>
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
                trackCustomEvent('Solicitar asesoramiento - Campañas', {
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
