import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight, Star } from 'lucide-react';
import { TrackedWhatsAppLink } from '@/components/ui/TrackedWhatsAppLink';
import { BrandsMarquee } from '@/components/ui/BrandsMarquee';
import { googleReviewsUrl } from '@/lib/google-reviews';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden border-b border-[var(--gaia-pink)]/20 bg-[var(--gaia-burgundy)] text-[var(--gaia-beige)]"
    >
      <div className="texture-overlay pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-6 pb-12 pt-28 text-center sm:pb-14 md:px-12">
        <p
          className="hero-rise font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--gaia-pink)] sm:text-xs sm:tracking-[0.26em]"
          style={{ animationDelay: '100ms' }}
        >
          Estudio creativo en Montevideo, Uruguay
        </p>

        <h1
          className="hero-rise mt-8 max-w-6xl font-serif text-[clamp(2.6rem,9.5vw,9rem)] leading-[0.9] tracking-[-0.055em] text-[var(--gaia-beige)] sm:mt-10"
          style={{ animationDelay: '180ms' }}
        >
          <span className="block">Donde tu negocio</span>
          <span className="-mt-1 block font-monsieur text-[clamp(4rem,14vw,12rem)] font-normal leading-[0.85] tracking-[-0.01em] text-[var(--gaia-pink)] sm:-mt-2 md:-mt-8 lg:-mt-10">
            se vuelve arte
          </span>
        </h1>

        <p
          className="hero-rise mt-8 max-w-xl font-sans text-base leading-relaxed text-[var(--gaia-beige)]/85 md:text-lg"
          style={{ animationDelay: '280ms' }}
        >
          Estrategia, contenido, redes y desarrollo web para que tu marca
          conecte con las personas correctas.
        </p>

        <div
          className="hero-rise mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:items-center md:mt-10"
          style={{ animationDelay: '360ms' }}
        >
          <TrackedWhatsAppLink
            source="home_hero"
            message="Hola Gaia, quiero contarles sobre mi marca y consultar por marketing o desarrollo web."
            className="group inline-flex min-h-14 items-center justify-center gap-3 bg-[var(--gaia-pink)] px-7 py-3 font-sans text-sm font-semibold text-[var(--gaia-burgundy)] transition-colors hover:bg-[var(--gaia-beige)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gaia-pink)]"
          >
            Contanos tu proyecto
            <ArrowUpRight
              size={18}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </TrackedWhatsAppLink>

          <Link
            href="#trabajos"
            className="group inline-flex min-h-14 items-center justify-center gap-3 border border-[var(--gaia-pink)]/55 px-7 py-3 font-sans text-sm font-medium text-[var(--gaia-beige)] transition-colors hover:border-[var(--gaia-pink)] hover:bg-[var(--gaia-pink)]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gaia-pink)]"
          >
            Ver nuestro trabajo
            <ArrowDownRight
              size={18}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <a
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Gaia Studio tiene 5,0 estrellas y 6 opiniones en Google Maps. Ver opiniones, abre en una nueva pestaña"
          className="hero-rise group mt-8 inline-flex items-center gap-3 border-b border-[var(--gaia-pink)]/50 pb-2 font-sans text-xs text-[var(--gaia-beige)] transition-colors hover:border-[var(--gaia-pink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gaia-pink)]"
          style={{ animationDelay: '440ms' }}
        >
          <span className="flex gap-0.5 text-[var(--gaia-pink)]" aria-hidden="true">
            {Array.from({ length: 5 }, (_, index) => <Star key={index} size={14} fill="currentColor" strokeWidth={1.5} />)}
          </span>
          <span><strong className="font-semibold">5,0 estrellas</strong> en Google Maps · 6 opiniones</span>
          <ArrowUpRight size={15} aria-hidden="true" className="text-[var(--gaia-pink)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      {/* Brands strip */}
      <BrandsMarquee />
    </section>
  );
}
