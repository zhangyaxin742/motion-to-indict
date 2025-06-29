import { Badge } from '@/components/ui/badge';

interface Investigation {
  id: number;
  title: string;
  tagline: string;
  date: string;
  type: 'brief' | 'fieldnotes';
  image: string;
  size: 'small' | 'large';
}

export const InvestigationTile = ({
  investigation,
  large = false,
}: {
  investigation: Investigation;
  large?: boolean;
}) => (
  <div
    className={`group cursor-pointer transition-all duration-300 hover:scale-105 ${
      large ? 'h-96' : 'h-64'
    }`}
  >
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
        <h3
          className={`font-serif font-bold text-white mb-2 ${
            large ? 'text-2xl' : 'text-lg'
          }`}
        >
          {investigation.title}
        </h3>
        {/* Tagline */}
        <p
          className={`text-motion-light-gray mb-3 ${
            large ? 'text-base' : 'text-sm'
          }`}
        >
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