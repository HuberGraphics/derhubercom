import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Unternehmenswebsite erstellen lassen Heidelberg | Klarer Projektablauf',
  description:
    'Unternehmenswebsite erstellen lassen in Heidelberg: strukturierter Ablauf, transparente Preisrahmen und lokale Betreuung fuer kleine und mittlere Unternehmen.',
  alternates: {
    canonical: 'https://derhuber.com/unternehmenswebsite-erstellen-lassen-heidelberg',
  },
  openGraph: {
    title: 'Unternehmenswebsite erstellen lassen Heidelberg',
    description:
      'Von der Konzeption bis zum Launch: Unternehmenswebsite fuer Heidelberg mit klarem Prozess und messbarem Ergebnis.',
    url: 'https://derhuber.com/unternehmenswebsite-erstellen-lassen-heidelberg',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Unternehmenswebsite erstellen lassen Heidelberg',
      },
    ],
  },
}

const packageCards = [
  {
    title: 'Starter',
    price: 'ab 599 EUR',
    items: [
      'Onepager oder kompakte Firmenwebsite',
      'Responsive Design',
      'Kontaktformular',
      'SEO-Basisstruktur',
    ],
  },
  {
    title: 'Business',
    price: '1.200-2.500 EUR',
    items: [
      'Mehrere Unterseiten',
      'Leistungsseiten mit CTA',
      'Lokale SEO-Ausrichtung auf Heidelberg',
      'Technische Optimierung fuer Ladezeit',
    ],
  },
  {
    title: 'Wachstum',
    price: 'ab 2.500 EUR',
    items: [
      'Individuelle Struktur und Inhalte',
      'Erweiterte Integrationen (CRM, Tracking)',
      'Conversion-Fokus und Testbarkeit',
      'Kontinuierliche Weiterentwicklung',
    ],
  },
]

const faqData = [
  {
    question: 'Wie finde ich das passende Paket?',
    answer:
      'Im Erstgespraech werden Ziele, Umfang und Inhalte geklaert. Darauf basierend wird ein passender Rahmen empfohlen.',
  },
  {
    question: 'Welche Inhalte muessen vorbereitet sein?',
    answer:
      'Falls bereits Texte und Bilder vorhanden sind, beschleunigt das den Prozess. Bei Bedarf wird bei Struktur und Formulierung unterstuetzt.',
  },
  {
    question: 'Ist die Website fuer mobile Geraete optimiert?',
    answer:
      'Ja. Jede Umsetzung erfolgt responsive und wird fuer Smartphone, Tablet und Desktop getestet.',
  },
  {
    question: 'Kann die Seite spaeter erweitert werden?',
    answer:
      'Ja. Das Setup wird so aufgebaut, dass neue Unterseiten, Inhalte und Funktionen schrittweise ergaenzt werden koennen.',
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

export default function UnternehmenswebsiteErstellenLassenHeidelbergPage() {
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
                Unternehmenswebsite Heidelberg
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Unternehmenswebsite erstellen lassen in Heidelberg
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                Sie wollen eine Website, die professionell wirkt und Anfragen erzeugt.
                Hier bekommen Sie einen klaren Projektablauf, realistische Zeitplanung und transparente Kosten.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="group bg-brand-400 hover:bg-brand-500 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  Website-Projekt anfragen
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/#portfolio"
                  className="glass-card hover:bg-white text-slate-700 border border-brand-400/20 hover:border-brand-400/40 px-8 py-4 rounded-lg font-semibold transition-all"
                >
                  Erfolgsbeispiele ansehen
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center">
              Pakete und Preisrahmen
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {packageCards.map((pkg) => (
                <article key={pkg.title} className="bg-white rounded-xl border border-slate-200 p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{pkg.title}</h3>
                  <p className="text-brand-600 font-bold mb-4">{pkg.price}</p>
                  <ul className="space-y-3 text-slate-600">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 size={18} className="text-brand-500 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center">
              Projektablauf in 4 Schritten
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: '1. Strategie und Zieldefinition',
                  text: 'Gemeinsam werden Zielgruppe, Angebot und Seitenstruktur festgelegt.',
                },
                {
                  title: '2. Design und Inhalte',
                  text: 'Visuelles Konzept und Seitenaufbau werden abgestimmt und finalisiert.',
                },
                {
                  title: '3. Entwicklung und Qualitaetssicherung',
                  text: 'Technische Umsetzung inklusive Performance- und Mobil-Optimierung.',
                },
                {
                  title: '4. Launch und Nachbetreuung',
                  text: 'Go-live, Tracking und konkrete naechste Optimierungsschritte.',
                },
              ].map((step) => (
                <article key={step.title} className="rounded-xl border border-slate-200 p-6 bg-slate-50">
                  <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Verwandte Landingpages
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/webdesign-heidelberg" className="p-4 rounded-lg bg-white border border-slate-200 hover:border-brand-300 transition-colors text-slate-700 font-medium">
                Webdesign Heidelberg
              </Link>
              <Link href="/webdesigner-heidelberg" className="p-4 rounded-lg bg-white border border-slate-200 hover:border-brand-300 transition-colors text-slate-700 font-medium">
                Webdesigner Heidelberg
              </Link>
              <Link href="/webdesign-agentur-heidelberg" className="p-4 rounded-lg bg-white border border-slate-200 hover:border-brand-300 transition-colors text-slate-700 font-medium">
                Webdesign Agentur Heidelberg
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Haeufige Fragen</h2>
            <div className="space-y-6">
              {faqData.map((item) => (
                <div key={item.question} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
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
              Starten wir Ihre Unternehmenswebsite
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Wir definieren gemeinsam den passenden Umfang und setzen die Website zielgerichtet um.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-brand-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              Unverbindliches Erstgespraech
              <ArrowRight size={20} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
