'use client';

export function ResourceHero() {
  return (
    <div className="relative mb-8 md:mb-12 overflow-hidden">
      {/* Texture Overlay */}
      <div className="texture-overlay absolute inset-0" />

      {/* Radial Glow Background */}
      <div className="absolute inset-0 bg-gradient-radial-beige opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 text-center">
        {/* Eyebrow */}
        <span className="block text-[var(--gaia-pink)] text-xs tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-4">
          <span  />
          Recursos
          <span  />
        </span>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[var(--gaia-beige)] tracking-tight leading-[0.9] mb-2">
          Recursos para hacer
          <br />
          <span className="block font-monsieur text-[var(--gaia-pink)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl -mt-1 md:-mt-4 opacity-90">
            crecer tu negocio
          </span>
        </h1>

        {/* Divider */}
        <div className="mx-auto my-3 h-[1px] w-16 bg-[var(--gaia-pink)]/40 md:w-24" />

        {/* Description */}
        <p className="mx-auto max-w-xl font-sans text-sm md:text-base text-[var(--gaia-beige)]/60 leading-relaxed tracking-wide">
          Guías, plantillas y herramientas prácticas creadas por GAIA para que
          potencies tu marketing, tus redes y tu estrategia digital.
        </p>
      </div>
    </div>
  );
}
