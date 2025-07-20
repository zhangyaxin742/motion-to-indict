import { Card, CardContent } from '@/components/ui/card';
import { TypewriterText } from './TypewriterText';
import { Users } from 'lucide-react'; 
import { Link } from 'react-router-dom'; 

export const AboutSection = () => {

    const team = {
    name: 'Your Name',
    role: 'Founder & Executive Director',
    background:
      'Solo investigative reporter and organizer. I dig through FOIAs, build data pipelines, and hold institutions to account.',
    // you can swap this out for an <img> if you have a picture
  }; 
  return (
    <div className="min-h-screen bg-motion-dark text-white">
      <div className="container mx-auto px-8 md:px-16 py-16">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="heading-xl mb-6">
            <span className="red-accent">About Motion to </span>Indict
          </h1>
          <div className="body-lg text-motion-light-gray">
            <div className="font-oldnews italic">
              <TypewriterText text="Researchers. Journalists. Advocates. Radicals." />
            </div>
          </div>
        </div>

        {/* Two cards side‑by‑side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Card 1 */}
          <section
            className="
              bg-motion-gray/10
              border border-motion-gray
              rounded-2xl p-8 shadow-lg
              transform transition-transform duration-300
              hover:scale-[1.02]
            "
          >
            <h3 className="heading-sm mb-4 text-shadow-500 red-accent">
              Why We Exist
            </h3>
            <p className="body-md text-motion-light-gray-300 mb-6">
              Traditional think tanks operate within existing power structures,
              often dependent on the very institutions they claim to study. We
              operate independently, funded by individual donors and committed
              to following evidence wherever it leads.
            </p>
            <p className="body-md text-motion-light-gray">
              As young people, we have nothing to lose and everything to gain
              from honest, unflinching analysis of how power really operates in
              America.
            </p>
          </section>

          {/* Card 2 */}
          <section
            className="
              bg-motion-gray/10
              border border-motion-gray
              rounded-2xl p-8 shadow-lg
              transform transition-transform duration-300
              hover:scale-[1.02]
            "
          >
            <h3 className="heading-sm mb-4 red-accent">What We Do</h3>
            <p className="body-md text-motion-light-gray mb-6">
              Motion to Indict conducts rigorous investigations into institutional
              failures, corporate capture, and systemic corruption. We use FOIA
              requests, data analysis, fieldwork, and direct engagement to expose
              the mechanisms that allow powerful actors to escape accountability.
            </p>
            <p className="body-md text-motion-light-gray">
              Our research directly informs policy advocacy, legal action, and
              public campaigns designed to create meaningful institutional change.
            </p>
          </section>
        </div>

          {/* Our Team */}
        <section className="mb-20">
          <h2 className="heading-md mb-12 text-center">Our Team</h2>
          <div className="flex justify-center">
            <Card className="w-full max-w-sm bg-motion-gray/10 border-motion-gray rounded-2xl">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-24 h-24 bg-motion-gray rounded-full mx-auto mb-2 flex items-center justify-center">
                  <Users className="h-12 w-12 text-motion-light-gray" />
                </div>
                <h3 className="heading-sm">{team.name}</h3>
                <p className="text-motion-red font-medium">{team.role}</p>
                <p className="body-sm text-motion-light-gray">{team.background}</p>
                
                {/* CTA button */}
                <Link href="/get-involved">
                  <a className="
                    inline-block 
                    mt-4 
                    px-6 py-2 
                    bg-red-600 
                    hover:bg-red-700 
                    rounded-full 
                    text-white 
                    font-medium
                    transition
                  ">
                    Get Involved
                  </a>
                </Link>
              </CardContent>
            </Card>
            
          </div>
        </section>
      </div>
    </div>
  );
};
