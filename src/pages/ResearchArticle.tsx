import { useParams, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { reports } from '@/data/reports';
import { Link } from 'react-router-dom';

export const ResearchArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const report = reports.find(r => r.slug === slug);
  
  if (!report) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* Back Navigation */}
        <div className="max-w-4xl mx-auto mb-8">
          <Link to="/#research">
            <Button variant="ghost" className="text-motion-gray hover:text-motion-red">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Research
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="mb-6">
              <Badge className="bg-motion-red text-white mb-4">
                {report.featured ? "FEATURED INVESTIGATION" : "RESEARCH REPORT"}
              </Badge>
            </div>
            
            <h1 className="heading-xl text-motion-dark mb-6">
              {report.title}
            </h1>
            
            <p className="body-lg text-motion-gray mb-8 leading-relaxed">
              {report.summary}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-motion-gray border-b border-motion-gray pb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{report.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{report.readTime} read</span>
              </div>
              <Badge variant="outline" className="border-motion-gray text-motion-gray">
                {report.category}
              </Badge>
            </div>
          </header>

          {/* Article Content Placeholder */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-motion-gray/10 border border-motion-gray rounded-lg p-8 text-center">
              <h2 className="heading-md text-motion-dark mb-4">Article Content</h2>
              <p className="body-md text-motion-gray mb-6">
                This is a placeholder for the full article content. In a real implementation, 
                this would contain the complete investigative report with rich text, images, 
                charts, and interactive elements.
              </p>
              <div className="bg-white border border-motion-gray rounded p-6 text-left">
                <h3 className="heading-sm text-motion-dark mb-3">Key Findings:</h3>
                <ul className="space-y-2 text-motion-gray">
                  <li>• Detailed analysis and evidence would be presented here</li>
                  <li>• Supporting documentation and sources</li>
                  <li>• Interactive data visualizations</li>
                  <li>• Expert interviews and testimonials</li>
                  <li>• Policy recommendations and next steps</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-motion-gray">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="text-sm text-motion-gray">
                Published on {report.date} • {report.readTime} read
              </div>
              <Link to="/#research">
                <Button className="bg-motion-red hover:bg-red-700 text-white">
                  Read More Reports
                </Button>
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};