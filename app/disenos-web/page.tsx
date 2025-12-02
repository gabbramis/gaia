'use client';

import { Navigation } from '@/components/ui/Navigation';
import { WebDesigns } from '@/components/sections/WebDesigns';
import { Footer } from '@/components/sections/Footer';

export default function WebDesignsPage() {
    return (
        <main className="bg-[#500712] min-h-screen">
            <Navigation />
            <div className="pt-20"> {/* Add padding for fixed nav */}
                <WebDesigns />
            </div>
            <Footer />
        </main>
    );
}
