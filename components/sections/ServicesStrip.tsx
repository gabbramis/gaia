import { ServicesMarquee } from '@/components/ui/ServicesMarquee';

export function ServicesStrip() {
  return (
    <section
      id="servicios-strip"
      aria-label="Servicios"
      className="overflow-hidden border-y border-[var(--gaia-pink)]/15 bg-[var(--gaia-burgundy)] py-4"
    >
      <ServicesMarquee />
    </section>
  );
}
