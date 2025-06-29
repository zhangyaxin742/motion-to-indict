
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowRight, Mail } from 'lucide-react';
import { useState } from 'react';
import { TypewriterText } from './TypewriterText';
import OngoingInvestigations from './OngoingInvestigations';
import Footer from './Footer';

interface LandingSectionProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const LandingSection = ({ activeTab, onTabChange }: LandingSectionProps) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Placeholder for future backend integration
      console.log('Newsletter subscription:', email);
      setIsSubscribed(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

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
    ripple
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
    ripple
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

      {/* Newsletter Subscription Section */}
      <section className="bg-motion-gray/10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-4">
            Subscribe to Our <span className="text-motion-red">Dispatches</span>
          </h2>
          <p className="body-md text-motion-light-gray mb-8 max-w-2xl mx-auto">
            Get investigative reports, fieldnotes, and calls to action directly in your inbox.
          </p>
          
          {isSubscribed ? (
            <div className="bg-green-900/20 border border-green-500 rounded-md p-4 max-w-md mx-auto">
              <p className="text-green-400 font-medium">Thank you for subscribing!</p>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <div className="relative flex-1 w-full">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-motion-light-gray" />
                <Input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-black/20 border-motion-gray text-white placeholder:text-motion-light-gray focus:border-motion-red focus:ring-motion-red"
                  aria-label="Email address"
                  required
                />
              </div>
              <Button 
                type="submit"
                className="bg-motion-red hover:bg-red-700 text-white px-6 py-2 w-full sm:w-auto"
              >
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
