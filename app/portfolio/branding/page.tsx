import { Navigation } from '@/components/ui/Navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Branding } from '@/components/sections/portfolio/Branding';
import { Footer } from '@/components/sections/Footer';
import { hasSanityConfig } from '@/sanity/env';
import { sanityClient } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { brandingProjectsQuery } from '@/sanity/lib/queries';
import { brandingProjects } from '@/lib/data/portfolio';

export const revalidate = 60;

type SanityImage = {
    alt?: string;
    asset?: {
        _ref: string;
        _type: 'reference';
    };
};

type BrandingProject = {
    _id: string;
    client: string;
    description: string;
    palette?: Array<{
        name?: string;
        hex: string;
    }>;
    typography?: Array<{
        name: string;
        type: string;
    }>;
    mockups?: SanityImage[];
    tags?: string[];
};

async function getSanityBrandingProjects() {
    if (!hasSanityConfig || !sanityClient) {
        return [];
    }

    const projects = await sanityClient.fetch<BrandingProject[]>(brandingProjectsQuery);

    return projects.map((project) => ({
        id: project._id,
        client: project.client,
        description: project.description,
        palette: project.palette || [],
        typography: project.typography || [],
        mockups: (project.mockups || []).map((mockup, index) => ({
            src: mockup.asset
                ? urlFor(mockup).width(index === 0 ? 1200 : 1200).fit('max').url()
                : '/portfolio-branding.jpg',
            alt: mockup.alt || `${project.client} mockup ${index + 1}`,
        })),
        tags: project.tags,
    }));
}

export default async function BrandingPage() {
    const sanityProjects = await getSanityBrandingProjects();
    const projects = sanityProjects.length > 0 ? sanityProjects : brandingProjects.map((project) => ({
        id: project.id,
        client: project.client,
        description: project.description,
        palette: project.palette,
        typography: project.typography,
        mockups: project.mockups,
        tags: project.tags,
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
                <Branding projects={projects} />
            </div>
            <Footer />
        </main>
    );
}
