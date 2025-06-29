
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, ArrowRight } from 'lucide-react';

interface InvestigationTileProps {
  title: string;
  excerpt: string;
  publishDate: string;
  readTime: string;
  category: string;
  isUrgent?: boolean;
  onReadMore?: () => void;
}

export const InvestigationTile = ({
  title,
  excerpt,
  publishDate,
  readTime,
  category,
  isUrgent = false,
  onReadMore
}: InvestigationTileProps) => {
  return (
    <Card className="bg-motion-gray/20 border-motion-gray hover:border-motion-red transition-colors">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            {isUrgent && (
              <div className="text-sm text-motion-red mb-2 font-semibold">
                URGENT REPORT
              </div>
            )}
            <h3 className="text-xl font-bold text-white mb-3">
              {title}
            </h3>
            <p className="text-motion-light-gray mb-4 leading-relaxed">
              {excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-motion-light-gray">
              <span>{publishDate}</span>
              <span>•</span>
              <span>{readTime}</span>
              <span>•</span>
              <span>{category}</span>
            </div>
          </div>
          <div className="lg:w-48 flex items-center justify-center">
            <div className="bg-motion-dark rounded-lg p-4 border border-motion-gray text-center">
              <FileText className="h-8 w-8 text-motion-red mx-auto mb-3" />
              <Button 
                className="w-full bg-motion-red hover:bg-red-700 text-sm"
                onClick={onReadMore}
              >
                Read Report
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
