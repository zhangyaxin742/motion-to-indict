
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FileText, Calendar, ArrowRight, Clock, MapPin, Users, Camera, X, ChevronLeft } from 'lucide-react';

const reports = [
  {
    title: "Corporate Capture of Municipal Climate Policy: A Case Study in Regulatory Failure",
    summary: "Six-month investigation reveals systematic infiltration of city planning committees by fossil fuel companies.",
    date: "March 15, 2024",
    category: "Health & Environment",
    readTime: "12 min",
    featured: true
  },
  {
    title: "The Privatization Pipeline: How Charter School Networks Extract Public Wealth",
    summary: "Analysis of financial flows between charter operators and private equity firms across five states.",
    date: "February 28, 2024",
    category: "Economy & Inequality",
    readTime: "18 min",
    featured: false
  },
  {
    title: "Policing for Profit: Asset Forfeiture and Municipal Budget Dependencies",
    summary: "Data-driven examination of how civil asset forfeiture has become essential revenue for local governments.",
    date: "February 10, 2024",
    category: "Power & Governance",
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
    category: "Technology & Surveillance",
    readTime: "20 min",
    featured: false
  },
  {
    title: "Healthcare Consolidation and Care Deserts: When Monopolies Kill",
    summary: "Investigation into hospital mergers and their impact on rural healthcare access and patient outcomes.",
    date: "December 15, 2023",
    category: "Culture & Narrative",
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
  "Power & Governance",
  "Economy & Inequality", 
  "Technology & Surveillance",
  "Health & Environment",
  "Culture & Narrative",
];

const getIcon = (type: string) => {
  switch (type) {
    case "fieldnote": return MapPin;
    case "interview": return Users;
    case "protest": return Users;
    case "intel": return Camera;
    default: return Clock;
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case "fieldnote": return "FIELD NOTE";
    case "interview": return "INTERVIEW";
    case "protest": return "PROTEST LOG";
    case "intel": return "ANON INTEL";
    default: return "UPDATE";
  }
};

export const ResearchAndMediaSection = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Handle escape key to close sidebar
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [sidebarOpen]);

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Fixed In Media Res Trigger Button */}
<Button
  onClick={() => setSidebarOpen(true)}
  className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-motion-red hover:bg-red-700 text-white rounded-l-lg shadow-lg border-0 flex flex-col items-center justify-center h-36 w-12"
  style={{ writingMode: 'vertical-rl' }}
>
   <div className="flex flex-col items-center justify-center pr-2">
    <span className="text-base font-medium-garamond">In Media Res</span>
    <ChevronLeft className="h-15 w-15 mt-0.5" />
  </div>
</Button>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-1/3 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-motion-gray">
            <div>
              <h2 className="heading-md text-motion-dark">In Media <span className="red-accent">Res</span></h2>
              <p className="body-sm text-motion-gray mt-1">Real-time fieldnotes and documentation</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(false)}
              className="hover:bg-motion-gray/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Status Bar */}
          <div className="bg-motion-gray/20 p-4 border-b border-motion-gray">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-motion-red rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-motion-dark">LIVE</span>
              </div>
              <div className="text-sm text-motion-gray">
                12 active investigations • Last update: 2 hours ago
              </div>
            </div>
          </div>

          {/* Scrollable Live Updates */}
          <ScrollArea className="flex-1">
            <div className="p-6 space-y-6">
              {liveUpdates.map((update, index) => {
                const IconComponent = getIcon(update.type);
                return (
                  <Card
                    key={index}
                    className={`bg-white border-motion-gray hover:border-motion-red transition-colors ${
                      update.urgent ? 'border-l-4 border-l-motion-red' : ''
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center gap-2 w-16">
                          <div className="p-2 bg-motion-red/20 rounded-lg">
                            <IconComponent className="h-5 w-5 text-motion-red" />
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
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start gap-2 mb-2">
                            <h3 className="heading-sm text-motion-dark text-sm leading-tight">{update.title}</h3>
                            {update.urgent && (
                              <Badge className="bg-motion-red text-white text-xs">URGENT</Badge>
                            )}
                          </div>
                          <p className="body-sm text-motion-gray mb-3 text-sm leading-relaxed">{update.content}</p>
                          <div className="flex flex-col gap-2 text-xs text-motion-gray">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {update.timestamp}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {update.location}
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-3">
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
          </ScrollArea>
        </div>
      </div>

      {/* Main Content */}
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
};
