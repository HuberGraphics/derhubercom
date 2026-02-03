# Design System Standardization - Implementation Guide

## ✅ Completed Changes

### 1. **8-Point Spacing System**
- Updated Tailwind config with standardized 8px increments
- All spacing now uses: 8px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
- Updated components: Hero, Header, Footer, Services, Pricing

### 2. **Single Font System**
- Removed Space Grotesk and Space Mono
- Standardized to **Plus Jakarta Sans** for all text
- Updated globals.css to use single font import
- Removed font-display and font-mono classes from Hero, Header, Footer

### 3. **Standardized Border Radius**
- Primary border radius: **8px (rounded-lg)**
- Updated Tailwind config to use consistent radius values
- Updated components: Hero, Header, Footer, Services, Pricing
- **Remaining work**: Update 16 files that still use rounded-xl, rounded-2xl, rounded-3xl

### 4. **Elevation System**
- Standardized shadow system in Tailwind config
- Single elevation scale: sm, md, lg, xl, 2xl
- Updated components to use consistent shadows

### 5. **Loading States**
- Added loading state utilities to globals.css
- Implemented loading state in Hero CTA button
- **Remaining work**: Add loading states to all interactive buttons/links

### 6. **Component Updates**
- ✅ Hero: Simplified, removed decorative elements, standardized spacing
- ✅ Header: Removed font-mono, standardized border radius
- ✅ Footer: Removed font-mono, standardized spacing and radius
- ✅ Services: Updated to use standard radius and fonts
- ✅ Pricing: Updated to use standard radius and shadows

## 🔄 Remaining Work

### Files Needing Border Radius Updates (16 files)
These files still use rounded-xl, rounded-2xl, or rounded-3xl:
- components/ServiceDetail.tsx
- components/Portfolio.tsx
- components/ProblemSolution.tsx
- components/Process.tsx
- components/RelatedTopics.tsx
- components/ServiceComparison.tsx
- components/TechnicalSpecsSection.tsx
- components/ProcessSection.tsx
- components/ExpertiseSection.tsx
- components/PortfolioSection.tsx
- components/EnhancedFAQSection.tsx
- components/CityLevelPSEO.tsx
- components/DistrictLevelPSEO.tsx
- components/LandingKiRezeptionist.tsx
- components/Landing24h.tsx
- components/About.tsx

**Action**: Replace all instances of:
- `rounded-xl` → `rounded-lg`
- `rounded-2xl` → `rounded-lg`
- `rounded-3xl` → `rounded-lg`
- Keep `rounded-full` only for pills/circles

### Files Needing Font Updates (2 files)
- components/Services.tsx (partially done)
- components/ServiceDetail.tsx

**Action**: Replace all instances of:
- `font-display` → remove (use default font)
- `font-mono` → remove (use default font)

### Loading States Needed
Add loading states to:
- All CTA buttons in Pricing component
- Portfolio component buttons
- ServiceDetail component buttons
- Contact form submissions
- Any other interactive elements

### Responsiveness Review
- Check mobile breakpoints across all components
- Ensure consistent spacing on mobile (use 8-point system)
- Test all interactive elements on mobile

### Copy Simplification
- Review and tighten copy across all components
- Remove unnecessary decorative text
- Ensure single clear value proposition

## 📋 Design System Tokens

### Spacing (8-point system)
```typescript
xs: 8px   (0.5rem)
sm: 16px  (1rem)
md: 24px  (1.5rem)
lg: 32px  (2rem)
xl: 48px  (3rem)
2xl: 64px (4rem)
3xl: 96px (6rem)
```

### Border Radius
```typescript
sm: 4px   (0.25rem)
md: 6px   (0.375rem)
lg: 8px   (0.5rem) - PRIMARY
full: 9999px (for pills/circles only)
```

### Elevation
```typescript
sm: subtle shadow
md: default shadow
lg: elevated shadow
xl: prominent shadow
```

### Typography
- **Font**: Plus Jakarta Sans (single font for everything)
- **Headings**: Use font-bold with size scale
- **Body**: Use default font weight (400-600)
- **No mono or display fonts**

## 🎯 Next Steps

1. Run find/replace across all components for border radius
2. Run find/replace for font-display and font-mono
3. Add loading states to all interactive elements
4. Review and test responsiveness
5. Simplify copy and reduce visual novelty
6. Test all buttons, links, and social icons

