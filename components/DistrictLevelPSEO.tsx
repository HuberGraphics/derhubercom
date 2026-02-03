'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import { heidelbergDistricts } from '@/data/districts';
import { CheckCircle2, ArrowLeft, Mail, Phone, Calendar, MapPin } from 'lucide-react';

interface DistrictLevelPSEOProps {
  serviceSlug: string;
  districtSlug: string;
}

const DistrictLevelPSEO: React.FC<DistrictLevelPSEOProps> = ({ serviceSlug, districtSlug }) => {
  const service = servicesData.find(s => s.slug === serviceSlug);
  const district = heidelbergDistricts.find(d => d.slug === districtSlug);

  useEffect(() => {
    window.scrollTo(0, 0);

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
  }, [serviceSlug, districtSlug]);

  if (!service || !district) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Seite nicht gefunden</h1>
        <Link href="/" className="text-brand-600 underline mt-4 inline-block">Zurück zur Startseite</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white via-slate-50 to-brand-50/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex items-center text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-brand-500 transition-colors">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href={`/${serviceSlug}-in-heidelberg`} className="hover:text-brand-500 transition-colors">
              {service.title} in Heidelberg
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">{district.name}</span>
          </nav>

          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-brand-500 text-white rounded-xl flex items-center justify-center shadow-xl">
                {service.icon}
              </div>
            </div>

            <span className="text-brand-500 font-bold tracking-widest uppercase text-xs mb-4 inline-block">
              Vor Ort für Sie
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              {service.title} {district.preposition} {district.locationName}
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
              Professionelle {service.title}-Dienstleistungen {district.preposition} {district.locationName}
            </h2>

            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto mb-8">
              {service.shortDesc}
            </p>

            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto mb-12">
              {district.description} Als lokaler Experte biete ich maßgeschneiderte {service.title}-Lösungen
              speziell für Unternehmen und Privatpersonen {district.preposition} {district.locationName}.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-5 py-3 bg-white rounded-full text-sm font-medium text-slate-700 shadow-md border border-gray-100">
                <MapPin size={16} className="inline mr-2" />
                {district.locationName}
              </span>
              {district.characteristics.slice(0, 2).map((char, idx) => (
                <span key={idx} className="px-5 py-3 bg-white rounded-full text-sm font-medium text-slate-700 shadow-md border border-gray-100">
                  {char}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto reveal-on-scroll">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              {service.title} {district.preposition} {district.locationName} – Ihr lokaler Experte
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed text-center mb-8">
              {district.locationName} ist{' '}
              {district.slug === 'altstadt' ? 'das historische Herz Heidelbergs' :
               district.slug === 'neuenheim' ? 'ein lebendiges studentisches Viertel' :
               district.slug === 'weststadt' ? 'ein beliebtes Wohnviertel' :
               district.slug === 'suedstadt' ? 'ein attraktiver Stadtteil am Neckar' :
               'ein bedeutender Stadtteil Heidelbergs'}{' '}
              mit {district.characteristics[0].toLowerCase()}.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed text-center">
              Als Ihr Partner für {service.title} {district.preposition} {district.locationName} verstehe ich die besonderen Anforderungen
              und Herausforderungen, die sich {district.preposition} {district.locationName} stellen. Ob Sie ein{' '}
              {district.slug === 'altstadt' ? 'Restaurant in der Hauptstraße' :
               district.slug === 'neuenheim' ? 'Startup in Universitätsnähe' :
               district.slug === 'weststadt' || district.slug === 'rohrbach' ? 'lokales Geschäft' :
               'Unternehmen'}{' '}
              betreiben oder privater Kunde sind – ich biete maßgeschneiderte {service.title}-Lösungen,
              die perfekt auf Ihre Bedürfnisse {district.preposition} {district.locationName} abgestimmt sind.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto reveal-on-scroll">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Unser {service.title}-Angebot {district.preposition} {district.locationName}
            </h3>
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

      {/* Why Local */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto reveal-on-scroll">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Warum {service.title} {district.prepositionWithLocation} {district.locationName}?
            </h3>
            <div className="bg-gradient-to-br from-brand-50 to-slate-50 p-8 rounded-3xl border border-brand-100">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-brand-500 text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Lokale Expertise</h4>
                    <p className="text-slate-600">
                      Ich kenne {district.locationName} und seine Besonderheiten. Das ermöglicht mir, {service.title}-Lösungen
                      zu entwickeln, die perfekt auf die lokalen Gegebenheiten zugeschnitten sind.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-brand-500 text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Persönliche Beratung vor Ort</h4>
                    <p className="text-slate-600">
                      Durch meine Nähe zu {district.locationName} können wir persönliche Meetings direkt vor Ort vereinbaren.
                      Das erleichtert die Abstimmung und sorgt für bessere Ergebnisse.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-brand-500 text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Schnelle Reaktionszeiten</h4>
                    <p className="text-slate-600">
                      Als lokaler Anbieter für {service.title} {district.preposition} {district.locationName} bin ich schnell vor Ort und
                      kann kurzfristig auf Ihre Anfragen reagieren.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto reveal-on-scroll">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Vorteile für Kunden {district.preposition} {district.locationName}
            </h3>
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

      {/* District Characteristics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto reveal-on-scroll">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Besonderheiten von {district.locationName}
            </h3>
            <p className="text-lg text-slate-600 text-center mb-8">
              {district.locationName} zeichnet sich durch folgende Merkmale aus:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {district.characteristics.map((char, idx) => (
                <span key={idx} className="px-4 py-2 bg-brand-100 text-brand-700 rounded-full font-medium">
                  {char}
                </span>
              ))}
            </div>
            <p className="text-lg text-slate-600 text-center mt-8">
              Diese Besonderheiten berücksichtige ich bei meiner {service.title}-Arbeit {district.preposition} {district.locationName},
              um optimale Ergebnisse für meine Kunden zu erzielen.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto reveal-on-scroll">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Unser {service.title}-Prozess {district.preposition} {district.locationName}
            </h3>
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

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto reveal-on-scroll">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Häufig gestellte Fragen zu {service.title} {district.preposition} {district.locationName}
            </h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-slate-900 mb-3">
                  Was kostet {service.title} {district.preposition} {district.locationName}?
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Die Preise für {service.title} {district.preposition} {district.locationName} richten sich nach dem Umfang Ihres Projekts.
                  Für eine {service.title}-Leistung starten die Preise bei{' '}
                  {service.slug === 'webdesign' ? '1.500€' :
                   service.slug === 'webentwicklung' ? '2.000€' :
                   '800€'}.
                  Kontaktieren Sie mich für ein kostenloses Erstgespräch – wir können uns auch gerne {district.preposition} {district.locationName} treffen.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-slate-900 mb-3">
                  Wie schnell können Sie mit {service.title} {district.preposition} {district.locationName} starten?
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Durch meine lokale Nähe zu {district.locationName} kann ich meist innerhalb von 24-48 Stunden
                  ein Erstgespräch vereinbaren. Die eigentliche {service.title}-Umsetzung startet dann
                  nach Auftragsvergabe innerhalb von{' '}
                  {service.slug === 'webdesign' ? '3-5' : service.slug === 'webentwicklung' ? '5-7' : '1-2'} Werktagen.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-slate-900 mb-3">
                  Welche {service.title}-Dienstleistungen bieten Sie {district.preposition} {district.locationName} an?
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Ich biete das komplette {service.title}-Spektrum {district.preposition} {district.locationName} an: {service.features.join(', ')}.
                  Egal ob kleines Projekt oder große Umsetzung – ich bin Ihr Partner vor Ort.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-slate-900 mb-3">
                  Können Sie auch Kunden außerhalb von {district.locationName} betreuen?
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Selbstverständlich! Neben {district.locationName} betreue ich Kunden in allen Heidelberger Stadtteilen
                  sowie im gesamten Rhein-Neckar-Kreis.{' '}
                  <Link href={`/${serviceSlug}-in-heidelberg`} className="text-brand-600 hover:underline">
                    Hier sehen Sie alle Standorte
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Districts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto reveal-on-scroll">
            <h3 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              {service.title} in anderen Heidelberger Stadtteilen
            </h3>
            <p className="text-lg text-slate-600 text-center mb-12">
              Neben {district.locationName} biete ich {service.title} auch in allen anderen Heidelberger Stadtteilen an:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {heidelbergDistricts
                .filter(d => d.slug !== district.slug)
                .slice(0, 9)
                .map((d) => (
                  <Link
                    key={d.slug}
                    href={`/${serviceSlug}-in-heidelberg/${d.slug}`}
                    className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-brand-300 hover:shadow-lg transition-all duration-300"
                  >
                    <h4 className="font-semibold text-slate-900 mb-1 hover:text-brand-600 transition-colors">
                      {service.title} {d.preposition} {d.locationName}
                    </h4>
                    <p className="text-sm text-slate-600 line-clamp-2">{d.description}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Bereit für {service.title} {district.preposition} {district.locationName}?
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Kontaktieren Sie mich für ein kostenloses Erstgespräch. Ich freue mich darauf,
              Sie {district.preposition} {district.locationName} oder Heidelberg persönlich kennenzulernen.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a
                href="#contact"
                className="group bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <span className="flex items-center">
                  <Calendar size={20} className="mr-3" />
                  Kostenloses Erstgespräch
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
                <p className="text-slate-300">Antwortzeit</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur p-6 rounded-2xl border border-slate-700">
                <div className="text-3xl font-bold text-brand-400 mb-2">Vor Ort</div>
                <p className="text-slate-300">{district.preposition} {district.locationName}</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur p-6 rounded-2xl border border-slate-700">
                <div className="text-3xl font-bold text-brand-400 mb-2">100%</div>
                <p className="text-slate-300">Zufriedenheit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Keywords */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              {service.title} {district.preposition} {district.locationName} – Wichtige Informationen
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-slate-900 mb-4">Beliebte Suchbegriffe:</h4>
                <div className="flex flex-wrap gap-2">
                  {district.keywords.concat([
                    `${service.title} ${district.locationName}`,
                    `${service.title} Heidelberg ${district.name}`,
                    `${service.title} bei mir in der Nähe`
                  ]).map((term, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                      {term}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-4">Meine Leistungen:</h4>
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

      {/* Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center">
              <Link
                href={`/${serviceSlug}-in-heidelberg`}
                className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold transition-colors"
              >
                <ArrowLeft size={20} />
                Zurück: {service.title} in Heidelberg
              </Link>
              <Link
                href={`/leistungen/${serviceSlug}`}
                className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold transition-colors"
              >
                Hauptseite: {service.title}
                <ArrowLeft size={20} className="rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DistrictLevelPSEO;
