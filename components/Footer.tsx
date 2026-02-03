'use client';

import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Clock } from 'lucide-react';
import Link from 'next/link';
import { trackEmailClick, trackPhoneCall } from '../utils/analytics';
import { servicesData } from '@/data/services';
import { heidelbergDistricts } from '@/data/districts';
import ContactForm from './ContactForm';

const Footer: React.FC = () => {

  return (
    <footer id="contact" className="bg-slate-50 text-slate-600 border-t border-slate-200">

      {/* Contact CTA Section */}
      <div className="container mx-auto px-4 py-24 border-b border-slate-200">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
          <div className="lg:w-1/2">
            <h2 className="font-bold text-3xl md:text-4xl text-slate-900 mb-6 leading-tight">
              Bereit für Ihre neue Website?
            </h2>
            <p className="text-base md:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              Lassen Sie uns in einem kostenlosen Gespräch besprechen, wie ich Ihnen helfen kann.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:christian@derhuber.com"
                className="group flex items-center gap-4 text-slate-700 hover:text-brand-600 transition-base p-4 rounded-lg glass-card border border-slate-200 hover:border-brand-300 hover-lift shadow-sm"
                onClick={() => trackEmailClick('christian@derhuber.com')}
              >
                <div className="bg-brand-50 text-brand-600 p-3 rounded-lg group-hover:bg-brand-100 transition-base">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide font-semibold mb-0.5">Email schreiben</div>
                  <div className="font-semibold text-base text-slate-900">christian@derhuber.com</div>
                </div>
              </a>
              <a
                href="tel:015129515056"
                className="group flex items-center gap-4 text-slate-700 hover:text-brand-600 transition-base p-4 rounded-lg glass-card border border-slate-200 hover:border-brand-300 hover-lift shadow-sm"
                onClick={trackPhoneCall}
              >
                <div className="bg-brand-50 text-brand-600 p-3 rounded-lg group-hover:bg-brand-100 transition-base">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide font-semibold mb-0.5">Anrufen</div>
                  <div className="font-semibold text-base text-slate-900">+49 151 2951 5056</div>
                </div>
              </a>
            </div>

            {/* OpenStreetMap */}
            <div className="mt-6 w-full h-[500px] rounded-lg overflow-hidden border border-slate-200 shadow-sm">
              <iframe
                title="Der Huber - Standort in Heidelberg"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://www.openstreetmap.org/export/embed.html?bbox=8.660878544809346,49.368994208852596,8.680878544809346,49.388994208852596&amp;layer=mapnik&amp;marker=49.378994208852596,8.670878544809346"
                style={{ border: 0 }}
              />
            </div>
          </div>

          <div className="lg:w-5/12 w-full bg-white p-8 md:p-10 rounded-lg border border-slate-200 shadow-md">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Schnellkontakt</h3>
            <ContactForm idPrefix="footer" />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8">

          {/* Brand Column */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-bold text-slate-900 mb-6">
              Der <span className="text-brand-500">Huber</span>
            </h4>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Webdesign und Webentwicklung für kleine Unternehmen in Heidelberg und Umgebung.
            </p>
            <div className="flex gap-4">
               <a href="#" className="text-slate-400 hover:text-brand-600 transition-base"><Linkedin size={20} /></a>
               <a href="#" className="text-slate-400 hover:text-brand-600 transition-base"><Github size={20} /></a>
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
                <span>Mo-Fr: 08:00-20:00 Uhr</span>
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

          {/* Regional Locations Column - PSEO Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-6">
              Regionale Standorte
            </h4>

            {/* City-level links - nur 3 anzeigen */}
            <div className="mb-6">
              <p className="text-xs text-slate-500 uppercase font-semibold mb-3">In Heidelberg</p>
              <ul className="space-y-2 text-sm text-slate-600">
                {servicesData.slice(0, 3).map(service => (
                  <li key={service.slug}>
                    <Link
                      href={`/${service.slug}-in-heidelberg`}
                      className="hover:text-brand-600 transition-base text-xs"
                    >
                      {service.title} in Heidelberg
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Alle Stadtteile als Accordion */}
            <details className="group">
              <summary className="cursor-pointer text-xs text-brand-600 hover:text-brand-700 font-semibold flex items-center list-none">
                <svg className="w-4 h-4 mr-2 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                Alle Stadtteile
              </summary>
              <div className="mt-3 grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
                {heidelbergDistricts.map(district => (
                  <Link
                    key={district.slug}
                    href={`/webdesign-in-heidelberg/${district.slug}`}
                    className="text-xs text-slate-500 hover:text-brand-600 transition-base truncate"
                  >
                    {district.name}
                  </Link>
                ))}
              </div>
            </details>
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

        <div className="border-t border-slate-200 mt-16 pt-8 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Der Huber. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
