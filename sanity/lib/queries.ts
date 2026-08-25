import { groq } from 'next-sanity';

export const portfolioWebProjectsQuery = groq`
  *[_type == "portfolioWebProject"] | order(order asc, publishedAt desc) {
    _id,
    title,
    subtitle,
    description,
    category,
    coverImage,
    url,
    technologies,
    year,
    featured,
    publishedAt,
    order,
    "slug": slug.current
  }
`;

export const featuredPortfolioWebProjectsQuery = groq`
  *[_type == "portfolioWebProject" && featured == true] | order(order asc, publishedAt desc) {
    _id,
    title,
    subtitle,
    description,
    category,
    coverImage,
    url,
    technologies,
    year,
    featured,
    publishedAt,
    order,
    "slug": slug.current
  }
`;

export const portfolioWebProjectBySlugQuery = groq`
  *[_type == "portfolioWebProject" && slug.current == $slug][0] {
    _id,
    title,
    subtitle,
    description,
    category,
    coverImage,
    url,
    technologies,
    year,
    featured,
    publishedAt,
    order,
    "slug": slug.current
  }
`;

export const brandingProjectsQuery = groq`
  *[_type == "brandingProject"] | order(order asc, publishedAt desc) {
    _id,
    client,
    description,
    category,
    logo,
    palette,
    typography,
    mockups,
    tags,
    year,
    featured,
    order,
    publishedAt,
    "slug": slug.current
  }
`;

export const contentNichesQuery = groq`
  *[_type == "contentNiche" && active == true] | order(order asc) {
    _id,
    title,
    order,
    active,
    "slug": slug.current
  }
`;

export const contentItemsQuery = groq`
  *[_type == "contentItem"] | order(featured desc, publishedAt desc) {
    _id,
    client->{
      _id,
      name,
      "slug": slug.current
    },
    contentType,
    image,
    youtubeUrl,
    aspectRatio,
    featured,
    publishedAt,
    niche->{
      _id,
      title,
      "slug": slug.current
    }
  }
`;

const resourceFields = groq`
  _id,
  title,
  shortDescription,
  type,
  resourceUrl,
  canvaUrl,
  "downloadableFileUrl": downloadableFile.asset->url,
  requiresEmail,
  publishedAt,
  "slug": slug.current
`;

export const resourcesQuery = groq`
  *[_type == "resource"] | order(publishedAt desc) {
    ${resourceFields}
  }
`;

