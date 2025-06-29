import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Calendar, ArrowRight, Clock, MapPin, Users, Camera } from 'lucide-react';

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

const liveUpdates = [
  {
    type: "fieldnote",
    timestamp: "2 hours ago",
    location: "Austin, TX",
    title: "City Council Budget Hearing - Energy Committee",
    content: "Observed: Three committee members left during public comment period when citizens raised questions about utility company donations. Recording shows clear coordination.",
    tags: ["municipal corruption", "energy policy"],
    urgent: true
  },
  {
    type: "interview",
    timestamp: "4 hours ago", 
    location: "Remote",
    title: "Former EPA Official Speaks on Record",
    content: "\"The pressure wasn't subtle. When you have industry lawyers calling your supervisor's supervisor, the message is clear.\" - Anonymous former EPA regional administrator",
    tags: ["regulatory capture", "environmental"],
    urgent: false
  },
  {
    type: "evidence",
    timestamp: "6 hours ago",
    location: "Washington, DC",
    title: "FOIA Response: Internal DHS Communications",
    content: "Obtained 47 pages of internal communications showing coordination between DHS officials and private detention companies on immigration policy recommendations.",
    tags: ["immigration", "private prisons"],
    urgent: true
  },
  {
    type: "protest",
    timestamp: "8 hours ago",
    location: "Chicago, IL", 
    title: "Healthcare Workers Picket Lines",
    content: "Day 3 of strike. Hospital executives arrived in town cars while workers shared stories of understaffing. Security prevented media from entering parking structures.",
    tags: ["labor", "healthcare"],
    urgent: false
  },
  {
    type: "social",
    timestamp: "12 hours ago",
    location: "Online",
    title: "Coordinated Disinformation Campaign Detected",
    content: "Pattern analysis reveals 400+ bot accounts spreading identical messaging about climate policies. Accounts created within 48-hour window, funding source TBD.",
    tags: ["disinformation", "climate"],
    urgent: true
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

const getIcon = (type: string) => {
  switch (type) {
    case "fieldnote": return MapPin;
    case "interview": return Users;
    case "evidence": return Camera;
    case "protest": return Users;
    case "social": return Clock;
    default: return Clock;
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case "fieldnote": return "FIELD NOTE";
    case "interview": return "INTERVIEW";
    case "evidence": return "EVIDENCE";
    case "protest": return "PROTEST LOG";
    case "social": return "SOCIAL INTEL";
    default: return "UPDATE";
  }
};

export const ResearchAndMediaSection = () => (
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
              : "border-motion-gray text-motion-gray hover:border-motion-red hover:text-motion-red"}
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
                <h3 className="heading-sm text-motion-dark mb-4">{reports[0].title}</h3>
                <p className="body-md text-motion-gray mb-6">{reports[0].summary}</p>
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

      {/* In Media Res */}
      <div className="mb-16">
        <h2 className="heading-md text-motion-dark mb-4">In Media <span className="red-accent">Res</span></h2>
        <p className="body-md text-motion-gray mb-8 max-w-3xl">
          Real-time fieldnotes and documentation from our investigations.
        </p>

        {/* Status Bar */}
        <div className="bg-motion-gray/20 rounded-lg p-4 border border-motion-gray mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-motion-red rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-motion-dark">LIVE</span>
            </div>
            <div className="text-sm text-motion-gray">
              12 active investigations • 5 field teams deployed • Last update: 2 hours ago
            </div>
          </div>
        </div>

        {/* Live Feed */}
        <div className="space-y-6 mb-8">
          {liveUpdates.map((update, index) => {
            const IconComponent = getIcon(update.type);
            return (
              <Card
                key={index}
                className={`bg-white border-motion-gray hover:border-motion-red transition-colors ${
                  update.urgent ? 'border-l-4 border-l-motion-red' : ''
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex lg:flex-col items-center lg:items-start gap-3 lg:w-32">
                      <div className="p-3 bg-motion-red/20 rounded-lg">
                        <IconComponent className="h-6 w-6 text-motion-red" />
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`border-motion-red text-motion-red text-xs ${
                          update.urgent ? 'bg-motion-red/10' : ''
                        }`}
                      >
                        {getTypeLabel(update.type)}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                        <h3 className="heading-sm text-motion-dark">{update.title}</h3>
                        {update.urgent && (
                          <Badge className="bg-motion-red text-white text-xs">URGENT</Badge>
                        )}
                      </div>
                      <p className="body-md text-motion-gray mb-4">{update.content}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-motion-gray">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {update.timestamp}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {update.location}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {update.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="outline"
                            className="border-motion-gray text-motion-gray text-xs"
                          >
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Research Archive */}
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
                <h3 className="heading-sm text-motion-dark mb-3 line-clamp-2">{report.title}</h3>
                <p className="body-sm text-motion-gray mb-4 line-clamp-3">{report.summary}</p>
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
  </div>
);