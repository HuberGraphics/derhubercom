import React from 'react';
import { ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">

        {/* Bio Section */}
        <div className="flex flex-col md:flex-row gap-16 items-center mb-32">
          <div className="md:w-5/12">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-200 rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img
                src="/images/profil3.png"
                alt="Christian Huber"
                className="relative rounded-2xl shadow-lg w-full object-cover h-[450px] md:h-[550px]"
              />
            </div>
          </div>
          <div className="md:w-7/12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Ich bin Christian – <br /><span className="text-slate-600">Ihr Ansprechpartner für Webdesign.</span>
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                UX-Designer, Entwickler und Performance Marketing Manager.
              </p>
              <p>
                Seit fünf Jahren arbeite ich als Performance Marketing Manager bei einer Social-Media-Agentur. Dort habe ich gelernt, wie man digitale Kanäle gezielt nutzt, um echte Kunden zu gewinnen – nicht nur Klicks oder Reichweite.
              </p>
              <p>
                Vorher habe ich als Mediengestalter bei einem Fernsehsender und einer Werbeagentur gearbeitet. Dort habe ich mein Gespür für Design, Bildsprache und Nutzerführung entwickelt.
              </p>
              <div className="pt-4">
                <p className="font-semibold text-slate-900 text-xl border-l-4 border-brand-400 pl-6">
                  Klar. Direkt. Ohne Bullshit. So arbeite ich – damit Sie eine Website bekommen, die Sie wirklich weiterbringt.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="bg-slate-50 rounded-2xl p-10 md:p-20 text-center border border-slate-200">
          <div className="flex justify-center mb-8">
            <div className="bg-white p-5 rounded-2xl text-brand-500 shadow-subtle">
              <ShieldCheck size={40} />
            </div>
          </div>

          <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">Ihre No-Bullshit-Garantie</h3>

          <div className="max-w-3xl mx-auto text-slate-600 space-y-6 text-lg leading-relaxed">
            <p className="font-semibold text-xl text-slate-900">Keine Wirkung für Ihr Geschäft? Kein Geld wert.</p>
            <p>
              Wenn Sie nach 30 Tagen nicht spüren, dass Ihre neue Website Ihnen Arbeit abnimmt, wenn Sie keine Zeit sparen, keine neuen Anfragen bekommen oder weiter im E-Mail-Chaos stecken, arbeite ich kostenlos nach. So lange, bis es passt.
            </p>
            <p>
              Ich verspreche Ihnen kein "vielleicht". Ich liefere Ihnen eine Website, die funktioniert.
            </p>
            <p className="text-brand-600 font-semibold uppercase tracking-wide mt-8 text-sm">
              Ohne Ausreden. Ohne Kleingedrucktes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;