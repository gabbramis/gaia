'use client';

import { resourceTypeLabels } from '@/lib/types/resource';
import type { Resource } from '@/lib/types/resource';

interface ResourceCardProps {
  resource: Resource;
  onClick: () => void;
}

export function ResourceCard({ resource, onClick }: ResourceCardProps) {
  const typeLabel = resourceTypeLabels[resource.type] || resource.type;

  return (
    <button
      onClick={onClick}
      className="group flex w-full items-center justify-between gap-4 rounded-sm border border-[var(--gaia-pink)]/15 bg-[var(--gaia-burgundy)] px-5 py-4 text-left transition-all duration-300 hover:border-[var(--gaia-pink)]/40 hover:shadow-[0_8px_30px_rgba(237,154,188,0.1)]"
    >
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-[var(--gaia-pink)]/50">
          {typeLabel}
        </span>
        <h3 className="font-serif text-lg sm:text-xl leading-tight text-[var(--gaia-beige)] truncate group-hover:text-[var(--gaia-pink)] transition-colors duration-300">
          {resource.title}
        </h3>
      </div>

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--gaia-pink)]/20 text-[var(--gaia-pink)]/60 transition-all duration-300 group-hover:border-[var(--gaia-pink)] group-hover:text-[var(--gaia-pink)] group-hover:bg-[var(--gaia-pink)]/10">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="transition-transform duration-300 group-hover:translate-y-0.5"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </div>
    </button>
  );
}
