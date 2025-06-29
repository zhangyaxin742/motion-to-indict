
import { useState } from 'react';
import { Header } from '@/components/Header';
import { LandingSection } from '@/components/LandingSection';
import { ResearchAndMediaSection } from '@/components/ResearchAndMediaSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { AboutSection } from '@/components/AboutSection';
import { InvolvedSection } from '@/components/InvolvedSection';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'research':
      case 'media':
        return <ResearchAndMediaSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'about':
        return <AboutSection />;
      case 'involved':
        return <InvolvedSection />;
      default:
        return (
          <LandingSection
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      {renderContent()}
    </div>
  );
};

export default Index;
