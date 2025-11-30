'use client';

import { navLinks, socialLinks, contactInfo } from '@/lib/constants';
import { Instagram, Linkedin, Dribbble } from 'lucide-react';

const iconMap = {
  Instagram,
  Linkedin,
  Dribbble,
};

export function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#500712] text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <img src="logo-pink.png" className="h-16 w-auto" alt="Gaia Logo" />
            <p className="font-sans text-base text-white/80 leading-relaxed">
              Un estudio creativo que eleva marcas con intención, estética y visión.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-sans text-sm uppercase tracking-luxury text-[#FFB8D5] mb-4">
              Navegación
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="font-sans text-base text-white/80 hover:text-[#FFB8D5] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-sans text-sm uppercase tracking-luxury text-[#FFB8D5] mb-4">
              Contacto
            </h4>
            <div className="space-y-3 mb-6">
              <p className="font-sans text-base text-white/80">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-[#FFB8D5] transition-colors duration-300"
                >
                  {contactInfo.email}
                </a>
              </p>
              <p className="font-sans text-base text-white/80">
                {contactInfo.phone}
              </p>
              <p className="font-sans text-base text-white/80">
                {contactInfo.address}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#FFB8D5] hover:scale-110 transition-all duration-300"
                    aria-label={social.platform}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/20 text-center">
          <p className="font-sans text-sm text-white/60">
            © {new Date().getFullYear()} Gaia. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
