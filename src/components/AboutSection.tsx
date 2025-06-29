
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Award, Quote } from 'lucide-react';
import { TypewriterText } from './TypewriterText';

const values = [
  {
    icon: Target,
    title: "Accountability First",
    description: "We don't just document problems—we trace them to their sources and demand answers from those responsible."
  },
  {
    icon: Users,
    title: "Youth-Led Analysis",
    description: "Young people are uniquely positioned to see through institutional facades and ask uncomfortable questions."
  },
  {
    icon: Award,
    title: "Evidence-Based Action", 
    description: "Every claim is sourced, every investigation is documented, every conclusion is supported by verifiable evidence."
  }
];

export const AboutSection = () => {
  return (
    <div className="min-h-screen bg-motion-dark text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="heading-xl mb-6">
           <span className="red-accent"> About Motion to </span> Indict
          </h1>
          <p className="body-lg text-motion-light-gray">
        Researchers. Journalists. Advocates. <em> Radicals. </em> <br> </br>
Call us what you will. But above all, we are <em> people—</em> 
            young people who refuse the stagnancy of the status quo. 
            Young people committed to holding institutions accountable—
            and along the way, shaping the world we’ll inherit.
          </p>
        </div>

        {/* Mission Statement */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">Our Mission</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
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
              </div>
              <div>
                <h3 className="heading-sm mb-4 red-accent">Why We Exist</h3>
                <p className="body-md text-motion-light-gray mb-6">
                  Traditional think tanks operate within existing power structures, 
                  often dependent on the very institutions they claim to study. 
                  We operate independently, funded by individual donors and 
                  committed to following evidence wherever it leads.
                </p>
                <p className="body-md text-motion-light-gray">
                  As young people, we have nothing to lose and everything to gain 
                  from honest, unflinching analysis of how power really operates 
                  in America.
                </p>
              </div>
            </div>
          </div>
        </section>

                {/* Our Values */}
        <section className="mb-20">
          <h2 className="heading-md mb-12 text-center">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="bg-motion-gray/10 border-motion-gray text-center">
                  <CardContent className="p-8">
                    <IconComponent className="h-12 w-12 text-motion-red mx-auto mb-4" />
                    <h3 className="heading-sm mb-4">{value.title}</h3>
                    <p className="body-md text-motion-light-gray">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
        
        {/* Impact Stats */}
    <section>
  <h2 className="heading-md mb-12 text-center">Our Roadmap</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    <div>
      <div className="text-4xl font-bold red-accent mb-2">Founded</div>
      <div className="text-motion-light-gray">June 2025</div>
    </div>
    <div>
      <div className="text-4xl font-bold red-accent mb-2">5</div>
      <div className="text-motion-light-gray">Investigations Published</div>
    </div>
    <div>
      <div className="text-4xl font-bold red-accent mb-2">1K</div>
      <div className="text-motion-light-gray">Youth Reached</div>
    </div>
    <div>
      <div className="text-4xl font-bold red-accent mb-2">14</div>
      <div className="text-motion-light-gray">Fieldnotes Captured</div>
    </div>
  </div>
  <h6 className="heading-md mt-12 font-oldnews text-base text-center">
    <TypewriterText 
              text="...and counting!"
            /> </h6>
</section>
      </div>
    </div>
  );
};

/* 
        <section className="mb-20">
          <h2 className="heading-md mb-12 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-motion-gray/10 border-motion-gray">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-motion-gray rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-motion-light-gray" />
                  </div>
                  <h3 className="heading-sm mb-2">{member.name}</h3>
                  <div className="text-motion-red text-sm font-medium mb-3">{member.role}</div>
                  <p className="body-sm text-motion-light-gray">{member.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
const teamMembers = [
  {
    name: "Yaxin Zhang", 
    role: "Founder & Executive Director",
    background: "Ex-Google researcher specializing in algorithmic accountability and transparency.",
    image: "photo-1507003211169-0a1dd7228f2d"
  },
  {
    name: "Jordan Thompson",
    role: "Field Operations Coordinator", 
    background: "Community organizer with 8 years experience in environmental justice campaigns.",
    image: "photo-1438761681033-6461ffad8d80"
  },
  {
    name: "Samira Okafor",
    role: "Legal Research Director",
    background: "Civil rights attorney and former ACLU staff. Expert in FOIA and transparency law.",
    image: "photo-1472099645785-5658abf4ff4e"
  }
];
*/