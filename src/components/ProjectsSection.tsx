// New Coming Soon component:

import Link from 'next/link';

export const ProjectsSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-16">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
        🚧 Projects Coming Soon
      </h1>
      <p className="text-motion-gray text-center mb-8 max-w-xl">
        We’re preparing a suite of investigations, tools, and collaborations to advance accountability.
        Check back soon for updates.
      </p>
      <Link href="/">
        <button className="bg-motion-red hover:bg-red-700 transition-colors px-6 py-3 rounded font-semibold text-white">
          Return to Home
        </button>
      </Link>
    </div>
  );
};

// Commenting out your original ProjectsSection component so you don't lose it:
/*
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Target, Users, FileText, ArrowRight } from 'lucide-react';

const campaigns = [
  {
    title: "Corporate Climate Obstruction Database",
    description: "Comprehensive mapping of corporate influence on climate policy across federal, state, and local levels.",
    status: "active",
    progress: 73,
    team: "8 researchers",
    deadline: "June 2024",
    impact: "Policy transparency",
    urgent: true
  },
  {
    title: "Defense Contractor Revolving Door Tracker",
    description: "Real-time monitoring of personnel movements between Pentagon and major defense contractors.",
    status: "active", 
    progress: 89,
    team: "5 researchers",
    deadline: "April 2024",
    impact: "Government accountability",
    urgent: false
  },
  {
    title: "Municipal Asset Forfeiture Audit",
    description: "City-by-city analysis of civil asset forfeiture policies and revenue dependencies.",
    status: "launching",
    progress: 15,
    team: "12 researchers",
    deadline: "August 2024",
    impact: "Criminal justice reform",
    urgent: true
  }
];

const tools = [
  {
    title: "FOIA Request Generator",
    description: "Automated tool for generating targeted Freedom of Information Act requests with legal templates.",
    users: "2.3K",
    category: "Transparency Tools"
  },
  {
    title: "Corporate Network Mapper",
    description: "Interactive visualization tool for tracking corporate relationships and influence networks.",
    users: "890",
    category: "Research Tools"
  },
  {
    title: "Policy Impact Calculator",
    description: "Data-driven analysis of proposed policy changes and their projected impacts on communities.",
    users: "1.7K",
    category: "Analysis Tools"
  }
];

const collaborations = [
  {
    organization: "The Intercept",
    project: "Pentagon Papers 2.0",
    status: "Ongoing investigation"
  },
  {
    organization: "Brennan Center for Justice", 
    project: "Voting Rights Database",
    status: "Data partnership"
  },
  {
    organization: "Center for Investigative Reporting",
    project: "Climate Disinformation Archive",
    status: "Research collaboration"
  }
];

export const ProjectsSection = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">

        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="heading-xl text-motion-dark mb-6">
            Our <span className="red-accent">Projects</span>
          </h1>
          <p className="body-lg text-motion-gray">
            Active campaigns, published tools, and strategic collaborations driving 
            accountability across institutions. Every project serves our mission: 
            exposing systems of power and creating pathways for change.
          </p>
        </div>

    
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <h2 className="heading-md text-motion-dark mr-4">Active Campaigns</h2>
            <div className="h-px bg-motion-gray flex-1"></div>
          </div>

          <div className="space-y-8">
            {campaigns.map((campaign, index) => (
              <Card 
                key={index}
                className={`border-motion-gray hover:border-motion-red transition-colors ${
                  campaign.urgent ? 'border-l-4 border-l-motion-red' : ''
                }`}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="heading-sm text-motion-dark">{campaign.title}</h3>
                        {campaign.urgent && (
                          <Badge className="bg-motion-red text-white">URGENT</Badge>
                        )}
                        <Badge 
                          variant="outline"
                          className={`${campaign.status === 'active' 
                            ? 'border-green-500 text-green-700 bg-green-50' 
                            : 'border-orange-500 text-orange-700 bg-orange-50'
                          }`}
                        >
                          {campaign.status.toUpperCase()}
                        </Badge>
                      </div>
                      
                      <p className="body-md text-motion-gray mb-6">
                        {campaign.description}
                      </p>

                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-motion-gray">Progress</span>
                            <span className="text-motion-dark font-medium">{campaign.progress}%</span>
                          </div>
                          <Progress value={campaign.progress} className="h-2" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-motion-gray">Team Size</div>
                            <div className="text-motion-dark font-medium">{campaign.team}</div>
                          </div>
                          <div>
                            <div className="text-motion-gray">Target Date</div>
                            <div className="text-motion-dark font-medium">{campaign.deadline}</div>
                          </div>
                          <div>
                            <div className="text-motion-gray">Impact Area</div>
                            <div className="text-motion-dark font-medium">{campaign.impact}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-64">
                      <div className="bg-motion-dark rounded-lg p-6 text-white text-center">
                        <Target className="h-12 w-12 text-motion-red mx-auto mb-4" />
                        <Button className="w-full bg-motion-red hover:bg-red-700">
                          View Campaign
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center mb-8">
            <h2 className="heading-md text-motion-dark mr-4">Published Tools</h2>
            <div className="h-px bg-motion-gray flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className="border-motion-gray hover:border-motion-red transition-colors">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <FileText className="h-12 w-12 text-motion-red mx-auto mb-3" />
                    <Badge variant="outline" className="border-motion-gray text-motion-gray">
                      {tool.category}
                    </Badge>
                  </div>
                  
                  <h3 className="heading-sm text-motion-dark mb-3 text-center">
                    {tool.title}
                  </h3>
                  
                  <p className="body-sm text-motion-gray mb-4 text-center">
                    {tool.description}
                  </p>

                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-motion-red">{tool.users}</div>
                    <div className="text-sm text-motion-gray">Active Users</div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full border-motion-gray text-motion-gray hover:border-motion-red hover:text-motion-red"
                  >
                    Access Tool
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center mb-8">
            <h2 className="heading-md text-motion-dark mr-4">Strategic Collaborations</h2>
            <div className="h-px bg-motion-gray flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collaborations.map((collab, index) => (
              <Card key={index} className="border-motion-gray hover:border-motion-red transition-colors">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Users className="h-12 w-12 text-motion-red mx-auto mb-4" />
                    <h3 className="heading-sm text-motion-dark mb-2">
                      {collab.organization}
                    </h3>
                    <p className="body-sm text-motion-gray mb-3">
                      {collab.project}
                    </p>
                    <Badge variant="outline" className="border-green-500 text-green-700 bg-green-50">
                      {collab.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
*/