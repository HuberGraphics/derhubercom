'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void;
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Track pageview in Google Analytics for route changes
    if (typeof window.gtag !== 'undefined') {
      // For anchor links (like #portfolio, #contact, etc.)
      if (pathname && pathname.includes('#')) {
        const elementId = pathname.split('#')[1];
        if (elementId) {
          window.gtag('config', 'G-080CGD5Q3V', {
            page_path: pathname,
            page_title: `Der Huber - ${elementId.charAt(0).toUpperCase() + elementId.slice(1)}`
          });
        }
      } else {
        // For regular page routes
        window.gtag('config', 'G-080CGD5Q3V', {
          page_path: pathname,
          page_title: document.title
        });
      }
    }

    // Only scroll to top for actual page routes, not anchor links
    if (!pathname || !pathname.includes('#')) {
      window.scrollTo(0, 0);
    } else {
      // For anchor links, scroll to the specific element
      const elementId = pathname.split('#')[1];
      if (elementId) {
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [pathname]);

  return null;
}
