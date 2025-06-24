
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Calendar, ArrowRight } from 'lucide-react';

const reports = [
  {
    title: "Corporate Capture of Municipal Climate Policy: A Case Study in Regulatory Failure",
    summary: "Six-month investigation reveals systematic infiltration of city planning committees by fossil fuel companies.",
    date: "March 15, 2024",
    category: "Environmental Justice",
    readTime: "12 min",
    featured: true
  },
  {
    title: "The Privatization Pipeline: How Charter School Networks Extract Public Wealth",
    summary: "Analysis of financial flows between charter operators and private equity firms across five states.",
    date: "February 28, 2024",
    category: "Education Policy",
    readTime: "18 min",
    featured: false
  },
  {
    title: "Policing for Profit: Asset Forfeiture and Municipal Budget Dependencies",
    summary: "Data-driven examination of how civil asset forfeiture has become essential revenue for local governments.",
    date: "February 10, 2024",
    category: "Criminal Justice",
    readTime: "15 min",
    featured: false
  },
  {
    title: "Digital Redlining: Broadband Access and the New Geography of Inequality",
    summary: "Mapping the correlation between historical redlining and contemporary internet infrastructure gaps.",
    date: "January 22, 2024",
    category: "Technology & Rights",
    readTime: "10 min",
    featured: false
  },
  {
    title: "The Revolving Door: Defense Contractors and Pentagon Personnel Exchange",
    summary: "Tracking career movements between major defense contractors and Department of Defense leadership positions.",
    date: "January 8, 2024",
    category: "Defense Policy",
    readTime: "20 min",
    featured: false
  },
  {
    title: "Healthcare Consolidation and Care Deserts: When Monopolies Kill",
    summary: "Investigation into hospital mergers and their impact on rural healthcare access and patient outcomes.",
    date: "December 15, 2023",
    category: "Healthcare Policy",
    readTime: "14 min",
    featured: false
  }
];

const categories = [
  "All Reports",
  "Environmental Justice",
  "Education Policy", 
  "Criminal Justice",
  "Technology & Rights",
  "Defense Policy",
  "Healthcare Policy"
];

export const ResearchSection = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="heading-xl text-motion-dark mb-6">
            Research & <span className="red-accent">Commentary</span>
          </h1>
          <p className="body-lg text-motion-gray">
            In-depth investigations, policy analysis, and urgent commentary on the systems 
            that shape our world. Our research doesn't just document problems—it exposes 
            the mechanisms of power that create and sustain them.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All Reports" ? "default" : "outline"}
              className={category === "All Reports" 
                ? "bg-motion-red hover:bg-red-700 text-white"
                : "border-motion-gray text-motion-gray hover:border-motion-red hover:text-motion-red"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Report */}
        <div className="mb-16">
          <h2 className="heading-md text-motion-dark mb-8">Featured Investigation</h2>
          <Card className="border-2 border-motion-red">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <Badge className="bg-motion-red text-white mb-4">URGENT REPORT</Badge>
                  <h3 className="heading-sm text-motion-dark mb-4">
                    {reports[0].title}
                  </h3>
                  <p className="body-md text-motion-gray mb-6">
                    {reports[0].summary}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-motion-gray mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {reports[0].date}
                    </div>
                    <span>•</span>
                    <span>{reports[0].readTime} read</span>
                    <span>•</span>
                    <Badge variant="outline" className="border-motion-gray text-motion-gray">
                      {reports[0].category}
                    </Badge>
                  </div>
                  <Button className="bg-motion-red hover:bg-red-700 text-white">
                    Read Full Report
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="lg:w-80">
                  <div className="bg-motion-dark rounded-lg p-6 text-white">
                    <FileText className="h-16 w-16 text-motion-red mx-auto mb-4" />
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-2">47 pages</div>
                      <div className="text-sm text-motion-light-gray">Comprehensive Analysis</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Archive */}
        <div>
          <h2 className="heading-md text-motion-dark mb-8">Research Archive</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reports.slice(1).map((report, index) => (
              <Card 
                key={index}
                className="border-motion-gray hover:border-motion-red transition-colors cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge variant="outline" className="border-motion-gray text-motion-gray">
                      {report.category}
                    </Badge>
                  </div>
                  <h3 className="heading-sm text-motion-dark mb-3 line-clamp-2">
                    {report.title}
                  </h3>
                  <p className="body-sm text-motion-gray mb-4 line-clamp-3">
                    {report.summary}
                  </p>
                  <div className="flex items-center justify-between text-sm text-motion-gray">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {report.date}
                    </div>
                    <span>{report.readTime} read</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-motion-gray text-motion-gray hover:border-motion-red hover:text-motion-red"
          >
            Load More Reports
          </Button>
        </div>
      </div>
    </div>
  );
};
