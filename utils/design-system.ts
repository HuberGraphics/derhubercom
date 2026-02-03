/**
 * Design System Utilities
 * 
 * Standardized design tokens and utilities for consistent styling across the application.
 * Based on 8-point spacing system and single font family.
 */

// Standard spacing scale (8-point system)
export const spacing = {
  xs: '0.5rem',   // 8px
  sm: '1rem',     // 16px
  md: '1.5rem',   // 24px
  lg: '2rem',     // 32px
  xl: '3rem',     // 48px
  '2xl': '4rem',  // 64px
  '3xl': '6rem',  // 96px
} as const;

// Standard border radius (8px)
export const borderRadius = {
  sm: '0.25rem',  // 4px
  md: '0.375rem', // 6px
  lg: '0.5rem',   // 8px - PRIMARY
  full: '9999px', // For pills/circles
} as const;

// Standard elevation system
export const elevation = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  lg: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  xl: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
} as const;

// Standard button classes
export const buttonClasses = {
  primary: 'bg-brand-400 hover:bg-brand-500 text-white px-6 py-3 rounded-lg font-semibold text-base transition-base shadow-md hover:shadow-lg focus-ring',
  secondary: 'glass-card hover:bg-white text-slate-700 border border-brand-400/20 hover:border-brand-400/40 px-6 py-3 rounded-lg font-semibold text-base transition-base hover-lift shadow-sm',
  outline: 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-brand-400 px-6 py-3 rounded-lg font-semibold text-base transition-base shadow-sm hover:shadow-md',
} as const;

// Standard card classes
export const cardClasses = {
  base: 'bg-white rounded-lg border border-slate-200 shadow-sm',
  elevated: 'bg-white rounded-lg border border-slate-200 shadow-md',
  glass: 'glass-card rounded-lg border border-brand-400/10 shadow-sm',
} as const;

// Typography scale
export const typography = {
  h1: 'text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight',
  h2: 'text-3xl md:text-4xl font-bold tracking-tight leading-tight',
  h3: 'text-2xl md:text-3xl font-bold tracking-tight',
  h4: 'text-xl md:text-2xl font-semibold',
  body: 'text-base leading-relaxed',
  bodyLarge: 'text-lg md:text-xl leading-relaxed',
  small: 'text-sm',
} as const;

