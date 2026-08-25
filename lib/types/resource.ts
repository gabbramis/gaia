export interface Resource {
  _id: string;
  title: string;
  slug: string;
  shortDescription?: string;
  type: 'pdf' | 'ebook' | 'template' | 'canva' | 'checklist' | 'guide' | 'other';
  resourceUrl?: string;
  canvaUrl?: string;
  downloadableFileUrl?: string;
  requiresEmail: boolean;
  publishedAt: string;
}

export const resourceTypeLabels: Record<Resource['type'], string> = {
  pdf: 'PDF',
  ebook: 'Ebook',
  template: 'Template',
  canva: 'Canva',
  checklist: 'Checklist',
  guide: 'Guía',
  other: 'Recurso',
};
