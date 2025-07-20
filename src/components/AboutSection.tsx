
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Award, Quote } from 'lucide-react';
import { TypewriterText } from './TypewriterText';

export const AboutSection = () => {
  return (
    <div className="min-h-screen bg-motion-dark text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="heading-xl mb-6">
            <span className="red-accent">About Motion to </span>Indict
          </h1>
          <div className="body-lg text-motion-light-gray">
            <div className="font-oldnews italic">
              <TypewriterText text="Researchers. Journalists. Advocates. Radicals." />
            </div>
            <p className="mt-4 font-oldnews text-base text-white">
              We collect evidence, interrogate facts, and indict systems by the very
              standards they claim to uphold.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Column 1 */}
            <div>
              <h3 className="heading-sm mb-4 text-shadow-500 red-accent">
                What We Do
              </h3>
              <p className="body-md text-motion-light-gray-300 mb-6">
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

            {/* Column 2 */}
            <div>
              <h3 className="heading-sm mb-4 red-accent">Why We Exist</h3>
              <p className="body-md text-motion-light-gray mb-6">
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
            </div>
          </div>
        </section>

        {/* Commented out additional sections for future use */}
        {/* 
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-motion-gray border-motion-light-gray">
              <CardContent className="p-6">
                <Target className="w-12 h-12 mb-4 text-motion-red" />
                <h3 className="heading-sm mb-2 text-white">Our Mission</h3>
                <p className="body-sm text-motion-light-gray">
                  To expose institutional failures through rigorous investigation and analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-motion-gray border-motion-light-gray">
              <CardContent className="p-6">
                <Users className="w-12 h-12 mb-4 text-motion-red" />
                <h3 className="heading-sm mb-2 text-white">Our Team</h3>
                <p className="body-sm text-motion-light-gray">
                  Young researchers, journalists, and advocates committed to truth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-motion-gray border-motion-light-gray">
              <CardContent className="p-6">
                <Award className="w-12 h-12 mb-4 text-motion-red" />
                <h3 className="heading-sm mb-2 text-white">Our Impact</h3>
                <p className="body-sm text-motion-light-gray">
                  Creating meaningful change through evidence-based advocacy.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-16 h-16 mx-auto mb-6 text-motion-red" />
            <blockquote className="body-lg italic text-motion-light-gray mb-4">
              "We operate independently, funded by individual donors and committed
              to following evidence wherever it leads."
            </blockquote>
            <cite className="body-sm text-white">Motion to Indict Team</cite>
          </div>
        </section>
        */}

      </div>
    </div>   
  );
};
