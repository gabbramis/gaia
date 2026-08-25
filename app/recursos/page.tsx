import type { Metadata } from 'next';
import { Navigation } from '@/components/ui/Navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Footer } from '@/components/sections/Footer';
import { ResourceHero } from '@/components/resources/ResourceHero';
import { ResourceGrid } from '@/components/resources/ResourceGrid';
import { sanityClient } from '@/sanity/lib/client';
import { resourcesQuery } from '@/sanity/lib/queries';
import type { Resource } from '@/lib/types/resource';

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
  const resources = await sanityClient?.fetch<Resource[]>(resourcesQuery);
  return resources || [];
}

export default async function RecursosPage() {
  const resources = await getResources();

  return (
    <main className="bg-[var(--gaia-burgundy)] min-h-screen overflow-x-hidden w-full">
      <Navigation />
      <section className="relative bg-[var(--gaia-burgundy)] pt-24 md:pt-32 pb-16 md:pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-8 flex items-start md:mb-10">
            <Breadcrumbs />
          </div>
          <ResourceHero />
          <ResourceGrid resources={resources} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
