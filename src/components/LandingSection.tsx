
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, FileText, Users, Target } from 'lucide-react';
import { TypewriterText } from './TypewriterText';

interface LandingSectionProps {
  onTabChange: (tab: string) => void;
}

export const LandingSection = ({ onTabChange }: LandingSectionProps) => {
  const investigations = [
    {
      id: 1,
      title: "Campus Speech Suppression",
      tagline: "How universities silence dissent through bureaucracy",
      date: "December 2024",
      type: "brief",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=300&fit=crop",
      size: "small"
    },
    {
      id: 2,
      title: "Congressional Insider Trading Network",
      tagline: "Mapping financial conflicts across party lines",
      date: "November 2024",
      type: "fieldnotes",
      image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400&h=300&fit=crop",
      size: "small"
    },
    {
      id: 3,
      title: "The Democracy Theater Report",
      tagline: "A comprehensive analysis of performative politics in the digital age",
      date: "January 2025",
      type: "brief",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      size: "large"
    },
    {
      id: 4,
      title: "Climate Activism Surveillance",
      tagline: "Federal monitoring of student environmental groups",
      date: "October 2024",
      type: "fieldnotes",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      size: "small"
    },
    {
      id: 5,
      title: "Social Media Censorship Files",
      tagline: "Platform suppression of youth political discourse",
      date: "September 2024",
      type: "brief",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      size: "small"
    }
  ] as const;

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
              className="bg-motion-red hover:bg-red-700 text-white px-8 py-3"
              onClick={() => onTabChange('research')}
            >
              Read Our Research
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-motion-red text-black hover:bg-motion-red hover:text-white px-8 py-3"
              onClick={() => onTabChange('involved')}
            >
              Join the Movement
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-black py-20 px-6">
        {/* Red divider line */}
        <div className="w-full h-px bg-mti-red mb-16"></div>

        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white text-center mb-16">
            Ongoing Investigations
          </h2>
        </div>
      </section>

      {/* Quick Access */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card 
            className="bg-motion-gray/10 border-motion-gray hover:border-motion-red transition-colors cursor-pointer"
            onClick={() => onTabChange('media')}
          >
            <CardContent className="p-6 text-center">
              <Target className="h-12 w-12 text-motion-red mx-auto mb-4" />
              <h3 className="heading-sm mb-2">Live Updates</h3>
              <p className="body-sm text-motion-light-gray">
                Real-time fieldnotes, interviews, and evidence from ongoing investigations
              </p>
            </CardContent>
          </Card>

          <Card 
            className="bg-motion-gray/10 border-motion-gray hover:border-motion-red transition-colors cursor-pointer"
            onClick={() => onTabChange('projects')}
          >
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-motion-red mx-auto mb-4" />
              <h3 className="heading-sm mb-2">Active Campaigns</h3>
              <p className="body-sm text-motion-light-gray">
                Coordinated efforts to drive accountability and systemic change
              </p>
            </CardContent>
          </Card>

          <Card 
            className="bg-motion-gray/10 border-motion-gray hover:border-motion-red transition-colors cursor-pointer"
            onClick={() => onTabChange('involved')}
          >
            <CardContent className="p-6 text-center">
              <ArrowRight className="h-12 w-12 text-motion-red mx-auto mb-4" />
              <h3 className="heading-sm mb-2">Take Action</h3>
              <p className="body-sm text-motion-light-gray">
                Join our community of researchers, activists, and accountability advocates
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};
