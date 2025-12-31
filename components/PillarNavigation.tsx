'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { servicesData, ServiceData } from '../data/services';

interface PillarNavigationProps {
  currentServiceSlug: string;
}

interface NavItem {
  type: 'section' | 'service';
  title: string;
  slug: string;
  subsections?: { title: string; id: string }[];
}

const PillarNavigation: React.FC<PillarNavigationProps> = ({ currentServiceSlug }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [openMenus, setOpenMenus] = useState<Set<string>>(new Set());

  const currentService = servicesData.find(s => s.slug === currentServiceSlug);
  const clusterInfo = currentService?.clusterInfo;

  // Build navigation items
  const buildNavItems = (): NavItem[] => {
    const items: NavItem[] = [
      {
        type: 'section',
        title: 'Überblick',
        slug: 'overview'
      },
      {
        type: 'section',
        title: 'Vorteile',
        slug: 'benefits'
      },
      {
        type: 'section',
        title: 'Projekte',
        slug: 'portfolio'
      },
      {
        type: 'section',
        title: 'Expertise',
        slug: 'expertise'
      },
      {
        type: 'section',
        title: 'Prozess',
        slug: 'process'
      },
      {
        type: 'section',
        title: 'Technische Specs',
        slug: 'technical-specs'
      },
      {
        type: 'section',
        title: 'FAQ',
        slug: 'faq'
      }
    ];

    // Add related services if cluster info exists
    if (clusterInfo?.relatedServices && clusterInfo.relatedServices.length > 0) {
      const subsections = clusterInfo.relatedServices
        .map(slug => {
          const service = servicesData.find(s => s.slug === slug);
          return service ? { title: service.title, id: slug } : null;
        })
        .filter(Boolean) as { title: string; id: string }[];

      items.push({
        type: 'service',
        title: 'Verwandte Services',
        slug: 'related-services',
        subsections
      });
    }

    return items;
  };

  const navItems = buildNavItems();

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[id]');
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = (slug: string) => {
    const newOpenMenus = new Set(openMenus);
    if (newOpenMenus.has(slug)) {
      newOpenMenus.delete(slug);
    } else {
      newOpenMenus.add(slug);
    }
    setOpenMenus(newOpenMenus);
  };

  // Don't render if no cluster info (not a pillar service yet)
  if (!clusterInfo) {
    return null;
  }

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-brand-500 text-white p-4 rounded-full shadow-xl hover:bg-brand-400 transition-colors"
        aria-label="Toggle navigation"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed top-28 right-0 lg:right-8 w-72 bg-white border-l border-gray-200 shadow-xl
        transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
        h-[calc(100vh-7rem)] overflow-y-auto
      `}>
        <div className="p-6">
          {/* Current Service Badge */}
          <div className="mb-6">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Aktuelle Seite
            </span>
            <h3 className="font-bold text-slate-900 mt-1">
              {currentService?.title}
            </h3>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            {navItems.map((item) => (
              <div key={item.slug}>
                {/* Section Link */}
                {item.type === 'section' ? (
                  <a
                    href={`#${item.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(item.slug);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        setIsOpen(false); // Close mobile menu
                      }
                    }}
                    className={`
                      flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors
                      ${activeSection === item.slug
                        ? 'bg-brand-50 text-brand-700'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }
                    `}
                  >
                    <div className={`
                      w-1.5 h-1.5 rounded-full mr-3
                      ${activeSection === item.slug ? 'bg-brand-500' : 'bg-slate-300'}
                    `}></div>
                    {item.title}
                  </a>
                ) : (
                  /* Service Menu with Subsections */
                  <div>
                    <button
                      onClick={() => toggleMenu(item.slug)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                    >
                      <span className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-3"></div>
                        {item.title}
                      </span>
                      {openMenus.has(item.slug) ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>

                    {openMenus.has(item.slug) && item.subsections && (
                      <div className="ml-6 mt-1 space-y-1">
                        {item.subsections.map((subsection) => (
                          <Link
                            key={subsection.id}
                            href={`/leistungen/${subsection.id}`}
                            className="block px-3 py-1.5 rounded text-xs text-slate-500 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subsection.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Cluster Info */}
          {clusterInfo && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Topic Cluster
              </span>
              <p className="text-xs text-slate-500 mt-2">
                Teil des Semantischen SEO-Clusters für <strong>{clusterInfo.primaryTopic}</strong>
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {clusterInfo.secondaryTopics.slice(0, 3).map((topic, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default PillarNavigation;
