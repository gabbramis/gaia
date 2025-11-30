// Brand Colors
export const colors = {
  black: "#000000",
  burgundy: "#500712",
  mediumPink: "#ED9ABC",
  lightPink: "#FFB8D5",
  beige: "#F1DFD1",
  white: "#FFFFFF",
} as const;

// Z-Index Hierarchy
export const zIndex = {
  navigation: 50,
  modal: 40,
  overlappingImages: 10,
  decorativeElements: 5,
  baseContent: 1,
  backgroundElements: -1,
} as const;

// Services Data
export const services = [
  {
    id: 1,
    title: "Social Media",
    description: "Diseñamos estrategias de contenido integrales, producimos publicaciones impactantes, gestionamos campañas y analizamos métricas para potenciar tu presencia digital.",
    icon: "Share2",
  },
  {
    id: 2,
    title: "Community Management",
    description: "Gestionamos tus redes con publicación constante, interacción activa con tu comunidad y atención personalizada a comentarios y mensajes directos, manteniendo tu marca siempre viva y cercana.",
    icon: "Users",
  },
  {
    id: 3,
    title: "Producción y Edición",
    description: "Creamos piezas visuales de alto impacto: fotografía, video y diseño gráfico, con edición profesional y postproducción que refleje la identidad de tu marca.",
    icon: "Camera",
  },
  {
    id: 4,
    title: "Cobertura de Eventos",
    description: "Capturamos la esencia de tus eventos mediante contenido audiovisual dinámico y creativo, para que cada momento relevante llegue a tu audiencia.",
    icon: "Video",
  },
  {
    id: 5,
    title: "Diseño Web y E-commerce",
    description: "Desarrollamos sitios web funcionales y atractivos, tiendas online y blogs optimizados, diseñados para ofrecer una experiencia única y potenciar tus ventas.",
    icon: "Laptop",
  },
  {
    id: 6,
    title: "SEO y Posicionamiento",
    description: "Optimizamos tu presencia digital para que tu marca sea fácilmente encontrada en Google, aumentando visibilidad y alcance orgánico.",
    icon: "Search",
  },
] as const;

// Portfolio Items
export const portfolioItems = [
  {
    id: 1,
    title: "Identidad de Marca Premium",
    category: "Branding",
    height: "short", // 400px
    featured: false,
    description: "Desarrollo de identidad visual completa para marca de lujo",
  },
  {
    id: 2,
    title: "Plataforma E-commerce",
    category: "Desarrollo Web",
    height: "medium", // 600px
    featured: false,
    description: "Tienda online con experiencia de usuario optimizada",
  },
  {
    id: 3,
    title: "Campaña Social Media",
    category: "Redes Sociales",
    height: "tall", // 800px
    featured: false,
    description: "Estrategia de contenido multiplataforma con alto engagement",
  },
  {
    id: 4,
    title: "Packaging de Lujo",
    category: "Branding",
    height: "medium", // 600px (double-width)
    featured: true,
    description: "Diseño de packaging premium para línea de productos exclusivos",
  },
  {
    id: 5,
    title: "Campaña Publicitaria 360°",
    category: "Publicidad",
    height: "medium", // 600px
    featured: false,
    description: "Campaña integral con presencia digital y offline",
  },
  {
    id: 6,
    title: "Dashboard Interactivo",
    category: "Desarrollo Web",
    height: "short", // 400px
    featured: false,
    description: "Aplicación web con visualización de datos en tiempo real",
  },
  {
    id: 7,
    title: "Contenido Editorial",
    category: "Contenido Creativo",
    height: "medium", // 600px
    featured: false,
    description: "Serie de contenido fotográfico y storytelling de marca",
  },
  {
    id: 8,
    title: "Manual de Marca",
    category: "Branding",
    height: "tall", // 800px
    featured: false,
    description: "Guía completa de identidad visual y aplicaciones",
  },
] as const;

// Navigation Links
export const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contacto", label: "Contacto" },
] as const;

// Social Media Links
export const socialLinks = [
  { platform: "Instagram", url: "https://www.instagram.com/gaia_studio?igsh=MWszOGh5ZnN0MWxpag==", icon: "Instagram" },
  { platform: "LinkedIn", url: "https://linkedin.com/company/gaia", icon: "Linkedin" },
  { platform: "Behance", url: "https://behance.net/gaia", icon: "Dribbble" },
] as const;

// Contact Information
export const contactInfo = {
  email: "gaiacontacto.studio@gmail.com",
  phone: "+598 91 392 302 +598 95 967 816",
  address: "Montevideo, Uruguay",
} as const;
