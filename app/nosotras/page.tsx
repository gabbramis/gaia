'use client';

import { Navigation } from '@/components/ui/Navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Footer } from '@/components/sections/Footer';
import { motion } from 'motion/react';
import { fadeInRight, fadeInUp } from '@/lib/animations';
import Image from 'next/image';

const founders = [
  {
    name: 'Mer',
    role: 'Comunicacion, marketing y contenido',
    image: '/nosotras-mer.jpeg',
    alt: 'Placeholder de Mer',
    paragraphs: [
      'Soy Mer, creativa y emprendedora desde siempre. La comunicacion es una de mis grandes pasiones. Siempre me intereso entender como se comunican las grandes marcas y que las hace conectar con las personas. Por eso, ademas de estudiarla, sigo capacitandome en marketing, redes sociales y en el comportamiento del consumidor.',
      'Cada dia busco nuevas tendencias, herramientas y formas que me permitan crear estrategias cada vez mas efectivas. Disfruto transformar ideas en proyectos que conecten con las personas, y de ahi nacio la idea de crear Gaia.',
      'Creo que el marketing tiene el poder de ayudar a crecer a las marcas, pero tambien de acercarlas a quienes realmente las necesitan. Esa misma pasion por aportar valor me llevo a desarrollar mi marca personal como creadora de contenido y a trabajar en un proyecto online de entrenamiento, donde puedo unir mi interes por la comunicacion con otra de las cosas que mas disfruto: el fitness.',
      'Hoy, cada proyecto que llega a mis manos en Gaia representa una nueva oportunidad para crear, innovar y ayudar a que una marca encuentre su mejor forma de comunicar lo que la hace unica.',
    ],
  },
  {
    name: 'Gabi',
    role: 'Desarrollo web, SEO y estrategia tecnica',
    image: '/nosotras-gabi.jpeg',
    alt: 'Placeholder de Gabi',
    paragraphs: [
      'Soy Gabi, en Gaia me encargo de la parte tecnica, el SEO y el diseño web. Siempre fui muy creativa, y con el tiempo encontre en este mundo una forma distinta de expresarlo. Me gusto descubrir que tambien se puede crear desde la estructura, desde los detalles y desde todo eso que hace que una marca se vea bien, pero que ademas funcione de verdad.',
      'Disfruto mucho pensar sitios que se sientan lindos, claros y faciles de usar. Me interesa que cada web tenga personalidad, que represente bien a la marca y que no quede solo en algo visual, sino que tambien este pensada para acompañar su crecimiento.',
      'Tambien me gusta trabajar todo lo que tiene que ver con SEO y estrategia digital, porque siento que ahi hay mucho valor. No se trata solo de estar online, sino de estar de una forma ordenada, coherente y con intencion, para que las personas correctas puedan encontrarte.',
      'Lo que mas me gusta de Gaia es poder combinar lo creativo con lo tecnico y ponerlo al servicio de marcas que tienen algo valioso para mostrar. En cada proyecto busco aportar esa mirada que ordena, potencia y le da forma a una idea para que pueda convertirse en una presencia real, solida y autentica.',
    ],
  },
];

