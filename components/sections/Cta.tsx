import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const offerings = [
  {
    number: '01',
    label: 'Estrategia, contenido y redes',
    title: 'Planificamos, grabamos, diseñamos y publicamos.',
    details: ['Estrategia de comunicación', 'Contenido visual', 'Gestión de redes', 'Social Media'],
    href: '/gestion-redes-sociales',
    link: 'Explorar marketing',
  },
  {
    number: '02',
    label: 'Diseño y desarrollo web',
    title: 'Una página web que muestre el valor de tu negocio.',
    details: ['Sitios institucionales', 'Landing pages', 'Tiendas online'],
    href: '/diseno-web',
    link: 'Explorar desarrollo web',
  },
] as const;

export function Cta() {
  return (
    <section id="servicios-destacados" className="border-t border-[var(--gaia-pink)]/20 bg-[var(--gaia-burgundy)] px-6 py-16 text-[var(--gaia-beige)] md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 md:mb-14">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gaia-pink)]">
            Lo que hacemos
          </p>
          <h2 className="max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            Marketing, contenido y desarrollo web para tu marca.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {offerings.map((offering) => (
            <article key={offering.number} className="group flex h-full flex-col border border-[var(--gaia-pink)]/25 p-5 transition-colors hover:bg-[var(--gaia-pink)]/10 md:p-10">
              <div className="mb-6 flex items-center justify-between border-b border-[var(--gaia-pink)]/25 pb-4 md:mb-10 md:pb-5">
                <span className="font-serif text-3xl">{offering.number}</span>
                <ArrowUpRight size={22} aria-hidden="true" />
              </div>
              <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gaia-pink)]">
                {offering.label}
              </p>
              <h3 className="max-w-lg font-serif text-2xl leading-tight md:text-4xl">
                {offering.title}
              </h3>
              <ul className="mt-6 flex flex-wrap gap-2 md:mt-8" aria-label={'Incluye ' + offering.label}>
                {offering.details.map((detail) => (
                  <li key={detail} className="border border-[var(--gaia-pink)]/30 px-3 py-2 font-sans text-xs font-medium">
                    {detail}
                  </li>
                ))}
              </ul>
              <Link
                href={offering.href}
                className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 border-b border-[var(--gaia-pink)] pb-1 pt-8 font-sans text-sm font-semibold text-[var(--gaia-pink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gaia-pink)]"
              >
                {offering.link}
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
