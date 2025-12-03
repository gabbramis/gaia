'use client';

import { motion } from 'motion/react';
import { fadeInUp } from '@/lib/animations';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function Portfolio() {
    return (
        <section id="portfolio" className="relative bg-[#500712] py-16 md:py-32 px-6 md:px-12 border-t border-[#ED9ABC]/10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mb-12 md:mb-24 text-center"
                >
                    <span className="block text-[#ED9ABC] text-sm tracking-[0.3em] uppercase mb-4">
                        Our Work
                    </span>
                    <h2 className="font-serif text-5xl md:text-7xl text-[#F1DFD1] tracking-tight">
                        Portfolio
                    </h2>
                </motion.div>

                {/* Gateway Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    {/* Contenidos Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/contenidos" className="group block relative aspect-[4/3] md:aspect-[16/9] overflow-hidden border border-[#ED9ABC]/20 bg-[#ED9ABC]/5">
                            <Image
                                src="/portfolio-content.jpg"
                                alt="Contenidos"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-30"
                            />
                            <div className="absolute inset-0 bg-[#500712]/40 group-hover:bg-[#500712]/20 transition-colors duration-500" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 md:p-6 lg:p-8">
                                <h3 className="font-serif text-4xl md:text-6xl text-[#F1DFD1] mb-4 group-hover:scale-110 transition-transform duration-700">
                                    Contenidos
                                </h3>
                                <p className="font-sans text-[#ED9ABC] text-sm tracking-widest uppercase mb-8 opacity-80">
                                    Fotos • Reels • Campañas
                                </p>

                                <div className="flex items-center gap-2 text-[#F1DFD1] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    <span className="text-sm uppercase tracking-widest">Ver Galería</span>
                                    <ArrowRight size={16} />
                                </div>
                            </div>

                            {/* Decorative Borders */}
                            <div className="absolute inset-4 border border-[#ED9ABC]/30 scale-95 group-hover:scale-100 transition-transform duration-500" />
                        </Link>
                    </motion.div>

                    {/* Web Designs Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Link href="/disenos-web" className="group block relative aspect-[4/3] md:aspect-[16/9] overflow-hidden border border-[#ED9ABC]/20 bg-[#ED9ABC]/5">
                            <Image
                                src="/portfolio-web-design.jpg"
                                alt="Diseños Web"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-30"
                            />
                            <div className="absolute inset-0 bg-[#500712]/40 group-hover:bg-[#500712]/20 transition-colors duration-500" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 md:p-6 lg:p-8">
                                <h3 className="font-serif text-4xl md:text-6xl text-[#F1DFD1] mb-4 group-hover:scale-110 transition-transform duration-700">
                                    Diseños Web
                                </h3>
                                <p className="font-sans text-[#ED9ABC] text-sm tracking-widest uppercase mb-8 opacity-80">
                                    E-commerce • Landing Pages • Corporate
                                </p>

                                <div className="flex items-center gap-2 text-[#F1DFD1] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    <span className="text-sm uppercase tracking-widest">Ver Proyectos</span>
                                    <ArrowRight size={16} />
                                </div>
                            </div>

                            {/* Decorative Borders */}
                            <div className="absolute inset-4 border border-[#ED9ABC]/30 scale-95 group-hover:scale-100 transition-transform duration-500" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
