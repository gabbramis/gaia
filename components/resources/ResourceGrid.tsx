'use client';

import { useState } from 'react';
import { ResourceCard } from './ResourceCard';
import { ResourceDownloadModal } from './ResourceDownloadModal';
import type { Resource } from '@/lib/types/resource';

interface ResourceGridProps {
  resources: Resource[];
}

export function ResourceGrid({ resources }: ResourceGridProps) {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  const handleModalSuccess = () => {
    setSelectedResource(null);
    window.location.reload();
  };

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="flex flex-col gap-3">
        {resources.map((resource) => (
          <ResourceCard
            key={resource._id}
            resource={resource}
            onClick={() => setSelectedResource(resource)}
          />
        ))}
      </div>

      {resources.length === 0 && (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-[var(--gaia-pink)]/20 mb-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-[var(--gaia-pink)]/40"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
              <path d="M14 2v6h6" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
              <path d="M10 9H8" />
            </svg>
          </div>
          <p className="font-serif text-2xl text-[var(--gaia-beige)]/50 mb-2">
            Próximamente
          </p>
          <p className="font-sans text-sm text-[var(--gaia-beige)]/30 max-w-md mx-auto">
            Estamos preparando recursos valiosos para tu negocio. Volvé pronto para descubrirlos.
          </p>
        </div>
      )}

      {selectedResource && (
        <ResourceDownloadModal
          resource={{
            slug: selectedResource.slug,
            title: selectedResource.title,
            shortDescription: selectedResource.shortDescription,
            requiresEmail: selectedResource.requiresEmail,
            resourceUrl: selectedResource.resourceUrl || null,
            canvaUrl: selectedResource.canvaUrl || null,
            downloadableFileUrl: selectedResource.downloadableFileUrl || null,
          }}
          onSuccess={handleModalSuccess}
          onClose={() => setSelectedResource(null)}
        />
      )}
    </div>
  );
}
