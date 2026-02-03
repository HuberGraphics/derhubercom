'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, CheckCircle2, Star, Zap, Shield, Phone, Mail, AlertCircle } from 'lucide-react';
import LandingFooter from './LandingFooter';
import ContactForm from './ContactForm';

const Landing24h: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    // Countdown timer
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
      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-brand-500 to-brand-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <AlertCircle size={16} className="animate-pulse" />
          <span>LIMITIERTES ANGEBOT: Nur noch 3 Plätze für diese Woche verfügbar!</span>
          <AlertCircle size={16} className="animate-pulse" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-brand-200 rounded-full px-6 py-3 mb-8 shadow-lg">
              <Zap className="text-brand-500" size={20} />
              <span className="text-brand-700 font-bold text-sm tracking-wide uppercase">Express-Service</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
              <span className="block text-slate-900 mb-2">Ihre Website in</span>
              <span className="block text-brand-500 mb-2">24 STUNDEN</span>
              <span className="block text-slate-900">online & bereit.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Keine Wartezeiten mehr! Professionelle Website, die sofort Kunden überzeugt.
              Perfekt für Gründer und Unternehmen, die schnell starten wollen.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-slate-600">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <CheckCircle2 className="text-green-500" size={18} />
                <span className="font-medium">100% Zufriedenheit</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Clock className="text-blue-500" size={18} />
                <span className="font-medium">24h Liefergarantie</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Shield className="text-purple-500" size={18} />
                <span className="font-medium">Mobile-First</span>
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">⏰ Zeit läuft!</h3>
              <p className="text-slate-600">Sichern Sie sich den 24h-Express-Service zum Aktionspreis</p>
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="#order-form"
              className="w-full sm:w-auto bg-gradient-to-r from-brand-400 to-brand-500 hover:from-brand-300 hover:to-brand-400 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center group"
            >
              JETZT STARTEN - 24H SERVICE
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-base" />
            </a>
            <div className="text-center text-slate-600">
              <div className="text-3xl font-bold text-brand-500">€499</div>
              <div className="text-sm line-through text-slate-400">statt €999</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Alles in 24 Stunden inklusive
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Kein Kompromiss bei Qualität - Blitzschnelle Umsetzung mit Profi-Resultat
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 text-white rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Express-Design</h3>
              <p className="text-slate-600 mb-4">Professionelles Webdesign nach Ihren Wünschen mit modernster Technik und bester User Experience.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                  <span>Modern & Responsive</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                  <span>Ihre Corporate Identity</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                  <span>Mobile-First Design</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">SEO-Optimiert</h3>
              <p className="text-slate-600 mb-4">Direkt bei Google sichtbar mit optimaler OnPage-Optimierung für besseres Ranking.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                  <span>Google Analytics Setup</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                  <span>Meta Tags & Strukturdaten</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                  <span>Ladezeit-Optimierung</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-gradient-to-br from-green-400 to-green-500 text-white rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Sicherheit & Support</h3>
              <p className="text-slate-600 mb-4">Datenschutzkonform mit DSGVO-Check und 30 Tagen technischem Support inklusive.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                  <span>DSGVO-Konform</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                  <span>SSL-Zertifikat</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                  <span>30 Tage Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-brand-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              So einfach funktioniert's
            </h2>
            <p className="text-xl text-slate-600">Von der Bestellung zur Live-Website in nur 4 Schritten</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Bestellung</h3>
              <p className="text-slate-600 text-sm">Formular ausfüllen & direkt starten</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Kurzes Briefing</h3>
              <p className="text-slate-600 text-sm">Wir klären Ihre Wünsche im 15-minütigen Call</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-400 to-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Express-Umsetzung</h3>
              <p className="text-slate-600 text-sm">Ihre Website wird in Rekordzeit erstellt</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-400 to-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Go Live!</h3>
              <p className="text-slate-600 text-sm">Ihre Website ist online & einsatzbereit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section id="order-form" className="py-16 bg-gradient-to-br from-slate-50 to-brand-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Sichern Sie sich jetzt Ihren 24h-Platz
              </h2>
              <p className="text-xl text-slate-600 mb-4">
                Nur 3 Plätze verfügbar diese Woche!
              </p>
              <div className="bg-gradient-to-r from-brand-400 to-brand-500 text-white rounded-xl p-4 inline-block">
                <div className="text-2xl font-bold">€499</div>
                <div className="text-sm opacity-90 line-through">statt €999</div>
                <div className="text-xs mt-1">Sie sparen 50%!</div>
              </div>
            </div>

            <div className="bg-brand-50 border border-brand-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle size={20} className="text-brand-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-brand-700">
                  <strong>Express-Service:</strong> Nach der Bestellung kontaktieren wir Sie sofort
                  für ein 15-minütiges Briefing. Ihre Website wird dann innerhalb von 24 Stunden fertiggestellt.
                </div>
              </div>
            </div>

            <ContactForm idPrefix="24h" />

            <p className="text-xs text-slate-500 text-center mt-6">
              Mit der Bestellung stimmen Sie unseren AGB und Datenschutzbestimmungen zu.
              Keine versteckten Kosten - 100% Zufriedenheitsgarantie.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-400 to-brand-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für Ihre Website in 24 Stunden?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Nutzen Sie die Gelegenheit - sichern Sie sich jetzt den Express-Service zum Aktionspreis
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

const Landing24hWithFooter: React.FC = () => {
  return (
    <>
      <Landing24h />
      <LandingFooter />
    </>
  );
};

export default Landing24hWithFooter;