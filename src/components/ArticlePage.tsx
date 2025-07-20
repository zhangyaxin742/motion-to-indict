import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { useArticle } from '@/hooks/useArticles';

export const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { article, loading } = useArticle(slug || '');

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-motion-gray">Loading...</div>
      </div>
    );
  }

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  const MDXContent = article.content;

  return (
    <>
      <Helmet>
        <title>{article.title} | Motion to Indict</title>
        <meta name="description" content={article.description || article.summary} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description || article.summary} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${window.location.origin}/research/${article.slug}`} />
        <meta property="article:published_time" content={article.date} />
        <meta property="article:section" content={article.category} />
        {article.tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}
        <link rel="canonical" href={`${window.location.origin}/research/${article.slug}`} />
      </Helmet>

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
                  {article.featured ? "FEATURED INVESTIGATION" : "RESEARCH REPORT"}
                </Badge>
              </div>
              
              <h1 className="heading-xl text-motion-dark mb-6">
                {article.title}
              </h1>
              
              <p className="body-lg text-motion-gray mb-8 leading-relaxed">
                {article.description || article.summary}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-motion-gray border-b border-motion-gray pb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime} read</span>
                </div>
                <Badge variant="outline" className="border-motion-gray text-motion-gray">
                  {article.category}
                </Badge>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none prose-headings:font-garamond prose-headings:text-motion-dark prose-p:text-motion-gray prose-p:leading-relaxed prose-li:text-motion-gray prose-strong:text-motion-dark prose-blockquote:border-l-4 prose-blockquote:border-motion-red prose-blockquote:text-motion-gray prose-blockquote:italic">
              {MDXContent && <MDXContent />}
            </div>

            {/* Article Footer */}
            <footer className="mt-16 pt-8 border-t border-motion-gray">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="text-sm text-motion-gray">
                  Published on {article.date} • {article.readTime} read
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
    </>
  );
};