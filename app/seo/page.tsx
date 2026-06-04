import type { Metadata } from 'next';
import { ServiceLanding } from '@/components/sections/ServiceLanding';

export const metadata: Metadata = {
  title: 'SEO y Posicionamiento | Gaia Studio',
  description: 'Optimizamos tu presencia digital para que tu marca sea facilmente encontrada en buscadores. SEO tecnico, SEO local y optimizacion para Google.',
  openGraph: {
    title: 'SEO y Posicionamiento | Gaia Studio',
    description: 'Optimizamos tu presencia digital para que tu marca sea facilmente encontrada en buscadores.',
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  alternates: {
    canonical: '/seo',
  },
};

export default function SeoPage() {
  return (
    <ServiceLanding
      slug="seo"
      breadcrumb="Servicios"
      title="SEO y Posicionamiento"
      subtitle="Optimizamos tu presencia digital para que tu marca sea facilmente encontrada en buscadores, aumentando tu visibilidad y trafico organico."
      description="Aparecer en los primeros resultados de Google no es suerte: es estrategia. El SEO trabaja sobre la estructura, el contenido y la autoridad de tu sitio para que los buscadores entiendan de que se trata tu marca y la muestren a quien realmente la busca. No prometemos resultados overnight —el posicionamiento organico es un trabajo constante— pero si un camino claro para ganar visibilidad sostenida y atraer trafico cualificado sin depender exclusivamente de pauta publicitaria."
      includes={[
        'SEO Tecnico',
        'SEO Local',
        'Optimizacion para Buscadores',
      ]}
      problems={[
        'Tu sitio web existe pero nadie lo encuentra cuando busca lo que ofreces.',
        'Dependes casi exclusivamente de redes sociales o publicidad para generar trafico.',
        'Tu competencia aparece primero en Google y vos quedas relegado.',
        'Necesitas atraer clientes de tu zona geografica y no estas posicionado localmente.',
        'Tu sitio tiene problemas tecnicos que dificultan su indexacion y rendimiento en buscadores.',
      ]}
      process={[
        {
          step: '01',
          title: 'Auditoria',
          description: 'Analizamos el estado actual de tu sitio: tecnica, contenido, velocidad y presencia en buscadores.',
        },
        {
          step: '02',
          title: 'Estrategia',
          description: 'Definimos las palabras clave, los ejes de contenido y las acciones prioritarias de optimizacion.',
        },
        {
          step: '03',
          title: 'Optimizacion Tecnica',
          description: 'Corregimos errores de estructura, velocidad, indexacion y configuracion tecnica del sitio.',
        },
        {
          step: '04',
          title: 'Contenido',
          description: 'Optimizamos textos, titulos, meta descripciones y generamos contenido estrategico para posicionar.',
        },
        {
          step: '05',
          title: 'Seguimiento',
          description: 'Monitoreamos posiciones, trafico y ajustes para mantener y mejorar el rendimiento organico.',
        },
      ]}
      results={[
        'Mayor visibilidad en buscadores para las terminales que importan a tu negocio.',
        'Trafico organico cualificado: personas que ya buscan lo que ofreces.',
        'Reduccion de la dependencia de publicidad paga para generar visitas y contactos.',
        'Posicionamiento local fortalecido para captar clientes de tu zona.',
        'Un sitio mejor estructurado y optimizado que beneficia tanto al SEO como a la experiencia del usuario.',
      ]}
    />
  );
}
