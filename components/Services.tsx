import React, { useState } from 'react';
import { Link } from 'wouter';
import { ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/services';

const ServiceCard: React.FC<{ service: any; index: number }> = ({ service, index }) => {
  return (
    <div className="h-full">
      <Link href={`/leistungen/${service.slug}`} className="block h-full group">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 h-full flex flex-col hover:shadow-card-hover transition-base hover-lift">
          {/* Icon container */}
          <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-100 transition-base">
            {service.icon}
          </div>

          {/* Service title */}
          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            {service.title}
          </h3>

          {/* Service description */}
          <p className="text-slate-600 mb-6 leading-relaxed text-sm flex-grow">
            {service.shortDesc}
          </p>

          {/* Feature list */}
          <div className="mb-6">
            <ul className="space-y-2">
              {service.features.slice(0, 3).map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-sm text-slate-600"
                >
                  <span className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA link */}
          <div className="mt-auto">
            <span className="inline-flex items-center text-sm font-medium text-brand-600 group-hover:text-brand-700 transition-base">
              Mehr erfahren
              <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-base" />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-3 py-1 bg-brand-100 rounded-full mb-6">
            <span className="text-brand-700 font-semibold text-xs uppercase tracking-wide">Leistungen</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Alles aus einer Hand für Ihren Online-Erfolg
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Von der ersten Idee bis zur fertigen, automatisierten Plattform. Ich biete ganzheitliche Lösungen, die funktionieren.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;