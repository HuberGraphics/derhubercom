import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {

  return (
    <section id="home" className="relative bg-white text-slate-900 py-20 lg:py-32">
      {/* Simple, clean background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50 rounded-full blur-[80px] opacity-50 -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-50 rounded-full blur-[60px] opacity-50 translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Clean location badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-brand-200 rounded-full px-4 py-2 mb-8 shadow-subtle">
            <span className="w-2 h-2 rounded-full bg-brand-500"></span>
            <span className="text-brand-700 font-medium text-xs tracking-wide uppercase">Für Heidelberg & Rhein-Neckar-Kreis</span>
          </div>

          {/* Clear, professional headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight text-slate-900">
            <span className="block mb-2">Ihre neue Website:</span>
            <span className="block text-slate-900">sichtbar, klar,</span>
            <span className="block text-brand-500">effektiv.</span>
          </h1>

          {/* Clear value proposition */}
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            In 4 Wochen zur Website, die Besucher gezielt zu Kunden macht. Maßgeschneidert für Geschäftsführer & Entscheidungsträger.
          </p>

          {/* Professional CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-brand-400 hover:bg-brand-300 text-slate-950 px-8 py-4 rounded-xl font-semibold text-base transition-base shadow-brand-subtle hover:shadow-button-hover flex items-center justify-center group focus-ring"
            >
              Kostenloses Erstgespräch
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-base" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-slate-700 border border-slate-200 hover:border-slate-300 px-8 py-4 rounded-xl font-semibold text-base transition-base shadow-subtle hover:shadow-card hover-lift focus-ring"
            >
              Mehr erfahren
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-600">
            <div className="flex items-center">
              <CheckCircle2 size={16} className="text-brand-500 mr-2 flex-shrink-0" />
              <span>Lokale Expertise</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 size={16} className="text-brand-500 mr-2 flex-shrink-0" />
              <span>Schnelle Umsetzung</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 size={16} className="text-brand-500 mr-2 flex-shrink-0" />
              <span>Mobile-first</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;