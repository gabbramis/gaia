const steps = [
  {
    number: '01',
    title: 'Nos contás qué necesita tu marca',
    description:
      'Entendemos tu negocio, tus objetivos y qué te está frenando.',
  },
  {
    number: '02',
    title: 'Definimos un camino claro',
    description:
      'Te proponemos alcance, prioridades y presupuesto.',
  },
  {
    number: '03',
    title: 'Creamos, lanzamos y acompañamos',
    description:
      'Ejecutamos, medimos y ajustamos lo que haga falta.',
  },
] as const;

export function Process() {
  return (
    <section id="proceso" className="border-t border-[var(--gaia-pink)]/20 bg-[var(--gaia-burgundy)] px-6 py-16 text-[var(--gaia-beige)] md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div>
            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gaia-pink)]">
              Cómo trabajamos
            </p>
            <h2 className="max-w-xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Un proceso simple, pensado para avanzar.
            </h2>
          </div>
          <ol className="border-t border-[var(--gaia-pink)]/25">
            {steps.map((step) => (
              <li key={step.number} className="grid gap-4 border-b border-[var(--gaia-pink)]/25 py-7 sm:grid-cols-[4rem_1fr] sm:gap-6">
                <span className="font-serif text-2xl text-[var(--gaia-pink)]">{step.number}</span>
                <div>
                  <h3 className="font-serif text-2xl leading-tight md:text-3xl">{step.title}</h3>
                  <p className="mt-3 max-w-lg font-sans text-sm leading-relaxed text-[var(--gaia-beige)]/85 md:text-base">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
