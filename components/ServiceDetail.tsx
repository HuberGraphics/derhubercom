import React, { useEffect } from 'react';
import { useRoute } from 'wouter';
import { servicesData } from '../data/services';
import { CheckCircle2, ArrowLeft, Mail, Phone, Calendar } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const [match, params] = useRoute('/leistungen/:slug');
  
  // Find the service data based on the URL slug
  const service = servicesData.find(s => s.slug === params?.slug);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Re-trigger animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    setTimeout(() => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach(el => observer.observe(el));
    }, 100);
    
    return () => observer.disconnect();
  }, [params?.slug]);

  if (!service) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Dienstleistung nicht gefunden</h1>
        <a href="/" className="text-brand-600 underline mt-4 inline-block">Zurück zur Startseite</a>
      </div>
    );
  }

  return (
    <div className="pt-20">
  {/* Hero Section - Kombinierte Sektion */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white via-slate-50 to-brand-50/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex items-center text-sm text-slate-500 mb-8">
            <a href="/" className="hover:text-brand-500 transition-colors">Startseite</a>
            <span className="mx-2">/</span>
            <a href="/#services" className="hover:text-brand-500 transition-colors">Leistungen</a>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">{service.title}</span>
          </nav>

          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-brand-500 text-white rounded-xl flex items-center justify-center shadow-xl">
                {service.icon}
              </div>
            </div>

            <span className="text-brand-500 font-bold tracking-widest uppercase text-xs mb-4 inline-block">Unsere Dienstleistung</span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              {service.title}
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
              {service.title} in Heidelberg – Professionelle Lösungen für Ihren Erfolg
            </h2>

            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto mb-8">
              {service.shortDesc}
            </p>

            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto mb-12">
              {service.fullDesc}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-5 py-3 bg-white rounded-full text-sm font-medium text-slate-700 shadow-md border border-gray-100">
                Heidelberg & Rhein-Neckar-Kreis
              </span>
              <span className="px-5 py-3 bg-white rounded-full text-sm font-medium text-slate-700 shadow-md border border-gray-100">
                {service.features[0]}
              </span>
              <span className="px-5 py-3 bg-white rounded-full text-sm font-medium text-slate-700 shadow-md border border-gray-100">
                Zufriedenheit garantiert
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Übersicht Sektion */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto reveal-on-scroll">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Überblick</h2>
            <p className="text-lg text-slate-600 leading-relaxed text-center">
              {service.fullDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Was ist enthalten Sektion */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto reveal-on-scroll">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Was ist enthalten?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <CheckCircle2 className="text-brand-500 mr-3" size={20} />
                  <span className="font-medium text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile Sektion */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto reveal-on-scroll">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Ihre Vorteile</h3>
            <ul className="space-y-4">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center">
                  <div className="min-w-[6px] h-[6px] rounded-full bg-brand-500 mt-2.5 mr-4"></div>
                  <span className="text-lg text-slate-600 leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Prozess Sektion */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto reveal-on-scroll">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Der Prozess</h3>
            <div className="space-y-8">
              {service.process.map((step, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold shadow-lg group-hover:bg-brand-500 transition-colors duration-300">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sektion */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto reveal-on-scroll">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Häufig gestellte Fragen zu {service.title}</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-slate-900 mb-3">Was kostet {service.title} in Heidelberg?</h4>
                <p className="text-slate-600 leading-relaxed">
                  Die Kosten variieren je nach Umfang und Komplexität Ihres Projekts. Für eine {service.title}-Leistung
                  starten die Preise bei {service.slug === 'webdesign' ? '1.500€ für eine einfache Website' : service.slug === 'webentwicklung' ? '2.000€ für eine Webanwendung' : '800€ für eine Basis-Beratung'}.
                  Kontaktieren Sie mich für ein kostenloses und unverbindliches Erstgespräch.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-slate-900 mb-3">Wie lange dauert die Umsetzung?</h4>
                <p className="text-slate-600 leading-relaxed">
                  Je nach Projektumfang benötigt eine {service.title}-Dienstleistung zwischen {service.slug === 'webdesign' ? '2-6 Wochen' : service.slug === 'webentwicklung' ? '4-8 Wochen' : '1-2 Wochen'}.
                  Ich sorge für eine transparente Projektplanung und halte Sie über jeden Fortschritt auf dem Laufenden.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-slate-900 mb-3">Warum sollten Sie sich für mich entscheiden?</h4>
                <p className="text-slate-600 leading-relaxed">
                  Als lokaler Experte für {service.title} in Heidelberg verstehe ich den regionalen Markt.
                  Ich kombiniere technische Expertise mit praxisnahen Lösungen und sorge für Ergebnisse,
                  die Ihr Unternehmen tatsächlich weiterbringen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regionale Fokussierung Sektion */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto reveal-on-scroll">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Ihr Partner für {service.title} in der Region</h3>
            <div className="bg-gradient-to-br from-brand-50 to-slate-50 p-8 rounded-3xl border border-brand-100">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-brand-500 text-white rounded-lg flex items-center justify-center mr-3 text-sm font-bold">
                      H
                    </div>
                    Heidelberg
                  </h4>
                  <p className="text-slate-600">
                    Als lokaler {service.slug === 'webdesign' ? 'Webdesigner' : service.slug === 'webentwicklung' ? 'Webentwickler' : 'Experte'}
                    kenne ich den Heidelberger Markt und die Bedürfnisse regionaler Unternehmen.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-brand-500 text-white rounded-lg flex items-center justify-center mr-3 text-sm font-bold">
                      RNK
                    </div>
                    Rhein-Neckar-Kreis
                  </h4>
                  <p className="text-slate-600">
                    Ich unterstütze Unternehmen aus dem gesamten Rhein-Neckar-Kreis bei der digitalen Transformation
                    und modernen {service.title}-Lösungen.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-brand-200">
                <p className="text-center text-slate-700 font-medium">
                  📍 Vor Ort in Heidelberg und digital für ganz Deutschland erreichbar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Erfahrungsberichte Sektion */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto reveal-on-scroll">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Was meine Kunden sagen</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400">★★★★★</div>
                </div>
                <p className="text-slate-600 mb-4 italic">
                  "Hervorragende {service.title}-Leistung! Herr Huber hat unsere Erwartungen übertroffen und
                  ein professionelles Ergebnis geliefert, das unsere Kundenzufriedenheit deutlich gesteigert hat."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">M. Schmidt</p>
                    <p className="text-xs text-slate-500">Unternehmensberatung, Heidelberg</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400">★★★★★</div>
                </div>
                <p className="text-slate-600 mb-4 italic">
                  "Durch die professionelle {service.title}-Dienstleistung konnten wir unsere Online-Präsenz
                  erheblich verbessern. Sehr empfehlenswert!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">S. Weber</p>
                    <p className="text-xs text-slate-500">Handwerk, Mannheim</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt CTA Sektion */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-400/5 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Bereit für professionelles {service.title}?
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Lassen Sie uns in einem unverbindlichen Gespräch Ihre Ziele besprechen und
              wie ich Ihnen mit maßgeschneiderten {service.title}-Lösungen helfen kann.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a
                href="#contact"
                className="group bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <span className="flex items-center">
                  <Calendar size={20} className="mr-3" />
                  Kostenloses Erstgespräch vereinbaren
                  <svg className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>

              <a
                href="tel:015129515056"
                className="group bg-slate-700 hover:bg-slate-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 border border-slate-600"
              >
                <span className="flex items-center">
                  <Phone size={20} className="mr-3" />
                  0151 2951 5056
                </span>
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-slate-800/50 backdrop-blur p-6 rounded-2xl border border-slate-700">
                <div className="text-3xl font-bold text-brand-400 mb-2">24-48h</div>
                <p className="text-slate-300">Antwortzeit auf Anfragen</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur p-6 rounded-2xl border border-slate-700">
                <div className="text-3xl font-bold text-brand-400 mb-2">100%</div>
                <p className="text-slate-300">Zufriedenheitsgarantie</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur p-6 rounded-2xl border border-slate-700">
                <div className="text-3xl font-bold text-brand-400 mb-2">Lokal</div>
                <p className="text-slate-300">In Heidelberg & Region</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zusätzliche SEO-Keywords Sektion */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              {service.title} – Ihre Fragen, meine Antworten
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-slate-900 mb-4">Beliebte Suchbegriffe:</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    `${service.title} Heidelberg`,
                    `${service.title} Preis`,
                    `${service.title} Kosten`,
                    `${service.title} Anbieter`,
                    `${service.title} Unternehmen`,
                    `${service.title} Rhein-Neckar`,
                    `${service.title} Mannheim`
                  ].map((term, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                      {term}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-4">Meine Schwerpunkte:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;