'use client';

import { motion } from 'motion/react';
import { fadeInUp } from '@/lib/animations';
import Image from 'next/image';
import { brandingProjects } from '@/lib/data/portfolio';

export function Branding() {
    return (
        <section id="branding" className="relative bg-[var(--gaia-burgundy)] py-16 md:py-32 px-6 md:px-12 border-t border-[var(--gaia-pink)]/10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mb-12 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
                >
                    <div>
                        <span className="block text-[var(--gaia-pink)] text-sm tracking-[0.3em] uppercase mb-4">
                            Visual Identity
                        </span>
                        <h2 className="font-serif text-5xl md:text-7xl text-[var(--gaia-beige)] tracking-tight">
                            Branding
                        </h2>
                    </div>
                    <p className="font-sans text-[var(--gaia-beige)]/60 max-w-md text-sm md:text-base leading-relaxed tracking-wide">
                        Identidades visuales que comunican la esencia de cada marca.
                    </p>
                </motion.div>

                <div className="space-y-24 md:space-y-32">
                    {brandingProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                                {/* Left: Info */}
                                <div className="lg:col-span-5 space-y-8">
                                    <div>
                                        <span className="text-[var(--gaia-pink)] text-xs tracking-[0.2em] uppercase">
                                            Proyecto {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <h3 className="font-serif text-4xl md:text-5xl text-[var(--gaia-beige)] mt-2 tracking-tight">
                                            {project.client}
                                        </h3>
                                        <p className="font-sans text-[var(--gaia-beige)]/60 text-sm leading-relaxed mt-4">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Color Palette */}
                                    <div>
                                        <h4 className="font-sans text-[var(--gaia-pink)] text-xs tracking-[0.2em] uppercase mb-4">
                                            Paleta de Colores
                                        </h4>
                                        <div className="flex flex-wrap gap-3">
                                            {project.palette.map((color) => (
                                                <div key={color.hex} className="flex items-center gap-2">
                                                    <div
                                                        className="w-8 h-8 border border-white/10"
                                                        style={{ backgroundColor: color.hex }}
                                                    />
                                                    <span className="font-sans text-xs text-[var(--gaia-beige)]/50">
                                                        {color.hex}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Typography */}
                                    <div>
                                        <h4 className="font-sans text-[var(--gaia-pink)] text-xs tracking-[0.2em] uppercase mb-4">
                                            Tipografía
                                        </h4>
                                        <div className="flex flex-wrap gap-4">
                                            {project.typography.map((font) => (
                                                <span
                                                    key={font.name}
                                                    className={`font-sans text-sm text-[var(--gaia-beige)]/70 tracking-wide ${
                                                        font.type === 'serif' ? 'font-serif' : ''
                                                    }`}
                                                >
                                                    {font.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    {project.tags && (
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="font-sans text-[10px] tracking-[0.15em] uppercase text-[var(--gaia-pink)]/50 border border-[var(--gaia-pink)]/20 px-3 py-1"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Right: Mockups */}
                                <div className="lg:col-span-6 flex justify-center">
                                    <div className="grid grid-cols-2 gap-2 max-w-md">
                                        {project.mockups.map((mockup, i) => (
                                            <div
                                                key={i}
                                                className={`relative overflow-hidden border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/5 ${
                                                    i === 0 ? 'col-span-2' : ''
                                                }`}
                                            >
                                                {i === 0 ? (
                                                    <div className="aspect-square relative">
                                                        <Image
                                                            src={mockup.src}
                                                            alt={mockup.alt}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                ) : (
                                                    <Image
                                                        src={mockup.src}
                                                        alt={mockup.alt}
                                                        width={500}
                                                        height={313}
                                                        className="w-full h-auto"
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
