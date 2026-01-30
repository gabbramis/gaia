'use client';

import { Navigation } from '@/components/ui/Navigation';
import { Hero } from '@/components/sections/Hero';
import { Process } from '@/components/sections/Process';
import { About } from '@/components/sections/About';
import { Portfolio } from '@/components/sections/Portfolio';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { Services } from '@/components/sections/Services';

export default function Home() {
  return (
    <main className="bg-[var(--gaia-burgundy)] min-h-screen overflow-x-hidden w-full">
      <Navigation />
      <Hero />
      <Services />
      <Process />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
