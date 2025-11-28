import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Problem Side */}
          <div className="lg:w-1/2">
            <h2 className="reveal-on-scroll text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
              Ihre aktuelle Website hilft Ihnen <span className="text-red-500 decoration-red-200 underline decoration-4 underline-offset-4 decoration-skip-ink">nicht wirklich?</span>
            </h2>
            <p className="reveal-on-scroll delay-100 text-slate-600 mb-10 text-lg leading-relaxed">
              Dann liegt es vielleicht an einem dieser häufigen Probleme, die viele Unternehmer frustrieren:
            </p>
            
            <div className="space-y-6">
              {[
                "Sie bekommen kaum Anfragen über Ihre Website.",
                "Interessenten schreiben E-Mails, aber oft zu spät oder landen im Spam.",
                "Sie verlieren Anfragen, weil der Prozess zu kompliziert ist.",
                "Ihre Website wirkt weniger professionell als Ihr Unternehmen.",
                "Sie erledigen viele Aufgaben manuell, die automatisiert sein könnten."
              ].map((item, idx) => (
                <div key={idx} className={`reveal-on-scroll delay-${(idx + 1) * 100} flex items-start bg-red-50/30 p-5 rounded-xl border border-red-100 hover:border-red-200 hover:bg-red-50/80 transition-all duration-300 group`}>
                  <XCircle className="text-red-500 mt-0.5 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" size={22} />
                  <p className="text-slate-800 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Side */}
          <div className="lg:w-1/2 w-full">
            <div className="reveal-on-scroll delay-300 bg-white p-8 md:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden border-2 border-brand-100 group">
              {/* Animated blobs behind solution */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-full filter blur-[80px] opacity-60 transform translate-x-1/3 -translate-y-1/3 animate-float"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-50 rounded-full filter blur-[60px] opacity-40 transform -translate-x-1/3 translate-y-1/3 animate-float-delayed"></div>
              
              <h3 className="text-2xl font-bold mb-6 relative z-10 text-slate-900">Warum Unternehmen auf mich vertrauen</h3>
              <p className="text-slate-600 mb-10 relative z-10 leading-relaxed">
                Lokale Expertise, persönlicher Service und bewährte Erfolgsstrategien für Ihr Business.
              </p>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start group/item">
                  <div className="bg-brand-50 p-3 rounded-xl mr-5 text-brand-600 group-hover/item:bg-brand-400 group-hover/item:text-slate-950 transition-all duration-300 shadow-sm">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-slate-900">Expertise seit 2015</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Über 8 Jahre Erfahrung in der Website-Entwicklung und Performance Marketing.</p>
                  </div>
                </div>
                
                <div className="flex items-start group/item">
                  <div className="bg-brand-50 p-3 rounded-xl mr-5 text-brand-600 group-hover/item:bg-brand-400 group-hover/item:text-slate-950 transition-all duration-300 shadow-sm">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-slate-900">Lokaler Partner</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Persönlicher Service direkt vor Ort in Heidelberg und Region.</p>
                  </div>
                </div>

                <div className="flex items-start group/item">
                  <div className="bg-brand-50 p-3 rounded-xl mr-5 text-brand-600 group-hover/item:bg-brand-400 group-hover/item:text-slate-950 transition-all duration-300 shadow-sm">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-slate-900">Schnelle Umsetzung</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Ihre Website ist bereits in 2-4 Wochen online und einsatzbereit.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100 relative z-10">
                <p className="font-medium italic text-brand-600 text-center">
                  "Es ist höchste Zeit für eine Website, die für Sie arbeitet – nicht umgekehrt."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;