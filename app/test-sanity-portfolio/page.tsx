import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/ui/Navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Footer } from '@/components/sections/Footer';
import { sanityClient } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { portfolioWebProjectsQuery } from '@/sanity/lib/queries';

export const revalidate = 60;

type SanityImage = {
  alt?: string;
  asset?: {
    _ref: string;
    _type: 'reference';
  };
};

type PortfolioWebProject = {
  _id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: string;
  coverImage?: SanityImage;
  url?: string;
  technologies?: string[];
  year: number;
  featured?: boolean;
  publishedAt: string;
  order: number;
  slug: string;
};

async function getProjects() {
  return sanityClient.fetch<PortfolioWebProject[]>(portfolioWebProjectsQuery);
}

export default async function TestSanityPortfolioPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[var(--gaia-burgundy)]">
      <Navigation />

      <section className="px-6 pb-16 pt-24 md:px-12 md:pb-24 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 md:mb-10">
            <Breadcrumbs />
          </div>

          <div className="mb-12 max-w-3xl md:mb-16">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--gaia-pink)]">
              Sanity Test
            </p>
            <h1 className="font-serif text-4xl tracking-tight text-[var(--gaia-beige)] md:text-6xl">
              Portfolio desde Sanity
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--gaia-beige)]/70 md:text-base">
              Esta ruta muestra los proyectos cargados en Sanity sin reemplazar todavia el contenido hardcodeado del portfolio principal.
            </p>
          </div>

          {projects.length === 0 ? (
            <div className="border border-[var(--gaia-pink)]/20 bg-[var(--gaia-pink)]/5 p-8 text-[var(--gaia-beige)]/80">
              No hay proyectos en Sanity todavia.
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => {
                const imageUrl = project.coverImage?.asset
                  ? urlFor(project.coverImage).width(1200).height(900).fit('crop').url()
                  : null;

                return (
                  <article
                    key={project._id}
                    className="overflow-hidden border border-[var(--gaia-pink)]/20 bg-[var(--gaia-pink)]/5"
                  >
                    <div className="relative aspect-[4/3] bg-[var(--gaia-burgundy)]/60">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={project.coverImage?.alt || project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center px-6 text-center text-sm uppercase tracking-[0.2em] text-[var(--gaia-beige)]/40">
                          Sin imagen
                        </div>
                      )}
                    </div>

                    <div className="space-y-4 p-6 text-[var(--gaia-beige)]">
                      <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.24em] text-[var(--gaia-pink)]/80">
                        <span>{project.category}</span>
                        <span>{project.year}</span>
                      </div>

                      <div>
                        <h2 className="font-serif text-3xl leading-tight">{project.title}</h2>
                        {project.subtitle ? (
                          <p className="mt-2 text-sm text-[var(--gaia-beige)]/70">{project.subtitle}</p>
                        ) : null}
                      </div>

                      <p className="line-clamp-4 text-sm leading-7 text-[var(--gaia-beige)]/75">
                        {project.description}
                      </p>

                      {project.technologies?.length ? (
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="border border-[var(--gaia-pink)]/20 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--gaia-beige)]/70"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      ) : null}

                      <div className="flex flex-wrap gap-4 pt-2 text-sm text-[var(--gaia-beige)]/85">
                        <span>Slug: /portfolio/{project.slug}</span>
                        {project.featured ? <span>Destacado</span> : null}
                      </div>

                      {project.url ? (
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex text-sm uppercase tracking-[0.22em] text-[var(--gaia-pink)] transition-opacity hover:opacity-70"
                        >
                          Ver proyecto
                        </Link>
                      ) : null}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
