import type { Metadata } from 'next';
import { ServiceLanding } from '@/components/sections/ServiceLanding';

export const metadata: Metadata = {
  title: 'Diseno Web y E-commerce | Gaia Studio',
  description: 'Creamos sitios web funcionales, esteticos y alineados con la identidad de tu marca. Landing pages, sitios institucionales y tiendas online completas.',
  openGraph: {
    title: 'Diseno Web y E-commerce | Gaia Studio',
    description: 'Creamos sitios web funcionales, esteticos y alineados con la identidad de tu marca.',
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  alternates: {
    canonical: '/diseno-web',
  },
};

export default function DisenoWebPage() {
  return (
    <ServiceLanding
      slug="diseno-web"
      breadcrumb="Servicios"
      title="Diseno Web"
      subtitle="Creamos sitios web funcionales, esteticos y alineados con la identidad de tu marca. Desde landing pages hasta tiendas online completas."
      description="Tu sitio web es la carta de presentacion digital de tu marca. No se trata solo de que se vea bien, sino de que comunique, ordene la informacion y guie al visitante hacia lo que necesita. Disenamos y desarrollamos sitios claros, funcionales y pensados para convertir —ya sea una landing page para un lanzamiento, un sitio institucional para ordenar tu presencia online, o un e-commerce completo para vender. Cada proyecto parte de entender tu negocio, tu publico y tus objetivos."
      includes={[
        'Landing Pages',
        'Sitios Institucionales',
        'E-commerce',
        'Optimizacion UX',
        'Web Management',
      ]}
      problems={[
        'Tu sitio actual no refleja la calidad de tu marca o quedo desactualizado.',
        'Necesitas un espacio propio en internet para centralizar informacion y contactos.',
        'Queres vender online pero no sabes por donde empezar con el e-commerce.',
        'Tu web no esta optimizada para que los visitantes encuentren lo que buscan facilmente.',
        'Necesitas mantenimiento continuo: actualizar productos, contenido y soporte tecnico.',
      ]}
      process={[
        {
          step: '01',
          title: 'Descubrimiento',
          description: 'Entendemos tu negocio, tus objetivos y las necesidades de tus usuarios para definir el alcance.',
        },
        {
          step: '02',
          title: 'Estrategia',
          description: 'Planificamos la arquitectura del sitio, la navegacion y los flujos de conversion.',
        },
        {
          step: '03',
          title: 'Diseno',
          description: 'Creamos la interfaz visual alineada a la identidad de tu marca, cuidando cada detalle.',
        },
        {
          step: '04',
          title: 'Desarrollo',
          description: 'Programamos el sitio con tecnologias modernas, asegurando rendimiento y responsividad.',
        },
        {
          step: '05',
          title: 'Lanzamiento y Soporte',
          description: 'Publicamos, verificamos que todo funcione y acompanamos con mantenimiento continuo.',
        },
      ]}
      results={[
        'Un sitio web que comunica profesionalismo y genera confianza en quienes lo visitan.',
        'Navegacion clara y experiencia de usuario pensada para facilitar la conversion.',
        'Una plataforma escalable que crece con tu negocio y se adapta a nuevas necesidades.',
        'Optimizacion tecnica para que el sitio cargue rapido y funcione bien en todos los dispositivos.',
        'Acompanamiento post-lanzamiento para mantener todo actualizado y funcionando.',
      ]}
    />
  );
}
