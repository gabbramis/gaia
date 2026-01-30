'use client';

import { motion } from 'motion/react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { cn } from '@/lib/utils';

const steps = [
    {
        number: "01",
        title: "Evaluación del negocio",
        description: "Analizamos a fondo tu marca para entender tus objetivos, desafíos y la esencia que te hace única."
    },
    {
        number: "02",
        title: "Propuesta y presupuesto",
        description: "Diseñamos una propuesta a medida con alcances claros y un presupuesto transparente, sin sorpresas."
    },
    {
        number: "03",
        title: "Diseño y cronograma",
        description: "Creamos un plan de acción detallado y ejecutamos cada etapa con estrategia, manteniendo el orden y la calidad."
    },
    {
        number: "04",
        title: "Lanzamiento y seguimiento",
        description: "No te dejamos solo. Te acompañamos en la salida al mundo y monitoreamos los resultados para asegurar el éxito."
    }
];

export function Process() {
    return (
        <section
            id="proceso"
            className="relative bg-[var(--gaia-burgundy)] py-12 md:py-16 px-6 md:px-12 border-t border-[var(--gaia-pink)]/10"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={fadeInUp}
                    className="mb-10 md:mb-14 text-center"
                >
                    <span className="block text-[var(--gaia-pink)] text-sm tracking-[0.3em] uppercase mb-3">
                        How we work
                    </span>
                    <h2 className="font-serif text-4xl md:text-6xl text-[var(--gaia-beige)] tracking-tight">
                        Nuestro Proceso
                    </h2>
                </motion.div>

                {/* Steps */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="relative max-w-4xl mx-auto"
                >
                    {/* Vertical line */}
                    <div className="absolute left-[1.35rem] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--gaia-pink)]/0 via-[var(--gaia-pink)]/20 to-[var(--gaia-pink)]/0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className={cn(
                                "relative flex items-start gap-6 md:gap-12 group",
                                index !== steps.length - 1 ? "mb-10" : "",
                                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            )}
                        >
                            {/* Content */}
                            <div className={cn(
                                "flex-1 pl-12 md:pl-0",
                                index % 2 === 0 ? "md:text-right" : "md:text-left"
                            )}>
                                <span className="font-sans text-[var(--gaia-pink)]/40 text-xs tracking-[0.3em] uppercase">
                                    Paso {step.number}
                                </span>
                                <h3 className="font-serif text-xl md:text-2xl text-[var(--gaia-beige)] mt-1 mb-1.5">
                                    {step.title}
                                </h3>
                                <p className="font-sans text-[var(--gaia-beige)]/55 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {/* Center dot */}
                            <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-1 flex items-center justify-center">
                                <span className="block w-3 h-3 rounded-full border border-[var(--gaia-pink)]/40 group-hover:border-[var(--gaia-pink)] group-hover:bg-[var(--gaia-pink)]/20 transition-all duration-500" />
                            </div>

                            {/* Spacer for alternating layout */}
                            <div className="hidden md:block flex-1" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
