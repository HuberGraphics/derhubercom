import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CheckCircle2, ArrowRight, Target, Zap, TrendingUp, Layout, Smartphone, BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Landingpage erstellen lassen Heidelberg | Professionelle Landing Pages',
  description: 'Landingpage erstellen lassen in Heidelberg: Conversion-optimierte Landing Pages für Google Ads, Kampagnen und Produktlaunches. Schnelle Umsetzung, faire Preise.',
  alternates: {
    canonical: 'https://derhuber.com/landingpage-heidelberg',
  },
  openGraph: {
    title: 'Landingpage erstellen lassen Heidelberg | Professionelle Landing Pages',
    description: 'Landingpage erstellen lassen in Heidelberg: Conversion-optimierte Landing Pages für Google Ads, Kampagnen und Produktlaunches.',
    url: 'https://derhuber.com/landingpage-heidelberg',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Landingpage erstellen lassen Heidelberg - Der Huber',
      },
    ],
  },
}

const landingpageTypes = [
  {
    icon: Target,
    title: 'Google Ads Landing Pages',
    description: 'Optimiert für Ihre Anzeigenkampagnen. Hoher Quality Score, bessere Conversion-Raten, niedrigere Klickpreise.',
  },
  {
    icon: Zap,
    title: 'Produkt-Launch Pages',
    description: 'Für neue Produkte oder Services. Mit Countdown, E-Mail-Erfassung und überzeugender Produktpräsentation.',
  },
  {
    icon: TrendingUp,
    title: 'Lead-Generierung',
    description: 'Fokussiert auf Kontaktanfragen und Newsletter-Anmeldungen. Klare CTAs, vertrauensbildende Elemente.',
  },
  {
    icon: Layout,
    title: 'Event & Webinar Pages',
    description: 'Für Veranstaltungen, Webinare oder Workshops. Mit Anmeldeformular und allen wichtigen Infos.',
  },
  {
    icon: Smartphone,
    title: 'App Download Pages',
    description: 'Überzeugend präsentiert für maximale App-Downloads. Mit Store-Links und Feature-Highlights.',
  },
  {
    icon: BarChart3,
    title: 'A/B-Test Landing Pages',
    description: 'Verschiedene Varianten zum Testen. Finden Sie heraus, was bei Ihrer Zielgruppe am besten funktioniert.',
  },
]

const benefits = [
  'Conversion-optimiertes Design',
  'Mobile-First Entwicklung',
  'Schnelle Ladezeiten (<2 Sek.)',
  'DSGVO-konforme Formulare',
  'Google Analytics Integration',
  'A/B-Testing vorbereitet',
]

const faqData = [
  {
    question: 'Was kostet eine Landing Page?',
    answer: 'Eine professionelle Landing Page beginnt ab 499€. Der genaue Preis hängt vom Umfang ab: Anzahl der Sektionen, Formular-Komplexität, Animationen. Im Erstgespräch erhalten Sie ein transparentes Festpreisangebot.',
  },
  {
    question: 'Wie schnell ist eine Landing Page fertig?',
    answer: 'Eine Standard-Landing Page ist in 1-2 Wochen fertig. Bei einfachen Projekten auch schneller. Der Zeitplan wird im Kickoff-Gespräch festgelegt.',
  },
  {
    question: 'Was ist der Unterschied zu einer normalen Website?',
    answer: 'Eine Landing Page hat ein klares Ziel: eine bestimmte Aktion (Kontakt, Kauf, Anmeldung). Sie hat keine Navigation zu anderen Seiten und ist auf maximale Conversion ausgelegt. Eine Website bietet dagegen umfassende Informationen über Ihr Unternehmen.',
  },
  {
    question: 'Kann ich die Landing Page später selbst bearbeiten?',
    answer: 'Ja, auf Wunsch baue ich die Landing Page mit einem einfachen CMS oder liefere den Code so aus, dass Sie Texte und Bilder selbst anpassen können.',
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

export default function LandingpageHeidelbergPage() {
  return (
    <>
      <Header />
      <main>
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 glass-card rounded-lg px-4 py-2 border border-brand-400/20 shadow-sm mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-400"></span>
                </span>
                <span className="text-brand-600 text-sm font-semibold uppercase tracking-wide">Conversion-Optimiert</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Landingpage erstellen lassen in Heidelberg
              </h1>

              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Professionelle <strong>Landing Pages</strong> für Google Ads, Kampagnen und Produktlaunches.
                Conversion-optimiert, schnell geladen, mobile-first.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="group bg-brand-400 hover:bg-brand-500 text-white px-8 py-4 rounded-lg font-semibold text-base transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  Landing Page anfragen
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/#portfolio"
                  className="glass-card hover:bg-white text-slate-700 border border-brand-400/20 hover:border-brand-400/40 px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center"
                >
                  Beispiele ansehen
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    Mehr Conversions mit professionellen Landing Pages
                  </h2>
                  <div className="prose prose-lg text-slate-600">
                    <p>
                      Eine gute <strong>Landing Page</strong> ist der Schlüssel zu erfolgreichen Online-Kampagnen.
                      Sie führt Besucher gezielt zur gewünschten Aktion – ohne Ablenkung, ohne Umwege.
                    </p>
                    <p>
                      Als <strong>Webdesigner in Heidelberg</strong> entwickle ich Landing Pages, die
                      auf Conversion optimiert sind. Jedes Element hat einen Zweck: Besucher überzeugen
                      und zum Handeln bewegen.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                      <CheckCircle2 className="text-brand-500 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-slate-700 text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Landing Page Typen
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Für jedes Ziel die passende Landing Page – individuell auf Ihre Kampagne zugeschnitten.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {landingpageTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-xl p-8 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-200"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
                    <type.icon size={24} className="text-brand-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{type.title}</h3>
                  <p className="text-slate-600">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                So entsteht Ihre Landing Page
              </h2>

              <div className="space-y-8">
                {[
                  {
                    step: '1',
                    title: 'Briefing & Zieldefinition',
                    description: 'Wir klären: Welches Ziel hat die Landing Page? Wer ist die Zielgruppe? Was ist das Angebot?',
                  },
                  {
                    step: '2',
                    title: 'Konzept & Wireframe',
                    description: 'Ich erstelle eine Struktur mit allen wichtigen Elementen: Headline, Benefits, Social Proof, CTA.',
                  },
                  {
                    step: '3',
                    title: 'Design & Entwicklung',
                    description: 'Die Landing Page wird designt und entwickelt. Sie sehen regelmäßig den Fortschritt.',
                  },
                  {
                    step: '4',
                    title: 'Testing & Launch',
                    description: 'Tests auf allen Geräten, Formular-Check, Speed-Optimierung. Dann: Go live!',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-brand-400 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                Häufige Fragen zu Landing Pages
              </h2>

              <div className="space-y-6">
                {faqData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 rounded-xl p-6 border border-slate-200"
                  >
                    <h3 className="font-semibold text-slate-900 mb-3">{item.question}</h3>
                    <p className="text-slate-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-400">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bereit für mehr Conversions?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns besprechen, wie eine professionelle Landing Page
              Ihre Kampagnen erfolgreicher macht.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-brand-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              Jetzt Projekt anfragen
              <ArrowRight size={20} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
