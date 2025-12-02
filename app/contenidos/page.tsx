'use client';

import { Navigation } from '@/components/ui/Navigation';
import { Contenidos } from '@/components/sections/Contenidos';
import { Footer } from '@/components/sections/Footer';

export default function ContenidosPage() {
    return (
        <main className="bg-[#500712] min-h-screen">
            <Navigation />
            <div className="pt-20"> {/* Add padding for fixed nav */}
                <Contenidos />
            </div>
            <Footer />
        </main>
    );
}
