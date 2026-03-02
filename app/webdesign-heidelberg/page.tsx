import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, MapPin, Clock, Euro } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Webdesign Heidelberg | Professionelle Website fuer Ihr Unternehmen',
  description:
    'Webdesign in Heidelberg fuer kleine und mittlere Unternehmen. Klare Prozesse, transparente Preisrahmen und persoenliche Betreuung vom ersten Gespraech bis zum Launch.',
  alternates: {
    canonical: 'https://derhuber.com/webdesign-heidelberg',
  },
  openGraph: {
    title: 'Webdesign Heidelberg | Professionelle Website fuer Ihr Unternehmen',
    description:
      'Webdesign in Heidelberg mit klarem Prozess, fairem Preisrahmen und regionaler Erfahrung. Jetzt kostenloses Erstgespraech vereinbaren.',
    url: 'https://derhuber.com/webdesign-heidelberg',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Webdesign Heidelberg',
      },
    ],
  },
}

const faqData = [
  {
    question: 'Was kostet Webdesign in Heidelberg?',
    answer:
      'Der Einstieg fuer eine kompakte Unternehmenswebsite liegt ab 599 EUR. Umfangreichere Seiten mit mehreren Unterseiten, SEO-Struktur und Integrationen liegen typischerweise zwischen 1.200 EUR und 3.500 EUR.',
  },
  {
    question: 'Wie lange dauert die Umsetzung?',
    answer:
      'Je nach Umfang dauert ein Projekt meist zwischen 2 und 6 Wochen. Eine einfache Website kann schneller live gehen, groessere Projekte brauchen mehr Abstimmungsrunden.',
  },
  {
    question: 'Ist Suchmaschinenoptimierung enthalten?',
    answer:
      'Ja. Jede Website wird mit sauberer H-Struktur, Meta-Daten, technischen Grundlagen und lokaler Ausrichtung fuer Heidelberg aufgebaut.',
  },
  {
    question: 'Kann ich die Inhalte spaeter selbst bearbeiten?',
    answer:
      'Ja. Je nach Projekt wird ein einfaches CMS oder ein wartungsfreundliches Setup umgesetzt, damit Texte und Bilder selbst gepflegt werden koennen.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function WebdesignHeidelbergPage() {
  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <section className="pt-32 pb-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 glass-card rounded-lg px-4 py-2 border border-brand-400/20 shadow-sm mb-8 text-brand-600 text-sm font-semibold uppercase tracking-wide">
                Webdesign Heidelberg
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Webdesign Heidelberg fuer Unternehmen mit klaren Zielen
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Moderne, schnelle und vertrauenswuerdige Websites fuer KMU in Heidelberg und Rhein-Neckar.
                Mit klarer Struktur, direkter Kommunikation und nachvollziehbarem Preisrahmen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="group bg-brand-400 hover:bg-brand-500 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  Erstgespraech anfragen
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/#portfolio"
                  className="glass-card hover:bg-white text-slate-700 border border-brand-400/20 hover:border-brand-400/40 px-8 py-4 rounded-lg font-semibold transition-all"
                >
                  Referenzen ansehen
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center">
              Leistungen, Ablauf und Preisrahmen
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-4">Leistungen</h3>
                <ul className="space-y-3">
                  {[
                    'Webdesign und UI-Konzept',
                    'Responsive Umsetzung',
                    'Onpage-SEO Grundlagen',
                    'Kontaktformular und CTA-Struktur',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-600">
                      <CheckCircle2 className="text-brand-500 mt-0.5" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-4">Prozess</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex gap-2"><Clock size={18} className="text-brand-500 mt-0.5" />Briefing und Zielklaerung</li>
                  <li className="flex gap-2"><Clock size={18} className="text-brand-500 mt-0.5" />Design und Seitenstruktur</li>
                  <li className="flex gap-2"><Clock size={18} className="text-brand-500 mt-0.5" />Entwicklung und Feinschliff</li>
                  <li className="flex gap-2"><Clock size={18} className="text-brand-500 mt-0.5" />Launch und Support</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-4">Preisrahmen</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex gap-2"><Euro size={18} className="text-brand-500 mt-0.5" />Starter-Seite: ab 599 EUR</li>
                  <li className="flex gap-2"><Euro size={18} className="text-brand-500 mt-0.5" />Business-Website: 1.200-2.500 EUR</li>
                  <li className="flex gap-2"><Euro size={18} className="text-brand-500 mt-0.5" />Groessere Projekte: ab 2.500 EUR</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center">
              Regionale Referenzen aus Heidelberg und Umgebung
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-slate-200 p-6 bg-slate-50">
                <h3 className="font-semibold text-slate-900 mb-2">Projektbeispiele</h3>
                <p className="text-slate-600">
                  Umsetzung fuer regionale Unternehmen mit Fokus auf Sichtbarkeit, Vertrauen und Kontaktanfragen.
                </p>
                <a href="/#portfolio" className="inline-flex items-center gap-2 text-brand-600 font-semibold mt-4">
                  Zum Portfolio <ArrowRight size={18} />
                </a>
              </div>
              <div className="rounded-xl border border-slate-200 p-6 bg-slate-50">
                <h3 className="font-semibold text-slate-900 mb-2">Lokal verankert</h3>
                <p className="text-slate-600">
                  Beratung mit Ortsbezug fuer Heidelberg, Kirchheim und den gesamten Rhein-Neckar-Kreis.
                </p>
                <p className="text-slate-700 font-medium mt-4 inline-flex items-center gap-2">
                  <MapPin size={18} className="text-brand-500" /> Heidelberg & Rhein-Neckar
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Haeufige Fragen</h2>
            <div className="space-y-6">
              {faqData.map((item) => (
                <div key={item.question} className="bg-white rounded-xl p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white border-t border-slate-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Verwandte Seiten zu Webdesign in Heidelberg
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/webdesigner-heidelberg" className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-brand-300 transition-colors text-slate-700 font-medium">
                Webdesigner Heidelberg
              </Link>
              <Link href="/webdesign-agentur-heidelberg" className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-brand-300 transition-colors text-slate-700 font-medium">
                Webdesign Agentur Heidelberg
              </Link>
              <Link href="/unternehmenswebsite-erstellen-lassen-heidelberg" className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-brand-300 transition-colors text-slate-700 font-medium">
                Unternehmenswebsite erstellen lassen Heidelberg
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-brand-400">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bereit fuer Ihre neue Website?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns Ihre Anforderungen durchgehen und den passenden Rahmen fuer Ihr Projekt festlegen.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-brand-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              Kostenloses Erstgespraech
              <ArrowRight size={20} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
