import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'kr';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'tap.to.continue': 'Scroll to explore',
    'selective.talent.pool': 'Selective Talent Pool',
    'agile.methods': 'Agile Methods',
    'productivity.culture': 'Productivity Culture',
    'talent.description': 'Carefully curated professionals ready to make an impact',
    'agile.description': 'Efficient, iterative approach to project delivery',
    'productivity.description': 'Focus on results and continuous improvement',
    'what.is.bootcampers': 'What is Bootcampers?',
    'platform.description': 'A collaborative platform where bootcamp graduates work on real projects together.',
    'graduation.support': 'Resolve post-graduation uncertainties and quickly acquire practical workflow experience.',
    'member.count': 'Currently, 300+ members from 5 countries are participating.',
    'our.advantages': 'Why Choose Bootcampers?',
    'talent.pool': 'Selective Talent Pool',
    'talent.pool.description': 'Carefully selected professionals with proven skills and dedication',
    'agile.workflow': 'Agile Workflow',
    'agile.workflow.description': 'Real-world project experience with modern development practices',
    'productivity': 'Focus on Results',
    'our.process': 'How It Works',
    'phase.1': 'Phase 1: Core Skills',
    'phase.1.description': 'Master essential tech stacks through focused learning paths',
    'phase.2': 'Phase 2: Team Projects',
    'phase.2.description': 'Collaborate on real projects using agile methodologies',
    'phase.3': 'Phase 3: Growth & Feedback',
    'phase.3.description': 'Regular retrospectives and expert mentoring sessions',
    'member.benefits': 'Member Benefits & Values',
    'value.practical': 'Rapid Practical Skill Development',
    'value.practical.1': 'GitHub collaboration, code review, and sprint operation experience',
    'value.practical.2': 'Project environment similar to industry standards',
    'value.career': 'Systematic Career Support',
    'value.career.1': 'Portfolio and resume consulting, interview skill training',
    'value.career.2': 'Practical feedback from mentors with 5+ years of experience',
    'value.collaboration': 'Collaboration & Self-Directed Learning',
    'value.collaboration.1': 'Weekly goal setting and improvement through retrospectives',
    'value.collaboration.2': 'Maximize productivity through repeated training',
    'marketing.branding': 'Branding & Network Expansion',
    'marketing.partnership': 'Active partnerships with bootcamps, educational institutions, and tech sponsors',
    'marketing.networking': 'Regular industry leader seminars & networking events',
    'hr.talent': 'Verified Talent Pool',
    'hr.certification': 'Project experience guaranteed by Bootcampers certification',
    'hr.verification': 'Transparent skill verification for HR',
    'join.process': 'Join Process',
    'join.step1': 'Step 1: Application',
    'join.step1.description': 'Submit application (learning goals, career background)',
    'join.step2': 'Step 2: Online Interview',
    'join.step2.description': 'Brief online meeting (technical/cultural fit)',
    'join.step3': 'Step 3: Team Placement',
    'join.step3.description': 'Final approval and project team assignment',
    'activity.title': 'How We Work',
    'activity.sprint': 'Weekly sprints (Slack & Jira)',
    'activity.review': 'Monthly reviews (Presentations)',
    'activity.certification': 'Phase completion certification',
    'marketing.title': 'Expanding Our Network',
  },
  kr: {
    'tap.to.continue': '스크롤하여 탐색하기',
    'selective.talent.pool': '선별된 인재 풀',
    'agile.methods': '애자일 방법론',
    'productivity.culture': '생산성 문화',
    'talent.description': '영향력 있는 전문가 그룹',
    'agile.description': '효율적이고 반복적인 프로젝트 접근 방식',
    'productivity.description': '결과 중심의 지속적인 개선',
    'what.is.bootcampers': 'Bootcampers란?',
    'platform.description': '부트캠프 출신들이 모여 실제 프로젝트를 함께 진행하는 협력 플랫폼입니다.',
    'graduation.support': '졸업 후 막막함을 해소하고, 실무 기반의 워크플로우를 빠르게 습득합니다.',
    'member.count': '현재 5개국 300+명의 회원이 참여 중입니다.',
    'our.advantages': 'Bootcampers의 특별함',
    'talent.pool': '검증된 인재 풀',
    'talent.pool.description': '실력과 열정이 검증된 전문가들이 모였습니다',
    'agile.workflow': '애자일 워크플로우',
    'agile.workflow.description': '현업 수준의 프로젝트 경험을 제공합니다',
    'productivity': '결과 중심',
    'our.process': '이렇게 진행됩니다',
    'phase.1': 'Phase 1: 핵심 기술',
    'phase.1.description': '체계적인 학습 경로로 필수 기술을 마스터합니다',
    'phase.2': 'Phase 2: 팀 프로젝트',
    'phase.2.description': '애자일 방식으로 실제 프로젝트를 진행합니다',
    'phase.3': 'Phase 3: 성장과 피드백',
    'phase.3.description': '정기적인 회고와 전문가 멘토링을 제공합니다',
    'member.benefits': '멤버 혜택 및 가치',
    'value.practical': '실무 능력 고속 습득',
    'value.practical.1': 'GitHub 협업, 코드 리뷰, 스프린트 운영 체험',
    'value.practical.2': '현업과 유사한 프로젝트 환경',
    'value.career': '체계적인 커리어 지원',
    'value.career.1': '포트폴리오·이력서 컨설팅, 면접 스킬 트레이닝',
    'value.career.2': '5년 이상 경력 멘토들의 실질적 피드백',
    'value.collaboration': '협업 & 자기주도 학습',
    'value.collaboration.1': '주간 목표 설정, 레트로로 개선안 도출',
    'value.collaboration.2': '반복 훈련으로 개인·팀 모두 생산성 극대화',
    'marketing.branding': '브랜딩 & 네트워크 확장',
    'marketing.partnership': '부트캠프·교육기관·테크 스폰서와 적극 제휴',
    'marketing.networking': '업계 리더 세미나 & 네트워킹 이벤트 정기 개최',
    'hr.talent': '검증된 인재풀',
    'hr.certification': 'Bootcampers 인증으로 프로젝트 경험 보장',
    'hr.verification': 'HR도 투명한 역량 검증 가능',
    'join.process': '가입 프로세스',
    'join.step1': 'Step 1: 신청서 제출',
    'join.step1.description': '학습 목표·경력 등 신청서 제출',
    'join.step2': 'Step 2: 온라인 면담',
    'join.step2.description': '기술/적응도 확인을 위한 짧은 면담',
    'join.step3': 'Step 3: 팀 배치',
    'join.step3.description': '최종 승인 후 프로젝트 팀 배치',
    'activity.title': '활동 방식',
    'activity.sprint': '주간 스프린트 (Slack·Jira)',
    'activity.review': '월간 리뷰 (발표·성과)',
    'activity.certification': 'Phase 완료 시 인증서 발급',
    'marketing.title': '네트워크 확장',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('kr');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'kr' : 'en');
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};