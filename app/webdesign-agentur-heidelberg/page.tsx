import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CheckCircle2, ArrowRight, Users, Award, Clock, MessageCircle, Target, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Webdesign Agentur Heidelberg gesucht? | Freelancer-Alternative',
  description: 'Webdesign Agentur Heidelberg gesucht? Als Freelancer biete ich Agentur-Qualität ohne Agentur-Preise. Direkter Kontakt, faire Preise ab 599€, schnelle Umsetzung.',
  alternates: {
    canonical: 'https://derhuber.com/webdesign-agentur-heidelberg',
  },
  openGraph: {
    title: 'Webdesign Agentur Heidelberg gesucht? | Freelancer-Alternative',
    description: 'Webdesign Agentur Heidelberg gesucht? Als Freelancer biete ich Agentur-Qualität ohne Agentur-Preise. Direkter Kontakt, faire Preise ab 599€.',
    url: 'https://derhuber.com/webdesign-agentur-heidelberg',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Webdesign Heidelberg - Freelancer Alternative zur Agentur',
      },
    ],
  },
}

const advantages = [
  {
    icon: Users,
    title: 'Persönlicher Ansprechpartner',
    description: 'Ein fester Kontakt statt wechselnder Projektmanager. Sie sprechen immer direkt mit dem, der Ihre Website entwickelt.',
  },
  {
    icon: Award,
    title: 'Agentur-Qualität, faire Preise',
    description: 'Professionelle Ergebnisse ohne Agentur-Overhead. Sie zahlen für Arbeit, nicht für große Büros und Hierarchien.',
  },
  {
    icon: Clock,
    title: 'Schnelle Umsetzung',
    description: 'Keine langen Abstimmungswege. Von der Idee zur fertigen Website in 4-6 Wochen statt Monaten.',
  },
  {
    icon: MessageCircle,
    title: 'Direkte Kommunikation',
    description: 'Kurze Reaktionszeiten, klare Absprachen. Fragen werden schnell beantwortet, Feedback sofort umgesetzt.',
  },
  {
    icon: Target,
    title: 'Fokus auf Ihre Ziele',
    description: 'Kein Verkauf von Leistungen, die Sie nicht brauchen. Ihre Website wird so gebaut, dass sie Ergebnisse liefert.',
  },
  {
    icon: Lightbulb,
    title: 'Technische Expertise',
    description: 'Moderne Technologien (React, Next.js, WordPress) für schnelle, sichere und zukunftsfähige Websites.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Erstgespräch',
    description: 'Wir besprechen Ihre Ziele, Zielgruppe und Vorstellungen. Kostenlos und unverbindlich.',
  },
  {
    step: '02',
    title: 'Angebot & Konzept',
    description: 'Sie erhalten ein transparentes Festpreisangebot mit klarem Projektplan.',
  },
  {
    step: '03',
    title: 'Design & Entwicklung',
    description: 'Ich entwickle Ihre Website und zeige Ihnen regelmäßig den Fortschritt.',
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'Ihre Website geht live. Danach bin ich weiter für Sie da – bei Fragen und Änderungen.',
  },
]

