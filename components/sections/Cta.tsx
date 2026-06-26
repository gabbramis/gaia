import Link from 'next/link';
import { ArrowRight, Sparkles, FolderOpen, Heart } from 'lucide-react';

const cards = [
  {
    title: 'Servicios',
    description: 'Descubrí cómo podemos transformar tu marca con soluciones digitales a medida.',
    href: '/servicios',
    icon: Sparkles,
  },
  {
    title: 'Portfolio',
    description: 'Explorá los proyectos que ya confiaron en nuestra visión creativa.',
    href: '/portfolio',
    icon: FolderOpen,
  },
  {
    title: 'Nosotras',
    description: 'Conocé la historia y el equipo detrás de Gaia Studio.',
    href: '/nosotras',
    icon: Heart,
  },
];

export function Cta() {
  return (
    <section className="relative bg-[var(--gaia-burgundy)] py-16 md:py-24 px-6 md:px-12 border-t border-[var(--gaia-pink)]/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <span className="block text-[var(--gaia-pink)] text-sm tracking-[0.3em] uppercase mb-4">
            Explorá
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-[var(--gaia-beige)] tracking-tight">
            Descubrí Gaia
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {cards.map((card) => (
            <div key={card.title}>
              <Link
                href={card.href}
                className="group block h-full border border-[var(--gaia-pink)]/20 bg-[var(--gaia-pink)]/5 hover:bg-[var(--gaia-pink)]/10 transition-all duration-500 p-6 md:p-8"
              >
                <card.icon
                  size={24}
                  className="text-[var(--gaia-pink)] mb-4 group-hover:scale-110 transition-transform duration-500"
                />
                <h3 className="font-serif text-2xl md:text-3xl text-[var(--gaia-beige)] mb-3 group-hover:text-[var(--gaia-pink)] transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="font-sans text-[var(--gaia-beige)]/60 text-sm leading-relaxed mb-6">
                  {card.description}
                </p>
                <div className="flex items-center gap-2 text-[var(--gaia-pink)] text-xs tracking-widest uppercase group-hover:gap-4 transition-all duration-300">
                  <span>Explorar</span>
                  <ArrowRight size={14} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
