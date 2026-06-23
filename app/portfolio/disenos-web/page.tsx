import { Navigation } from '@/components/ui/Navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { WebDesigns } from '@/components/sections/WebDesigns';
import { Footer } from '@/components/sections/Footer';
import { sanityClient } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { portfolioWebProjectsQuery } from '@/sanity/lib/queries';
import { webDesigns } from '@/lib/data/portfolio';

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
    coverImage?: SanityImage;
    url?: string;
};

async function getSanityProjects() {
    const projects = await sanityClient.fetch<PortfolioWebProject[]>(portfolioWebProjectsQuery);

    return projects.map((project) => ({
        _id: project._id,
        id: project._id,
        title: project.title,
        subtitle: project.subtitle,
        url: project.url,
        image: {
            src: project.coverImage?.asset
                ? urlFor(project.coverImage).width(1600).height(1000).fit('crop').url()
                : '/portfolio-web-design.jpg',
            alt: project.coverImage?.alt || project.title,
        },
    }));
}

export default async function WebDesignsPage() {
    const sanityProjects = await getSanityProjects();
    const projects = sanityProjects.length > 0 ? sanityProjects : webDesigns.map((project) => ({
        id: project.id,
        title: project.title,
        subtitle: project.subtitle,
        url: project.url,
        image: {
            src: project.images.cover.src,
            alt: project.images.cover.alt,
        },
    }));

    return (
        <main className="bg-[var(--gaia-burgundy)] min-h-screen overflow-x-hidden w-full">
            <Navigation />
            <div className="bg-[var(--gaia-burgundy)]">
                <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-32">
                    <div className="mb-6 flex items-start md:mb-8">
                        <Breadcrumbs />
                    </div>
                </div>
                <WebDesigns projects={projects} />
            </div>
            <Footer />
        </main>
    );
}
