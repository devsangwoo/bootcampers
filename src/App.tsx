import React from 'react';
import { IntroScene } from './components/IntroScene';
import { FeaturesSection } from './components/FeaturesSection';
import { Header } from './components/Header';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { CommunityOverview } from './components/CommunityOverview';
import { AdvantagesSection } from './components/sections/AdvantagesSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { BenefitsSection } from './components/sections/BenefitsSection';
import { MarketingSection } from './components/sections/MarketingSection';
import { JoinProcessSection } from './components/sections/JoinProcessSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen">
          <Header />
          <IntroScene />
          <CommunityOverview />
          <FeaturesSection />
          <AdvantagesSection />
          <ProcessSection />
          <BenefitsSection />
          <MarketingSection />
          <JoinProcessSection />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;