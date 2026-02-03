'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, CheckCircle2, Star, Zap, Shield, Phone, Mail, AlertCircle, PhoneIncoming, MessageSquare, Calendar, DollarSign, Users, Headphones, Bot, Sparkles } from 'lucide-react';
import LandingFooter from './LandingFooter';
import ContactForm from './ContactForm';

const LandingKiRezeptionist: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const totalSeconds = prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;

        if (totalSeconds <= 0) {
          return { hours: 23, minutes: 59, seconds: 59 };
        }

        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60
        };
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, '0');

  return (
    <div className="bg-gradient-to-br from-slate-50 to-brand-50">
          <div className="bg-gradient-to-r from-brand-500 to-brand-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <Sparkles size={16} className="animate-pulse" />
          <span>NEU: KI-REZEPTIONIST FÜR IHR UNTERNEHMEN - 24 STUNDEN AM TAG FÜR SIE ERREICHBAR!</span>
          <Sparkles size={16} className="animate-pulse" />
        </div>
      </div>

      <section className="py-16 lg:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white border border-brand-200 rounded-full px-6 py-3 mb-8 shadow-lg">
              <Bot className="text-brand-500" size={20} />
              <span className="text-brand-700 font-bold text-sm tracking-wide uppercase">KI-Assistent</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
              <span className="block text-slate-900 mb-2">Ihr persönlicher</span>
              <span className="block text-brand-500 mb-2">KI-REZEPTIONIST</span>
              <span className="block text-slate-900">24/7 für Sie am Telefon.</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Verpassen Sie nie wieder einen Anruf. Der KI-Rezeptionist nimmt Anrufe entgegen, beantwortet Fragen und vereinbart Termine – rund um die Uhr. Spart Ihnen Geld, Zeit und Stress.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-slate-600">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <PhoneIncoming className="text-green-500" size={18} />
                <span className="font-medium">24/7 Erreichbar</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <DollarSign className="text-green-500" size={18} />
                <span className="font-medium">Bis zu 70% Kosten sparen</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <CheckCircle2 className="text-green-500" size={18} />
                <span className="font-medium">Keine verpassten Anrufe</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Bereit für den Einstieg?</h3>
              <p className="text-slate-600">Sichern Sie sich das Einführungsangebot</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-brand-400 to-brand-500 text-white rounded-xl p-4 text-center">
                <div className="text-3xl font-bold mb-1">{formatTime(timeLeft.hours)}</div>
                <div className="text-sm opacity-90">Stunden</div>
              </div>
              <div className="bg-gradient-to-br from-brand-400 to-brand-500 text-white rounded-xl p-4 text-center">
                <div className="text-3xl font-bold mb-1">{formatTime(timeLeft.minutes)}</div>
                <div className="text-sm opacity-90">Minuten</div>
              </div>
              <div className="bg-gradient-to-br from-brand-400 to-brand-500 text-white rounded-xl p-4 text-center">
                <div className="text-3xl font-bold mb-1">{formatTime(timeLeft.seconds)}</div>
                <div className="text-sm opacity-90">Sekunden</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="#order-form"
              className="w-full sm:w-auto bg-gradient-to-r from-brand-400 to-brand-500 hover:from-brand-300 hover:to-brand-400 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center group"
            >
              KI-REZEPTIONIST JETZT EINRICHTEN
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-base" />
            </a>
            <div className="text-center text-slate-600">
              <div className="text-3xl font-bold text-brand-500">ab €199</div>
              <div className="text-sm text-slate-400">statt €399 monatlich</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Was der KI-Rezeptionist für Sie tut
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ihr virtueller Mitarbeiter, der niemals müde wird und immer freundlich antwortet
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-gradient-to-br from-green-400 to-green-500 text-white rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Anrufe entgegennehmen</h3>
              <p className="text-slate-600 mb-4">Jeder Anruf wird professionell entgegengenommen – auch nachts, am Wochenende und an Feiertagen. Kein Anrufer wartet oder legt frustriert auf.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                  <span>Persönlicher Willkommensgruß</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                  <span>Freundlich & kompetent</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                  <span>Multilingual möglich</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fragen beantworten</h3>
              <p className="text-slate-600 mb-4">Der KI-Assistent kennt Ihr Unternehmen und beantwortet häufige Fragen sofort – ohne Warteschleife und ohne nerviges "Bitte warten Sie".</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                  <span>Öffnungszeiten & Preise</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                  <span>Leistungen & Services</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                  <span>Wegbeschreibungen</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-gradient-to-br from-purple-400 to-purple-500 text-white rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Calendar size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Termine vereinbaren</h3>
              <p className="text-slate-600 mb-4">Der KI-Rezeptionist prüft Verfügbarkeiten und trägt Termine direkt in Ihren Kalender ein – vollautomatisch und fehlerfrei.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                  <span>Automatische Kalendersync</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                  <span>Bestätigungen per SMS/E-Mail</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                  <span>Erinnerungen automatisch</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 to-brand-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Zahlen, die überzeugen
            </h2>
            <p className="text-xl text-slate-600">Was unsere Kunden durch den KI-Rezeptionisten sparen</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-brand-500 mb-2">€4.500</div>
              <div className="text-slate-600 font-medium">durchschnittliche Ersparnis pro Monat</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-brand-500 mb-2">95%</div>
              <div className="text-slate-600 font-medium">der Anrufe werden automatisch bearbeitet</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-brand-500 mb-2">0</div>
              <div className="text-slate-600 font-medium">verpasste Anrufe mehr</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-brand-500 mb-2">24/7</div>
              <div className="text-slate-600 font-medium">Erreichbarkeit garantiert</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Für wen ist der KI-Rezeptionist?
            </h2>
            <p className="text-xl text-slate-600">Besonders geeignet für</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 text-center">
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                🏢
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Handwerksbetriebe</h3>
              <p className="text-slate-600 text-sm">Immer erreichbar für Anfragen, auch wenn Sie auf der Baustelle sind</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 text-center">
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                🏥
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Ärzte & Praxen</h3>
              <p className="text-slate-600 text-sm">Terminbuchungen rund um die Uhr, ohne belegte Leitungen</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 text-center">
              <div className="bg-gradient-to-br from-purple-400 to-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                🛒
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Online-Shops</h3>
              <p className="text-slate-600 text-sm">Sofortige Antworten zu Bestellungen, Lieferzeiten & Rückgaben</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 text-center">
              <div className="bg-gradient-to-br from-green-400 to-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                🏠
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Immobilien</h3>
              <p className="text-slate-600 text-sm">Anrufe zu Besichtigungen, Verfügbarkeiten & Preisen automatisch beantworten</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 text-center">
              <div className="bg-gradient-to-br from-pink-400 to-pink-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                💼
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Dienstleister</h3>
              <p className="text-slate-600 text-sm">Keine Anrufe mehr verpassen, neue Kunden gewinnen</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 text-center">
              <div className="bg-gradient-to-br from-teal-400 to-teal-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                🍽️
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Gastronomie</h3>
              <p className="text-slate-600 text-sm">Reservierungen annehmen, Fragen zu Speisen & Öffnungszeiten beantworten</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 to-brand-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              So einfach funktioniert's
            </h2>
            <p className="text-xl text-slate-600">In nur 4 Schritten zu Ihrem KI-Rezeptionisten</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Beratung</h3>
              <p className="text-slate-600 text-sm">Wir klären Ihre Anforderungen in einem 15-minütigen Call</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Einrichtung</h3>
              <p className="text-slate-600 text-sm">Wir richten den KI-Assistenten mit Ihrem Wissen ein</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-400 to-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Testphase</h3>
              <p className="text-slate-600 text-sm">Gemeinsam testen wir den Assistenten und optimieren</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-400 to-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Go Live!</h3>
              <p className="text-slate-600 text-sm">Ihr KI-Rezeptionist ist 24/7 für Sie im Einsatz</p>
            </div>
          </div>
        </div>
      </section>

      <section id="order-form" className="py-16 bg-gradient-to-br from-slate-50 to-brand-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Starten Sie jetzt mit Ihrem KI-Rezeptionisten
              </h2>
              <p className="text-xl text-slate-600 mb-4">
                Sichern Sie sich das Einführungsangebot
              </p>
              <div className="bg-gradient-to-r from-brand-400 to-brand-500 text-white rounded-xl p-4 inline-block">
                <div className="text-2xl font-bold">ab €199/Monat</div>
                <div className="text-sm opacity-90 line-through">statt €399</div>
                <div className="text-xs mt-1">50% Rabatt im ersten Monat!</div>
              </div>
            </div>

            <div className="bg-brand-50 border border-brand-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle size={20} className="text-brand-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-brand-700">
                  <strong>Kostenloses Erstgespräch:</strong> In einem 15-minütigen Call klären wir, wie der KI-Rezeptionist optimal für Sie funktioniert.
                </div>
              </div>
            </div>

            <ContactForm idPrefix="ki" />

            <p className="text-xs text-slate-500 text-center mt-6">
              Mit der Bestellung stimmen Sie unseren AGB und Datenschutzbestimmungen zu.
              Keine versteckten Kosten - 14 Tage kostenlos testen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-brand-400 to-brand-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für Ihren KI-Rezeptionisten?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Vereinbaren Sie jetzt Ihr kostenloses Erstgespräch und erfahren Sie, wie Sie nie wieder einen Anruf verpassen
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:015129515056"
              className="bg-white text-brand-500 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3"
            >
              <Phone size={20} />
              0151 2951 5056
            </a>
            <a
              href="mailto:christian@derhuber.com"
              className="bg-white/20 backdrop-blur hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 border border-white/30 flex items-center justify-center gap-3"
            >
              <Mail size={20} />
              E-Mail schreiben
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const LandingKiRezeptionistWithFooter: React.FC = () => {
  return (
    <>
      <LandingKiRezeptionist />
      <LandingFooter />
    </>
  );
};

export default LandingKiRezeptionistWithFooter;
