
import { useState } from 'react';
import { Header } from '@/components/Header';
import { LandingSection } from '@/components/LandingSection';
import { ResearchSection } from '@/components/ResearchSection';
import { MediaSection } from '@/components/MediaSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { AboutSection } from '@/components/AboutSection';
import { InvolvedSection } from '@/components/InvolvedSection';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'research':
        return <ResearchSection />;
      case 'media':
        return <MediaSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'about':
        return <AboutSection />;
      case 'involved':
        return <InvolvedSection />;
      default:
        return <LandingSection onTabChange={setActiveTab} />;
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
