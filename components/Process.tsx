import React, { useState, useEffect, useRef } from 'react';

const ProcessStep: React.FC<{
  step: {
    num: string;
    title: string;
    desc: string;
  };
  index: number;
  totalSteps: number;
  isActive: boolean;
  onStepVisible: (index: number) => void;
}> = ({ step, index, totalSteps, isActive, onStepVisible }) => {
  const stepRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [stepNumber, setStepNumber] = useState(0);

  // Counter animation for step number
  useEffect(() => {
    if (isActive) {
      onStepVisible(index);
      const targetNumber = parseInt(step.num);
      let current = 0;
      const increment = 1;
      const duration = 800; // 0.8 seconds
      const steps = targetNumber / increment;
      const stepTime = duration / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          setStepNumber(targetNumber);
          clearInterval(timer);
        } else {
          setStepNumber(current);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isActive, step.num, onStepVisible, index]);

  // Animated connecting line
  useEffect(() => {
    if (isActive && lineRef.current && index < totalSteps - 1) {
      // Trigger line animation
      setTimeout(() => {
        if (lineRef.current) {
          lineRef.current.style.strokeDashoffset = '0';
        }
      }, 200);
    }
  }, [isActive, index, totalSteps]);

  const hasConnectingLine = index < totalSteps - 1;

  return (
    <div className={`reveal-on-scroll delay-${index * 100} relative group h-full stagger-item`} ref={stepRef}>
      {/* Enhanced Animated Connecting Line */}
      {hasConnectingLine && (
        <div className="hidden lg:block absolute top-10 left-1/2 w-full h-1 -z-10">
          <svg className="w-full h-full" viewBox="0 0 200 4" preserveAspectRatio="none">
            <path
              ref={lineRef}
              d="M 0 2 L 200 2"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-gray-200 transition-colors duration-700 ease-out group-hover:text-brand-400"
              style={{
                strokeDasharray: '200',
                strokeDashoffset: isActive ? '0' : '200',
                transition: 'stroke-dashoffset 1.5s ease-out, stroke 0.7s ease-out'
              }}
            />
            {/* Animated dots along the line */}
            {isActive && (
              <>
                <circle cx="50" cy="2" r="2" className="text-brand-300 fill-current animate-pulse" />
                <circle cx="100" cy="2" r="2" className="text-brand-300 fill-current animate-pulse" style={{ animationDelay: '0.3s' }} />
                <circle cx="150" cy="2" r="2" className="text-brand-300 fill-current animate-pulse" style={{ animationDelay: '0.6s' }} />
              </>
            )}
          </svg>
        </div>
      )}

      {/* Enhanced Step Card */}
      <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-brand-200 transition-all duration-500 h-full hover:-translate-y-2 hover:shadow-card-hover shadow-sm tilt-card glow-border gpu-accelerated relative overflow-hidden">
  
        {/* Enhanced Step Number with Counter Animation */}
        <div className="relative mb-6">
          <div className="text-5xl font-black text-slate-100 group-hover:text-brand-400 transition-all duration-500 font-sans tracking-tighter group-hover:scale-110 transform origin-left flex items-center">
            <span className="relative">
              {String(stepNumber).padStart(2, '0')}
              {isActive && (
                <div className="absolute inset-0 bg-brand-100 rounded-lg blur-md opacity-0 animate-pulse group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </span>
          </div>
          {/* Progress indicator for active step */}
          {isActive && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-400 rounded-full flex items-center justify-center animate-ping">
              <div className="w-3 h-3 bg-brand-500 rounded-full"></div>
            </div>
          )}
        </div>

        {/* Enhanced Title with animated underline */}
        <h4 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-brand-600 transition-colors duration-300 relative">
          {step.title}
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-400 group-hover:w-full transition-all duration-500"></div>
        </h4>

        {/* Enhanced Description */}
        <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
          {step.desc}
        </p>

        </div>
    </div>
  );
};

const Process: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      num: '01',
      title: 'Kostenloses Erstgespräch',
      desc: 'Wir besprechen Ihre Ziele, Herausforderungen und wie eine smarte Website Ihre Prozesse optimieren kann.'
    },
    {
      num: '02',
      title: 'Konzept & Angebot',
      desc: 'Sie erhalten ein maßgeschneidertes Konzept mit transparenter Kostenaufstellung ohne versteckte Gebühren.'
    },
    {
      num: '03',
      title: 'Design & Entwicklung',
      desc: 'Ich erstelle Ihre Website nach Ihren Wünschen mit regelmäßigen Abstimmungen und Feedbackschleifen.'
    },
    {
      num: '04',
      title: 'Launch & Support',
      desc: 'Nach dem Go-Live unterstütze ich Sie bei Fragen und Optimierungen, damit alles glatt läuft.'
    }
  ];

  const handleStepVisible = (index: number) => {
    setVisibleSteps(prev => new Set([...prev, index]));
  };

  return (
    <section className="py-24 bg-gray-50 text-slate-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-50 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3 pointer-events-none parallax-slow" data-speed="0.3"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-100 rounded-full blur-[80px] translate-y-1/3 translate-x-1/4 pointer-events-none parallax-slow" data-speed="0.5"></div>

      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 stagger-container">
          <h2 className="stagger-item reveal-on-scroll text-brand-600 font-bold uppercase tracking-widest text-xs mb-4">
            Der Ablauf
          </h2>
          <h3 className="stagger-item reveal-on-scroll delay-100 text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            So arbeiten wir zusammen
          </h3>
          <p className="stagger-item reveal-on-scroll delay-200 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Von der ersten Anfrage bis zur fertigen Website, die Ihren Arbeitsalltag erleichtert – ein klarer Prozess für Ihr Projekt.
          </p>
        </div>

        {/* Enhanced Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-container">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              step={step}
              index={index}
              totalSteps={steps.length}
              isActive={visibleSteps.has(index)}
              onStepVisible={handleStepVisible}
            />
          ))}
        </div>

        {/* Progress indicator showing overall completion */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 glow-border">
            <div className="flex items-center gap-1">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-8 h-1 rounded-full transition-all duration-500 ${
                    visibleSteps.has(index)
                      ? 'bg-brand-400 shadow-sm'
                      : 'bg-gray-200'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                ></div>
              ))}
            </div>
            <span className="text-xs text-slate-500 font-medium">
              {visibleSteps.size > 0 && (
                <span className="animate-fade-in">
                  Schritt {visibleSteps.size} von {steps.length} bereit
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;