#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://yourdomain.com'; // Replace with your actual domain
const ARTICLES_DIR = path.join(__dirname, '../src/articles');
const OUTPUT_DIR = path.join(__dirname, '../public');

function generateSitemap() {
  try {
    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Get all MDX files
    const articles = fs.readdirSync(ARTICLES_DIR)
      .filter(file => file.endsWith('.mdx'))
      .map(file => {
        const filePath = path.join(ARTICLES_DIR, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(content);
        
        return {
          slug: data.slug,
          date: data.date,
          title: data.title
        };
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    // Generate sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
${articles.map(article => `  <url>
    <loc>${BASE_URL}/articles/${article.slug}</loc>
    <lastmod>${article.date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

    // Write sitemap
    fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap.xml'), sitemap);
    
    console.log(`✅ Generated sitemap.xml with ${articles.length + 1} URLs`);
    
    return articles;
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateSitemap();
}

export default generateSitemap;