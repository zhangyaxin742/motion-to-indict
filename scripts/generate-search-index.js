import { writeFileSync } from 'fs';
import { globSync } from 'glob';
import matter from 'gray-matter';
import { readFileSync } from 'fs';

function generateSearchIndex() {
  const articles = globSync('src/articles/*.mdx').map(file => {
    const content = readFileSync(file, 'utf8');
    const { data } = matter(content);
    const slug = file.split('/').pop().replace('.mdx', '');
    
    return {
      slug,
      title: data.title,
      description: data.description,
      tags: data.tags || [],
      category: data.category,
      date: data.date
    };
  });

  const searchIndex = {
    articles,
    lastUpdated: new Date().toISOString()
  };

  writeFileSync('public/search-index.json', JSON.stringify(searchIndex, null, 2));
  console.log('✅ Search index generated');
}

generateSearchIndex();