import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TITLE = 'BOOTCAMPERS';
const ANIMATION_DURATION = 3000;
const CHAR_INTERVAL = ANIMATION_DURATION / (TITLE.length + 1);
const BORDER_ANIMATION_DURATION = 3300; // 보더 애니메이션 전체 시간

export const IntroScene = () => {
  const { t } = useLanguage();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [currentChar, setCurrentChar] = useState(-1);
  const [showDot, setShowDot] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsAnimating(true);
      startTextAnimation();
    }, 300);

    // 보더 애니메이션이 완료되는 시점에 정확히 전환
    const completionTimer = setTimeout(() => {
      setIsAnimating(false);
      setIsCompleted(true);
    }, BORDER_ANIMATION_DURATION);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(completionTimer);
    };
  }, []);

  const startTextAnimation = () => {
    let charIndex = 0;
    const textInterval = setInterval(() => {
      if (charIndex < TITLE.length) {
        setCurrentChar(charIndex);
        setDisplayedText(TITLE.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(textInterval);
        setTimeout(() => {
          setShowDot(true);
        }, CHAR_INTERVAL);
      }
    }, CHAR_INTERVAL);

    return () => clearInterval(textInterval);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative">
        <div className="relative w-80 h-80">
          {/* 초기 보더 애니메이션 */}
          <div 
            className={`absolute inset-0 rounded-[2.5rem] ${
              isAnimating ? 'opacity-100 border-animation-container' : 'opacity-0'
            }`}
          >
            <div className="border-line border-left" />
            <div className="border-line border-top" />
            <div className="border-line border-right" />
            <div className="border-line border-bottom" />
          </div>

          {/* 완성된 보더 */}
          <div 
            className={`absolute inset-0 rounded-[2.5rem] ${
              isCompleted ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 rounded-[2.5rem] border-complete" />
          </div>

          {/* 콘텐츠 */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
            <div className="h-8 overflow-hidden">
              <h1 className="text-3xl font-semibold tracking-tight">
                {displayedText.split('').map((char, index) => (
                  <span 
                    key={index}
                    className={`inline-block transition-all duration-300 ${
                      index === currentChar ? 'text-appear-animation' : ''
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    {char}
                  </span>
                ))}
                {showDot && (
                  <span className="inline-block text-appear-animation">.</span>
                )}
              </h1>
            </div>
            
            <div className={`mt-4 transition-opacity duration-500 ${
              showDot ? 'opacity-100 blink-text' : 'opacity-0'
            }`}>
              <p className="text-[rgb(var(--text-secondary))] text-sm text-center">
                {t('tap.to.continue')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};