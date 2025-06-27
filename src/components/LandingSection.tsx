import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, FileText, Users, Target } from 'lucide-react';
import { TypewriterText } from './TypewriterText';

interface LandingSectionProps {
  onTabChange: (tab: string) => void;
}

export const LandingSection = ({ onTabChange }: LandingSectionProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-motion-dark to-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-xl mb-6 animate-fade-in">
            An autopsy of political America— <span className="red-accent"> as told by its <em> 'radical'</em> youth.</span>
          </h1>
          <div className="body-lg text-motion-light-gray mb-8 max-w-3xl mx-auto">
            <TypewriterText 
              text="MOTION TO INDICT is Gen Z’s premier think tank—our unapologetic answer to Brookings, RAND, and CATO. 
              From Congress to the classroom, we publish fieldnotes, interviews, and investigative briefs that drag broken institutions into the light."
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
              className="border-motion-red text-motion-red hover:bg-motion-red hover:text-white px-8 py-3"
              onClick={() => onTabChange('involved')}
            >
              Join the Movement
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold red-accent">47</div>
            <div className="text-motion-light-gray">Reports Published</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold red-accent">12</div>
            <div className="text-motion-light-gray">Active Investigations</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold red-accent">89K</div>
            <div className="text-motion-light-gray">Community Members</div>
          </div>
        </div>
      </section>

      {/* Latest Report Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <h2 className="heading-md mr-4">Latest Investigation</h2>
            <div className="h-px bg-motion-gray flex-1"></div>
          </div>
          
          <Card className="bg-motion-gray/20 border-motion-gray hover:border-motion-red transition-colors">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="text-sm text-motion-red mb-2">URGENT REPORT</div>
                  <h3 className="heading-sm mb-4">
                    Corporate Capture of Municipal Climate Policy: A Case Study in Regulatory Failure
                  </h3>
                  <p className="body-md text-motion-light-gray mb-6">
                    Our six-month investigation reveals how fossil fuel companies have systematically 
                    infiltrated city planning committees across three major metropolitan areas, 
                    effectively neutralizing local climate initiatives while maintaining a facade of cooperation.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-motion-light-gray">
                    <span>Published March 15, 2024</span>
                    <span>•</span>
                    <span>12 min read</span>
                    <span>•</span>
                    <span>Environmental Justice</span>
                  </div>
                </div>
                <div className="lg:w-80">
                  <div className="bg-motion-dark rounded-lg p-6 border border-motion-gray">
                    <div className="text-center">
                      <FileText className="h-12 w-12 text-motion-red mx-auto mb-4" />
                      <Button 
                        className="w-full bg-motion-red hover:bg-red-700"
                        onClick={() => onTabChange('research')}
                      >
                        Read Full Report
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
