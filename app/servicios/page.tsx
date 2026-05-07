'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Navigation } from '@/components/ui/Navigation';
import { Services } from '@/components/sections/Services';
import { Footer } from '@/components/sections/Footer';

export default function ServiciosPage() {
    return (
        <main className="bg-[var(--gaia-burgundy)] min-h-screen overflow-x-hidden w-full">
            <Navigation />
            <div className="bg-[var(--gaia-burgundy)]">
                <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-32">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-[var(--gaia-pink)] hover:text-[var(--gaia-beige)] transition-colors duration-300 text-sm tracking-widest uppercase"
                    >
                        <ArrowLeft size={16} />
                        Home
                    </Link>
                </div>
                <Services />
            </div>
            <Footer />
        </main>
    );
}
