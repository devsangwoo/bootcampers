import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ScrollSection } from '../layouts/ScrollSection';
import { 
  Network, Users, Award, CheckSquare, 
  Building, Handshake, MessageSquare 
} from 'lucide-react';
import { SparkEffect } from '../SparkEffect';

export const MarketingSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

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

  const handleFlip = () => {
    setIsFlipped(prev => !prev);
    // 전기 효과음 재생 (선택적)
    const audio = new Audio('/static/spark.mp3');
    audio.volume = 0.1;
    audio.play().catch(() => {}); // 브라우저 정책상 자동 재생 제한 처리
  };

  return (
    <ScrollSection className="bg-[rgb(var(--card))]">
      <div 
        ref={sectionRef}
        className="max-w-4xl mx-auto px-4 py-16"
      >
        <h2 
          className={`text-3xl font-bold text-center mb-16 transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {t('marketing.title')}
        </h2>

        <div 
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
            transition-all duration-700`}
        >
          {/* Branding Card */}
          <div
            onClick={handleFlip}
            className={`
              bg-[rgb(var(--background))] rounded-xl p-8
              transform transition-all duration-300 hover:scale-[1.02]
              cursor-pointer relative overflow-hidden
              border border-[rgb(var(--border))]
            `}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Building className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold">{t('marketing.branding')}</h3>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Handshake className="w-5 h-5 text-blue-500 mt-1" />
                <span className="flex-1">{t('marketing.partnership')}</span>
              </li>
              <li className="flex items-start gap-4">
                <MessageSquare className="w-5 h-5 text-blue-500 mt-1" />
                <span className="flex-1">{t('marketing.networking')}</span>
              </li>
            </ul>
          </div>

          {/* HR Card */}
          <div
            className={`
              bg-[rgb(var(--background))] rounded-xl p-8
              transform transition-all duration-300 hover:scale-[1.02]
              cursor-pointer relative overflow-hidden
              border border-[rgb(var(--border))]
            `}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                <Users className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold">{t('hr.talent')}</h3>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Award className="w-5 h-5 text-green-500 mt-1" />
                <span className="flex-1">{t('hr.certification')}</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckSquare className="w-5 h-5 text-green-500 mt-1" />
                <span className="flex-1">{t('hr.verification')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
}; 