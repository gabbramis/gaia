"use client";

import { Footer } from "@/components/sections/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Navigation } from "@/components/ui/Navigation";
import { trackCustomEvent } from "@/lib/analytics/facebook-pixel";
import { easings, fadeInUp } from "@/lib/animations";
import {
  AlertTriangle,
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
  const [activeError, setActiveError] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const toggleError = (index: number) => {
    setActiveError(activeError === index ? null : index);
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
      q: "¿Cuánto demora el SEO?",
      a: "Los primeros resultados se ven entre el mes 3 y 6. La consolidación completa toma entre 6 y 12 meses. El SEO es una inversión sostenible: a diferencia de la publicidad paga, los resultados no desaparecen cuando dejás de invertir.",
    },
    {
      q: "¿SEO o publicidad paga?",
      a: "Depende de tus objetivos. La publicidad paga trae resultados inmediatos pero cuesta cada clic. El SEO tarda más pero construye tráfico orgánico permanente. Lo ideal es combinar ambos: publicidad para corto plazo y SEO para crecimiento sostenido.",
    },
    {
      q: "¿Necesito crear contenido?",
      a: "Sí, pero no se trata de escribir artículos interminables. Se trata de crear contenido optimizado, relevante y útil para tu audiencia. Cada página de tu sitio debe responder una necesidad real de búsqueda.",
    },
    {
      q: "¿Funciona para negocios locales?",
      a: "El SEO local es una de las áreas con mayor impacto. Si tu negocio tiene presencia física, optimizar tu Google Business Profile, reseñas y datos locales te puede posicionar frente a clientes que buscan exactamente lo que ofrecés, en tu zona.",
    },
    {
      q: "¿Puedo hacerlo sin cambiar mi web?",
      a: "Depende del estado actual de tu sitio. Si la base técnica es sólida, se puede trabajar con optimizaciones puntuales. Si el sitio tiene problemas de velocidad, estructura o indexación, será necesario hacer correcciones técnicas primero.",
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
          <div className="mb-6 flex items-start md:mb-8">
            <Breadcrumbs />
          </div>

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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
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
                  SEO significa Search Engine Optimization. Es el conjunto de
                  técnicas que hacen que tu sitio aparezca en los resultados
                  orgánicos de Google cuando alguien busca lo que ofrecés.
                </p>
                <p className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed">
                  No es publicidad pagada. Es construir presencia digital de
                  forma sostenible, conectando tu marca con personas que ya
                  están buscando soluciones como la tuya.
                </p>
              </div>

              <div className="p-6 border-l-2 border-[var(--gaia-pink)] bg-[var(--gaia-pink)]/[0.03]">
                <p className="font-serif text-lg text-[var(--gaia-beige)] italic leading-snug">
                  &quot;El SEO no es aparecer primero. Es aparecer cuando
                  alguien te necesita.&quot;
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
              <div className="relative">
                {/* Visual: Search intent connection */}
                <div className="relative p-6 md:p-8 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.02]">
                  {/* User side */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full border border-[var(--gaia-pink)]/20 bg-[var(--gaia-pink)]/[0.06] flex items-center justify-center shrink-0">
                      <Search size={18} className="text-[var(--gaia-pink)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block text-[10px] uppercase tracking-[0.25em] text-[var(--gaia-pink)]/60 font-sans mb-1">
                        El usuario busca
                      </span>
                      <div className="h-3 bg-[var(--gaia-beige)]/15 rounded-full w-[85%]" />
                      <div className="h-2.5 bg-[var(--gaia-beige)]/10 rounded-full w-[60%] mt-1.5" />
                    </div>
                  </div>

                  {/* Connection line */}
                  <div className="ml-6 w-px h-10 bg-gradient-to-b from-[var(--gaia-pink)]/30 to-[var(--gaia-pink)]/10" />

                  {/* Google evaluates */}
                  <div className="flex items-center gap-4 my-4">
                    <div className="w-12 h-12 rounded-full border border-[var(--gaia-pink)]/20 bg-[var(--gaia-burgundy)]/60 flex items-center justify-center shrink-0">
                      <Globe size={18} className="text-[var(--gaia-pink)]" />
                    </div>
                    <div className="flex-1">
                      <span className="block text-[10px] uppercase tracking-[0.25em] text-[var(--gaia-pink)]/60 font-sans mb-1">
                        Google evalúa quién puede responder
                      </span>
                      <div className="flex gap-1.5">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="h-2 flex-1 rounded-full bg-[var(--gaia-pink)]/10"
                            style={{ opacity: 1 - i * 0.15 }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Connection line */}
                  <div className="ml-6 w-px h-10 bg-gradient-to-b from-[var(--gaia-pink)]/30 to-[var(--gaia-pink)]/10" />

                  {/* Your brand appears */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-[var(--gaia-pink)]/30 bg-gradient-to-br from-[var(--gaia-pink)]/15 to-[var(--gaia-pink)]/5 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(237,154,188,0.12)]">
                      <TrendingUp size={18} className="text-[var(--gaia-pink)]" />
                    </div>
                    <div className="flex-1">
                      <span className="block text-[10px] uppercase tracking-[0.25em] text-[var(--gaia-pink)]/60 font-sans mb-1">
                        Tu marca aparece
                      </span>
                      <div className="h-3 bg-[var(--gaia-pink)]/20 rounded-full w-[70%]" />
                      <div className="h-2.5 bg-[var(--gaia-pink)]/12 rounded-full w-[45%] mt-1.5" />
                    </div>
                  </div>

                  {/* Decorative glow */}
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-[var(--gaia-pink)]/8 rounded-full blur-[50px] pointer-events-none" />
                  <div className="absolute -left-4 -bottom-4 w-20 h-20 bg-[var(--gaia-pink)]/6 rounded-full blur-[40px] pointer-events-none" />
                </div>

                {/* Bottom stat cards */}
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="p-4 border border-[var(--gaia-pink)]/8 bg-[var(--gaia-burgundy)]/30">
                    <span className="block font-serif text-2xl md:text-3xl text-[var(--gaia-pink)]">
                      93%
                    </span>
                    <span className="block font-sans text-[11px] text-[var(--gaia-beige)]/50 mt-1">
                      de experiencias online empiezan con un buscador
                    </span>
                  </div>
                  <div className="p-4 border border-[var(--gaia-pink)]/8 bg-[var(--gaia-burgundy)]/30">
                    <span className="block font-serif text-2xl md:text-3xl text-[var(--gaia-pink)]">
                      75%
                    </span>
                    <span className="block font-sans text-[11px] text-[var(--gaia-beige)]/50 mt-1">
                      de usuarios nunca pasa de la primera página
                    </span>
                  </div>
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
              Cómo funciona{" "}
              <span className="font-monsieur text-[var(--gaia-pink)] text-4xl md:text-6xl lowercase">
                Google
              </span>
            </h2>
            <p className="font-sans text-[var(--gaia-beige)]/60 text-xs sm:text-sm md:text-base mt-4 leading-relaxed">
              Antes de posicionar tu sitio, Google recorre cuatro etapas. Entender
              cada una te permite optimizar donde realmente importa.
            </p>
          </div>

          {/* 4-Step Interactive Flow */}
          <div className="relative max-w-5xl mx-auto">
            {/* Vertical connection line (desktop) */}
            <div className="hidden md:block absolute left-[52px] top-0 bottom-0 w-px bg-gradient-to-b from-[var(--gaia-pink)]/20 via-[var(--gaia-pink)]/10 to-transparent" />

            <div className="space-y-4 md:space-y-0">
              {[
                {
                  step: "01",
                  title: "Descubrir",
                  desc: "Google envía bots que recorren la web siguiendo enlaces. Si nadie enlaza tu sitio o no lo compartís,Google no sabe que existís.",
                  icon: Search,
                  detail: "Rastreo y crawleo",
                },
                {
                  step: "02",
                  title: "Indexar",
                  desc: "Una vez descubierta tu página, Google la analiza y la guarda en su base de datos. Si el contenido es duplicado o de baja calidad, puede no indexarla.",
                  icon: Layers,
                  detail: "Almacenamiento en base de datos",
                },
                {
                  step: "03",
                  title: "Comprender",
                  desc: "Google interpreta de qué trata cada página: el tema, la intención, la calidad del contenido y la experiencia que ofrece al usuario.",
                  icon: FileText,
                  detail: "Análisis semántico y de calidad",
                },
                {
                  step: "04",
                  title: "Posicionar",
                  desc: "Finalmente, Google ordena los resultados según cientos de factores: relevancia, autoridad, velocidad, experiencia mobile y más.",
                  icon: BarChart3,
                  detail: " ranking y ordenamiento",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className="relative md:pl-28 md:py-8 group"
                  >
                    {/* Step number circle */}
                    <div className="hidden md:flex absolute left-0 top-8 w-[104px] h-[104px] items-center justify-center">
                      <div className="w-14 h-14 rounded-full border border-[var(--gaia-pink)]/20 bg-[var(--gaia-burgundy)] flex items-center justify-center relative z-10 group-hover:border-[var(--gaia-pink)]/40 group-hover:bg-[var(--gaia-pink)]/[0.08] transition-all duration-500">
                        <span className="font-serif text-lg text-[var(--gaia-pink)]">
                          {item.step}
                        </span>
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="p-6 md:p-8 border border-[var(--gaia-pink)]/8 bg-[var(--gaia-pink)]/[0.015] hover:border-[var(--gaia-pink)]/18 hover:bg-[var(--gaia-pink)]/[0.025] transition-all duration-500">
                      <div className="flex items-start gap-4">
                        <div className="md:hidden shrink-0 w-10 h-10 rounded-full border border-[var(--gaia-pink)]/20 bg-[var(--gaia-burgundy)] flex items-center justify-center">
                          <span className="font-serif text-sm text-[var(--gaia-pink)]">
                            {item.step}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-3">
                            <Icon
                              size={18}
                              className="text-[var(--gaia-pink)] shrink-0"
                            />
                            <h3 className="font-serif text-xl md:text-2xl text-[var(--gaia-beige)]">
                              {item.title}
                            </h3>
                          </div>
                          <p className="font-sans text-sm text-[var(--gaia-beige)]/60 leading-relaxed mb-3">
                            {item.desc}
                          </p>
                          <span className="inline-block font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--gaia-pink)]/50 border border-[var(--gaia-pink)]/12 px-3 py-1">
                            {item.detail}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SEO TÉCNICO ==================== */}
      <section
        id="seo-tecnico"
        className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
              <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase">
                SECCIÓN 03
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-[var(--gaia-beige)] tracking-tight">
                SEO{" "}
                <span className="font-monsieur text-[var(--gaia-pink)] text-5xl md:text-6xl lowercase">
                  técnico
                </span>
              </h2>
              <p className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed">
                Antes de pensar en contenido, tu sitio necesita una base sólida.
                Si Google no puede rastrear, entender o cargar tu página, ningún
                contenido va a funcionar.
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
                  {
                    title: "Velocidad",
                    desc: "Un sitio lento frustra usuarios y penaliza rankings. Cada segundo cuenta.",
                    icon: TrendingUp,
                    metric: "< 2.5s",
                    metricLabel: "tiempo ideal de carga",
                  },
                  {
                    title: "Indexación",
                    desc: "Si Google no puede acceder a tus páginas, simplemente no existís online.",
                    icon: Search,
                    metric: "100%",
                    metricLabel: "páginas indexables",
                  },
                  {
                    title: "Arquitectura web",
                    desc: "Una estructura clara ayuda a Google a entender qué páginas son importantes.",
                    icon: Layers,
                    metric: "3 clics",
                    metricLabel: "máximo para llegar a cualquier página",
                  },
                  {
                    title: "Mobile-first",
                    desc: "Google indexa primero la versión mobile. Si no es responsive, perdés posiciones.",
                    icon: Globe,
                    metric: "60%+",
                    metricLabel: "de búsquedas son mobile",
                  },
                  {
                    title: "Experiencia de usuario",
                    desc: "Métricas como Core Web Vitals influyen directamente en tu posicionamiento.",
                    icon: BarChart3,
                    metric: "Core",
                    metricLabel: "Web Vitals optimizados",
                  },
                  {
                    title: "Seguridad",
                    desc: "HTTPS es un factor de ranking. Sin certificado, Google penaliza tu sitio.",
                    icon: Code,
                    metric: "HTTPS",
                    metricLabel: "certificado SSL activo",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.07 }}
                      className="group p-5 md:p-6 border border-[var(--gaia-pink)]/8 bg-[var(--gaia-pink)]/[0.015] hover:border-[var(--gaia-pink)]/18 hover:bg-[var(--gaia-pink)]/[0.025] transition-all duration-500"
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 border border-[var(--gaia-pink)]/12 bg-[var(--gaia-pink)]/[0.04] group-hover:border-[var(--gaia-pink)]/24 group-hover:bg-[var(--gaia-pink)]/[0.08] transition-all duration-500 shrink-0">
                          <Icon
                            size={16}
                            className="text-[var(--gaia-pink)]"
                          />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-serif text-lg text-[var(--gaia-beige)] group-hover:text-[var(--gaia-pink)] transition-colors duration-500">
                            {item.title}
                          </h3>
                          <p className="font-sans text-xs text-[var(--gaia-beige)]/50 leading-relaxed mt-1.5">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      <div className="pt-3 border-t border-[var(--gaia-pink)]/8">
                        <span className="block font-serif text-xl text-[var(--gaia-pink)]">
                          {item.metric}
                        </span>
                        <span className="block font-sans text-[10px] uppercase tracking-[0.15em] text-[var(--gaia-beige)]/40 mt-0.5">
                          {item.metricLabel}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <div className="relative p-6 md:p-8 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-burgundy)]/40">
                {/* Local business profile mockup */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--gaia-pink)]/10 border border-[var(--gaia-pink)]/20 flex items-center justify-center">
                    <MapPin size={16} className="text-[var(--gaia-pink)]" />
                  </div>
                  <div>
                    <span className="block font-serif text-lg text-[var(--gaia-beige)]">
                      Tu Negocio Local
                    </span>
                    <span className="block font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--gaia-pink)]/60">
                      Google Business Profile
                    </span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className={`w-3.5 h-3.5 rounded-sm ${i <= 4 ? "bg-[var(--gaia-pink)]/40" : "bg-[var(--gaia-pink)]/15"}`}
                      />
                    ))}
                  </div>
                  <span className="font-sans text-xs text-[var(--gaia-beige)]/50">
                    4.8 · 127 reseñas
                  </span>
                </div>

                {/* Info lines */}
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--gaia-pink)]/30" />
                    <div className="h-2 bg-[var(--gaia-beige)]/12 rounded-full w-[75%]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--gaia-pink)]/30" />
                    <div className="h-2 bg-[var(--gaia-beige)]/12 rounded-full w-[55%]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--gaia-pink)]/30" />
                    <div className="h-2 bg-[var(--gaia-beige)]/12 rounded-full w-[65%]" />
                  </div>
                </div>

                {/* Action buttons mockup */}
                <div className="flex gap-2">
                  <div className="px-4 py-2 border border-[var(--gaia-pink)]/15 bg-[var(--gaia-pink)]/[0.05] rounded-full">
                    <span className="font-sans text-[10px] text-[var(--gaia-pink)]/70 uppercase tracking-wider">
                      Llamar
                    </span>
                  </div>
                  <div className="px-4 py-2 border border-[var(--gaia-pink)]/15 bg-[var(--gaia-pink)]/[0.05] rounded-full">
                    <span className="font-sans text-[10px] text-[var(--gaia-pink)]/70 uppercase tracking-wider">
                      WhatsApp
                    </span>
                  </div>
                  <div className="px-4 py-2 border border-[var(--gaia-pink)]/15 bg-[var(--gaia-pink)]/[0.05] rounded-full">
                    <span className="font-sans text-[10px] text-[var(--gaia-pink)]/70 uppercase tracking-wider">
                      Sitio web
                    </span>
                  </div>
                </div>

                {/* Decorative */}
                <div className="absolute -right-3 -top-3 w-20 h-20 bg-[var(--gaia-pink)]/8 rounded-full blur-[40px] pointer-events-none" />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase">
                SECCIÓN 04
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-[var(--gaia-beige)] tracking-tight">
                SEO{" "}
                <span className="font-monsieur text-[var(--gaia-pink)] text-5xl md:text-6xl lowercase">
                  local
                </span>
              </h2>
              <p className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed">
                Si tenés un negocio con presencia física, el SEO local es tu
                herramienta más poderosa. Aparecer cuando alguien busca
                &ldquo;cerca de mí&rdquo; o incluye tu ciudad es lo que separa
                una visita de una oportunidad perdida.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Google Business Profile",
                    desc: "Tu ficha optimizada es el punto de contacto directo con clientes potenciales.",
                  },
                  {
                    title: "Reseñas verificadas",
                    desc: "Las reseñas no solo generan confianza: son un factor de ranking local clave.",
                  },
                  {
                    title: "Consistencia de datos",
                    desc: "Nombre, dirección y teléfono deben ser idénticos en toda la web.",
                  },
                  {
                    title: "Presencia en Google Maps",
                    desc: "Aparecer en el mapa con información completa multiplica tu visibilidad local.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex gap-4 p-4 border border-[var(--gaia-pink)]/8 bg-[var(--gaia-pink)]/[0.015]"
                  >
                    <div className="shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 bg-[var(--gaia-pink)] rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm text-[var(--gaia-beige)] mb-1">
                        {item.title}
                      </h4>
                      <p className="font-sans text-xs text-[var(--gaia-beige)]/50 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ESTRATEGIA DE CONTENIDOS ==================== */}
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
              Estrategia de{" "}
              <span className="font-monsieur text-[var(--gaia-pink)] text-4xl md:text-6xl lowercase">
                contenidos
              </span>
            </h2>
            <p className="font-sans text-[var(--gaia-beige)]/60 text-xs sm:text-sm md:text-base mt-4 leading-relaxed">
              No se trata de escribir por escribir. Se trata de crear contenido
              que responda exactamente lo que tu audiencia está buscando.
            </p>
          </div>

          {/* Editorial visualization */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left: Search intent + keywords */}
              <div className="lg:col-span-5 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="p-6 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.015]"
                >
                  <span className="block text-[10px] uppercase tracking-[0.25em] text-[var(--gaia-pink)]/60 font-sans mb-3">
                    Intención de búsqueda
                  </span>
                  <h3 className="font-serif text-xl text-[var(--gaia-beige)] mb-3">
                    ¿Qué busca tu audiencia?
                  </h3>
                  <p className="font-sans text-xs text-[var(--gaia-beige)]/50 leading-relaxed mb-4">
                    Cada búsqueda tiene una intención: informarse, comparar o
                    comprar. Tu contenido debe alinearse con esa intención.
                  </p>
                  <div className="space-y-2">
                    {[
                      { label: "Informativa", example: "cómo funciona el SEO" },
                      { label: "Transaccional", example: "contratar agencia SEO" },
                      { label: "Comparativa", example: "SEO vs publicidad" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 p-2.5 border border-[var(--gaia-pink)]/6 bg-[var(--gaia-burgundy)]/30"
                      >
                        <div className="w-1 h-1 rounded-full bg-[var(--gaia-pink)]/40 shrink-0" />
                        <div className="min-w-0">
                          <span className="block font-sans text-[10px] uppercase tracking-[0.15em] text-[var(--gaia-pink)]/60">
                            {item.label}
                          </span>
                          <span className="block font-sans text-xs text-[var(--gaia-beige)]/60 mt-0.5 truncate">
                            &ldquo;{item.example}&rdquo;
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="p-6 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.015]"
                >
                  <span className="block text-[10px] uppercase tracking-[0.25em] text-[var(--gaia-pink)]/60 font-sans mb-3">
                    Autoridad temática
                  </span>
                  <h3 className="font-serif text-xl text-[var(--gaia-beige)] mb-2">
                    Tu area de expertise
                  </h3>
                  <p className="font-sans text-xs text-[var(--gaia-beige)]/50 leading-relaxed">
                    Google premia la especialización. Un sitio que cubre un tema
                    a fondo genera más confianza que uno que habla de todo sin
                    profundizar.
                  </p>
                </motion.div>
              </div>

              {/* Right: Content editorial flow */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="p-6 md:p-8 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.015]"
                >
                  <span className="block text-[10px] uppercase tracking-[0.25em] text-[var(--gaia-pink)]/60 font-sans mb-4">
                    Contenido optimizado
                  </span>

                  {/* Mockup de contenido editorial */}
                  <div className="space-y-5">
                    {/* Title */}
                    <div>
                      <div className="h-3 bg-[var(--gaia-beige)]/20 rounded-full w-[90%] mb-2" />
                      <div className="h-2.5 bg-[var(--gaia-beige)]/12 rounded-full w-[65%]" />
                    </div>

                    {/* Meta description */}
                    <div className="p-3 border border-[var(--gaia-pink)]/8 bg-[var(--gaia-burgundy)]/30">
                      <span className="block font-sans text-[9px] uppercase tracking-[0.2em] text-[var(--gaia-pink)]/50 mb-1.5">
                        Meta descripción
                      </span>
                      <div className="space-y-1.5">
                        <div className="h-1.5 bg-[var(--gaia-beige)]/15 rounded-full w-[95%]" />
                        <div className="h-1.5 bg-[var(--gaia-beige)]/15 rounded-full w-[80%]" />
                      </div>
                    </div>

                    {/* Headings structure */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-sans text-[9px] text-[var(--gaia-pink)]/40 shrink-0">H1</span>
                        <div className="h-2.5 bg-[var(--gaia-beige)]/18 rounded-full w-[75%]" />
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <span className="font-sans text-[9px] text-[var(--gaia-pink)]/40 shrink-0">H2</span>
                        <div className="h-2 bg-[var(--gaia-beige)]/14 rounded-full w-[60%]" />
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <span className="font-sans text-[9px] text-[var(--gaia-pink)]/40 shrink-0">H2</span>
                        <div className="h-2 bg-[var(--gaia-beige)]/14 rounded-full w-[55%]" />
                      </div>
                      <div className="flex items-center gap-2 ml-8">
                        <span className="font-sans text-[9px] text-[var(--gaia-pink)]/40 shrink-0">H3</span>
                        <div className="h-1.5 bg-[var(--gaia-beige)]/10 rounded-full w-[45%]" />
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <span className="font-sans text-[9px] text-[var(--gaia-pink)]/40 shrink-0">H2</span>
                        <div className="h-2 bg-[var(--gaia-beige)]/14 rounded-full w-[65%]" />
                      </div>
                    </div>

                    {/* Body paragraphs */}
                    <div className="space-y-2 pt-2">
                      <div className="h-1.5 bg-[var(--gaia-beige)]/10 rounded-full w-full" />
                      <div className="h-1.5 bg-[var(--gaia-beige)]/10 rounded-full w-[92%]" />
                      <div className="h-1.5 bg-[var(--gaia-beige)]/10 rounded-full w-[85%]" />
                      <div className="h-1.5 bg-[var(--gaia-beige)]/10 rounded-full w-[90%]" />
                    </div>

                    {/* CTA in content */}
                    <div className="flex items-center gap-3 p-3 border border-[var(--gaia-pink)]/12 bg-[var(--gaia-pink)]/[0.04]">
                      <div className="w-8 h-8 rounded-full border border-[var(--gaia-pink)]/20 bg-[var(--gaia-pink)]/10 flex items-center justify-center shrink-0">
                        <ArrowRight size={12} className="text-[var(--gaia-pink)]" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-[var(--gaia-pink)]/15 rounded-full w-[70%] mb-1.5" />
                        <div className="h-1.5 bg-[var(--gaia-pink)]/10 rounded-full w-[50%]" />
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-[var(--gaia-pink)]/8">
                    {["SEO", "Marketing digital", "Estrategia", " Contenido"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.03] font-sans text-[10px] text-[var(--gaia-beige)]/50"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CUÁNTO DEMORA EL SEO ==================== */}
      <section
        id="tiempo"
        className="py-20 md:py-32 px-6 md:px-12 border-b border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.01]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-4">
              SECCIÓN 06
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
              Cuánto demora{" "}
              <span className="font-monsieur text-[var(--gaia-pink)] text-4xl md:text-6xl lowercase">
                el SEO
              </span>
            </h2>
            <p className="font-sans text-[var(--gaia-beige)]/60 text-xs sm:text-sm md:text-base mt-4 leading-relaxed">
              El SEO no es instantáneo. Es una inversión que construye
              visibilidad sostenible. Estos son los tiempos reales.
            </p>
          </div>

          {/* Premium Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--gaia-pink)]/25 via-[var(--gaia-pink)]/15 to-[var(--gaia-pink)]/5 md:-translate-x-px" />

              {[
                {
                  month: "Mes 1",
                  title: "Auditoría",
                  desc: "Análisis completo de tu sitio: técnica, contenido, competencia y oportunidades. El diagnóstico que define la estrategia.",
                  items: [
                    "Auditoría técnica",
                    "Análisis de competencia",
                    "Investigación de keywords",
                    "Plan estratégico",
                  ],
                },
                {
                  month: "Mes 2–3",
                  title: "Optimización",
                  desc: "Correcciones técnicas, estructura del sitio, optimización de páginas existentes y preparación del contenido.",
                  items: [
                    "Correcciones técnicas",
                    "Optimización on-page",
                    "Estructura de URLs",
                    "Mejora de velocidad",
                  ],
                },
                {
                  month: "Mes 4–6",
                  title: "Primeros resultados",
                  desc: "Las páginas optimizadas empiezan a subir posiciones. Aumenta el tráfico orgánico y aparecen las primeras conversiones.",
                  items: [
                    "Subida en rankings",
                    "Crecimiento de tráfico",
                    "Primeras conversiones",
                    "Contenido nuevo activo",
                  ],
                },
                {
                  month: "Mes 6–12",
                  title: "Consolidación",
                  desc: "El posicionamiento se estabiliza y crece. Cada mes genera más autoridad, más tráfico y más resultados medibles.",
                  items: [
                    "Posiciones estables",
                    "Autoridad creciente",
                    "Tráfico sostenido",
                    "ROI medible",
                  ],
                },
              ].map((phase, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={phase.month}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className={`relative flex items-start gap-6 md:gap-0 mb-12 md:mb-16 last:mb-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Dot */}
                    <div className="absolute left-[18px] md:left-1/2 w-[11px] h-[11px] rounded-full border-2 border-[var(--gaia-pink)] bg-[var(--gaia-burgundy)] md:-translate-x-1/2 z-10 mt-2" />

                    {/* Content */}
                    <div className={`flex-1 pl-12 md:pl-0 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                      <span className="block font-serif text-sm text-[var(--gaia-pink)] mb-1.5">
                        {phase.month}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl text-[var(--gaia-beige)] mb-3">
                        {phase.title}
                      </h3>
                      <p className="font-sans text-sm text-[var(--gaia-beige)]/55 leading-relaxed mb-4">
                        {phase.desc}
                      </p>
                      <div className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                        {phase.items.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1 border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/[0.03] font-sans text-[10px] text-[var(--gaia-beige)]/50"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                );
              })}
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
              <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase">
                SECCIÓN 07
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-[var(--gaia-beige)] tracking-tight">
                Errores{" "}
                <span className="font-monsieur text-[var(--gaia-pink)] text-5xl md:text-6xl lowercase">
                  frecuentes
                </span>
              </h2>
              <p className="font-sans text-[var(--gaia-beige)]/70 text-sm sm:text-base leading-relaxed">
                Estos errores aparecen una y otra vez. Evitarlos te ahorra meses
                de trabajo sin resultados.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="border-t border-[var(--gaia-pink)]/15 divide-y divide-[var(--gaia-pink)]/15">
                {[
                  {
                    title: "Comprar backlinks",
                    desc: "Los enlaces artificiales no generan autoridad real. Google los detecta y penaliza tu sitio, a veces con caídas drásticas en posiciones.",
                  },
                  {
                    title: "Contenido duplicado",
                    desc: "Copiar texto de otros sitios o repetir páginas propias confunde a Google. Prefiere contenido original, único y con valor real.",
                  },
                  {
                    title: "Ignorar SEO técnico",
                    desc: "Un sitio lento, sin SSL o sin optimización mobile no puede posicionar bien, sin importar cuán bueno sea el contenido.",
                  },
                  {
                    title: "Abandonar demasiado pronto",
                    desc: "El SEO necesita entre 3 y 6 meses para mostrar resultados. Parar antes es como plantar y sacar la raíz antes de que crezca.",
                  },
                  {
                    title: "No investigar keywords",
                    desc: "Escribir sobre temas que nadie busca genera tráfico cero. Cada página debe estar optimizada para búsquedas con volumen real.",
                  },
                  {
                    title: "Duplicar esfuerzos sin estrategia",
                    desc: "Publicar contenido sin un plan genera páginas compitiendo entre sí. La estrategia define qué crear, cuándo y para quién.",
                  },
                ].map((error, index) => {
                  const isOpen = activeError === index;
                  return (
                    <div key={index}>
                      <button
                        onClick={() => toggleError(index)}
                        className="w-full flex items-center justify-between text-left py-5 md:py-6 group cursor-pointer"
                      >
                        <div className="flex items-center gap-4 min-w-0 pr-4">
                          <div className="shrink-0 w-8 h-8 rounded-full border border-[var(--gaia-pink)]/15 bg-[var(--gaia-pink)]/[0.04] flex items-center justify-center group-hover:border-[var(--gaia-pink)]/30 group-hover:bg-[var(--gaia-pink)]/[0.08] transition-all duration-300">
                            <AlertTriangle
                              size={14}
                              className="text-[var(--gaia-pink)]"
                            />
                          </div>
                          <span className="font-serif text-base md:text-lg text-[var(--gaia-beige)] group-hover:text-[var(--gaia-pink)] transition-colors duration-300">
                            {error.title}
                          </span>
                        </div>
                        <span className="text-[var(--gaia-pink)] shrink-0">
                          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
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
                            <p className="font-sans text-xs sm:text-sm leading-relaxed text-[var(--gaia-beige)]/55 pb-6 pl-12 max-w-2xl">
                              {error.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section
        id="preguntas-frecuentes"
        className="py-20 md:py-32 px-6 md:px-12 bg-[var(--gaia-burgundy)] relative overflow-hidden border-b border-[var(--gaia-pink)]/10"
      >
        <div className="absolute inset-0 mesh-gradient-burgundy opacity-20 mix-blend-screen pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-16 text-center">
            <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-4">
              DESPEJA TUS DUDAS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--gaia-beige)] tracking-tight">
              Preguntas{" "}
              <span className="font-monsieur text-[var(--gaia-pink)] text-4xl md:text-6xl lowercase">
                frecuentes
              </span>
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