const faqData = [
  {
    question: 'Warum einen Freelancer statt einer Webdesign Agentur?',
    answer: 'Bei einem Freelancer haben Sie direkten Kontakt zum Entwickler – keine Projektmanager, keine Hierarchien. Das spart Zeit und Geld. Sie zahlen für die Arbeit, nicht für Agentur-Overhead wie große Büros oder Vertriebsteams. Trotzdem erhalten Sie professionelle Qualität.',
  },
  {
    question: 'Ist die Qualität bei einem Freelancer genauso gut?',
    answer: 'Ja. Viele Freelancer haben jahrelange Agentur-Erfahrung und arbeiten mit denselben Tools und Technologien. Der Unterschied: Sie bekommen einen Experten, der sich voll auf Ihr Projekt konzentriert – statt eines Junior-Entwicklers, der 10 Projekte gleichzeitig betreut.',
  },
  {
    question: 'Was kostet Webdesign beim Freelancer vs. Agentur?',
    answer: 'Agenturen berechnen oft 3.000-10.000€ für eine KMU-Website. Als Freelancer biete ich vergleichbare Qualität ab 599€. Der Grund: Ich habe keine Bürokosten, kein Vertriebsteam und keine Hierarchien zu finanzieren.',
  },
  {
    question: 'Für welche Unternehmen ist das Angebot geeignet?',
    answer: 'Ich arbeite mit kleinen und mittleren Unternehmen aus Heidelberg und dem Rhein-Neckar-Kreis: Handwerker, Dienstleister, Ärzte, Restaurants, Coaches, Start-ups. Unternehmen, die professionelle Websites brauchen, aber kein Enterprise-Budget haben.',
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

export default function WebdesignAgenturHeidelbergPage() {
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
                <span className="text-brand-600 text-sm font-semibold uppercase tracking-wide">Freelancer statt Agentur</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Webdesign Agentur Heidelberg gesucht?
              </h1>

              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Als <strong>Freelancer</strong> biete ich Ihnen Agentur-Qualität ohne Agentur-Preise.
                Direkter Kontakt, faire Preise ab 599€, schnelle Umsetzung im Rhein-Neckar-Kreis.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="group bg-brand-400 hover:bg-brand-500 text-white px-8 py-4 rounded-lg font-semibold text-base transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  Kostenlose Beratung anfragen
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/#portfolio"
                  className="glass-card hover:bg-white text-slate-700 border border-brand-400/20 hover:border-brand-400/40 px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center"
                >
                  Projekte ansehen
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none text-slate-600">
                <p>
                  Sie suchen eine <strong>Webdesign Agentur in Heidelberg</strong>? Bevor Sie bei einer
                  klassischen Agentur anfragen, sollten Sie eine Alternative kennen: Als <strong>Freelancer</strong>
                  entwickle ich professionelle Websites für KMU im <strong>Rhein-Neckar-Kreis</strong> –
                  mit derselben Qualität, aber ohne den Agentur-Overhead.
                </p>

                <p>
                  Der Unterschied: Sie arbeiten direkt mit mir – dem Webdesigner, der Ihre Website auch
                  tatsächlich umsetzt. Keine Projektmanager, keine Account-Manager, keine Hierarchien.
                  Das Ergebnis: Schnellere Abstimmung, niedrigere Kosten und eine Website, die wirklich
                  zu Ihrem Unternehmen passt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Freelancer vs. Agentur: Ihre Vorteile
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Warum immer mehr KMU einen Freelancer statt einer Agentur wählen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-xl p-8 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-200"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
                    <advantage.icon size={24} className="text-brand-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{advantage.title}</h3>
                  <p className="text-slate-600">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                So arbeiten wir zusammen
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Von der ersten Idee bis zur fertigen Website – transparent und strukturiert.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-14 h-14 rounded-full bg-brand-400 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                Meine Leistungen
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  'Webdesign & UI/UX Design',
                  'Responsive Website-Entwicklung',
                  'WordPress Websites',
                  'React & Next.js Entwicklung',
                  'Landing Pages für Kampagnen',
                  'Suchmaschinenoptimierung (SEO)',
                  'Website-Wartung & Support',
                  'Beratung & Konzeption',
                ].map((service, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                    <CheckCircle2 className="text-brand-500 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                Häufige Fragen
              </h2>

              <div className="space-y-6">
                {faqData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
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
              Lassen Sie uns über Ihr Projekt sprechen
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Kostenloses Erstgespräch: Wir besprechen Ihre Ziele und ich zeige Ihnen,
              wie ich Ihnen helfen kann.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-brand-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              Erstgespräch vereinbaren
              <ArrowRight size={20} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
