
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Users, Camera } from 'lucide-react';

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

export const MediaSection = () => {
  return (
    <div className="min-h-screen bg-motion-dark text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="heading-xl mb-6">
            In Media <span className="red-accent">Res</span>
          </h1>
          <p className="body-lg text-motion-light-gray mb-8">
            Live fieldnotes, interviews, evidence gathering, and real-time documentation 
            from ongoing investigations. This is where accountability happens in real time.
          </p>
          
          {/* Status Bar */}
          <div className="bg-motion-gray/20 rounded-lg p-4 border border-motion-gray">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-motion-red rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">LIVE</span>
              </div>
              <div className="text-sm text-motion-light-gray">
                12 active investigations • 5 field teams deployed • Last update: 2 hours ago
              </div>
            </div>
          </div>
        </div>

        {/* Live Feed */}
        <div className="space-y-6">
          {liveUpdates.map((update, index) => {
            const IconComponent = getIcon(update.type);
            
            return (
              <Card 
                key={index}
                className={`bg-motion-gray/10 border-motion-gray hover:border-motion-red transition-colors ${
                  update.urgent ? 'border-l-4 border-l-motion-red' : ''
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Icon and Type */}
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

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                        <h3 className="heading-sm">{update.title}</h3>
                        {update.urgent && (
                          <Badge className="bg-motion-red text-white text-xs">
                            URGENT
                          </Badge>
                        )}
                      </div>
                      
                      <p className="body-md text-motion-light-gray mb-4">
                        {update.content}
                      </p>

                      {/* Metadata */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-motion-light-gray">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {update.timestamp}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {update.location}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {update.tags.map((tag, tagIndex) => (
                          <Badge 
                            key={tagIndex}
                            variant="outline" 
                            className="border-motion-gray text-motion-light-gray text-xs"
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

        {/* Archive Notice */}
        <div className="mt-16 text-center">
          <div className="bg-motion-gray/20 rounded-lg p-8 border border-motion-gray max-w-2xl mx-auto">
            <h3 className="heading-sm mb-4">Secure Archive</h3>
            <p className="body-md text-motion-light-gray">
              All fieldnotes and evidence are automatically archived with cryptographic 
              verification. Historical entries dating back to 2019 available to verified researchers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
