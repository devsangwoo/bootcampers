import React from 'react';
import { Users, Clock, Brain } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: t('selective.talent.pool'),
      description: t('talent.description')
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t('agile.methods'),
      description: t('agile.description')
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: t('productivity.culture'),
      description: t('productivity.description')
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-[rgb(var(--card))] rounded-[1.25rem] p-6 transition-all duration-300
                hover:bg-[rgb(var(--card-hover))] hover:transform hover:scale-[1.02]"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-[rgb(var(--card-hover))] rounded-2xl group-hover:bg-[rgb(var(--background))]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-[rgb(var(--text-secondary))]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};