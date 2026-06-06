'use client';

import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/sections/Footer';

const posts = [
    {
        id: 'como-elegir-identidad-visual',
        title: 'Cómo elegir la identidad visual perfecta para tu marca',
        excerpt: 'Guía práctica para definir los elementos visuales que comunicarán la esencia de tu negocio y conectarán con tu audiencia ideal.',
        category: 'Branding',
        date: 'May 5, 2026',
        readTime: '5 min',
        image: '/blog-placeholder-1.jpg',
    },
    {
        id: 'tendencias-marketing-digital-2026',
        title: 'Tendencias de marketing digital que dominarán 2026',
        excerpt: 'Las estrategias y herramientas que están marcando el rumbo del marketing digital este año. Descubrí qué funciona y cómo aplicarlo.',
        category: 'Marketing',
        date: 'Apr 28, 2026',
        readTime: '7 min',
        image: '/blog-placeholder-2.jpg',
    },
    {
        id: 'importancia-diseno-web-ux',
        title: 'La importancia del diseño web y la experiencia de usuario',
        excerpt: 'Un buen diseño web no solo se ve bien, sino que convierte. Conocé por qué la UX es clave para el éxito de tu negocio online.',
        category: 'Web',
        date: 'Apr 15, 2026',
        readTime: '6 min',
        image: '/blog-placeholder-3.jpg',
    },
];

export default function BlogPage() {
    return (
        <main className="bg-[var(--gaia-burgundy)] min-h-screen overflow-x-hidden w-full">
            <Navigation />
            <div className="bg-[var(--gaia-burgundy)]">
                <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-32">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-[var(--gaia-pink)] hover:text-[var(--gaia-beige)] transition-colors duration-300 text-xs tracking-widest uppercase mb-6"
                    >
                        <ArrowLeft size={14} />
                        Home
                    </Link>
                </div>

                <section className="relative py-16 md:py-32 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 md:mb-24">
                        <span className="block text-[var(--gaia-pink)] text-sm tracking-[0.3em] uppercase mb-4">
                            Insights
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl text-[var(--gaia-beige)] tracking-tight">
                            Blog
                        </h1>
                        <p className="font-sans text-[var(--gaia-beige)]/60 text-sm md:text-base max-w-xl mx-auto mt-6 leading-relaxed">
                            Ideas, tendencias y guías para potenciar tu marca en el mundo digital.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {posts.map((post) => (
                            <article
                                key={post.id}
                                className="group border border-[var(--gaia-pink)]/20 bg-[var(--gaia-pink)]/5 hover:bg-[var(--gaia-pink)]/10 transition-all duration-500"
                            >
                                <div className="aspect-[16/10] relative overflow-hidden bg-[var(--gaia-pink)]/10">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--gaia-pink)]/10 to-transparent" />
                                    <div className="absolute top-4 left-4 font-sans text-[10px] tracking-[0.2em] uppercase text-[var(--gaia-pink)] border border-[var(--gaia-pink)]/30 px-3 py-1">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="p-6 md:p-8">
                                    <div className="flex items-center gap-4 font-sans text-[11px] text-[var(--gaia-beige)]/40 uppercase tracking-widest mb-4">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar size={12} />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Clock size={12} />
                                            {post.readTime}
                                        </span>
                                    </div>

                                    <h2 className="font-serif text-xl md:text-2xl text-[var(--gaia-beige)] mb-4 group-hover:text-[var(--gaia-pink)] transition-colors duration-300 leading-tight">
                                        {post.title}
                                    </h2>

                                    <p className="font-sans text-sm text-[var(--gaia-beige)]/60 leading-relaxed mb-6">
                                        {post.excerpt}
                                    </p>

                                    <span className="inline-flex items-center gap-2 text-[var(--gaia-pink)] text-xs tracking-widest uppercase group-hover:gap-4 transition-all duration-300">
                                        Leer más
                                        <ArrowLeft size={14} className="rotate-180" />
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <p className="font-sans text-[var(--gaia-beige)]/40 text-sm tracking-widest uppercase">
                            Más artículos próximamente.
                        </p>
                    </div>
                </div>
            </section>
            </div>
            <Footer />
        </main>
    );
}
