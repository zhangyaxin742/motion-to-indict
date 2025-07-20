import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import lunr from 'lunr';
import { Report } from '@/data/reports';

interface SearchInputProps {
  articles: Report[];
  onResults: (results: Report[]) => void;
  className?: string;
}

export const SearchInput = ({ articles, onResults, className = "" }: SearchInputProps) => {
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState<lunr.Index | null>(null);

  // Build search index when articles change
  useEffect(() => {
    if (articles.length === 0) return;

    const searchIndex = lunr(function () {
      this.ref('slug');
      this.field('title', { boost: 10 });
      this.field('summary', { boost: 5 });
      this.field('description', { boost: 5 });
      this.field('tags', { boost: 3 });
      this.field('category');

      articles.forEach((article) => {
        this.add({
          slug: article.slug,
          title: article.title,
          summary: article.summary,
          description: article.description || article.summary,
          tags: article.tags.join(' '),
          category: article.category,
        });
      });
    });

    setIndex(searchIndex);
  }, [articles]);

  // Perform search when query changes
  useEffect(() => {
    if (!index || !query.trim()) {
      onResults(articles);
      return;
    }

    try {
      const searchResults = index.search(query);
      const filteredArticles = searchResults.map(result => 
        articles.find(article => article.slug === result.ref)
      ).filter(Boolean) as Report[];
      
      onResults(filteredArticles);
    } catch (error) {
      // If search query is malformed, show all articles
      onResults(articles);
    }
  }, [query, index, articles, onResults]);

  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-motion-gray" />
      <Input
        type="text"
        placeholder="Search articles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-10 border-motion-gray focus:border-motion-red"
      />
    </div>
  );
};