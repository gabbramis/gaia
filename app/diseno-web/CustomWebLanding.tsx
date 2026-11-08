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
} from 'lucide-react';
import { Navigation } from '@/components/ui/Navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Footer } from '@/components/sections/Footer';
import { fadeInUp, easings } from '@/lib/animations';
import { trackCustomEvent } from '@/lib/analytics/facebook-pixel';
import { TrackedWhatsAppLink } from '@/components/ui/TrackedWhatsAppLink';
import posthog from 'posthog-js';

export function CustomWebLanding() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleCTA = (label: string) => {
    trackCustomEvent(`Solicitar asesoramiento - ${label}`, {
      category: 'Lead Generation',
      action: 'Click',
    });
    if (process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN && process.env.NEXT_PUBLIC_POSTHOG_HOST) {
      posthog.capture('whatsapp_link_clicked', { source: `web_${label}` });
    }
    window.open(`https://wa.me/59891099805?text=${encodeURIComponent('Hola Gaia, quiero consultarles por un sitio web para mi marca.')}`, '_blank', 'noopener,noreferrer');
  };

  const faqs = [
    {
      q: '¿El diseño es realmente personalizado o usan plantillas?',
      a: 'En Gaia Studio no creemos en las soluciones genéricas. Cada sitio web se diseña desde cero según tu branding y objetivos, y luego se desarrolla a medida en Next.js/React. Esto garantiza una identidad única y que el sitio se adapte exactamente a tu negocio.'
    },
    {
      q: '¿Por qué usan Next.js en lugar de WordPress?',
      a: 'Elegimos la tecnología según los objetivos y el contenido de cada proyecto. Con Next.js podemos crear experiencias flexibles y cuidar aspectos técnicos como rendimiento, accesibilidad y SEO. La tecnología por sí sola no garantiza posiciones en Google.'
    },
    {
      q: '¿Cómo es el proceso de trabajo y cuánto tiempo demora?',
      a: 'Un proyecto promedio toma entre 4 y 8 semanas. Dividimos el proceso en: 1) Descubrimiento técnico y estrategia, 2) Diseño de prototipos UX/UI, 3) Desarrollo web de alta fidelidad, y 4) Pruebas de calidad y lanzamiento.'
    },
    {
      q: '¿Los sitios web son autogestionables?',
      a: 'Sí. Integramos sistemas de gestión de contenido (CMS) intuitivos y modernos según el proyecto, permitiéndote actualizar textos, imágenes o productos de forma simple y sin depender de un desarrollador.'
    },
    {
      q: '¿Qué incluye el soporte post-lanzamiento?',
      a: 'Incluimos 30 días de soporte técnico gratuito después del lanzamiento para corregir cualquier detalle y asegurar una transición fluida. También ofrecemos planes mensuales de Web Management para encargarnos del hosting, dominio, actualizaciones de contenido y soporte continuo.'
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
                Estética digital y rendimiento
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[0.98] text-[var(--gaia-beige)] tracking-tight">
                Diseño y desarrollo web <br />
                <span className="ml-8 block font-monsieur text-[var(--gaia-pink)] text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] -mt-1 sm:-mt-2 md:-mt-4 lowercase">
                  para tu marca
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: easings.premium }}
              className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl"
            >
              Creamos sitios web funcionales, rápidos y alineados con la identidad de tu marca. Diseñamos experiencias digitales claras, intuitivas y preparadas para acompañar el crecimiento de tu negocio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <TrackedWhatsAppLink
                source="web_hero"
                message="Hola Gaia, quiero consultarles por un sitio web para mi marca."
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-[var(--gaia-pink)] text-[var(--gaia-pink)] font-sans text-xs tracking-[0.15em] uppercase hover:bg-[var(--gaia-pink)] hover:text-[var(--gaia-burgundy)] transition-all duration-500 rounded-none cursor-pointer overflow-hidden shadow-premium hover:glow-pink-soft"
              >
                <span>Hablemos por WhatsApp</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </TrackedWhatsAppLink>
              <a
                href="#portfolio-teaser"
                className="inline-flex items-center justify-center px-8 py-4 text-[var(--gaia-beige)]/80 hover:text-[var(--gaia-pink)] font-sans text-xs tracking-[0.15em] uppercase transition-colors duration-300"
              >
                Ver Portafolio
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
                <span className="block text-[var(--gaia-beige)]/40 text-[10px] tracking-wider uppercase mt-1">A Medida</span>
              </div>
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-[var(--gaia-pink)]">UX</span>
                <span className="block text-[var(--gaia-beige)]/70 text-[10px] tracking-wider uppercase mt-1">Experiencia clara</span>
              </div>
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-[var(--gaia-pink)]">SEO</span>
                <span className="block text-[var(--gaia-beige)]/40 text-[10px] tracking-wider uppercase mt-1">Optimizado</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Interactive Devices Mockup */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: easings.premium }}
              className="relative w-full max-w-[420px] aspect-[16/10] bg-[var(--gaia-pink)]/5 border border-[var(--gaia-pink)]/20 p-1.5 shadow-elevated rounded-lg animate-float-slow"
            >
              {/* Browser window frame bar */}
              <div className="flex items-center gap-1.5 pb-2 px-2 border-b border-[var(--gaia-pink)]/10">
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--gaia-pink)]/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--gaia-pink)]/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--gaia-pink)]/20" />
                <div className="ml-4 flex-1 h-4 bg-[var(--gaia-burgundy)]/40 border border-[var(--gaia-pink)]/10 rounded-sm text-[8px] text-[var(--gaia-beige)]/40 flex items-center px-2 select-none">
                  gaiastudio.com.uy/diseno-web
                </div>
              </div>

              {/* Browser Content (Showcase cover) */}
              <div className="relative w-full h-[calc(100%-24px)] overflow-hidden mt-1 bg-[var(--gaia-burgundy)]">
                <Image
                  src="/portfolio/web-designs/adrianacostaorfebre.png"
                  alt="Adriana Costa Orfebre Web Design Preview"
                  fill
                  priority
                  className="object-cover opacity-90 object-top hover:scale-105 transition-transform duration-1000"
                />
                
              </div>

              {/* Decorative background aura */}
              <div className="absolute -inset-1 border border-[var(--gaia-pink)]/20 rounded-lg pointer-events-none scale-[1.03]" />
            </motion.div>

            {/* Small second screen mockup for mobile detail */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: easings.premium }}
              className="absolute bottom-[-30px] left-[-10px] sm:left-4 w-32 aspect-[9/19] bg-[var(--gaia-burgundy)] border border-[var(--gaia-pink)]/20 rounded-2xl shadow-elevated p-1 overflow-hidden hidden sm:block animate-float"
            >
              <div className="w-full h-full bg-[var(--gaia-pink)]/[0.02] rounded-xl overflow-hidden relative">
                {/* Speaker indicator */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-[var(--gaia-pink)]/20 rounded-full z-10" />
                <Image
                  src="/portfolio/web-designs/adrianacostaorfebre-mobile.png"
                  alt="Mobile web mockup"
                  fill
                  className="object-cover object-top opacity-85 mt-2 scale-110"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Teaser Section */}
      <section id="portfolio-teaser" className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase">
                CASOS DE ÉXITO
              </span>
              <h2 className="font-serif text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
                Diseños que <br />Inspiran
              </h2>
              <p className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed">
                Trabajamos junto a marcas que valoran la excelencia visual y el rendimiento técnico. Desde tiendas online exclusivas hasta sitios institucionales corporativos.
              </p>
              <div className="pt-2">
                <Link
                  href="/portfolio"
                  onClick={() => {
                    trackCustomEvent('Ver Portfolio - Diseño Web', {
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
                href="/portfolio"
                className="group block relative w-full aspect-[16/10] bg-[var(--gaia-pink)]/[0.02] border border-[var(--gaia-pink)]/10 group-hover:border-[var(--gaia-pink)]/30 rounded-lg overflow-hidden shadow-premium transition-all duration-500"
              >
                {/* Mock Browser Header */}
                <div className="absolute top-0 left-0 right-0 h-7 bg-[var(--gaia-burgundy)] border-b border-[var(--gaia-pink)]/10 flex items-center px-4 justify-between z-10">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--gaia-pink)]/30 group-hover:bg-[var(--gaia-pink)]/60 transition-colors" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--gaia-pink)]/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--gaia-pink)]/20" />
                  </div>
                  <div className="text-[9px] text-[var(--gaia-beige)]/30 group-hover:text-[var(--gaia-pink)]/60 font-sans">gaiastudio.com.uy/portfolio</div>
                  <div className="w-8" />
                </div>
                {/* Image */}
                <Image
                  src="/portfolio-web-design.jpg"
                  alt="Web Design Portfolio preview"
                  fill
                  className="object-cover object-top opacity-60 group-hover:opacity-85 mt-7 scale-[1.02] group-hover:scale-105 transition-all duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[var(--gaia-burgundy)]/30 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modalidades de Servicio (Nuestras Soluciones) */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-[var(--gaia-burgundy)] relative overflow-hidden border-b border-[var(--gaia-pink)]/10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
            <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-4">
              SERVICIOS WEB
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
              Formatos de Diseño
            </h2>
            <p className="font-sans text-[var(--gaia-beige)]/60 text-xs sm:text-sm md:text-base mt-4 leading-relaxed">
              Cada negocio requiere una estrategia distinta en internet. Estructuramos nuestras soluciones para adaptarnos al tamaño y ambición de tu proyecto.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            
            {/* Landing Page */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.01] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] tracking-widest text-[var(--gaia-pink)] uppercase">Para Lanzamientos o Campañas</span>
                <h3 className="font-serif text-2xl text-[var(--gaia-beige)] mt-2 mb-4">Landing Page Premium</h3>
                <p className="font-sans text-xs sm:text-sm text-[var(--gaia-beige)]/50 leading-relaxed mb-6">
                  Sitio web de una sola página diseñado con un único objetivo: convertir visitantes en contactos calificados. Excelente para pauta publicitaria.
                </p>
                <div className="w-full h-[1px] bg-[var(--gaia-pink)]/10 my-4" />
                <ul className="space-y-3">
                  {['Diseño UX/UI según la marca', 'Estructura clara de contenidos', 'Formularios fáciles de usar', 'Optimización de carga', 'Medición de contactos y clics'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[var(--gaia-beige)]/70">
                      <Check size={14} className="text-[var(--gaia-pink)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleCTA('Landing Page')}
                className="mt-8 w-full py-3 bg-transparent border border-[var(--gaia-pink)]/40 hover:border-[var(--gaia-pink)] text-[var(--gaia-beige)] hover:text-[var(--gaia-pink)] text-xs tracking-wider uppercase font-sans transition-all duration-300 cursor-pointer"
              >
                Solicitar Landing
              </button>
            </motion.div>

            {/* Sitio Informativo */}
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
                <span className="text-[10px] tracking-widest text-[var(--gaia-pink)] uppercase">Para Posicionamiento y Confianza</span>
                <h3 className="font-serif text-2xl text-[var(--gaia-beige)] mt-2 mb-4">Sitio Informativo</h3>
                <p className="font-sans text-xs sm:text-sm text-[var(--gaia-beige)]/50 leading-relaxed mb-6">
                  Sitio web multi-página estructurado para contar la historia de tu marca, ordenar visualmente tus servicios e inspirar máxima autoridad técnica.
                </p>
                <div className="w-full h-[1px] bg-[var(--gaia-pink)]/20 my-4" />
                <ul className="space-y-3">
                  {['Arquitectura de hasta 5 secciones', 'Páginas dedicadas a servicios/nosotras', 'CMS autogestionable para blog o novedades', 'SEO Local y estructura técnica interna', 'Diseño de layouts de alta fidelidad'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[var(--gaia-beige)]/70">
                      <Check size={14} className="text-[var(--gaia-pink)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleCTA('Sitio Institucional')}
                className="mt-8 w-full py-3 bg-[var(--gaia-pink)] text-[var(--gaia-burgundy)] hover:bg-[var(--gaia-beige)] text-xs tracking-wider uppercase font-sans transition-all duration-300 font-medium cursor-pointer"
              >
                Solicitar Institucional
              </button>
            </motion.div>

            {/* E-Commerce */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.01] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] tracking-widest text-[var(--gaia-pink)] uppercase">Para Venta de Productos o Servicios</span>
                <h3 className="font-serif text-2xl text-[var(--gaia-beige)] mt-2 mb-4">E-Commerce</h3>
                <p className="font-sans text-xs sm:text-sm text-[var(--gaia-beige)]/50 leading-relaxed mb-6">
                  Tienda online completa diseñada bajo altos estándares estéticos para generar una experiencia de compra inmersiva y de alta gama.
                </p>
                <div className="w-full h-[1px] bg-[var(--gaia-pink)]/10 my-4" />
                <ul className="space-y-3">
                  {['Catálogo autogestionable avanzado', 'Carrito de compras con flujos UX limpios', 'Pasarela de pagos con Mercado Pago', 'Gestión de stock, cupones y envíos', 'Optimización técnica de velocidad (CRO)'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[var(--gaia-beige)]/70">
                      <Check size={14} className="text-[var(--gaia-pink)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleCTA('E-Commerce')}
                className="mt-8 w-full py-3 bg-transparent border border-[var(--gaia-pink)]/40 hover:border-[var(--gaia-pink)] text-[var(--gaia-beige)] hover:text-[var(--gaia-pink)] text-xs tracking-wider uppercase font-sans transition-all duration-300 cursor-pointer"
              >
                Solicitar E-Commerce
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Tech Stack & Performance section */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side text */}
            <div className="space-y-6">
              <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-4">
                TECNOLOGÍA DE VANGUARDIA
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
                ¿Por qué evitamos WordPress tradicional?
              </h2>
              <p className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed">
                Una web útil debe explicar bien la propuesta de tu negocio, facilitar el recorrido y permitir que las personas se contacten sin fricción.
              </p>
              <p className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed">
                En Gaia Studio diseñamos y desarrollamos sitios a medida. Trabajamos con <strong>Next.js</strong> y <strong>React</strong> cuando el proyecto lo requiere, y cuidamos el rendimiento, la accesibilidad y la base técnica de SEO.
              </p>
            </div>

            <div className="border border-[var(--gaia-pink)]/25 p-6 md:p-8">
              <h3 className="font-serif text-2xl text-[var(--gaia-beige)]">Qué cuidamos en cada sitio</h3>
              <ul className="mt-6 space-y-4 font-sans text-sm leading-relaxed text-[var(--gaia-beige)]/85">
                <li className="flex gap-3"><Check size={18} className="shrink-0 text-[var(--gaia-pink)]" aria-hidden="true" /> Una estructura que hace fácil encontrar la información.</li>
                <li className="flex gap-3"><Check size={18} className="shrink-0 text-[var(--gaia-pink)]" aria-hidden="true" /> Un diseño adaptable a celular y escritorio.</li>
                <li className="flex gap-3"><Check size={18} className="shrink-0 text-[var(--gaia-pink)]" aria-hidden="true" /> Formularios y llamados a la acción simples.</li>
                <li className="flex gap-3"><Check size={18} className="shrink-0 text-[var(--gaia-pink)]" aria-hidden="true" /> Una base técnica para medir, mantener y mejorar el sitio.</li>
              </ul>
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
              Cada proyecto tiene necesidades distintas. Contanos por WhatsApp qué necesita tu negocio y empecemos a definir una web útil para tu marca.
            </p>
            <TrackedWhatsAppLink
              source="web_bottom"
              message="Hola Gaia, quiero consultarles por un sitio web para mi marca."
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3.5 md:py-4 bg-transparent border border-[var(--gaia-pink)] text-[var(--gaia-pink)] font-sans text-xs md:text-sm tracking-[0.15em] uppercase rounded-none hover:bg-[var(--gaia-pink)] hover:text-[var(--gaia-burgundy)] transition-all duration-500"
            >
              <span>Escribir por WhatsApp</span>
              <ArrowRight size={14} />
            </TrackedWhatsAppLink>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
