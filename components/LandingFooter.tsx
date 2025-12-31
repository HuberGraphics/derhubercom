'use client';

import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Clock } from 'lucide-react';
import Link from 'next/link';
import { trackEmailClick, trackPhoneCall } from '../utils/analytics';

const LandingFooter: React.FC = () => {
  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200">
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
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;