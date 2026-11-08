const services = [
  'Marketing digital',
  'Branding',
  'Diseño web',
  'Redes sociales',
  'Contenido creativo',
  'Campañas',
  'SEO',
  'Automatizaciones IA',
] as const;

function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 0c.55 6.5 5.5 11.45 12 12-6.5.55-11.45 5.5-12 12C11.45 17.5 6.5 12.55 0 12 6.5 11.45 11.45 6.5 12 0Z" />
    </svg>
  );
}

export function ServicesMarquee() {
  return (
    <div className="animate-marquee flex w-max">
      {[0, 1, 2, 3].map((copy) => (
        <ul
          key={copy}
          aria-hidden={copy !== 0}
          className="flex shrink-0 items-center gap-6 pr-6 sm:gap-8 sm:pr-8"
        >
          {services.map((service) => (
            <li key={service} className="flex items-center gap-6 sm:gap-8">
              <span className="font-sans text-[10px] font-medium uppercase tracking-[0.26em] text-[var(--gaia-beige)]/70 sm:text-[11px]">
                {service}
              </span>
              <Sparkle className="h-2 w-2 shrink-0 text-[var(--gaia-pink)]/70" />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
