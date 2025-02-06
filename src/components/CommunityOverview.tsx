import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SparkEffect } from './SparkEffect';
import { Globe, Lightbulb, Users } from 'lucide-react';

export const CommunityOverview = () => {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showSpark, setShowSpark] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setShowSpark(true), 500);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      key: 'platform.description',
      icon: <Globe className="w-6 h-6 text-blue-500 mb-2" />
    },
    {
      key: 'graduation.support',
      icon: <Lightbulb className="w-6 h-6 text-yellow-500 mb-2" />
    },
    {
      key: 'member.count',
      icon: <Users className="w-6 h-6 text-green-500 mb-2" />
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center p-8">
      <div 
        ref={cardRef}
        className={`relative max-w-2xl bg-[rgb(var(--card))] rounded-[1.25rem] p-8
          transition-all duration-700 transform
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        {showSpark && (
          <>
            <SparkEffect color="rgba(255, 255, 255, 0.8)" size={30} />
            <SparkEffect color="rgba(200, 200, 200, 0.6)" size={20} />
          </>
        )}
        
        <h2 className="text-2xl font-semibold mb-6">{t('what.is.bootcampers')}</h2>
        
        <div className="space-y-6">
          {features.map(({ key, icon }, index) => (
            <div 
              key={key}
              className={`flex flex-col items-center text-center transition-all duration-500 delay-${index * 200}
                ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
              {icon}
              <p className="text-[rgb(var(--text-secondary))]">
                {t(key)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 