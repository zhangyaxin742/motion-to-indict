import { writeFileSync } from 'fs';
import { globSync } from 'glob';
import matter from 'gray-matter';
import { readFileSync } from 'fs';

const BASE_URL = 'https://motion-to-indict.com'; // Replace with your actual domain

function generateRSS() {
  const articles = globSync('src/articles/*.mdx').map(file => {
    const content = readFileSync(file, 'utf8');
    const { data } = matter(content);
    const slug = file.split('/').pop().replace('.mdx', '');
    
    return {
      slug,
      ...data,
      date: new Date(data.date)
    };
  }).sort((a, b) => b.date.getTime() - a.date.getTime());

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Motion to Indict - Research &amp; Commentary</title>
    <description>In-depth investigations, policy analysis, and urgent commentary on the systems that shape our world.</description>
    <link>${BASE_URL}</link>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${articles.map(article => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <description><![CDATA[${article.description}]]></description>
      <link>${BASE_URL}/research/${article.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/research/${article.slug}</guid>
      <pubDate>${article.date.toUTCString()}</pubDate>
      <category>${article.category}</category>
    </item>`).join('')}
  </channel>
</rss>`;

  writeFileSync('dist/rss.xml', rss);
  console.log('✅ RSS feed generated');
}

generateRSS();