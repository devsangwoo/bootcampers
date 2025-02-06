import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ScrollSection } from '../layouts/ScrollSection';
import { GitBranch, FileText, Target } from 'lucide-react';
import { SparkEffect } from '../SparkEffect';

export const BenefitsSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const benefits = [
    {
      key: 'benefit.1',
      title: 'value.practical',
      points: ['value.practical.1', 'value.practical.2'],
      icon: <GitBranch className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      key: 'benefit.2',
      title: 'value.career',
      points: ['value.career.1', 'value.career.2'],
      icon: <FileText className="w-6 h-6" />,
      color: 'from-violet-500 to-purple-500'
    },
    {
      key: 'benefit.3',
      title: 'value.collaboration',
      points: ['value.collaboration.1', 'value.collaboration.2'],
      icon: <Target className="w-6 h-6" />,
      color: 'from-emerald-500 to-green-500'
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <ScrollSection>
      <div 
        ref={sectionRef}
        className="max-w-6xl mx-auto px-4"
      >
        <h2 
          className={`text-3xl font-bold text-center mb-16 transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {t('member.benefits')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.key}
              className={`relative transition-all duration-700
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className={`
                bg-[rgb(var(--card))] rounded-xl p-6
                transform transition-all duration-300
                ${activeCard === index ? 'scale-105' : 'scale-100'}
                border border-[rgb(var(--border))]
                hover:shadow-lg
              `}>
                {activeCard === index && <SparkEffect />}
                
                <div className={`
                  w-12 h-12 rounded-full mb-4
                  flex items-center justify-center
                  bg-gradient-to-r ${benefit.color}
                  text-white
                `}>
                  {benefit.icon}
                </div>

                <h3 className="text-xl font-semibold mb-4">{t(benefit.title)}</h3>
                
                <ul className="space-y-2">
                  {benefit.points.map((point, i) => (
                    <li key={i} className="text-[rgb(var(--text-secondary))]">
                      • {t(point)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
}; 