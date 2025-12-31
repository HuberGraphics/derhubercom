'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Zap } from 'lucide-react';
import { servicesData } from '../data/services';

const ServiceCard: React.FC<{ service: any; index: number }> = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-full">
      <Link
        href={`/leistungen/${service.slug}`}
        className="block h-full group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="glass-card rounded-lg p-8 h-full flex flex-col transition-base hover:border-brand-400/30 relative overflow-hidden shadow-sm hover:shadow-md">
          {/* Icon container */}
          <div className="relative mb-6">
            <div className={`w-16 h-16 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 transition-base ${isHovered ? 'scale-105' : ''}`}>
              {service.icon}
            </div>
            {/* Number indicator */}
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-lg bg-white border border-brand-400/20 flex items-center justify-center">
              <span className="text-xs font-semibold text-brand-600">0{index + 1}</span>
            </div>
          </div>

          {/* Service title */}
          <h3 className="font-semibold text-2xl text-slate-900 mb-4 group-hover:text-brand-600 transition-base">
            {service.title}
          </h3>

          {/* Service description */}
          <p className="text-slate-700 mb-6 leading-relaxed flex-grow">
            {service.shortDesc}
          </p>

          {/* Feature list */}
          <div className="mb-6 space-y-3">
            {service.features.slice(0, 3).map((point: string, idx: number) => (
              <div key={idx} className="flex items-center text-sm text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mr-3 flex-shrink-0"></div>
                <span className="text-slate-800">{point}</span>
              </div>
            ))}
          </div>

          {/* CTA link with arrow */}
          <div className="mt-auto pt-6 border-t border-brand-400/10">
            <span className="inline-flex items-center text-sm font-semibold text-brand-600 group-hover:text-brand-700 transition-colors duration-300">
              <span className="mr-2">Details ansehen</span>
              <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="relative py-32 bg-slate-50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-lines opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-400 rounded-full blur-[150px] opacity-5 pointer-events-none"></div>

      <div ref={sectionRef} className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''} text-center max-w-4xl mx-auto mb-20 overflow-visible`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card rounded-lg px-4 py-2 mb-8 border border-brand-400/20">
            <Zap size={16} className="text-brand-500" />
            <span className="text-brand-600 text-xs font-semibold tracking-wide uppercase">Leistungen</span>
          </div>

          {/* Heading */}
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-6 leading-snug overflow-visible">
            Alles aus einer Hand für Ihren
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600 pb-2 leading-tight">
              Online-Erfolg
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Von der ersten Idee bis zur fertigen, automatisierten Plattform.
            Ganzheitliche Lösungen, die funktionieren.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.slug}
              className={`reveal-on-scroll stagger-${Math.min(index + 1, 6)} ${isVisible ? 'is-visible' : ''}`}
            >
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-400/20 to-transparent"></div>
    </section>
  );
};

export default Services;
