import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Contenidos',
    category: 'Fotografía · Producción creativa',
    image: '/portfolio/fotos/chic-image-2.png',
    alt: 'Ejemplo de fotografía editorial del portfolio de contenidos',
    href: '/portfolio/contenidos',
    link: 'Ver contenidos',
    fit: 'object-cover',
    position: 'object-center',
    sizes: '(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw',
  },
  {
    title: 'Diseños web',
    category: 'Sitios Web · Tiendas online',
    image: '/portfolio/web-designs/adrianacostaorfebre.png',
    alt: 'Ejemplo de tienda online del portfolio de diseños web',
    href: '/portfolio/disenos-web',
    link: 'Ver diseños web',
    fit: 'object-cover',
    position: 'object-left',
    sizes: '(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw',
  },
  {
    title: 'Branding',
    category: 'Identidad visual · Branding',
    image: '/portfolio/branding/bruma-branding-applied.png',
    alt: 'Identidad visual de Bruma Café aplicada a packaging y papelería',
    href: '/portfolio/branding',
    link: 'Ver branding',
    fit: 'object-cover',
    position: 'object-[center_60%]',
    sizes: '(max-width: 1023px) 100vw, 33vw',
  },
] as const;

export function FeaturedWork() {
  return (
    <section id="trabajos" className="bg-[var(--gaia-burgundy)] px-6 py-16 text-[var(--gaia-beige)] md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gaia-pink)]">
              Nuestro portfolio
            </p>
            <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Lo que hacemos toma forma en cada marca.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex min-h-12 w-fit items-center gap-2 whitespace-nowrap border-b border-[var(--gaia-pink)] pb-1 font-sans text-sm font-semibold text-[var(--gaia-beige)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gaia-pink)]"
          >
            Ver todo el portfolio
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={[
                index === 1 ? 'lg:pt-16' : '',
                index === 2 ? 'md:col-span-2 lg:col-span-1' : '',
              ].join(' ')}
            >
              <Link href={project.href} className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gaia-pink)]">
                <div
                  className={`relative aspect-[4/3] overflow-hidden border border-[var(--gaia-pink)]/25 bg-[var(--gaia-burgundy)] ${
                    index === 2 ? 'md:aspect-[2/1] lg:aspect-[4/3]' : ''
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes={project.sizes}
                    className={`${project.fit} ${project.position} transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transform-none`}
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gaia-pink)]">
                      {project.category}
                    </p>
                    <h3 className="mt-3 font-serif text-3xl text-[var(--gaia-beige)] md:text-4xl">
                      {project.title}
                    </h3>
                    <span className="mt-5 inline-flex items-center gap-2 border-b border-[var(--gaia-pink)] pb-1 font-sans text-sm font-semibold text-[var(--gaia-pink)]">
                      {project.link}
                      <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </div>
                  <ArrowUpRight className="mt-1 shrink-0 text-[var(--gaia-pink)]" size={24} aria-hidden="true" />
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
