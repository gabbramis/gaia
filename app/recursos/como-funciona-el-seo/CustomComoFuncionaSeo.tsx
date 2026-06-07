"use client";

import { Footer } from "@/components/sections/Footer";
import { Navigation } from "@/components/ui/Navigation";
import { trackCustomEvent } from "@/lib/analytics/facebook-pixel";
import { easings, fadeInUp } from "@/lib/animations";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bookmark,
  ChevronRight,
  Clock,
  Code,
  FileText,
  Globe,
  Layers,
  MapPin,
  Minus,
  Plus,
  Search,
  TrendingUp,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export function CustomComoFuncionaSeo() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleCTA = (label: string) => {
    trackCustomEvent(`Solicitar asesoramiento - ${label}`, {
      category: "Lead Generation",
      action: "Click",
    });
    const element = document.querySelector("#contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contacto";
    }
  };

  const handleAnchorNavigation = (id: string) => {
    const element = document.querySelector(`#${id}`);
    if (element instanceof HTMLElement) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sections = [
    {
      id: "que-es-seo",
      label: "Qué es el SEO",
      description: "Fundamentos del posicionamiento orgánico.",
      icon: Search,
    },
    {
      id: "como-funciona-google",
      label: "Cómo funciona Google",
      description: "Qué evalúa antes de ordenar resultados.",
      icon: Globe,
    },
    {
      id: "seo-tecnico",
      label: "SEO Técnico",
      description: "La base técnica de un sitio visible.",
      icon: Code,
    },
    {
      id: "seo-local",
      label: "SEO Local",
      description: "Cómo aparecer en búsquedas de tu zona.",
      icon: MapPin,
    },
    {
      id: "contenido",
      label: "Estrategia de Contenidos",
      description: "Contenido alineado con intención de búsqueda.",
      icon: FileText,
    },
    {
      id: "tiempo",
      label: "Cuánto demora el SEO",
      description: "Tiempos reales para empezar a ver resultados.",
      icon: Clock,
    },
    {
      id: "errores",
      label: "Errores más comunes",
      description: "Qué suele frenar el posicionamiento.",
      icon: AlertTriangle,
    },
    {
      id: "preguntas-frecuentes",
      label: "Preguntas frecuentes",
      description: "Dudas habituales antes de empezar.",
      icon: Bookmark,
    },
  ];

  const faqs = [
    {
      q: "¿Qué es el SEO y por qué es importante?",
      a: "Placeholder para respuesta sobre qué es SEO y su importancia.",
    },
    {
      q: "¿Cuánto tiempo demora en verse resultados?",
      a: "Placeholder para respuesta sobre tiempos de resultados SEO.",
    },
    {
      q: "¿Necesito un sitio web para hacer SEO?",
      a: "Placeholder para respuesta sobre necesidad de sitio web.",
    },
    {
      q: "¿El SEO reemplaza la publicidad paga?",
      a: "Placeholder para respuesta sobre SEO vs publicidad paga.",
    },
    {
      q: "¿Puedo hacer SEO yo mismo?",
      a: "Placeholder para respuesta sobre SEO DIY vs profesional.",
    },
  ];

  return (
    <main className="bg-[var(--gaia-burgundy)] min-h-screen overflow-x-hidden w-full texture-overlay">
      <Navigation />

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative pt-24 md:pt-32 pb-16 px-6 md:px-12 overflow-hidden border-b border-[var(--gaia-pink)]/10">
        <div className="absolute inset-0 mesh-gradient-burgundy opacity-30 mix-blend-screen pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--gaia-pink)]/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <Link
            href="/seo"
            className="inline-flex items-center gap-2 text-[var(--gaia-pink)] hover:text-[var(--gaia-beige)] transition-colors duration-300 text-xs tracking-widest uppercase mb-6"
          >
            <ArrowLeft size={14} />
            SEO
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-4 md:pt-6">
            <div className="lg:col-span-7 space-y-6 text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easings.premium }}
              >
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[var(--gaia-beige)] tracking-tight">
                  Por qué algunas marcas aparecen primero en Google <br />
                  <span className="text-[var(--gaia-pink)]">
                    (y cómo funciona el SEO)
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: easings.premium,
                }}
                className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed max-w-xl"
              >
                El SEO es el proceso que hace que Google encuentre, entienda y
                recomiende tu sitio a quienes ya buscan lo que ofrecés. En esta
                guía vas a entender cómo funciona y por qué marca la diferencia
                entre ser invisible o ser encontrado.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <Link
                  href="/seo"
                  onClick={() =>
                    trackCustomEvent("Conocer servicio SEO desde recurso", {
                      category: "Internal Navigation",
                      action: "Click",
                    })
                  }
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-[var(--gaia-pink)] text-[var(--gaia-pink)] font-sans text-xs tracking-[0.15em] uppercase hover:bg-[var(--gaia-pink)] hover:text-[var(--gaia-burgundy)] transition-all duration-500 rounded-none shadow-premium hover:glow-pink-soft"
                >
                  <span>Conocer nuestro servicio SEO</span>
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <a
                  href="#indice"
                  className="inline-flex items-center justify-center px-8 py-4 text-[var(--gaia-beige)]/80 hover:text-[var(--gaia-pink)] font-sans text-xs tracking-[0.15em] uppercase transition-colors duration-300"
                >
                  Explorar la guía
                </a>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[430px] min-h-[300px] md:min-h-[340px] lg:min-h-[380px] rounded-[2rem] border border-[var(--gaia-pink)]/10 bg-gradient-to-br from-[var(--gaia-pink)]/[0.04] via-[var(--gaia-burgundy)]/30 to-[var(--gaia-beige)]/[0.03] p-4 md:p-5 overflow-hidden shadow-elevated">
                <div className="absolute top-8 right-8 w-32 h-32 bg-[var(--gaia-pink)]/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-5 left-5 w-24 h-24 bg-[var(--gaia-beige)]/8 rounded-full blur-[60px] pointer-events-none" />

                <div className="relative z-10">
                  <div className="rounded-[1.15rem] border border-[var(--gaia-pink)]/15 bg-[var(--gaia-burgundy)]/45 backdrop-blur-sm px-4 py-3 flex items-center gap-3 mb-4 md:mb-5">
                    <Search
                      size={14}
                      className="text-[var(--gaia-pink)]/80 shrink-0"
                    />
                    <span className="font-sans text-sm md:text-[14px] text-[var(--gaia-beige)]/88">
                      agencia seo montevideo
                    </span>
                  </div>

                  <div className="relative pt-4 md:pt-5">
                    <div className="absolute left-6 right-8 top-[4.2rem] h-14 rounded-[1.2rem] border border-[var(--gaia-pink)]/8 bg-[var(--gaia-burgundy)]/22 opacity-48" />
                    <div className="absolute left-10 right-5 top-[7.1rem] h-12 rounded-[1.1rem] border border-[var(--gaia-pink)]/6 bg-[var(--gaia-burgundy)]/18 opacity-32" />

                    <div className="relative rounded-[1.55rem] border border-[var(--gaia-pink)]/28 bg-[linear-gradient(135deg,rgba(237,154,188,0.14),rgba(80,7,18,0.48))] px-5 py-4.5 md:px-6 md:py-5 shadow-[0_18px_40px_rgba(237,154,188,0.14)]">
                      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gaia-pink)]/55 to-transparent" />

                      <div className="flex items-start justify-between gap-4 mb-3.5">
                        <div className="min-w-0">
                          <span className="block text-[10px] uppercase tracking-[0.3em] text-[var(--gaia-pink)]/70 font-sans mb-2">
                            Resultado destacado
                          </span>
                          <div className="space-y-2">
                            <div className="w-24 h-2 rounded-full bg-[var(--gaia-beige)]/25" />
                            <h3 className="font-serif text-xl md:text-[1.6rem] leading-none text-[var(--gaia-beige)]">
                              Tu Negocio
                            </h3>
                          </div>
                        </div>

                        <div className="shrink-0 rounded-full border border-[var(--gaia-pink)]/25 bg-[var(--gaia-pink)]/10 px-3 py-1.5 flex items-center justify-center min-w-[48px] min-h-[28px]">
                          <span className="font-sans text-[10px] leading-none uppercase tracking-[0.22em] text-[var(--gaia-pink)]">
                            #1
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2 mb-3.5">
                        <div className="w-[92%] h-2 rounded-full bg-[var(--gaia-beige)]/18" />
                        <div className="w-[72%] h-2 rounded-full bg-[var(--gaia-beige)]/16" />
                      </div>

                      <div className="rounded-[1.1rem] border border-[var(--gaia-pink)]/12 bg-[var(--gaia-burgundy)]/28 px-3.5 py-3 opacity-78">
                        <div className="mb-2 space-y-1.5">
                          <div className="w-18 h-1.5 rounded-full bg-[var(--gaia-beige)]/20" />
                          <div className="w-36 md:w-40 h-2.5 rounded-full bg-[var(--gaia-beige)]/50" />
                          <div className="w-28 md:w-32 h-2 rounded-full bg-[var(--gaia-beige)]/28" />
                        </div>
                        <div className="w-[70%] h-1.5 rounded-full bg-[var(--gaia-beige)]/18" />
                      </div>
                    </div>

                    <div className="relative mt-3 ml-8 mr-3 rounded-[1rem] border border-[var(--gaia-pink)]/8 bg-[var(--gaia-burgundy)]/18 px-3 py-2.5 opacity-52">
                      <div className="mb-1.5 space-y-1.5">
                        <div className="w-16 h-1.5 rounded-full bg-[var(--gaia-beige)]/18" />
                        <div className="w-24 h-2 rounded-full bg-[var(--gaia-beige)]/32" />
                      </div>
                      <div className="w-[58%] h-1.5 rounded-full bg-[var(--gaia-beige)]/14" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== INDICE / TABLE OF CONTENTS ==================== */}
      <section
        id="indice"
        className="py-12 md:py-14 lg:py-14 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-6 md:mb-8 lg:mb-8">
            <span className="block text-[var(--gaia-pink)] text-[11px] tracking-[0.28em] uppercase mb-3">
              Hoja de ruta
            </span>
            <h2 className="font-serif text-[1.9rem] sm:text-[2.25rem] md:text-[2.8rem] lg:text-[3.15rem] text-[var(--gaia-beige)] tracking-tight leading-[1.02] max-w-[15ch]">
              ¿Qué vas a aprender en esta guía?
            </h2>
            <p className="font-sans text-[var(--gaia-beige)]/62 text-sm sm:text-[15px] md:text-[15px] mt-3 leading-relaxed max-w-[62ch]">
              El SEO combina estrategia, estructura, contenido y tiempo. Esta guía recorre desde los fundamentos hasta la aplicación práctica para que entiendas qué influye en aparecer primero.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3 md:gap-3.5">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.06, ease: easings.premium }}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handleAnchorNavigation(section.id)}
                  className="group relative overflow-hidden text-left p-4 md:p-4.5 lg:p-4 min-h-[150px] sm:min-h-[155px] md:min-h-[160px] lg:min-h-[148px] border border-[var(--gaia-pink)]/10 bg-[linear-gradient(180deg,rgba(237,154,188,0.03),rgba(80,7,18,0.08))] hover:border-[var(--gaia-pink)]/24 transition-all duration-500 cursor-pointer"
                >
                  <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gaia-pink)]/0 to-transparent group-hover:via-[var(--gaia-pink)]/55 transition-all duration-500" />
                  <div className="absolute -right-8 -top-10 w-28 h-28 rounded-full bg-[var(--gaia-pink)]/0 blur-3xl group-hover:bg-[var(--gaia-pink)]/10 transition-all duration-500" />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between gap-3 mb-3 md:mb-3.5">
                      <div className="space-y-2">
                        <span className="block font-serif text-[1.7rem] sm:text-[1.9rem] md:text-[2.1rem] leading-none text-[var(--gaia-pink)]/18 group-hover:text-[var(--gaia-pink)]/28 transition-colors duration-500">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="w-fit p-1.5 border border-[var(--gaia-pink)]/12 bg-[var(--gaia-pink)]/[0.04] group-hover:border-[var(--gaia-pink)]/24 group-hover:bg-[var(--gaia-pink)]/[0.08] transition-all duration-500">
                          <Icon size={14} className="text-[var(--gaia-pink)]" />
                        </div>
                      </div>
                      <div className="mt-1">
                        <ChevronRight
                          size={16}
                          className="text-[var(--gaia-pink)]/26 group-hover:text-[var(--gaia-pink)] group-hover:translate-x-1 transition-all duration-500"
                        />
                      </div>
                    </div>

                    <div className="mt-auto">
                      <h3 className="font-serif text-[1rem] sm:text-[1.08rem] md:text-[1.16rem] lg:text-[1.1rem] text-[var(--gaia-beige)] group-hover:text-[var(--gaia-pink)] transition-colors duration-500 leading-tight max-w-[16ch]">
                        {section.label}
                      </h3>
                      <p className="font-sans text-[11px] sm:text-[11px] md:text-[12px] leading-relaxed text-[var(--gaia-beige)]/52 mt-1.5 max-w-[28ch]">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== QUÉ ES EL SEO ==================== */}
      <section
        id="que-es-seo"
        className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase">
                SECCIÓN 01
              </span>
              <h2 className="font-serif text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
                Qué es <br />
                <span className="font-monsieur text-[var(--gaia-pink)] text-5xl md:text-7xl lowercase">
                  el SEO
                </span>
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed">
                  Placeholder: Definición de SEO (Search Engine Optimization) y
                  su propósito fundamental.
                </p>
                <p className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed">
                  Placeholder: Explicación de cómo el SEO conecta la intención
                  del usuario con la oferta de negocios.
                </p>
              </div>

              {/* Key concept box */}
              <div className="p-6 border-l-2 border-[var(--gaia-pink)] bg-[var(--gaia-pink)]/[0.03]">
                <p className="font-serif text-lg text-[var(--gaia-beige)] italic">
                  &quot;Placeholder: Cita o concepto clave sobre SEO para
                  destacar.&quot;
                </p>
              </div>

              <Link
                href="/seo"
                className="inline-flex items-center gap-2 text-[var(--gaia-pink)] hover:text-[var(--gaia-beige)] transition-colors text-sm font-sans group"
              >
                <span>Conocer nuestro servicio de SEO</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            <div className="lg:col-span-6">
              <div className="relative p-8 bg-[var(--gaia-pink)]/[0.02] border border-[var(--gaia-pink)]/10 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-[var(--gaia-burgundy)]/50 border border-[var(--gaia-pink)]/10 rounded-lg flex items-center justify-center">
                    <Search size={40} className="text-[var(--gaia-pink)]/20" />
                  </div>
                  <div className="aspect-square bg-[var(--gaia-burgundy)]/50 border border-[var(--gaia-pink)]/10 rounded-lg flex items-center justify-center mt-8">
                    <TrendingUp
                      size={40}
                      className="text-[var(--gaia-pink)]/20"
                    />
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
      <section
        id="como-funciona-google"
        className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.01]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-4">
              SECCIÓN 02
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
              Cómo funciona Google
            </h2>
            <p className="font-sans text-[var(--gaia-beige)]/60 text-xs sm:text-sm md:text-base mt-4 leading-relaxed">
              Placeholder: Introducción al funcionamiento del algoritmo de
              Google.
            </p>
          </div>

          {/* Three-step process */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                step: "01",
                title: "Rastreo",
                desc: "Placeholder: Cómo Google descubre páginas web.",
                icon: Globe,
              },
              {
                step: "02",
                title: "Indexación",
                desc: "Placeholder: Cómo Google organiza y clasifica el contenido.",
                icon: Layers,
              },
              {
                step: "03",
                title: "Ranking",
                desc: "Placeholder: Cómo Google decide qué mostrar primero.",
                icon: BarChart3,
              },
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
                  <h3 className="font-serif text-2xl text-[var(--gaia-beige)] mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-[var(--gaia-beige)]/50 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== SEO TÉCNICO ==================== */}
      <section
        id="seo-tecnico"
        className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10"
      >
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
                Placeholder: Qué es el SEO técnico y por qué es la base de todo
                posicionamiento.
              </p>
              <Link
                href="/diseno-web"
                className="inline-flex items-center gap-2 text-[var(--gaia-pink)] hover:text-[var(--gaia-beige)] transition-colors text-sm font-sans group"
              >
                <span>Ver diseño web optimizado para SEO</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Velocidad de carga",
                  "Estructura de URLs",
                  "Meta tags y headings",
                  "Sitemap XML",
                  "Schema markup",
                  "Mobile-first indexing",
                  "Core Web Vitals",
                  "HTTPS y seguridad",
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
                    <span className="font-sans text-sm text-[var(--gaia-beige)]/70">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SEO LOCAL ==================== */}
      <section
        id="seo-local"
        className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.01]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <div className="relative p-8 bg-[var(--gaia-burgundy)]/50 border border-[var(--gaia-pink)]/10 rounded-lg">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin size={24} className="text-[var(--gaia-pink)]" />
                  <span className="font-serif text-xl text-[var(--gaia-beige)]">
                    Google Business Profile
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-[var(--gaia-pink)]/10 rounded w-3/4" />
                  <div className="h-3 bg-[var(--gaia-pink)]/10 rounded w-1/2" />
                  <div className="h-3 bg-[var(--gaia-pink)]/10 rounded w-5/6" />
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-3 h-3 bg-[var(--gaia-pink)]/30 rounded-sm"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-[var(--gaia-beige)]/40">
                    Placeholder: Reseñas
                  </span>
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
                Placeholder: Qué es el SEO local y por qué es crucial para
                negocios con presencia física.
              </p>

              <div className="space-y-3">
                {[
                  "Google Business Profile optimizado",
                  "Citas NAP consistentes",
                  "Contenido geolocalizado",
                  "Estrategia de reseñas",
                  "Posicionamiento en Google Maps",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[var(--gaia-pink)] rounded-full shrink-0" />
                    <span className="font-sans text-sm text-[var(--gaia-beige)]/60">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CREACIÓN DE CONTENIDO ==================== */}
      <section
        id="contenido"
        className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-4">
              SECCIÓN 05
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
              Creación de{" "}
              <span className="font-monsieur text-[var(--gaia-pink)] text-5xl md:text-7xl lowercase">
                Contenido
              </span>
            </h2>
            <p className="font-sans text-[var(--gaia-beige)]/60 text-xs sm:text-sm md:text-base mt-4 leading-relaxed">
              Placeholder: El rol del contenido en la estrategia SEO.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Keyword Research",
                desc: "Placeholder: Identificar las búsquedas de tu audiencia.",
                icon: Search,
              },
              {
                title: "Contenido Optimizado",
                desc: "Placeholder: Crear contenido que responda la intención del usuario.",
                icon: FileText,
              },
              {
                title: "Estrategia Continua",
                desc: "Placeholder: Mantener y actualizar contenido para sostener posiciones.",
                icon: TrendingUp,
              },
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
                  <h3 className="font-serif text-xl text-[var(--gaia-beige)] mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-[var(--gaia-beige)]/50 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== CUÁNTO DEMORA EL SEO ==================== */}
      <section
        id="tiempo"
        className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.01]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase">
                SECCIÓN 06
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-[var(--gaia-beige)] tracking-tight">
                Cuánto demora <br />
                <span className="font-monsieur text-[var(--gaia-pink)] text-5xl md:text-7xl lowercase">
                  el SEO
                </span>
              </h2>
              <p className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed">
                Placeholder: Explicación realista sobre los tiempos del SEO y
                por qué es una inversión a mediano/largo plazo.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.02]">
                <h4 className="font-serif text-lg text-[var(--gaia-beige)] mb-6">
                  Timeline esperado
                </h4>

                {/* Timeline bars */}
                <div className="space-y-6">
                  {[
                    {
                      label: "Mes 1-2",
                      desc: "Placeholder: Auditoría y correcciones técnicas",
                      progress: "30%",
                    },
                    {
                      label: "Mes 3-4",
                      desc: "Placeholder: Primeros movimientos en rankings",
                      progress: "55%",
                    },
                    {
                      label: "Mes 5-6",
                      desc: "Placeholder: Consolidación de posiciones",
                      progress: "75%",
                    },
                    {
                      label: "Mes 6+",
                      desc: "Placeholder: Crecimiento sostenido y mantenimiento",
                      progress: "90%",
                    },
                  ].map((item, index) => (
                    <div key={item.label} className="space-y-2">
                      <div className="flex justify-between text-xs tracking-wider font-sans uppercase">
                        <span className="text-[var(--gaia-pink)] font-bold">
                          {item.label}
                        </span>
                        <span className="text-[var(--gaia-beige)]/40">
                          {item.progress}
                        </span>
                      </div>
                      <div className="h-2 bg-[var(--gaia-burgundy)] border border-[var(--gaia-pink)]/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: item.progress }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: index * 0.2,
                            ease: "easeOut",
                          }}
                          className="h-full bg-[var(--gaia-pink)]"
                        />
                      </div>
                      <p className="text-xs text-[var(--gaia-beige)]/40 font-sans">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ERRORES FRECUENTES ==================== */}
      <section
        id="errores"
        className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-4">
              SECCIÓN 07
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
              Errores{" "}
              <span className="font-monsieur text-[var(--gaia-pink)] text-5xl md:text-7xl lowercase">
                frecuentes
              </span>
            </h2>
            <p className="font-sans text-[var(--gaia-beige)]/60 text-xs sm:text-sm md:text-base mt-4 leading-relaxed">
              Placeholder: Los errores más comunes que impiden el
              posicionamiento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Placeholder: Error 1",
                desc: "Placeholder: Descripción del error y su impacto.",
              },
              {
                title: "Placeholder: Error 2",
                desc: "Placeholder: Descripción del error y su impacto.",
              },
              {
                title: "Placeholder: Error 3",
                desc: "Placeholder: Descripción del error y su impacto.",
              },
              {
                title: "Placeholder: Error 4",
                desc: "Placeholder: Descripción del error y su impacto.",
              },
              {
                title: "Placeholder: Error 5",
                desc: "Placeholder: Descripción del error y su impacto.",
              },
              {
                title: "Placeholder: Error 6",
                desc: "Placeholder: Descripción del error y su impacto.",
              },
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
                  <AlertTriangle
                    size={20}
                    className="text-[var(--gaia-pink)]/60"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[var(--gaia-beige)] mb-2">
                    {error.title}
                  </h3>
                  <p className="font-sans text-sm text-[var(--gaia-beige)]/50 leading-relaxed">
                    {error.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section
        id="preguntas-frecuentes"
        className="py-20 md:py-32 px-6 md:px-12 bg-[var(--gaia-burgundy)] relative overflow-hidden border-b border-[var(--gaia-pink)]/10"
      >
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
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
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
            viewport={{ once: true, margin: "-50px" }}
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
              Ahora que entendés cómo funciona el SEO, es momento de actuar. En
              Gaia Studio diseñamos estrategias personalizadas para que tu marca
              aparezca cuando te buscan.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/seo"
                onClick={() =>
                  trackCustomEvent("Ver servicio SEO desde recurso", {
                    category: "Internal Navigation",
                    action: "Click",
                  })
                }
                className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-[var(--gaia-pink)] text-[var(--gaia-pink)] font-sans text-xs tracking-[0.15em] uppercase hover:bg-[var(--gaia-pink)] hover:text-[var(--gaia-burgundy)] transition-all duration-500 rounded-none shadow-premium hover:glow-pink-soft"
              >
                <span>Ver Servicio de SEO</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <button
                onClick={() => handleCTA("CTA Final - Recurso SEO")}
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
