import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Navigation } from '@/components/ui/Navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Footer } from '@/components/sections/Footer';
import { ResourceHero } from '@/components/resources/ResourceHero';
import { ResourceGrid } from '@/components/resources/ResourceGrid';
import { sanityClient } from '@/sanity/lib/client';
import { resourcesQuery } from '@/sanity/lib/queries';
import type { Resource } from '@/lib/types/resource';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Recursos | GAIA Studio',
  description:
    'Guías, plantillas y herramientas prácticas para potenciar tu marketing, redes sociales y estrategia digital. Recursos gratuitos creados por GAIA Studio.',
  openGraph: {
    title: 'Recursos | GAIA Studio',
    description:
      'Guías, plantillas y herramientas prácticas para potenciar tu marketing, redes sociales y estrategia digital.',
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  alternates: {
    canonical: '/recursos',
  },
};

async function getResources(): Promise<Resource[]> {
  const resources = await sanityClient?.fetch<Resource[]>(resourcesQuery, {}, {
    next: { revalidate: 60 },
  });
  return resources || [];
}

async function ResourcesContent() {
  const resources = await getResources();
  return <ResourceGrid resources={resources} />;
}

export default function RecursosPage() {
  return (
    <main className="bg-[var(--gaia-burgundy)] min-h-screen overflow-x-hidden w-full">
      <Navigation />
      <section className="relative bg-[var(--gaia-burgundy)] pt-24 md:pt-32 pb-16 md:pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-8 flex items-start md:mb-10">
            <Breadcrumbs />
          </div>
          <ResourceHero />
          <Suspense fallback={<p className="py-16 text-center text-sm text-[var(--gaia-beige)]/60">Cargando recursos...</p>}>
            <ResourcesContent />
          </Suspense>
        </div>
      </section>
      <Footer />
    </main>
  );
}
