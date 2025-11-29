import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Clock } from 'lucide-react';
import { Link } from 'wouter';
import { trackEmailClick, trackPhoneCall } from '../utils/analytics';

const Footer: React.FC = () => {
  useEffect(() => {
    // Load Youform script
    const script = document.createElement('script');
    script.src = 'https://app.youform.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <footer id="contact" className="bg-white text-slate-600 border-t border-slate-200">

      {/* Contact CTA Section */}
      <div className="container mx-auto px-4 py-24 border-b border-slate-200">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">Bereit für Ihre neue Website?</h2>
            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
              Lassen Sie uns in einem kostenlosen Beratungsgespräch besprechen, wie ich Ihnen helfen kann, online erfolgreich zu werden. Ich freue mich auf Ihr Projekt!
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="mailto:christian@derhuber.com"
                className="group flex items-center gap-4 text-slate-700 hover:text-brand-600 transition-base p-4 rounded-xl bg-white border border-slate-200 hover:border-brand-200 shadow-sm hover:shadow-card"
                onClick={() => trackEmailClick('christian@derhuber.com')}
              >
                <div className="bg-brand-50 text-brand-600 p-3 rounded-lg group-hover:bg-brand-100 transition-base">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide font-semibold mb-0.5">Email schreiben</div>
                  <div className="font-semibold text-lg">christian@derhuber.com</div>
                </div>
              </a>
              <a
                href="tel:015129515056"
                className="group flex items-center gap-4 text-slate-700 hover:text-brand-600 transition-base p-4 rounded-xl bg-white border border-slate-200 hover:border-brand-200 shadow-sm hover:shadow-card"
                onClick={trackPhoneCall}
              >
                <div className="bg-brand-50 text-brand-600 p-3 rounded-lg group-hover:bg-brand-100 transition-base">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide font-semibold mb-0.5">Anrufen</div>
                  <div className="font-semibold text-lg">+49 151 2951 5056</div>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:w-5/12 w-full bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-200 shadow-card">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Schnellkontakt</h3>
            <div
              data-youform-embed
              data-form="d1cu7llu"
              data-width="100%"
              data-height="700"
              style={{ minHeight: '700px' }}
            />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

          {/* Brand Column */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-bold text-slate-900 mb-6">Der <span className="text-brand-500">Huber</span></h4>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">Webdesign und Webentwicklung für kleine Unternehmen in Heidelberg und Umgebung.</p>
            <div className="flex gap-4">
               <a href="#" className="text-slate-400 hover:text-brand-500 transition-base"><Linkedin size={20} /></a>
               <a href="#" className="text-slate-400 hover:text-brand-500 transition-base"><Github size={20} /></a>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-6">Kontakt</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start">
                <MapPin size={18} className="mt-0.5 mr-3 text-brand-500 flex-shrink-0" />
                <span>Odenwaldstraße 24,<br />69124 Heidelberg,<br />Baden-Württemberg</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-brand-500 flex-shrink-0" />
                <a href="tel:+4915129515056" className="hover:text-brand-600 transition-base" onClick={trackPhoneCall}>+49 151 2951 5056</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-brand-500 flex-shrink-0" />
                <a href="mailto:christian@derhuber.com" className="hover:text-brand-600 transition-base" onClick={() => trackEmailClick('christian@derhuber.com')}>christian@derhuber.com</a>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="mr-3 text-brand-500 flex-shrink-0" />
                <span>Mo-Fr: 9:00-18:00 Uhr</span>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-6">Leistungen</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link href="/leistungen/webdesign" className="hover:text-brand-600 transition-base">Webdesign</Link></li>
              <li><Link href="/leistungen/webentwicklung" className="hover:text-brand-600 transition-base">Webentwicklung</Link></li>
              <li><Link href="/leistungen/ux-design" className="hover:text-brand-600 transition-base">UX-Design</Link></li>
              <li><Link href="/leistungen/online-marketing" className="hover:text-brand-600 transition-base">Online-Marketing</Link></li>
              <li><Link href="/leistungen/automatisierung" className="hover:text-brand-600 transition-base">Automatisierung</Link></li>
              <li><Link href="/leistungen/ki-loesungen" className="hover:text-brand-600 transition-base">KI-Lösungen</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-6">Rechtliches</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link href="/impressum" className="hover:text-brand-600 transition-base">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-brand-600 transition-base">Datenschutz</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-200 mt-16 pt-8 text-center text-sm text-slate-400 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Der Huber. Alle Rechte vorbehalten.</p>
          <p className="mt-2 md:mt-0">Made with intent in Heidelberg.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;