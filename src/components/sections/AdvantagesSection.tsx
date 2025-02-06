import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ScrollSection } from '../layouts/ScrollSection';
import { SparkEffect } from '../SparkEffect';

export const AdvantagesSection = () => {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const advantages = [
    {
      key: 'talent.pool',
      description: 'talent.pool.description'
    },
    {
      key: 'agile.workflow',
      description: 'agile.workflow.description'
    },
    {
      key: 'productivity',
      description: 'productivity.description'
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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <ScrollSection className="relative bg-[rgb(var(--card))] mt-[100vh]">
      <div 
        ref={cardRef}
        className="max-w-6xl mx-auto px-4"
      >
        <h2 
          className={`text-3xl font-bold text-center mb-12 transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {t('our.advantages')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.key}
              className={`bg-[rgb(var(--background))] rounded-2xl p-8 transition-all duration-700
                transform hover:scale-105 hover:shadow-lg
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4">{t(advantage.key)}</h3>
              <p className="text-[rgb(var(--text-secondary))]">
                {t(advantage.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
}; 