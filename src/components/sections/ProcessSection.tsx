import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ScrollSection } from '../layouts/ScrollSection';
import { Code, Users, GitBranch, MessageSquare, CheckCircle2, Rocket } from 'lucide-react';

export const ProcessSection = () => {
  const { t } = useLanguage();
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const phases = [
    {
      key: 'phase.1',
      description: 'phase.1.description',
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-400',
      bgColor: 'bg-blue-500'
    },
    {
      key: 'phase.2',
      description: 'phase.2.description',
      icon: <Users className="w-6 h-6" />,
      color: 'from-green-500 to-green-400',
      bgColor: 'bg-green-500'
    },
    {
      key: 'phase.3',
      description: 'phase.3.description',
      icon: <Rocket className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-400',
      bgColor: 'bg-purple-500'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <ScrollSection>
      <div 
        ref={timelineRef}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 
          className={`text-3xl font-bold text-center mb-16 transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {t('our.process')}
        </h2>

        <div className="relative">
          {/* Main vertical line */}
          <div 
            className={`absolute left-12 md:left-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-green-500 to-purple-500
              transition-all duration-1000 rounded-full
              ${isVisible ? 'scale-y-100' : 'scale-y-0'}`}
            style={{ transformOrigin: 'top' }}
          />

          {/* Phase items */}
          {phases.map((phase, index) => (
            <div
              key={phase.key}
              className={`relative mb-24 last:mb-0 transition-all duration-700
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Node */}
              <div className="absolute left-12 md:left-1/2 -translate-x-1/2">
                <div className={`
                  w-10 h-10 rounded-full ${phase.bgColor}
                  flex items-center justify-center
                  text-white shadow-lg
                  transition-transform duration-300 hover:scale-110
                `}>
                  {phase.icon}
                </div>
              </div>

              {/* Content card */}
              <div className={`
                ml-28 md:ml-0
                ${index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'}
              `}>
                <div className={`
                  bg-[rgb(var(--card))] rounded-xl p-6
                  transform transition-all duration-300 hover:scale-[1.02]
                  border border-[rgb(var(--border))]
                `}>
                  <h3 className="text-xl font-semibold mb-3">{t(phase.key)}</h3>
                  <p className="text-[rgb(var(--text-secondary))]">
                    {t(phase.description)}
                  </p>
                </div>

                {/* Decorative gradient line */}
                <div className={`
                  hidden md:block absolute top-1/2 h-0.5 w-16
                  bg-gradient-to-${index % 2 === 0 ? 'l' : 'r'} ${phase.color}
                  ${index % 2 === 0 ? 'right-[calc(50%+1rem)]' : 'left-[calc(50%+1rem)]'}
                  -translate-y-1/2 opacity-50
                `} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
}; 