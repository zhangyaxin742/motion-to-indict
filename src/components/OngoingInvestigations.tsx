
import { Badge } from '@/components/ui/badge';

const OngoingInvestigations = () => {
  const investigations = [
    {
      id: 1,
      title: "Campus Speech Suppression",
      tagline: "How universities silence dissent through bureaucracy",
      date: "December 2024",
      type: "brief",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=300&fit=crop",
      size: "small"
    },
    {
      id: 2,
      title: "Congressional Insider Trading Network", 
      tagline: "Mapping financial conflicts across party lines",
      date: "November 2024",
      type: "fieldnotes",
      image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400&h=300&fit=crop",
      size: "small"
    },
    {
      id: 3,
      title: "The Democracy Theater Report",
      tagline: "A comprehensive analysis of performative politics in the digital age",
      date: "January 2025", 
      type: "brief",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      size: "large"
    },
    {
      id: 4,
      title: "Climate Activism Surveillance",
      tagline: "Federal monitoring of student environmental groups", 
      date: "October 2024",
      type: "fieldnotes",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      size: "small"
    },
    {
      id: 5,
      title: "Social Media Censorship Files",
      tagline: "Platform suppression of youth political discourse",
      date: "September 2024",
      type: "brief", 
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      size: "small"
    }
  ] as const;

  return (
    <section className="bg-black py-20 px-6">
      {/* Red divider line */}
      <div className="w-full h-px bg-motion-red mb-16"></div>
      
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-garamond font-bold text-white text-center mb-16">
          Ongoing Investigations
        </h2>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left column - small tiles */}
          <div className="md:col-span-2 space-y-6">
            {investigations.filter(inv => inv.size === 'small').slice(0, 2).map((investigation) => (
              <InvestigationTile key={investigation.id} investigation={investigation} />
            ))}
          </div>

          {/* Center - large tile */}
          <div className="md:col-span-2">
            {investigations.filter(inv => inv.size === 'large').map((investigation) => (
              <InvestigationTile key={investigation.id} investigation={investigation} large />
            ))}
          </div>

          {/* Right column - small tiles */}
          <div className="md:col-span-2 space-y-6">
            {investigations.filter(inv => inv.size === 'small').slice(2, 4).map((investigation) => (
              <InvestigationTile key={investigation.id} investigation={investigation} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface Investigation {
  id: number;
  title: string;
  tagline: string;
  date: string;      
  type: 'brief' | 'fieldnotes';
  image: string;
  size: 'small' | 'large';
}

const InvestigationTile = ({ investigation, large = false }: { investigation: Investigation; large?: boolean }) => {
  return (
    <div className={`group cursor-pointer transition-all duration-300 hover:scale-105 ${large ? 'h-96' : 'h-64'}`}>
      <div className="relative h-full bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-motion-red/50">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity"
          style={{ backgroundImage: `url(${investigation.image})` }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        
        {/* Content */}
        <div className="relative h-full p-6 flex flex-col justify-end">
          {/* Type Badge */}
          <div className="mb-3">
            <Badge 
              variant="outline" 
              className={`text-xs font-mono ${
                investigation.type === 'brief' 
                  ? 'border-white text-white' 
                  : 'border-motion-red text-motion-red'
              }`}
            >
              {investigation.type.toUpperCase()}
            </Badge>
          </div>

          {/* Title */}
          <h3 className={`font-garamond font-bold text-white mb-2 leading-tight ${
            large ? 'text-2xl' : 'text-lg'
          }`}>
            {investigation.title}
          </h3>

          {/* Tagline */}
          <p className={`text-motion-light-gray mb-3 leading-relaxed ${
            large ? 'text-base' : 'text-sm'
          }`}>
            {investigation.tagline}
          </p>

          {/* Date */}
          <p className="text-xs font-mono text-motion-light-gray uppercase tracking-wider">
            {investigation.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OngoingInvestigations;
