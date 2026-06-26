'use client';

import { useState, useEffect } from 'react';
import { navLinks } from '@/lib/constants';
import { Menu, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on scroll
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleScroll = () => {
      setIsMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href === '/') {
      router.push('/');
      return;
    }

    if (href.startsWith('#')) {
      if (pathname !== '/') {
        router.push(`/${href}`);
        return;
      }
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(`/${href}`);
    }
  };

  const getNavHref = (href: string) => {
    if (href === '/') return '/';
    if (href.startsWith('#')) {
      return pathname === '/' ? href : `/${href}`;
    }

    return `/${href}`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${isScrolled ? 'backdrop-blur-md py-2 md:py-4' : 'py-4 md:py-6'
        } ${isScrolled ? 'bg-[rgba(80,7,18,0.95)] border-b-[rgba(237,154,188,0.2)]' : 'bg-[rgba(80,7,18,0)] border-b-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/');
            }}
            className="font-serif text-2xl md:text-3xl text-[var(--gaia-beige)] hover:text-[var(--gaia-pink)] transition-colors duration-300 tracking-tight relative z-50"
          >
            <Image
              src="/logo-pink.png"
              alt="Gaia Logo"
              width={56}
              height={56}
              className="h-10 sm:h-12 md:h-14 w-auto"
              style={{ width: 'auto' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={getNavHref(link.href)}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }
                  }}
                  className={`font-sans text-xs transition-colors duration-300 tracking-[0.15em] uppercase ${pathname === `/${link.href}` ? 'text-[var(--gaia-pink)]' : 'text-[var(--gaia-beige)]/80 hover:text-[var(--gaia-pink)]'}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[var(--gaia-beige)] hover:text-[var(--gaia-pink)] transition-colors p-2 relative z-50"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--gaia-burgundy)]/95 backdrop-blur-xl border-b border-[var(--gaia-pink)]/20 overflow-hidden shadow-2xl z-40">
              <ul className="flex flex-col py-6 sm:py-8 px-4 sm:px-6 gap-4 sm:gap-6">
                {navLinks.map((link) => (
                  <li key={link.href} className="text-center">
                    <Link
                      href={getNavHref(link.href)}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          handleNavClick(link.href);
                        } else {
                          setIsMobileMenuOpen(false);
                        }
                      }}
                      className="font-serif text-xl sm:text-2xl text-[var(--gaia-beige)] hover:text-[var(--gaia-pink)] transition-colors duration-300 block py-2"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>
    </nav>
  );
}
