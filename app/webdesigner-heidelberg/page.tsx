import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, UserCheck, Workflow, Euro } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Webdesigner Heidelberg | Direkte Zusammenarbeit ohne Umwege',
  description:
    'Webdesigner in Heidelberg fuer Unternehmen, die direkte Kommunikation und schnelle Umsetzung suchen. Persoenliche Betreuung, transparente Kosten und klare Ergebnisse.',
  alternates: {
    canonical: 'https://derhuber.com/webdesigner-heidelberg',
  },
  openGraph: {
    title: 'Webdesigner Heidelberg | Direkte Zusammenarbeit ohne Umwege',
    description:
      'Direkt mit einem Webdesigner in Heidelberg arbeiten: von der Strategie bis zum Launch aus einer Hand.',
    url: 'https://derhuber.com/webdesigner-heidelberg',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Webdesigner Heidelberg',
      },
    ],
  },
}

const faqData = [
  {
    question: 'Warum mit einem Webdesigner statt mit einer grossen Agentur arbeiten?',
    answer:
      'Sie sprechen direkt mit der Person, die Ihr Projekt umsetzt. Das reduziert Abstimmungsaufwand, spart Zeit und sorgt fuer schnellere Entscheidungen.',
  },
  {
    question: 'Welche Art von Unternehmen betreuen Sie?',
    answer:
      'Vor allem kleine und mittlere Unternehmen, Dienstleister und lokale Betriebe in Heidelberg und Rhein-Neckar.',
  },
  {
    question: 'Gibt es feste Pakete oder individuelle Angebote?',
    answer:
      'Beides ist moeglich. Es gibt einen klaren Preisrahmen fuer typische Projekte, gleichzeitig wird jedes Angebot auf Ziele und Umfang abgestimmt.',
  },
  {
    question: 'Unterstuetzen Sie auch nach dem Launch?',
    answer:
      'Ja. Nach dem Go-live sind Betreuung, Anpassungen und technische Weiterentwicklung moeglich.',
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

export default function WebdesignerHeidelbergPage() {
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
                Webdesigner Heidelberg
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Webdesigner Heidelberg fuer schnelle, klare Umsetzung
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Persoenliche Zusammenarbeit statt unnoetiger Umwege.
                Von der ersten Idee bis zur live geschalteten Website arbeiten Sie direkt mit dem Umsetzer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="group bg-brand-400 hover:bg-brand-500 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  Projektgespraech starten
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/#portfolio"
                  className="glass-card hover:bg-white text-slate-700 border border-brand-400/20 hover:border-brand-400/40 px-8 py-4 rounded-lg font-semibold transition-all"
                >
                  Arbeiten ansehen
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center">
              Das bekommen Sie in der Zusammenarbeit
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <article className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900 mb-4 inline-flex items-center gap-2">
                  <UserCheck size={18} className="text-brand-500" />
                  Direkter Ansprechpartner
                </h3>
                <p className="text-slate-600">
                  Keine Wechsel im Projekt, keine langen Feedbackketten. Entscheidungen und Updates laufen direkt.
                </p>
              </article>
              <article className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900 mb-4 inline-flex items-center gap-2">
                  <Workflow size={18} className="text-brand-500" />
                  Klarer Prozess
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-brand-500 mt-0.5" />Kickoff und Zieldefinition</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-brand-500 mt-0.5" />Design und Umsetzung</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-brand-500 mt-0.5" />Launch und Nachbetreuung</li>
                </ul>
              </article>
              <article className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900 mb-4 inline-flex items-center gap-2">
                  <Euro size={18} className="text-brand-500" />
                  Preisrahmen
                </h3>
                <p className="text-slate-600">
                  Kompakte Projekte ab 599 EUR, typische Unternehmensseiten zwischen 1.200 und 3.500 EUR.
                  Transparent und vorab klar kommuniziert.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center">
              Weitere passende Landingpages
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/webdesign-heidelberg" className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-brand-300 transition-colors text-slate-700 font-medium">
                Webdesign Heidelberg
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

        <section className="py-20 bg-brand-400">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Lassen Sie uns Ihre Website planen
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              In einem unverbindlichen Gespraech klaeren wir Ziele, Umfang und den sinnvollsten naechsten Schritt.
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
