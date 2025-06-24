
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'research', label: 'Research & Commentary' },
  { id: 'media', label: 'In Media Res' },
  { id: 'projects', label: 'Our Projects' },
  { id: 'about', label: 'About' },
  { id: 'involved', label: 'Get Involved' },
];

export const Header = ({ activeTab, onTabChange }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-motion-dark/95 backdrop-blur-sm border-b border-motion-gray">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onTabChange('home')}
            className="font-garamond text-xl font-bold text-white hover:text-motion-red transition-colors"
          >
            Motion to Indict
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-motion-red",
                  activeTab === tab.id
                    ? "text-motion-red border-b-2 border-motion-red pb-1"
                    : "text-white"
                )}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-motion-red transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-motion-gray">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  onTabChange(tab.id);
                  setMobileMenuOpen(false);
                }}
                className={cn(
                  "block w-full text-left py-2 px-4 text-sm font-medium transition-colors hover:text-motion-red",
                  activeTab === tab.id ? "text-motion-red" : "text-white"
                )}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
