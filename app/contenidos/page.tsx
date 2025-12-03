'use client';

import { Navigation } from '@/components/ui/Navigation';
//import { Contenidos } from '@/components/sections/Contenidos';
import { FotosGallery } from '@/components/sections/portfolio/FotosGallery';
import { ReelsGallery } from '@/components/sections/portfolio/ReelsGallery';
//import { CampanasGallery } from '@/components/sections/portfolio/CampanasGallery';
import { Footer } from '@/components/sections/Footer';

export default function ContenidosPage() {
    return (
        <main className="bg-[#500712] min-h-screen scroll-smooth">
            <Navigation />
            <div className="pt-20"> {/* Add padding for fixed nav */}
                {/* Gateway Section */}
                {/*Contenidos*/}

                {/* Gallery Sections */}
                <FotosGallery />
                <ReelsGallery />
                {/*<CampanasGallery />*/}
            </div>
            <Footer />
        </main>
    );
}
