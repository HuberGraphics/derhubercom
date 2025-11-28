import React from 'react';

const Impressum: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Impressum</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">

          {/* Diensteanbieter */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Diensteanbieter</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700">
                Christian Huber<br />
                Odenwaldstraße 24<br />
                69124 Heidelberg<br />
                Deutschland
              </p>
            </div>
          </section>

          {/* Kontaktmöglichkeiten */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontaktmöglichkeiten</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700">
                E-Mail-Adresse: <a href="mailto:christian@derhuber.com" className="text-blue-600 hover:text-blue-800">christian@derhuber.com</a><br />
                Telefon: <a href="tel:015129515056" className="text-blue-600 hover:text-blue-800">015129515056</a>
              </p>
              <p className="text-gray-700 mt-2">
                Für konkrete Projektanfragen besuchen Sie auch gerne unser Kontaktformular oder informieren Sie sich über unsere CMS-Entwicklungsleistungen.
              </p>
            </div>
          </section>

          {/* Social Media und andere Onlinepräsenzen */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Social Media und andere Onlinepräsenzen</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700">
                Dieses Impressum gilt auch für folgende Social-Media-Präsenzen und Onlineprofile:
              </p>
              <p className="text-gray-700 mt-2">
                Aktuell werden keine spezifischen Social Media Profile aktiv beworben, auf die sich dieses Impressum direkt erstrecken müsste.
              </p>
            </div>
          </section>

          {/* Haftungsausschluss (Disclaimer) */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Haftungsausschluss (Disclaimer)</h2>

            <div className="space-y-6">
              {/* Haftung für Inhalte */}
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Haftung für Inhalte</h3>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>
                </div>
              </div>

              {/* Haftung für Links */}
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Haftung für Links</h3>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700">
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>
                </div>
              </div>

              {/* Urheberrecht */}
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Urheberrecht</h3>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Weitere Informationen */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Weitere Informationen</h2>
            <div className="flex flex-wrap gap-4">
              <a href="/datenschutz" className="text-blue-600 hover:text-blue-800 underline">
                → Datenschutzerklärung
              </a>
              <span className="text-gray-500">SEO-Optimierung</span>
              <span className="text-gray-500">DSGVO-konforme Websites</span>
              <span className="text-gray-500">Mobile Optimierung</span>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Impressum;