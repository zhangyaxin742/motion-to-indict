import { writeFileSync } from 'fs';
import { globSync } from 'glob';
import matter from 'gray-matter';
import { readFileSync } from 'fs';

const BASE_URL = 'https://motion-to-indict.com'; // Replace with your actual domain

function generateSitemap() {
  const articles = globSync('src/articles/*.mdx').map(file => {
    const content = readFileSync(file, 'utf8');
    const { data } = matter(content);
    const slug = file.split('/').pop().replace('.mdx', '');
    
    return {
      slug,
      date: data.date,
      title: data.title
    };
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${BASE_URL}/#research</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  ${articles.map(article => `
  <url>
    <loc>${BASE_URL}/research/${article.slug}</loc>
    <lastmod>${new Date(article.date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;

  writeFileSync('dist/sitemap.xml', sitemap);
  console.log('✅ Sitemap generated');
}

generateSitemap();