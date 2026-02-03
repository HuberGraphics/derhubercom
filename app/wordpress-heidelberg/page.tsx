import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CheckCircle2, ArrowRight, Globe, Wrench, Shield, Zap, RefreshCw, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'WordPress Heidelberg | WordPress Websites & Wartung',
  description: 'WordPress Websites in Heidelberg: Professionelle Website-Erstellung, Wartung, Sicherheit und Migration. Ihr lokaler WordPress-Experte im Rhein-Neckar-Kreis.',
  alternates: {
    canonical: 'https://derhuber.com/wordpress-heidelberg',
  },
  openGraph: {
    title: 'WordPress Heidelberg | WordPress Websites & Wartung',
    description: 'WordPress Websites in Heidelberg: Professionelle Website-Erstellung, Wartung, Sicherheit und Migration. Ihr lokaler WordPress-Experte im Rhein-Neckar-Kreis.',
    url: 'https://derhuber.com/wordpress-heidelberg',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WordPress Heidelberg - Der Huber',
      },
    ],
  },
}

const wordpressServices = [
  {
    icon: Globe,
    title: 'WordPress Website-Erstellung',
    description: 'Professionelle WordPress-Websites mit bewährten Themes. Schnell online, einfach zu pflegen, perfekt für KMU.',
  },
  {
    icon: RefreshCw,
    title: 'WordPress Wartung & Updates',
    description: 'Regelmäßige Updates für WordPress, Themes und Plugins. Backups inklusive. Ihre Website bleibt aktuell.',
  },
  {
    icon: Shield,
    title: 'WordPress Sicherheit',
    description: 'Absicherung gegen Hacker und Malware. Firewall-Einrichtung, Sicherheits-Plugins und regelmäßige Scans.',
  },
  {
    icon: Zap,
    title: 'WordPress Migration',
    description: 'Umzug von anderen Systemen zu WordPress oder Wechsel des Hosters. Ohne Datenverlust, ohne Ausfallzeit.',
  },
  {
    icon: Settings,
    title: 'Anpassungen & Erweiterungen',
    description: 'Kleine Änderungen, neue Seiten, Plugin-Einrichtung. Ich passe Ihre bestehende WordPress-Site an.',
  },
  {
    icon: Wrench,
    title: 'Problemlösung & Support',
    description: 'WordPress macht Probleme? Ich finde und behebe Fehler schnell. Persönlicher Support ohne Warteschleifen.',
  },
]

const faqData = [
  {
    question: 'Was kostet eine WordPress-Website in Heidelberg?',
    answer: 'Eine WordPress-Website beginnt ab 599€ für einfache Seiten. Der genaue Preis hängt vom Umfang ab – Anzahl der Seiten, gewünschte Funktionen, etc. Im Erstgespräch besprechen wir Ihre Anforderungen und Sie erhalten ein transparentes Festpreisangebot.',
  },
  {
    question: 'Warum WordPress statt Baukasten wie Wix?',
    answer: 'WordPress bietet volle Kontrolle über Design und Funktionen. Sie sind unabhängig von einem Anbieter, können jederzeit den Hoster wechseln und haben keine monatlichen Zwangsabos. Langfristig günstiger und flexibler.',
  },
  {
    question: 'Kann ich meine WordPress-Website selbst bearbeiten?',
    answer: 'Ja! WordPress ist bekannt für seine einfache Bedienung. Nach Fertigstellung erkläre ich Ihnen das System, sodass Sie Texte, Bilder und Blogbeiträge eigenständig ändern können.',
  },
  {
    question: 'Bieten Sie auch laufende WordPress-Wartung an?',
    answer: 'Ja, ich biete Wartungspakete an: regelmäßige Updates, Backups, Sicherheitschecks und schnellen Support bei Problemen. So bleibt Ihre Website sicher und aktuell.',
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

export default function WordPressHeidelbergPage() {
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
                <span className="text-brand-600 text-sm font-semibold uppercase tracking-wide">WordPress Experte</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                WordPress Websites Heidelberg
              </h1>

              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Professionelle <strong>WordPress-Websites</strong> im Rhein-Neckar-Kreis.
                Website-Erstellung, Wartung, Sicherheit und Migration von Ihrem lokalen Experten.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="group bg-brand-400 hover:bg-brand-500 text-white px-8 py-4 rounded-lg font-semibold text-base transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  Kostenlos beraten lassen
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/#portfolio"
                  className="glass-card hover:bg-white text-slate-700 border border-brand-400/20 hover:border-brand-400/40 px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center"
                >
                  Referenzen ansehen
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                WordPress Leistungen
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Von der neuen Website bis zur laufenden Wartung –
                ich kümmere mich um Ihre WordPress-Präsenz.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {wordpressServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
                    <service.icon size={24} className="text-brand-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why WordPress Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                Warum WordPress?
              </h2>

              <div className="prose prose-lg max-w-none text-slate-600">
                <p>
                  <strong>WordPress</strong> ist das weltweit meistgenutzte Content-Management-System und betreibt
                  über 40% aller Websites. Für kleine und mittlere Unternehmen in <strong>Heidelberg</strong> und
                  dem <strong>Rhein-Neckar-Kreis</strong> bietet es die perfekte Balance aus Flexibilität,
                  Benutzerfreundlichkeit und Kosteneffizienz.
                </p>

                <p>
                  Als <strong>WordPress-Experte in Heidelberg</strong> helfe ich Ihnen bei der Erstellung neuer
                  Websites und der Pflege bestehender Installationen. Ob Firmenwebsite, Blog oder Portfolio –
                  mit WordPress sind Sie flexibel und können Inhalte selbst verwalten.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mt-12">
                {[
                  'Einfache Bedienung ohne Programmierkenntnisse',
                  'Tausende Erweiterungen und Plugins verfügbar',
                  'SEO-freundlich für bessere Google-Rankings',
                  'Volle Kontrolle über Ihre Website-Daten',
                  'Skalierbar von Blog bis Enterprise-Lösung',
                  'Große Community und regelmäßige Updates',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">{benefit}</span>
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
                Häufige Fragen zu WordPress
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
              Bereit für Ihre WordPress-Website?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns in einem kostenlosen Erstgespräch besprechen,
              wie ich Ihnen mit WordPress helfen kann.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-brand-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              Jetzt Kontakt aufnehmen
              <ArrowRight size={20} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
