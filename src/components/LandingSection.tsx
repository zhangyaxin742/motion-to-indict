
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Target, Users } from 'lucide-react';
import { TypewriterText } from './TypewriterText';
import OngoingInvestigations from './OngoingInvestigations';

interface LandingSectionProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const LandingSection = ({ activeTab, onTabChange }: LandingSectionProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-motion-dark to-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-xl mb-6 animate-fade-in">
            An autopsy of political America— <span className="red-accent"> as told by its <em> 'radical'</em> youth.</span>
          </h1>
          <div className="body-lg text-white-400 font-oldnews mb-8 max-w-3xl mx-auto">
            <TypewriterText 
              text="MOTION TO INDICT is the premier think tank for Gen Z. 
              From Congress to the classroom, our sole mandate is to expose the failures that our institutions footnote."
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className={`
                px-8 py-3 border border-motion-red
                ${
                  activeTab === 'research'
                    ? 'bg-white text-motion-red'
                    : 'bg-motion-red text-white hover:bg-red-700 hover:text-white'
                }
              `}
              onClick={() => onTabChange('research')}
            >
              Read Our Research
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button 
              size="lg"
              className={`
                px-8 py-3 border border-motion-red
                ${
                  activeTab === 'involved'
                    ? 'bg-white text-motion-red'
                    : 'bg-white text-black hover:bg-motion-red hover:text-white'
                }
              `}
              onClick={() => onTabChange('involved')}
            >
              Join the Movement
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Ongoing Investigations Mosaic */}
      <OngoingInvestigations />

      </section>
    </div>
  );
};
