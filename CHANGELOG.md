# Changelog

Alle wichtigen Änderungen an diesem Projekt werden hier dokumentiert.

## [Unreleased] - 2025-12-30

### 🚀 Added - Programmatic SEO (PSEO) Implementation

This update implements a comprehensive Programmatic SEO strategy to improve local search visibility for Heidelberg and its districts.

#### New Files Created

**Data Files:**
- `data/districts.ts` - Defines 14 Heidelberg districts with linguistic metadata (prepositions, full names, keywords)

**Components:**
- `components/CityLevelPSEO.tsx` - City-level PSEO pages (6 pages: `/webdesign-in-heidelberg`, etc.)
- `components/DistrictLevelPSEO.tsx` - District-level PSEO pages (90 pages: `/webdesign-in-heidelberg/altstadt`, etc.)

**Routes:**
- `app/[...pseo]/page.tsx` - Catch-all route for all PSEO pages using Next.js dynamic routing

**Scripts:**
- `scripts/generate-sitemap.js` - Automatic sitemap generation for 101 URLs

#### Modified Files

- `components/Footer.tsx` - Added "Regionale Standorte" column with PSEO links
  - Shows top 3 city-level links
  - Expandable accordion for all 14 districts
  - Grid layout updated from 4 to 5 columns

- `package.json` - Updated build script to generate sitemap before building
  ```json
  "build": "node scripts/generate-sitemap.js && next build"
  ```

#### Pages Generated

**City-Level (6 pages):**
- `/webdesign-in-heidelberg`
- `/webentwicklung-in-heidelberg`
- `/ux-design-in-heidelberg`
- `/online-marketing-in-heidelberg`
- `/automatisierung-in-heidelberg`
- `/ki-loesungen-in-heidelberg`

**District-Level (90 pages):**
Each service has a page for all 14 Heidelberg districts:
- Altstadt, Bergheim, Weststadt, Südstadt, Wieblingen, Kirchheim, Pfaffengrund, Handschuhsheim, Neuenheim, Rohrbach, Schlierbach, Emmertsgrund, Boxberg, Ziegelhausen

**Example URLs:**
- `/webdesign-in-heidelberg/altstadt` → "Webdesign in der Heidelberger Altstadt"
- `/webdesign-in-heidelberg/bergheim` → "Webdesign in Heidelberg-Bergheim"

#### Technical Implementation Details

**Routing Strategy:**
- Uses Next.js 15 catch-all routes `[...pseo]` instead of nested dynamic routes
- Required workaround for static export mode (`output: 'export'`)
- All pages are pre-rendered at build time using `generateStaticParams()`

**Linguistic Features:**
- Grammatically correct German prepositions ("in der", "im", "in", "auf dem")
- District names always include Heidelberg context ("Heidelberger Altstadt", "Heidelberg-Bergheim")
- SEO-optimized keywords with full geographic context

**Build Output:**
- Total pages: 104 (96 PSEO pages + 8 existing pages)
- Static HTML generation with shared chunks
- First Load JS: ~121 kB per PSEO page

#### SEO Improvements

**Keywords Targeted:**
- Service + Location: "Webdesign Heidelberg", "Webdesign in der Heidelberger Altstadt"
- Long-tail: "Webdesign in Heidelberg-Bergheim für kleine Unternehmen"
- Geographic modifiers: All 14 districts with correct linguistic context

**Sitemap:**
- Auto-generated at build time
- Includes all 101 URLs
- Located at: `public/sitemap.xml`
- Can be regenerated with: `npm run generate-sitemap`

#### How to Build

```bash
# Standard build (generates sitemap + all pages)
npm run build

# Generate sitemap only
npm run generate-sitemap

# Deploy to Cloudflare Pages
npm run deploy
```

#### Known Limitations

1. **Nested Dynamic Routes Issue:**
   - Next.js 15 static export mode has issues with nested dynamic routes like `[service]/[district]`
   - Workaround: Using catch-all route `[...pseo]` with custom path parsing

2. **Content Quality:**
   - Current implementation uses template-based content
   - For optimal SEO, consider adding unique, human-written content for each district
   - AI content generation script available but not yet integrated

#### Next Steps for Production

1. **Google Search Console:**
   - Submit sitemap: `https://derhuber.com/sitemap.xml`
   - Monitor indexing of all 96 PSEO pages
   - Track rankings for target keywords

2. **Content Enhancement:**
   - Add unique customer testimonials per district
   - Include district-specific case studies
   - Add local landmarks/references in content

3. **Performance Monitoring:**
   - Monitor Core Web Vitals for all pages
   - Track organic traffic growth
   - Measure conversion rates from PSEO pages

---

## Previous Changes

### 2025-11-29
- Added Google Analytics GA4 tracking
- Implemented static sitemap.xml (manual)
- Added SEO meta tags to service pages

### 2025-11-XX
- Initial project setup with Next.js 15
- Migrated to static export mode
- Cloudflare Pages deployment configured
