const fs = require('fs');
const path = require('path');

// Import the sitemap data
const { servicesData, heidelbergDistricts, comparisonSlugs, seoLandingPages } = require('./sitemap-data.js');

function generateSitemap() {
  const baseUrl = 'https://derhuber.com';
  const currentDate = new Date().toISOString().split('T')[0];

  const urls = [
    // Main pages
    { loc: baseUrl, lastmod: currentDate, changefreq: 'weekly', priority: '1.0' },
    { loc: `${baseUrl}/impressum`, lastmod: currentDate, changefreq: 'yearly', priority: '0.3' },
    { loc: `${baseUrl}/datenschutz`, lastmod: currentDate, changefreq: 'yearly', priority: '0.3' },
    // 24h-website und ki-rezeptionist werden nicht indexiert (noindex in meta)

    // Service pages (dynamic from servicesData)
    ...servicesData.map(service => ({
      loc: `${baseUrl}/leistungen/${service.slug}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    })),

    // Comparison pages (dynamic from comparisonSlugs)
    ...comparisonSlugs.map(slug => ({
      loc: `${baseUrl}/vergleich/${slug}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.7'
    })),

    // SEO Landing Pages (dynamic from seoLandingPages)
    ...(seoLandingPages || []).map(page => ({
      loc: `${baseUrl}/${page.slug}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    })),

    // City-level PSEO pages (dynamic from servicesData)
    ...servicesData.map(service => ({
      loc: `${baseUrl}/${service.slug}-in-heidelberg`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.7'
    })),

    // District-level PSEO pages (dynamic from servicesData and heidelbergDistricts)
    ...servicesData.flatMap(service =>
      heidelbergDistricts.map(district => ({
        loc: `${baseUrl}/${service.slug}-in-heidelberg/${district.slug}`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: '0.6'
      }))
    ),
  ];

  // XML generieren (ohne leere Zeilen)
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => {
    const parts = [
      `    <loc>${url.loc}</loc>`,
      `    <lastmod>${url.lastmod}</lastmod>`,
    ];
    if (url.changefreq) parts.push(`    <changefreq>${url.changefreq}</changefreq>`);
    if (url.priority) parts.push(`    <priority>${url.priority}</priority>`);
    return `  <url>\n${parts.join('\n')}\n  </url>`;
  }).join('\n')}
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', xml);

  console.log('✅ Sitemap generated with', urls.length, 'URLs:');
  console.log('   -', urls.filter(u => u.priority === '1.0').length, 'main pages');
  console.log('   -', urls.filter(u => u.priority === '0.8' && u.loc.includes('/leistungen/')).length, 'service pages');
  console.log('   -', urls.filter(u => u.priority === '0.8' && !u.loc.includes('/leistungen/')).length, 'SEO landing pages');
  console.log('   -', urls.filter(u => u.priority === '0.7' && u.loc.includes('/vergleich/')).length, 'comparison pages');
  console.log('   -', urls.filter(u => u.priority === '0.7' && !u.loc.includes('/vergleich/')).length, 'city-level PSEO pages');
  console.log('   -', urls.filter(u => u.priority === '0.6').length, 'district-level PSEO pages');
  console.log('   -', urls.filter(u => u.priority === '0.3').length, 'legal pages');
}

generateSitemap();
