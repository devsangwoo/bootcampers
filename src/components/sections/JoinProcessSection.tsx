import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ScrollSection } from '../layouts/ScrollSection';
import { FileText, Video, UserCheck, MessageSquare, BarChart, Award } from 'lucide-react';
import { SparkEffect } from '../SparkEffect';

export const JoinProcessSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      key: 'join.step1',
      description: 'join.step1.description',
      icon: <FileText className="w-6 h-6" />
    },
    {
      key: 'join.step2',
      description: 'join.step2.description',
      icon: <Video className="w-6 h-6" />
    },
    {
      key: 'join.step3',
      description: 'join.step3.description',
      icon: <UserCheck className="w-6 h-6" />
    }
  ];

  const activities = [
    {
      key: 'activity.sprint',
      icon: <MessageSquare className="w-5 h-5" />
    },
    {
      key: 'activity.review',
      icon: <BarChart className="w-5 h-5" />
    },
    {
      key: 'activity.certification',
      icon: <Award className="w-5 h-5" />
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // 순차적으로 스텝 활성화
          steps.forEach((_, index) => {
            setTimeout(() => {
              setActiveStep(index);
            }, index * 800);
          });
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
        className="max-w-4xl mx-auto px-4"
      >
        <h2 
          className={`text-3xl font-bold text-center mb-16 transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {t('join.process')}
        </h2>

        {/* Join Steps */}
        <div className="space-y-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={step.key}
              className={`
                bg-[rgb(var(--card))] rounded-xl p-6
                transform transition-all duration-500
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                ${activeStep === index ? 'scale-105 shadow-lg' : 'scale-100'}
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {activeStep === index && <SparkEffect />}
              <div className="flex items-center gap-4">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${activeStep === index ? 'bg-blue-500 text-white' : 'bg-[rgb(var(--border))]'}
                  transition-colors duration-300
                `}>
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{t(step.key)}</h3>
                  <p className="text-[rgb(var(--text-secondary))]">
                    {t(step.description)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Activities */}
        <div className={`
          bg-[rgb(var(--card))] rounded-xl p-8
          transition-all duration-700 delay-1000
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <h3 className="text-xl font-bold mb-6">{t('activity.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div
                key={activity.key}
                className="flex items-center gap-3"
              >
                {activity.icon}
                <span>{t(activity.key)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollSection>
  );
}; 