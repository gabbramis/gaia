'use client';

import { motion } from 'motion/react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

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
            className="relative bg-[#500712] py-16 md:py-24 px-6 md:px-12 border-t border-[#ED9ABC]/10"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={fadeInUp}
                    className="mb-16 md:mb-24 text-center"
                >
                    <span className="block text-[#ED9ABC] text-sm tracking-[0.3em] uppercase mb-4">
                        How we work
                    </span>
                    <h2 className="font-serif text-4xl md:text-6xl text-[#F1DFD1] tracking-tight">
                        Nuestro Proceso
                    </h2>
                </motion.div>

                {/* Steps Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="relative flex flex-col items-center text-center group"
                        >
                            {/* Number */}
                            <div className="mb-6 relative">
                                <span className="font-serif text-6xl md:text-7xl text-[#ED9ABC]/20 group-hover:text-[#ED9ABC]/40 transition-colors duration-500">
                                    {step.number}
                                </span>
                            </div>

                            {/* Content */}
                            <h3 className="font-serif text-xl md:text-2xl text-[#F1DFD1] mb-4 min-h-[3.5rem] flex items-center justify-center">
                                {step.title}
                            </h3>
                            <p className="font-sans text-[#F1DFD1]/70 text-sm leading-relaxed max-w-xs mx-auto">
                                {step.description}
                            </p>

                            {/* Connecting Line (Desktop only, except last item) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-[2.5rem] left-1/2 w-full h-[1px] bg-gradient-to-r from-[#ED9ABC]/0 via-[#ED9ABC]/20 to-[#ED9ABC]/0 -z-10 translate-x-[50%]" />
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