export default function NosotrasPage() {
  return (
    <main className="bg-[var(--gaia-burgundy)] min-h-screen overflow-x-hidden w-full">
      <Navigation />
      <section
        id="nosotras"
        className="relative bg-[var(--gaia-burgundy)] pt-24 md:pt-32 pb-16 md:pb-32 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-8 flex items-start md:mb-10">
            <Breadcrumbs />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="lg:col-span-5 relative order-2"
            >
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full border border-[var(--gaia-pink)]/30 rounded-sm" />

              <div className="relative overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--gaia-burgundy)]/40 via-transparent to-[var(--gaia-burgundy)]/10 z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-[var(--gaia-pink)]/5 mix-blend-overlay z-10 pointer-events-none" />

                <Image
                  src="/nosotras.jpeg"
                  alt="Fundadoras de Gaia Studio"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover grayscale-[15%] contrast-[1.02] brightness-[0.98]"
                  priority
                />
              </div>

              <div className="absolute -top-3 -left-3 w-8 h-8 border-t border-l border-[var(--gaia-pink)]/50" />
            </motion.div>

            <div className="lg:col-span-7 order-1">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInRight}
              >
                <span className="block text-[var(--gaia-pink)] text-sm tracking-[0.3em] uppercase mb-8 flex items-center gap-4">
                  <span className="w-12 h-px bg-[var(--gaia-pink)]" />
                  Who We Are
                </span>

                <h2 className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-[var(--gaia-beige)] mb-8 tracking-tighter leading-[0.8]">
                  Nosotras<span className="text-[var(--gaia-pink)]">.</span>
                </h2>

                <p className="font-sans text-[var(--gaia-beige)]/60 text-sm tracking-widest uppercase mb-8">
                  Est. 2025 - Montevideo
                </p>

                <div className="w-full h-px bg-[var(--gaia-pink)]/20 mb-10" />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="space-y-10"
              >
                <div className="relative">
                  <p className="font-serif text-2xl md:text-3xl text-[var(--gaia-beige)] leading-relaxed">
                    <span className="float-left text-7xl md:text-8xl text-[var(--gaia-pink)] font-serif mr-4 mt-[-10px] leading-none">S</span>
                    omos un estudio creativo que cree en el poder de la estética y la estrategia para construir marcas memorables.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-[var(--gaia-beige)]/80 text-lg leading-relaxed tracking-wide">
                  <p>
                    Nuestro enfoque combina <span className="text-[var(--gaia-pink)] italic font-serif">diseño editorial</span>, pensamiento estratégico y compromiso con la calidad que transforma lo ordinario en extraordinario.
                  </p>
                  <p>
                    Trabajamos con marcas que buscan algo más que lo convencional. Marcas que aspiran a <span className="text-[var(--gaia-pink)] italic font-serif">ser arte</span>.
                  </p>
                </div>

                <div className="pt-6 border-t border-[var(--gaia-pink)]/10 flex justify-end">
                  <div className="font-serif italic text-[var(--gaia-pink)] text-2xl">
                    Gaia Studio
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mt-20 md:mt-28 pt-12 md:pt-16 border-t border-[var(--gaia-pink)]/12 space-y-16 md:space-y-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="max-w-3xl"
            >
              <span className="block text-[var(--gaia-pink)]/70 text-xs tracking-[0.3em] uppercase mb-4">
                Detras de Gaia
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--gaia-beige)] tracking-tight">
                Las personas que le dan forma a cada proyecto.
              </h3>
            </motion.div>

          <div className="space-y-16 md:space-y-24">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-16 items-start"
              >
                <div className={`lg:col-span-4 relative order-2 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="absolute -bottom-4 -right-4 md:-bottom-5 md:-right-5 w-full h-full border border-[var(--gaia-pink)]/25 rounded-sm" />
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/5">
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--gaia-burgundy)]/35 via-transparent to-[var(--gaia-burgundy)]/10 z-10 pointer-events-none" />
                    <Image
                      src={founder.image}
                      alt={founder.alt}
                      fill
                      className="object-cover grayscale-[8%] contrast-[1.02] brightness-[0.98]"
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      priority={index === 0}
                    />
                  </div>
                </div>

                <div className={`lg:col-span-8 order-1 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="border-t border-[var(--gaia-pink)]/12 pt-6 md:pt-8">
                    <span className="block text-[var(--gaia-pink)]/70 text-xs tracking-[0.3em] uppercase mb-3">
                      Cofundadora
                    </span>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
                      <h3 className="font-serif text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
                        {founder.name}
                      </h3>
                      <p className="font-sans text-[var(--gaia-beige)]/50 text-xs md:text-sm tracking-[0.18em] uppercase">
                        {founder.role}
                      </p>
                    </div>

                    <div className="space-y-5 font-sans text-[var(--gaia-beige)]/78 text-sm md:text-base leading-relaxed max-w-3xl">
                      {founder.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
