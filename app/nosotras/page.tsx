'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Navigation } from '@/components/ui/Navigation';
import { About } from '@/components/sections/About';
import { Footer } from '@/components/sections/Footer';

export default function NosotrasPage() {
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
                <About />
            </div>
            <Footer />
        </main>
    );
}
