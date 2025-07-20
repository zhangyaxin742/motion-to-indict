import { useState, useEffect } from 'react';
import { Report } from '@/data/reports';

interface ArticleData extends Report {
  content?: string;
}

// Import all MDX files eagerly to build article index
const articleModules = import.meta.glob('/src/articles/*.mdx', { eager: true });

export const useArticles = () => {
  const [articles, setArticles] = useState<ArticleData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      const articleData: ArticleData[] = [];

      for (const [path, module] of Object.entries(articleModules)) {
        const mod = module as any;
        if (mod.frontmatter) {
          const slug = path.split('/').pop()?.replace('.mdx', '') || '';
          articleData.push({
            ...mod.frontmatter,
            slug,
          });
        }
      }

      // Sort by date (newest first)
      articleData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      
      setArticles(articleData);
      setLoading(false);
    };

    loadArticles();
  }, []);

  return { articles, loading };
};

export const useArticle = (slug: string) => {
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const module = await import(`../articles/${slug}.mdx`);
        if (module.frontmatter) {
          setArticle({
            ...module.frontmatter,
            slug,
            content: module.default,
          });
        }
      } catch (error) {
        console.error('Failed to load article:', error);
        setArticle(null);
      }
      setLoading(false);
    };

    loadArticle();
  }, [slug]);

  return { article, loading };
};