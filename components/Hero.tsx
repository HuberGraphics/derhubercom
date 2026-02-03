'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsLoading(true);
    // Reset loading after navigation
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <section id="home" className="relative min-h-screen bg-white">
      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="min-h-screen flex flex-col justify-center max-w-4xl mx-auto py-16 md:py-24">

          {/* === LOCATION BADGE === */}
          <div className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''} stagger-1 mb-8`}>
            <div className="inline-flex items-center gap-2 glass-card rounded-lg px-4 py-2 border border-brand-400/20 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-400"></span>
              </span>
              <span className="text-brand-600 text-sm font-semibold uppercase tracking-wide">Heidelberg & Rhein-Neckar</span>
            </div>
          </div>

          {/* === HEADLINE === */}
          <div className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''} stagger-2 mb-6`}>
            <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight text-slate-900">
              Webdesign Heidelberg: Ihre neue Website, sichtbar & effektiv.
            </h1>
          </div>

          {/* === VALUE PROPOSITION === */}
          <div className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''} stagger-3 mb-8 max-w-2xl`}>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              In <span className="text-brand-600 font-semibold">4 Wochen</span> zur Website, die Besucher zu Kunden macht.
              Professionelle <strong>Webentwicklung</strong> mit React & Next.js.
            </p>
          </div>

          {/* === LOCAL SEO TEXT === */}
          <div className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''} stagger-3 mb-12 max-w-2xl`}>
            <p className="text-base text-slate-600 leading-relaxed">
              Als Ihr <strong>Webdesigner in Heidelberg</strong> entwickle ich moderne Websites für kleine Unternehmen
              im <strong>Rhein-Neckar-Kreis</strong> – von Mannheim bis Weinheim. Persönlich, transparent, ab 599€.
            </p>
          </div>

          {/* === CTA BUTTONS === */}
          <div className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''} stagger-4 flex flex-col sm:flex-row gap-4 mb-16`}>
            <a
              href="#contact"
              onClick={handleCTAClick}
              className={`group relative bg-brand-400 hover:bg-brand-500 text-white px-8 py-4 rounded-lg font-semibold text-base transition-base shadow-md hover:shadow-lg flex items-center justify-center ${isLoading ? 'btn-loading' : ''}`}
            >
              {!isLoading && (
                <>
                  <span className="flex items-center">
                    Erstgespräch buchen
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-base" />
                  </span>
                </>
              )}
            </a>

            <a
              href="#services"
              className="group glass-card hover:bg-white text-slate-700 border border-brand-400/20 hover:border-brand-400/40 px-8 py-4 rounded-lg font-semibold text-base transition-base hover-lift flex items-center justify-center shadow-sm"
            >
              Leistungen entdecken
            </a>
          </div>

          {/* === TRUST INDICATORS === */}
          <div className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''} stagger-5`}>
            <div className="glass-card rounded-lg p-8 border border-brand-400/10 shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: CheckCircle2, text: 'Lokale Expertise' },
                  { icon: CheckCircle2, text: 'Schnelle Umsetzung' },
                  { icon: CheckCircle2, text: 'Mobile-first Design' },
                  { icon: CheckCircle2, text: '4 Wochen Live' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-brand-500" />
                    </div>
                    <span className="text-slate-800 font-medium text-sm md:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
