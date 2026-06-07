'use client';

import { motion } from 'motion/react';
import { fadeInUp } from '@/lib/animations';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/sections/Footer';

export default function Portfolio() {
    return (
        <main className="bg-[var(--gaia-burgundy)] min-h-screen overflow-x-hidden w-full">
            <Navigation />
            <section id="portfolio" className="relative bg-[var(--gaia-burgundy)] pt-24 md:pt-32 pb-16 md:pb-32 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-6 md:mb-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-[var(--gaia-pink)] hover:text-[var(--gaia-beige)] transition-colors duration-300 text-xs tracking-widest uppercase mb-6"
                    >
                        <ArrowLeft size={14} />
                        Home
                    </Link>
                </div>
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mb-12 md:mb-24 text-center"
                >
                    <span className="block text-[var(--gaia-pink)] text-sm tracking-[0.3em] uppercase mb-4">
                        Our Work
                    </span>
                    <h2 className="font-serif text-5xl md:text-7xl text-[var(--gaia-beige)] tracking-tight">
                        Portfolio
                    </h2>
                </motion.div>

                {/* Gateway Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                    {/* Contenidos Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/portfolio/contenidos" className="group block relative aspect-[4/3] md:aspect-[16/9] overflow-hidden border border-[var(--gaia-pink)]/20 bg-[var(--gaia-pink)]/5">
                            <Image
                                src="/portfolio-content.jpg"
                                alt="Contenidos"
                                fill
                                sizes="(max-width: 640px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-30"
                            />
                            <div className="absolute inset-0 bg-[var(--gaia-burgundy)]/40 group-hover:bg-[var(--gaia-burgundy)]/20 transition-colors duration-500" />

                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 md:p-6">
                                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--gaia-beige)] mb-3 group-hover:scale-110 transition-transform duration-700">
                                    Contenidos
                                </h3>
                                <p className="font-sans text-[var(--gaia-pink)] text-xs tracking-widest uppercase mb-6 opacity-80">
                                    Fotos • Reels • Campañas
                                </p>

                                <div className="flex items-center gap-2 text-[var(--gaia-beige)] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    <span className="text-xs uppercase tracking-widest">Ver Proyectos</span>
                                    <ArrowRight size={14} />
                                </div>
                            </div>

                            <div className="absolute inset-3 border border-[var(--gaia-pink)]/30 scale-95 group-hover:scale-100 transition-transform duration-500" />
                        </Link>
                    </motion.div>

                    {/* Web Designs Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <Link href="/portfolio/disenos-web" className="group block relative aspect-[4/3] md:aspect-[16/9] overflow-hidden border border-[var(--gaia-pink)]/20 bg-[var(--gaia-pink)]/5">
                            <Image
                                src="/portfolio-web-design.jpg"
                                alt="Diseños Web"
                                fill
                                sizes="(max-width: 640px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-30"
                            />
                            <div className="absolute inset-0 bg-[var(--gaia-burgundy)]/40 group-hover:bg-[var(--gaia-burgundy)]/20 transition-colors duration-500" />

                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 md:p-6">
                                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--gaia-beige)] mb-3 group-hover:scale-110 transition-transform duration-700">
                                    Diseños Web
                                </h3>
                                <p className="font-sans text-[var(--gaia-pink)] text-xs tracking-widest uppercase mb-6 opacity-80">
                                    E-commerce • Landing Pages • Corporate
                                </p>

                                <div className="flex items-center gap-2 text-[var(--gaia-beige)] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    <span className="text-xs uppercase tracking-widest">Ver Proyectos</span>
                                    <ArrowRight size={14} />
                                </div>
                            </div>

                            <div className="absolute inset-3 border border-[var(--gaia-pink)]/30 scale-95 group-hover:scale-100 transition-transform duration-500" />
                        </Link>
                    </motion.div>

                    {/* Branding Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="sm:col-span-2 max-w-lg mx-auto w-full"
                    >
                        <Link href="/portfolio/branding" className="group block relative aspect-[4/3] md:aspect-[16/9] overflow-hidden border border-[var(--gaia-pink)]/20 bg-[var(--gaia-pink)]/5">
                            <Image
                                src="/portfolio-branding.jpg"
                                alt="Branding"
                                fill
                                sizes="(max-width: 640px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-30"
                            />      
                            
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--gaia-pink)]/20 to-[var(--gaia-burgundy)]" />
                            <div className="absolute inset-0 bg-[var(--gaia-burgundy)]/40 group-hover:bg-[var(--gaia-burgundy)]/20 transition-colors duration-500" />

                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 md:p-6">
                                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--gaia-beige)] mb-3 group-hover:scale-110 transition-transform duration-700">
                                    Branding
                                </h3>
                                <p className="font-sans text-[var(--gaia-pink)] text-xs tracking-widest uppercase mb-6 opacity-80">
                                    Identidad Visual • Paletas • Mockups
                                </p>

                                <div className="flex items-center gap-2 text-[var(--gaia-beige)] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    <span className="text-xs uppercase tracking-widest">Ver Proyectos</span>
                                    <ArrowRight size={14} />
                                </div>
                            </div>

                            <div className="absolute inset-3 border border-[var(--gaia-pink)]/30 scale-95 group-hover:scale-100 transition-transform duration-500" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
            <Footer />
        </main>
    );
}
