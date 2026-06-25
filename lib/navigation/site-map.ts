export interface NavigationNode {
  href: string;
  label: string;
  parentHref?: string;
}

const navigationNodes: Record<string, NavigationNode> = {
  '/': { href: '/', label: 'Home' },
  '/nosotras': { href: '/nosotras', label: 'Nosotras', parentHref: '/' },
  '/servicios': { href: '/servicios', label: 'Servicios', parentHref: '/' },
  '/gestion-redes-sociales': {
    href: '/gestion-redes-sociales',
    label: 'Gestion de Redes Sociales',
    parentHref: '/servicios',
  },
  '/diseno-web': {
    href: '/diseno-web',
    label: 'Diseno Web',
    parentHref: '/servicios',
  },
  '/seo': { href: '/seo', label: 'SEO', parentHref: '/servicios' },
  '/branding': {
    href: '/branding',
    label: 'Branding',
    parentHref: '/servicios',
  },
  '/campanas-publicitarias': {
    href: '/campanas-publicitarias',
    label: 'Campanas Publicitarias',
    parentHref: '/servicios',
  },
  '/cobertura-de-eventos': {
    href: '/cobertura-de-eventos',
    label: 'Cobertura de Eventos',
    parentHref: '/servicios',
  },
  '/portfolio': { href: '/portfolio', label: 'Portfolio', parentHref: '/' },
  '/portfolio/contenidos': {
    href: '/portfolio/contenidos',
    label: 'Contenidos',
    parentHref: '/portfolio',
  },
  '/portfolio/disenos-web': {
    href: '/portfolio/disenos-web',
    label: 'Disenos Web',
    parentHref: '/portfolio',
  },
  '/portfolio/branding': {
    href: '/portfolio/branding',
    label: 'Branding',
    parentHref: '/portfolio',
  },
  '/blog': { href: '/blog', label: 'Blog', parentHref: '/' },
  '/recursos/como-funciona-el-seo': {
    href: '/recursos/como-funciona-el-seo',
    label: 'Como funciona el SEO',
    parentHref: '/seo',
  },
};

function normalizePathname(pathname: string) {
  if (!pathname) {
    return '/';
  }

  const cleanPath = pathname.split('#')[0]?.split('?')[0] ?? '/';

  if (cleanPath === '/') {
    return '/';
  }

  return cleanPath.replace(/\/+$/, '');
}

function resolveNode(pathname: string) {
  const normalizedPathname = normalizePathname(pathname);

  if (navigationNodes[normalizedPathname]) {
    return navigationNodes[normalizedPathname];
  }

  const segments = normalizedPathname.split('/').filter(Boolean);

  while (segments.length > 0) {
    const partialPath = `/${segments.join('/')}`;
    if (navigationNodes[partialPath]) {
      return navigationNodes[partialPath];
    }
    segments.pop();
  }

  return navigationNodes['/'];
}

export function getBreadcrumbItems(pathname: string) {
  const items: NavigationNode[] = [];
  let currentNode: NavigationNode | undefined = resolveNode(pathname);

  while (currentNode) {
    items.unshift(currentNode);
    currentNode = currentNode.parentHref
      ? navigationNodes[currentNode.parentHref]
      : undefined;
  }

  return items;
}

export function getParentNavigationItem(pathname: string) {
  const currentNode = resolveNode(pathname);

  if (!currentNode.parentHref) {
    return undefined;
  }

  return navigationNodes[currentNode.parentHref];
}
