import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import matter from 'gray-matter';

interface ArticleData {
  title: string;
  slug: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
  summary: string;
  content: string;
}

// Dynamic import function for MDX files
const importMdx = async (slug: string): Promise<ArticleData | null> => {
  try {
    // Import all MDX files
    const modules = import.meta.glob('/src/articles/*.mdx', { as: 'raw' });
    
    for (const [path, moduleLoader] of Object.entries(modules)) {
      const content = await moduleLoader();
      const { data } = matter(content);
      
      if (data.slug === slug) {
        return {
          title: data.title,
          slug: data.slug,
          date: data.date,
          readTime: data.readTime,
          tags: data.tags || [],
          featured: data.featured,
          summary: data.summary,
          content: content
        };
      }
    }
    return null;
  } catch (error) {
    console.error('Error loading article:', error);
    return null;
  }
};

export const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArticle = async () => {
      if (!slug) {
        setError('No article slug provided');
        setLoading(false);
        return;
      }

      try {
        const articleData = await importMdx(slug);
        if (articleData) {
          setArticle(articleData);
        } else {
          setError('Article not found');
        }
      } catch (err) {
        setError('Failed to load article');
        console.error('Error loading article:', err);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-motion-gray/20 rounded mb-4"></div>
              <div className="h-4 bg-motion-gray/20 rounded mb-2"></div>
              <div className="h-4 bg-motion-gray/20 rounded mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-motion-gray/20 rounded"></div>
                <div className="h-4 bg-motion-gray/20 rounded"></div>
                <div className="h-4 bg-motion-gray/20 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-motion-dark mb-4">Article Not Found</h1>
            <p className="body-lg text-motion-gray mb-8">{error || 'The requested article could not be found.'}</p>
            <Link to="/">
              <Button className="bg-motion-red hover:bg-red-700 text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Navigation */}
          <Link to="/" className="inline-flex items-center text-motion-gray hover:text-motion-red transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Reports
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="border-motion-red text-motion-red">
                  {tag}
                </Badge>
              ))}
              {article.featured && (
                <Badge className="bg-motion-red text-white">FEATURED</Badge>
              )}
            </div>

            <h1 className="heading-xl text-motion-dark mb-6">{article.title}</h1>
            
            <p className="body-lg text-motion-gray mb-6">{article.summary}</p>

            <div className="flex items-center gap-6 text-sm text-motion-gray border-b border-motion-gray/20 pb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime} read</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-motion-gray/10 p-8 rounded-lg border-l-4 border-motion-red mb-8">
              <h2 className="heading-md text-motion-dark mb-4">Investigation Overview</h2>
              <p className="body-md text-motion-gray">
                This article represents months of investigative work by our research team. 
                The full content is currently being formatted for publication. 
                Please check back soon for the complete analysis.
              </p>
            </div>

            {/* Placeholder for MDX content */}
            <div className="space-y-8">
              <section>
                <h2 className="heading-md text-motion-dark mb-4">Executive Summary</h2>
                <p className="body-md text-motion-gray">
                  [Content will be displayed here once the MDX parsing is fully implemented]
                </p>
              </section>

              <section>
                <h2 className="heading-md text-motion-dark mb-4">Key Findings</h2>
                <p className="body-md text-motion-gray">
                  [Detailed findings and analysis will appear here]
                </p>
              </section>

              <section>
                <h2 className="heading-md text-motion-dark mb-4">Methodology</h2>
                <p className="body-md text-motion-gray">
                  [Research methodology and sources will be detailed here]
                </p>
              </section>
            </div>
          </article>

          {/* Footer CTA */}
          <div className="mt-16 pt-8 border-t border-motion-gray/20">
            <div className="bg-motion-dark rounded-lg p-8 text-center">
              <h3 className="heading-md text-white mb-4">Get Involved</h3>
              <p className="body-md text-motion-light-gray mb-6">
                This research was made possible by reader support. Join our movement for transparency and accountability.
              </p>
              <Button className="bg-motion-red hover:bg-red-700 text-white">
                Support Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};