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
    title: "Marketing Digital",
    description: "Estrategias integrales para alcanzar tus objetivos de negocio y conectar con tu audiencia",
    icon: "TrendingUp",
  },
  {
    id: 2,
    title: "Publicidad",
    description: "Campañas creativas que generan impacto y resultados medibles",
    icon: "Megaphone",
  },
  {
    id: 3,
    title: "Branding",
    description: "Identidades visuales memorables que transmiten la esencia de tu marca",
    icon: "Palette",
  },
  {
    id: 4,
    title: "Desarrollo Web",
    description: "Sitios web modernos, funcionales y optimizados para conversión",
    icon: "Code2",
  },
  {
    id: 5,
    title: "Redes Sociales",
    description: "Gestión integral de tu presencia digital y comunidad online",
    icon: "Share2",
  },
  {
    id: 6,
    title: "Contenido Creativo",
    description: "Contenido visual y escrito que cuenta historias y conecta emocionalmente",
    icon: "Sparkles",
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
  { platform: "Instagram", url: "https://instagram.com/gaia", icon: "Instagram" },
  { platform: "LinkedIn", url: "https://linkedin.com/company/gaia", icon: "Linkedin" },
  { platform: "Behance", url: "https://behance.net/gaia", icon: "Dribbble" },
] as const;

// Contact Information
export const contactInfo = {
  email: "hola@gaia.com",
  phone: "+54 9 11 1234-5678",
  address: "Buenos Aires, Argentina",
} as const;
