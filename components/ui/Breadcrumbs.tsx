'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getBreadcrumbItems } from '@/lib/navigation/site-map';

interface BreadcrumbsProps {
  pathname?: string;
}

export function Breadcrumbs({ pathname }: BreadcrumbsProps) {
  const currentPathname = usePathname();
  const items = getBreadcrumbItems(pathname ?? currentPathname);

  if (items.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-sans text-[11px] tracking-[0.14em] text-[var(--gaia-beige)]/28 md:text-xs">
        {items.map((item, index) => {
          const isCurrentPage = index === items.length - 1;

          return (
            <li key={item.href} className="flex items-center gap-2">
              {isCurrentPage ? (
                <span aria-current="page" className="text-[var(--gaia-beige)]/58">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-[var(--gaia-pink)]/72 transition-colors duration-300 hover:text-[var(--gaia-beige)]/72"
                >
                  {item.label}
                </Link>
              )}
              {!isCurrentPage && <span aria-hidden="true" className="text-[var(--gaia-beige)]/18">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
