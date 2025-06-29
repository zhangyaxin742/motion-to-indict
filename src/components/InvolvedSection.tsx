
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, FileText, Users, ArrowRight, CheckCircle } from 'lucide-react';

const opportunities = [
  {
    title: "Research Fellows",
    description: "3-month intensive research programs on specific accountability issues. Full training provided.",
    commitment: "15-20 hrs/week",
    skills: "Research, writing, data analysis",
    spots: "8 positions available"
  },
  {
    title: "Field Investigators", 
    description: "On-ground documentation and evidence gathering for active campaigns.",
    commitment: "Flexible schedule",
    skills: "Attention to detail, communication",
    spots: "12 positions available"
  },
  {
    title: "Data Analysts",
    description: "Process FOIA responses, financial documents, and large datasets to identify patterns.",
    commitment: "10-15 hrs/week", 
    skills: "Excel, Python/R preferred",
    spots: "5 positions available"
  },
  {
    title: "Legal Research",
    description: "Support FOIA requests, policy analysis, and legal strategy development.",
    commitment: "10-20 hrs/week",
    skills: "Legal research, writing", 
    spots: "4 positions available"
  }
];

export const InvolvedSection = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [contributeForm, setContributeForm] = useState({
    name: '',
    email: '',
    skills: '',
    interest: '',
    message: ''
  });
  const [contributeSubmitted, setContributeSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSubmitted(true);
    setNewsletterEmail('');
  };

  const handleContributeSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    setContributeSubmitted(true);
    setContributeForm({
      name: '',
      email: '',
      skills: '',
      interest: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="heading-xl text-motion-dark mb-6">
            Get <span className="red-accent">Involved</span>
          </h1>
          <p className="body-lg text-motion-gray">
            Join a community of researchers, investigators, and accountability advocates. 
            We welcome anyone committed to evidence-based analysis and systemic change.
          </p>
        </div>

        {/* Newsletter Signup */}
        <section className="mb-20">
          <Card className="bg-motion-dark text-white max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <Mail className="h-12 w-12 text-motion-red mx-auto mb-4" />
              <h2 className="heading-md mb-4">Investigation Updates</h2>
              <p className="body-md text-motion-light-gray mb-6">
                Get urgent updates, new reports, and exclusive access to ongoing investigations. 
                No spam, just accountability.
              </p>
              
              {newsletterSubmitted ? (
                <div className="flex items-center justify-center gap-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                  <span>You're subscribed! Check your email for confirmation.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="flex-1 bg-motion-gray/20 border-motion-gray text-white placeholder:text-motion-light-gray"
                  />
                  <Button type="submit" className="bg-motion-red hover:bg-red-700">
                    Subscribe
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Open Positions */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="heading-md text-motion-dark mb-4">Open Positions</h2>
            <p className="body-md text-motion-gray max-w-2xl mx-auto">
              We're looking for committed researchers and investigators to join our teams. 
              All positions are remote-friendly with flexible scheduling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="border-motion-gray hover:border-motion-red transition-colors">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="heading-sm text-motion-dark">{opportunity.title}</h3>
                    <Badge className="bg-motion-red text-white">{opportunity.spots}</Badge>
                  </div>
                  
                  <p className="body-md text-motion-gray mb-4">
                    {opportunity.description}
                  </p>

                  <div className="space-y-2 text-sm text-motion-gray mb-4">
                    <div><strong>Commitment:</strong> {opportunity.commitment}</div>
                    <div><strong>Skills:</strong> {opportunity.skills}</div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full border-motion-gray text-motion-gray hover:border-motion-red hover:text-motion-red"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contribute Form */}
        <section className="mb-20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="heading-md text-motion-dark mb-4">Contribute to Our Work</h2>
              <p className="body-md text-motion-gray">
                Have a tip, story lead, or want to collaborate? We want to hear from you.
              </p>
            </div>

            {contributeSubmitted ? (
              <Card className="border-green-500 bg-green-50">
                <CardContent className="p-8 text-center">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="heading-sm text-green-800 mb-2">Message Received</h3>
                  <p className="text-green-700">
                    Thank you for reaching out. We'll review your submission and get back to you within 48 hours.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-motion-gray">
                <CardContent className="p-8">
                  <form onSubmit={handleContributeSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Your name"
                        value={contributeForm.name}
                        onChange={(e) => setContributeForm({...contributeForm, name: e.target.value})}
                        required
                      />
                      <Input
                        type="email"
                        placeholder="Your email"
                        value={contributeForm.email}
                        onChange={(e) => setContributeForm({...contributeForm, email: e.target.value})}
                        required
                      />
                    </div>
                    
                    <Input
                      placeholder="Your skills/background"
                      value={contributeForm.skills}
                      onChange={(e) => setContributeForm({...contributeForm, skills: e.target.value})}
                    />
                    
                    <Input
                      placeholder="Area of interest"
                      value={contributeForm.interest}
                      onChange={(e) => setContributeForm({...contributeForm, interest: e.target.value})}
                    />
                    
                    <Textarea
                      placeholder="Tell us about your story tip, collaboration idea, or how you'd like to contribute..."
                      rows={4}
                      value={contributeForm.message}
                      onChange={(e) => setContributeForm({...contributeForm, message: e.target.value})}
                      required
                    />
                    
                    <Button type="submit" className="w-full bg-motion-red hover:bg-red-700 text-white">
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

      </div>
    </div>
  );
};
