import React from 'react';

const Datenschutz: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Datenschutzerklärung</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">

          {/* Präambel */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Präambel</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700">
                Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten" bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z. B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als "Onlineangebot").
              </p>
              <p className="text-gray-700 mt-2">
                Die verwendeten Begriffe sind nicht geschlechtsspezifisch.
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Stand:</strong> 29. Mai 2025
              </p>
            </div>
          </section>

          {/* Inhaltsübersicht */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Inhaltsübersicht</h2>
            <div className="prose prose-gray max-w-none">
              <ol className="list-decimal list-inside text-gray-700 space-y-1">
                <li>Präambel</li>
                <li>Verantwortlicher</li>
                <li>Übersicht der Verarbeitungen</li>
                <li>Maßgebliche Rechtsgrundlagen</li>
                <li>Sicherheitsmaßnahmen</li>
                <li>Übermittlung von personenbezogenen Daten</li>
                <li>Internationale Datentransfers</li>
                <li>Allgemeine Informationen zur Datenspeicherung und Löschung</li>
                <li>Rechte der betroffenen Personen</li>
                <li>Bereitstellung des Onlineangebots und Webhosting</li>
                <li>Einsatz von Cookies</li>
                <li>Kontakt- und Anfrageverwaltung</li>
                <li>Änderung und Aktualisierung</li>
                <li>Begriffsdefinitionen</li>
              </ol>
            </div>
          </section>

          {/* Verantwortlicher */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Verantwortlicher</h2>
            <div className="prose prose-gray max-w-none">
              <div className="text-gray-700">
                <p>Christian Huber</p>
                <p>Odenwaldstraße 24</p>
                <p>69124 Heidelberg</p>
                <p>Deutschland</p>
                <p className="mt-2">
                  E-Mail-Adresse: <a href="mailto:christian@derhuber.com" className="text-blue-600 hover:text-blue-800">christian@derhuber.com</a>
                </p>
                <p>
                  Impressum: <a href="/impressum" className="text-blue-600 hover:text-blue-800">derhuber.com/impressum</a>
                </p>
              </div>
            </div>
          </section>

          {/* Datenschutz bei unseren Services */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Datenschutz bei unseren Services</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700">
                Wir legen besonderen Wert auf Datenschutz bei all unseren digitalen Dienstleistungen:
              </p>
              <div className="flex flex-wrap gap-4 mt-3">
                <span className="text-blue-600 hover:text-blue-800 underline">→ DSGVO-konforme Websites</span>
                <span className="text-blue-600 hover:text-blue-800 underline">→ Sichere Kontaktformulare</span>
                <span className="text-blue-600 hover:text-blue-800 underline">→ Datenschutzkonforme CMS-Systeme</span>
                <span className="text-blue-600 hover:text-blue-800 underline">→ DSGVO-konformes SEO</span>
              </div>
            </div>
          </section>

          {/* Übersicht der Verarbeitungen */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Übersicht der Verarbeitungen</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700">
                Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.
              </p>

              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Arten der verarbeiteten Daten</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Kontaktdaten</li>
                    <li>Inhaltsdaten</li>
                    <li>Nutzungsdaten</li>
                    <li>Meta-, Kommunikations- und Verfahrensdaten</li>
                    <li>Protokolldaten</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Kategorien betroffener Personen</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Kommunikationspartner</li>
                    <li>Nutzer</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Zwecke der Verarbeitung</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Kontaktanfragen und Kommunikation</li>
                    <li>Verwaltung und Beantwortung von Anfragen</li>
                    <li>Feedback</li>
                    <li>Marketing</li>
                    <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit</li>
                    <li>Informationstechnische Infrastruktur</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Maßgebliche Rechtsgrundlagen */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Maßgebliche Rechtsgrundlagen</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700">
                <strong>Maßgebliche Rechtsgrundlagen nach der DSGVO:</strong> Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können.
              </p>

              <div className="mt-4">
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    <strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO):</strong> Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten erfordern, überwiegen.
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 mt-4">
                <strong>Nationale Datenschutzregelungen in Deutschland:</strong> Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG).
              </p>
            </div>
          </section>

          {/* Sicherheitsmaßnahmen */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sicherheitsmaßnahmen</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700">
                Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.
              </p>

              <p className="text-gray-700 mt-2">
                Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.
              </p>

              <p className="text-gray-700 mt-2">
                <strong>TLS/SSL-Verschlüsselung:</strong> Um die Daten der Nutzer, die über unsere Online-Dienste übertragen werden, zu schützen, verwenden wir TLS/SSL-Verschlüsselung. Sie erkennen verschlüsselte Verbindungen an dem Präfix https:// in der Adresszeile Ihres Browsers.
              </p>
            </div>
          </section>

          {/* Weitere Abschnitte mit kompakter Darstellung */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Übermittlung von personenbezogenen Daten</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700">
                Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass die Daten an andere Stellen, Unternehmen, rechtlich selbstständige Organisationseinheiten oder Personen übermittelt oder sie ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten können z. B. mit IT-Aufgaben beauftragte Dienstleister oder Anbieter von Diensten und Inhalten, die in eine Webseite eingebunden werden, gehören. In solchen Fällen beachten wir die gesetzlichen Vorgaben und schließen insbesondere entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den Empfängern Ihrer Daten ab.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Internationale Datentransfers</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700">
                <strong>Datenverarbeitung in Drittländern:</strong> Sofern wir Daten in einem Drittland (d. h., außerhalb der Europäischen Union (EU), des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder die Verarbeitung im Rahmen der Inanspruchnahme von Diensten Dritter oder der Offenlegung bzw. Übermittlung von Daten an andere Personen, Stellen oder Unternehmen stattfindet, erfolgt dies nur im Einklang mit den gesetzlichen Vorgaben. Falls das Datenschutzniveau in dem Drittland mittels eines Angemessenheitsbeschlusses anerkannt wurde (Art. 45 DSGVO), dient dieser als Grundlage des Datentransfers. Im Übrigen erfolgen Datentransfers nur dann, wenn das Datenschutzniveau anderweitig gesichert ist, insbesondere durch Standardvertragsklauseln (Art. 46 Abs. 2 lit. c) DSGVO), ausdrückliche Einwilligung oder im Fall vertraglicher oder gesetzlich erforderlicher Übermittlung (Art. 49 Abs. 1 DSGVO).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Allgemeine Informationen zur Datenspeicherung und Löschung</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700">
                Wir löschen personenbezogene Daten, die wir verarbeiten, nach Maßgabe der gesetzlichen Vorgaben, sobald deren Einwilligungen widerrufen werden oder sonstige Erlaubnisse entfallen (z. B. wenn der Zweck der Verarbeitung dieser Daten entfallen ist oder sie für den Zweck nicht erforderlich sind). Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung auf diese Zwecke beschränkt. D. h., die Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z. B. für Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen oder deren Speicherung zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person erforderlich ist.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Rechte der betroffenen Personen</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700">
                Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
              </p>

              <div className="mt-4 space-y-3">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Widerspruchsrecht:</h3>
                  <p className="text-gray-700">
                    Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Widerrufsrecht bei Einwilligungen:</h3>
                  <p className="text-gray-700">
                    Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Auskunftsrecht:</h3>
                  <p className="text-gray-700">
                    Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Recht auf Berichtigung:</h3>
                  <p className="text-gray-700">
                    Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Recht auf Löschung und Einschränkung der Verarbeitung:</h3>
                  <p className="text-gray-700">
                    Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Recht auf Datenübertragbarkeit:</h3>
                  <p className="text-gray-700">
                    Sie haben das Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu fordern.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Beschwerde bei Aufsichtsbehörde:</h3>
                  <p className="text-gray-700">
                    Sie haben unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die Vorgaben der DSGVO verstößt.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Service-spezifische Abschnitte */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Bereitstellung des Onlineangebots und Webhosting</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700">
                Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und Funktionen unserer Online-Dienste an den Browser oder das Endgerät der Nutzer zu übermitteln.
              </p>

              <div className="mt-4 space-y-2">
                <p><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z. B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, Einwilligungsstatus); Protokolldaten (z. B. Logfiles betreffend Logins oder den Abruf von Daten oder Zugriffszeiten).</p>
                <p><strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).</p>
                <p><strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit; Informationstechnische Infrastruktur (Betrieb und Bereitstellung von Informationssystemen und technischen Geräten (Computer, Server etc.).).</p>
                <p><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Einsatz von Cookies</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700">
                Cookies sind kleine Textdateien, bzw. sonstige Speichervermerke, die Informationen auf Endgeräten speichern und Informationen aus den Endgeräten auslesen. Z. B. um den Login-Status in einem Nutzerkonto, einen Warenkorbinhalt in einem E-Shop, die aufgerufenen Inhalte oder verwendete Funktionen eines Onlineangebotes zu speichern. Cookies können ferner zu unterschiedlichen Zwecken eingesetzt werden, z. B. zu Zwecken der Funktionsfähigkeit, Sicherheit und Komfort von Onlineangeboten sowie der Erstellung von Analysen der Besucherströme.
              </p>

              <p className="text-gray-700 mt-2">
                <strong>Hinweise zur Einwilligung:</strong> Wir setzen Cookies im Einklang mit den gesetzlichen Vorschriften ein. Daher holen wir von den Nutzern eine vorhergehende Einwilligung ein, außer wenn diese gesetzlich nicht gefordert ist. Eine Einwilligung ist insbesondere nicht notwendig, wenn das Speichern und das Auslesen der Informationen, also auch von Cookies, unbedingt erforderlich sind, um dem den Nutzern einen von ihnen ausdrücklich gewünschten Telemediendienst (also unser Onlineangebot) zur Verfügung zu stellen.
              </p>

              <div className="mt-4 space-y-2">
                <p><strong>Verarbeitete Datenarten:</strong> Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, Einwilligungsstatus).</p>
                <p><strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).</p>
                <p><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontakt- und Anfrageverwaltung</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700">
                Bei der Kontaktaufnahme mit uns (z. B. per Post, Kontaktformular, E-Mail, Telefon oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.
              </p>

              <div className="mt-4 space-y-2">
                <p><strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z. B. E-Mail, Telefonnummern); Inhaltsdaten (z. B. Eingaben in Onlineformularen); Nutzungsdaten (z. B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, Einwilligungsstatus).</p>
                <p><strong>Betroffene Personen:</strong> Kommunikationspartner.</p>
                <p><strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und Kommunikation; Verwaltung und Beantwortung von Anfragen; Feedback (z. B. Sammeln von Feedback via Online-Formular).</p>
                <p><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Änderung und Aktualisierung</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700">
                Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z. B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich wird.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Begriffsdefinitionen</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700">
                In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser Datenschutzerklärung verwendeten Begrifflichkeiten. Soweit die Begriffe gesetzlich definiert sind, gelten deren gesetzliche Definitionen. Die nachfolgenden Erläuterungen sollen dagegen vor allem dem Verständnis dienen.
              </p>

              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Personenbezogene Daten:</h3>
                  <p className="text-gray-700">
                    "Personenbezogene Daten" sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden "betroffene Person") beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung (z. B. Cookie) oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Verantwortlicher:</h3>
                  <p className="text-gray-700">
                    Als "Verantwortlicher" wird die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Verarbeitung:</h3>
                  <p className="text-gray-700">
                    "Verarbeitung" ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch jeden Umgang mit Daten, sei es das Erheben, das Auswerten, das Speichern, das Übermitteln oder das Löschen.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Datenschutz;