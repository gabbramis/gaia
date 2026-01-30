'use client';

import { motion } from 'motion/react';
import { fadeInUp } from '@/lib/animations';
import Image from 'next/image';
import Link from 'next/link';

const contentCategories = [
    {
        id: 'fotos',
        title: 'Fotos',
        href: '#fotos',
        image: '/images/portfolio/1.jpg',
        description: 'Fotografía Editorial'
    },
    {
        id: 'reels',
        title: 'Reels',
        href: '#reels',
        image: '/images/portfolio/2.jpg',
        description: 'Contenido Vertical'
    },
    {
        id: 'campanas',
        title: 'Campañas',
        href: '#campanas',
        image: '/images/portfolio/3.jpg',
        description: 'Producción Integral'
    }
];

export function Contenidos() {
    return (
        <section id="contenidos" className="relative bg-[var(--gaia-burgundy)] py-16 md:py-32 px-6 md:px-12 border-t border-[var(--gaia-pink)]/10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mb-12 md:mb-24 text-center"
                >
                    <span className="block text-[var(--gaia-pink)] text-sm tracking-[0.3em] uppercase mb-4">
                        Visual Storytelling
                    </span>
                    <h2 className="font-serif text-5xl md:text-7xl text-[var(--gaia-beige)] tracking-tight">
                        Contenidos
                    </h2>
                </motion.div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contentCategories.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <Link href={item.href} className="group relative aspect-[3/4] overflow-hidden cursor-pointer block">
                                {/* Image */}
                                <div className="absolute inset-0 bg-[var(--gaia-pink)]/5">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                                    />
                                </div>

                                {/* Overlay Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 lg:p-8 bg-gradient-to-t from-[var(--gaia-burgundy)] via-transparent to-transparent">
                                    <span className="font-sans text-xs text-[var(--gaia-pink)] uppercase tracking-[0.2em] mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        {item.description}
                                    </span>
                                    <h3 className="font-serif text-3xl md:text-4xl text-[var(--gaia-beige)] group-hover:text-[var(--gaia-pink)] transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Border Frame */}
                                <div className="absolute inset-4 border border-[var(--gaia-pink)]/20 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
