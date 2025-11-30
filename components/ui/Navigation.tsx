'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { navLinks } from '@/lib/constants';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(80, 7, 18, 0)', 'rgba(80, 7, 18, 0.95)']
  );

  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(237, 154, 188, 0)', 'rgba(237, 154, 188, 0.2)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      style={{ backgroundColor, borderBottomColor: borderColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${isScrolled ? 'backdrop-blur-md py-4' : 'py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"

            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="font-serif text-2xl md:text-3xl text-[#F1DFD1] hover:text-[#ED9ABC] transition-colors duration-300 tracking-tight"
          >
            <img src="logo-pink.png" className="h-12 w-auto" alt="Gaia Logo" />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="font-sans text-xs text-[#F1DFD1]/80 hover:text-[#ED9ABC] transition-colors duration-300 tracking-[0.15em] uppercase"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#F1DFD1] hover:text-[#ED9ABC] transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-6 pb-6 border-t border-[#ED9ABC]/20 pt-6"
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="font-serif text-2xl text-[#F1DFD1] hover:text-[#ED9ABC] transition-colors duration-300 block text-center italic"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
