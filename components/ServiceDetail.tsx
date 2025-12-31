'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { servicesData } from '../data/services';
import { CheckCircle2, Phone, Calendar, Sparkles, Shield, Rocket, ArrowRight, Star, MapPin, Award, Clock } from 'lucide-react';

import PortfolioSection from './PortfolioSection';
import ExpertiseSection from './ExpertiseSection';
import ProcessSection from './ProcessSection';
import TechnicalSpecsSection from './TechnicalSpecsSection';
import EnhancedFAQSection from './EnhancedFAQSection';
import RelatedTopics from './RelatedTopics';

interface ServiceDetailProps {
  slug: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ slug }) => {
  const service = servicesData.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    setTimeout(() => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach(el => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 text-center">
        <h1 className="text-2xl font-display font-bold text-slate-900">Dienstleistung nicht gefunden</h1>
        <Link href="/" className="text-brand-500 underline mt-4 inline-block">Zurück zur Startseite</Link>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {/* =============================================== */}
      {/* 1. HERO - Attention + Promise */}
      {/* =============================================== */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-brand-500/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-brand-400/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center text-sm text-slate-400 mb-12 reveal-on-scroll">
            <Link href="/" className="hover:text-brand-400 transition-colors duration-300">Startseite</Link>
            <span className="mx-3 text-slate-600">/</span>
            <Link href="/#services" className="hover:text-brand-400 transition-colors duration-300">Leistungen</Link>
            <span className="mx-3 text-slate-600">/</span>
            <span className="text-brand-400 font-medium">{service.title}</span>
          </nav>

          <div className="max-w-5xl mx-auto text-center">
            {/* Icon */}
            <div className="reveal-on-scroll stagger-1 mb-8">
              <div className="relative inline-flex">
                <div className="absolute inset-0 bg-brand-500/20 blur-2xl rounded-3xl animate-pulse"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-brand-400 to-brand-600 text-slate-950 rounded-2xl flex items-center justify-center shadow-2xl border border-brand-400/30">
                  {service.icon}
                </div>
              </div>
            </div>

            {/* Main title */}
            <h1 className="reveal-on-scroll stagger-2 font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              {service.title}
            </h1>

            {/* Promise/Value prop */}
            <p className="reveal-on-scroll stagger-3 text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10">
              {service.shortDesc}
            </p>

            {/* Quick CTA */}
            <div className="reveal-on-scroll stagger-4 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-3 bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <Calendar size={20} />
                Kostenloses Erstgespräch
                <ArrowRight size={20} />
              </a>
              <a
                href="#wert"
                className="inline-flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 border border-slate-700"
              >
                Mehr erfahren
              </a>
            </div>

            {/* Trust badges */}
            <div className="reveal-on-scroll stagger-5 flex flex-wrap justify-center gap-4 mt-12">
              <span className="px-4 py-2 bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg text-slate-300 text-sm">
                📍 Heidelberg & Rhein-Neckar
              </span>
              <span className="px-4 py-2 bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg text-slate-300 text-sm">
                ⚡ 24-48h Antwortzeit
              </span>
              <span className="px-4 py-2 bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg text-slate-300 text-sm">
                ✅ 100% Zufriedenheit
              </span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowRight size={20} className="rotate-90" />
        </div>
      </section>

      {/* =============================================== */}
      {/* 2. VALUE PROPOSITION - Features + Benefits Merged */}
      {/* =============================================== */}
      <section id="wert" className="py-32 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="reveal-on-scroll text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500/10 border border-brand-500/30 rounded-full text-brand-600 text-sm font-bold uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                Was Sie bekommen
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Alles aus einer Hand
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                {service.fullDesc}
              </p>
            </div>

            {/* Combined Features + Benefits */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Features */}
              {service.features.map((feature, idx) => (
                <div
                  key={`feature-${idx}`}
                  className="reveal-on-scroll group relative bg-slate-50 hover:bg-gradient-to-br hover:from-brand-50 hover:to-transparent rounded-lg p-8 border border-slate-200 hover:border-brand-500/30 transition-base"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-500/10 rounded-lg flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-base">
                      <CheckCircle2 className="text-brand-500 group-hover:text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{feature}</h3>
                      <p className="text-slate-600 text-sm">
                        Professionelle Umsetzung mit höchsten Qualitätsstandards für Ihren Erfolg.
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Benefits */}
              {service.benefits.map((benefit, idx) => (
                <div
                  key={`benefit-${idx}`}
                  className="reveal-on-scroll group relative bg-slate-50 hover:bg-gradient-to-br hover:from-brand-50 hover:to-transparent rounded-lg p-8 border border-slate-200 hover:border-brand-500/30 transition-base"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-500/10 rounded-lg flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-base">
                      <Shield className="text-brand-500 group-hover:text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{benefit}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sub-CTA */}
            <div className="reveal-on-scroll text-center mt-12">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold text-lg transition-colors"
              >
                Jetzt Projekt besprechen
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================== */}
      {/* 3. SOCIAL PROOF - Portfolio */}
      {/* =============================================== */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="reveal-on-scroll text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500/10 border border-brand-500/30 rounded-full text-brand-600 text-sm font-bold uppercase tracking-widest mb-6">
                <Star size={16} />
                Vertrauen & Erfahrung
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Meine Projekte
              </h2>
            </div>

            {/* Portfolio Projects */}
            <div id="portfolio">
              <PortfolioSection serviceSlug={service.slug} serviceTitle={service.title} />
            </div>
          </div>
        </div>
      </section>

      {/* =============================================== */}
      {/* 4. PROCESS - How we work */}
      {/* =============================================== */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="reveal-on-scroll text-center mb-20">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500/10 border border-brand-500/30 rounded-full text-brand-600 text-sm font-bold uppercase tracking-widest mb-6">
                <Clock size={16} />
                Der Prozess
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                So arbeiten wir zusammen
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Transparent, strukturiert und effizient – von der ersten Idee bis zur finalen Umsetzung
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500 via-brand-500/50 to-transparent"></div>

              <div className="space-y-12">
                {service.process.map((step, idx) => (
                  <div
                    key={idx}
                    className="reveal-on-scroll relative flex flex-col md:flex-row gap-8"
                  >
                    {/* Number indicator */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-brand-500 text-slate-950 rounded-2xl flex items-center justify-center font-display font-bold text-2xl shadow-xl shadow-brand-500/30 border-4 border-white z-10">
                      {idx + 1}
                    </div>

                    {/* Empty spacer for alternating layout */}
                    {idx % 2 === 1 && <div className="hidden md:block md:w-1/2"></div>}

                    {/* Content */}
                    <div className={`ml-24 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <div className="group bg-white hover:bg-slate-50 border border-slate-200 hover:border-brand-500/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/5">
                        <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                        <p className="text-lg text-slate-600 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>

                    {/* Empty spacer for alternating layout */}
                    {idx % 2 === 0 && <div className="hidden md:block md:w-1/2"></div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline note */}
            {service.processContent && (
              <div className="reveal-on-scroll mt-12 text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-brand-50 border border-brand-200 rounded-xl">
                  <Clock size={20} className="text-brand-600" />
                  <span className="text-brand-900 font-medium">
                    Gesamtdauer: {service.processContent.timeline}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =============================================== */}
      {/* 5. EXPERTISE & TECHNICAL SPECS - Why me? */}
      {/* =============================================== */}
      <section className="py-32 bg-gray-50 text-slate-900 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-500/10 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:40px_40px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Expertise */}
              <div className="reveal-on-scroll">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500/10 border border-brand-500/30 rounded-full text-brand-600 text-sm font-bold uppercase tracking-widest mb-6">
                  <Award size={16} />
                  Meine Expertise
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Warum Sie mich wählen sollten
                </h2>
                {service.expertiseContent && (
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {service.expertiseContent.bio}
                  </p>
                )}

                {service.expertiseContent?.skills && (
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-4">Meine Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.expertiseContent.skills.slice(0, 6).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                      {service.expertiseContent.skills.length > 6 && (
                        <span className="px-3 py-1.5 bg-brand-100 border border-brand-200 rounded-lg text-sm text-brand-700">
                          +{service.expertiseContent.skills.length - 6} weitere
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Technical Standards Note */}
                <div className="mt-8 p-6 bg-gradient-to-br from-slate-50 to-brand-50/30 rounded-2xl border border-brand-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    Warum diese Transparenz wichtig ist
                  </h3>
                  <div className="space-y-3 text-slate-600">
                    <p className="text-sm">
                      Viele Anbieter verschleiern technische Details oder verwenden vage Begriffe.
                      Ich setze auf Transparenz, damit Sie genau wissen, was Sie bekommen.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3 mt-4">
                      <div className="bg-white p-3 rounded-xl">
                        <h4 className="font-bold text-slate-900 mb-1 text-sm">Zukunftssicherheit</h4>
                        <p className="text-xs">Moderne Technologien mit großen Communities garantieren langfristigen Support.</p>
                      </div>
                      <div className="bg-white p-3 rounded-xl">
                        <h4 className="font-bold text-slate-900 mb-1 text-sm">Wartbarkeit</h4>
                        <p className="text-xs">Standardisierte Stacks erleichtern Updates, Bugfixes und Erweiterungen.</p>
                      </div>
                      <div className="bg-white p-3 rounded-xl">
                        <h4 className="font-bold text-slate-900 mb-1 text-sm">Performance</h4>
                        <p className="text-xs">Optimierte Technologien sorgen für schnelle Ladezeiten und gute Core Web Vitals.</p>
                      </div>
                      <div className="bg-white p-3 rounded-xl">
                        <h4 className="font-bold text-slate-900 mb-1 text-sm">Sicherheit</h4>
                        <p className="text-xs">Aktuelle Standards und Best Practices schützen vor Sicherheitslücken.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Specs (if available) */}
              <div className="reveal-on-scroll">
                {service.pillarContent?.technicalSpecs && service.pillarContent.technicalSpecs.length > 0 ? (
                  <>
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500/10 border border-brand-500/30 rounded-full text-brand-600 text-sm font-bold uppercase tracking-widest mb-6">
                      <Rocket size={16} />
                      Technische Spezifikationen
                    </span>
                    <div id="technical-specs">
                      <TechnicalSpecsSection serviceSlug={service.slug} />
                    </div>
                  </>
                ) : service.expertiseContent ? (
                  <div id="expertise">
                    <ExpertiseSection serviceSlug={service.slug} />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================== */}
      {/* 6. REGIONAL CONNECTION - Local expertise */}
      {/* =============================================== */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="reveal-on-scroll bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2">
                {/* Left side */}
                <div className="p-12 md:p-16">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500/10 border border-brand-500/30 rounded-full text-brand-600 text-sm font-bold uppercase tracking-widest mb-6">
                    <MapPin size={16} />
                    Vor Ort in Heidelberg
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                    Ihr regionaler Partner
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    Als lokaler Experte kenne ich den Heidelberger Markt und die Bedürfnisse regionaler Unternehmen.
                    Ich unterstütze Sie bei der digitalen Transformation mit modernen {service.title}-Lösungen.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {[
                      { label: 'Heidelberg', icon: 'H' },
                      { label: 'Mannheim', icon: 'M' },
                      { label: 'Rhein-Neckar', icon: 'RNK' }
                    ].map((city, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 px-4 py-3 bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl"
                      >
                        <div className="w-8 h-8 bg-brand-500/20 text-brand-400 rounded-lg flex items-center justify-center text-sm font-bold">
                          {city.icon}
                        </div>
                        <span className="text-slate-300 font-medium">{city.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right side - Decorative */}
                <div className="relative bg-gradient-to-br from-brand-500/20 to-transparent p-12 md:p-16 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(27,222,148,0.1)_1px,transparent_0)] bg-[size:30px_30px]"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl flex items-center justify-center shadow-2xl">
                      <MapPin className="text-slate-950" size={48} />
                    </div>
                    <p className="text-slate-300 text-lg font-medium">Vor Ort & Digital</p>
                    <p className="text-brand-400 text-2xl font-display font-bold">Für ganz Deutschland</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================== */}
      {/* 7. FAQ - All questions */}
      {/* =============================================== */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="reveal-on-scroll text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500/10 border border-brand-500/30 rounded-full text-brand-600 text-sm font-bold uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                Häufige Fragen
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Ihre Fragen, meine Antworten
              </h2>
              <p className="text-xl text-slate-600">
                Zu {service.title} in Heidelberg
              </p>
            </div>

            <div id="faq">
              <EnhancedFAQSection serviceSlug={service.slug} serviceTitle={service.title} />
            </div>
          </div>
        </div>
      </section>

      {/* =============================================== */}
      {/* 8. FINAL CTA - Last push */}
      {/* =============================================== */}
      <section id="kontakt" className="py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-400/5 rounded-full blur-[120px] animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:40px_40px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="reveal-on-scroll">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500/10 border border-brand-500/30 rounded-full text-brand-400 text-sm font-bold uppercase tracking-widest mb-8">
                <Rocket size={16} />
                Bereit für den Start?
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Lassen Sie uns gemeinsam
                <br />
                <span className="gradient-text">Großes erreichen</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-12">
                In einem unverbindlichen Gespräch besprechen wir Ihre Ziele und wie ich Ihnen mit
                maßgeschneiderten {service.title}-Lösungen helfen kann.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <a
                  href="mailto:christian@derhuber.com?subject=Projektanfrage: {service.title}"
                  className="group bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold py-5 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-brand-500/20 inline-flex items-center"
                >
                  <Calendar size={22} className="mr-3" />
                  Kostenloses Erstgespräch
                  <ArrowRight size={22} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </a>

                <a
                  href="tel:015129515056"
                  className="group bg-slate-800 hover:bg-slate-700 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 border border-slate-700 hover:border-slate-600 inline-flex items-center"
                >
                  <Phone size={22} className="mr-3" />
                  0151 2951 5056
                </a>
              </div>

              {/* Trust stats */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { value: '24-48h', label: 'Antwortzeit auf Anfragen' },
                  { value: '100%', label: 'Zufriedenheitsgarantie' },
                  { value: 'Lokal', label: 'In Heidelberg & Region' }
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 hover:border-brand-500/30 transition-all duration-300"
                  >
                    <div className="font-display text-4xl md:text-5xl font-bold text-brand-400 mb-3">{stat.value}</div>
                    <p className="text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================== */}
      {/* 9. RELATED TOPICS - SEO internal linking */}
      {/* =============================================== */}
      {service.clusterInfo && (
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <RelatedTopics currentServiceSlug={service.slug} currentServiceTitle={service.title} />
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ServiceDetail;
