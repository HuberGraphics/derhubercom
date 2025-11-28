import React, { useState } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { useLocation, Link } from 'wouter';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Helper to determine if we are on homepage
  const isHome = location === '/';

  // Function to get correct href
  const getHref = (id: string) => {
    return isHome ? `#${id}` : `/#${id}`;
  };

  const navLinks = [
    { name: 'Home', href: isHome ? '#home' : '/' },
    { name: 'Referenzen', href: getHref('portfolio') },
    { name: 'Über mich', href: getHref('about') },
    { name: 'Preise', href: getHref('pricing') },
    { name: 'Kontakt', href: getHref('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-subtle">
      {/* Top Bar */}
      <div className="bg-slate-50 text-slate-600 py-2 text-sm border-b border-slate-100">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:015129515056" className="flex items-center gap-2 text-slate-600 hover:text-brand-600 transition-base">
              <Phone size={14} className="text-brand-500" />
              <span className="hidden sm:inline">0151 2951 5056</span>
              <span className="sm:hidden">Anrufen</span>
            </a>
            <a href="mailto:christian@derhuber.com" className="hidden sm:flex items-center gap-2 text-slate-600 hover:text-brand-600 transition-base">
              <Mail size={14} className="text-brand-500" />
              christian@derhuber.com
            </a>
          </div>
          <span className="hidden md:inline text-slate-500 text-sm">Ihr Partner in Heidelberg & Rhein-Neckar</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-slate-900 tracking-tight hover:text-brand-600 transition-base">
          Der <span className="text-brand-500">Huber</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Services Dropdown */}
          <div className="relative group">
            <a
              href={getHref('services')}
              className="flex items-center gap-1 text-slate-600 hover:text-brand-600 font-medium text-sm transition-base py-2"
            >
              Leistungen
              <ChevronDown size={14} className="text-slate-400 group-hover:text-brand-600 transition-base" />
            </a>
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 w-56 bg-white border border-slate-200 rounded-xl shadow-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50">
              <div className="py-2">
                <Link href="/leistungen/webdesign" className="block px-4 py-3 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600 transition-base">Webdesign</Link>
                <Link href="/leistungen/webentwicklung" className="block px-4 py-3 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600 transition-base">Webentwicklung</Link>
                <Link href="/leistungen/ux-design" className="block px-4 py-3 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600 transition-base">UX-Design</Link>
                <Link href="/leistungen/online-marketing" className="block px-4 py-3 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600 transition-base">Online-Marketing</Link>
                <Link href="/leistungen/automatisierung" className="block px-4 py-3 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600 transition-base">Automatisierung</Link>
                <Link href="/leistungen/ki-loesungen" className="block px-4 py-3 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600 transition-base">KI-Lösungen</Link>
              </div>
            </div>
          </div>

          {navLinks.slice(1).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 hover:text-brand-600 font-medium text-sm transition-base"
            >
              {link.name}
            </a>
          ))}

          <a
            href={getHref('contact')}
            className="bg-brand-400 hover:bg-brand-300 text-slate-950 px-6 py-2.5 rounded-lg font-semibold text-sm transition-base shadow-brand-subtle hover:shadow-button-hover focus-ring"
          >
            Erstgespräch
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-600 hover:text-brand-600 transition-base p-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 absolute w-full shadow-card">
          <nav className="flex flex-col p-6 space-y-1">
            <a
              href={isHome ? '#home' : '/'}
              className="flex items-center justify-between py-3 px-4 text-slate-700 font-medium hover:bg-slate-50 hover:text-brand-600 rounded-lg transition-base"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>

            {/* Mobile Services Section */}
            <div className="py-2">
              <div className="px-4 py-2 text-slate-400 text-xs uppercase font-bold tracking-wide">Leistungen</div>
              <div className="space-y-1 pl-4">
                <Link
                  href="/leistungen/webdesign"
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-slate-700 hover:bg-slate-50 hover:text-brand-600 rounded-lg transition-base"
                >
                  Webdesign
                </Link>
                <Link
                  href="/leistungen/webentwicklung"
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-slate-700 hover:bg-slate-50 hover:text-brand-600 rounded-lg transition-base"
                >
                  Webentwicklung
                </Link>
                <Link
                  href="/leistungen/ux-design"
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-slate-700 hover:bg-slate-50 hover:text-brand-600 rounded-lg transition-base"
                >
                  UX-Design
                </Link>
                <Link
                  href="/leistungen/online-marketing"
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-slate-700 hover:bg-slate-50 hover:text-brand-600 rounded-lg transition-base"
                >
                  Online-Marketing
                </Link>
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center justify-between py-3 px-4 text-slate-700 font-medium hover:bg-slate-50 hover:text-brand-600 rounded-lg transition-base"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <a
              href={getHref('contact')}
              className="bg-brand-400 hover:bg-brand-300 text-slate-950 px-6 py-3 rounded-xl font-semibold text-center mt-4 transition-base shadow-brand-subtle hover:shadow-button-hover focus-ring"
              onClick={() => setIsOpen(false)}
            >
              Kostenloses Erstgespräch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;