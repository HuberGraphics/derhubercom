import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'wouter';
import Header from './components/Header';
import Home from './components/Home';
import ServiceDetail from './components/ServiceDetail';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import Landing24h from './components/Landing24h';
import Footer from './components/Footer';

// Component to handle scroll to top on route changes and Google Analytics tracking
const ScrollToTop: React.FC = () => {
  const [location] = useLocation();

  useEffect(() => {
    // Track pageview in Google Analytics for route changes
    if (typeof window.gtag !== 'undefined') {
      // For anchor links (like #portfolio, #contact, etc.)
      if (location.includes('#')) {
        const elementId = location.split('#')[1];
        if (elementId) {
          window.gtag('config', 'G-080CGD5Q3V', {
            page_path: location,
            page_title: `Der Huber - ${elementId.charAt(0).toUpperCase() + elementId.slice(1)}`
          });
        }
      } else {
        // For regular page routes
        window.gtag('config', 'G-080CGD5Q3V', {
          page_path: location,
          page_title: document.title
        });
      }
    }

    // Only scroll to top for actual page routes, not anchor links
    if (!location.includes('#')) {
      window.scrollTo(0, 0);
    } else {
      // For anchor links, scroll to the specific element
      const elementId = location.split('#')[1];
      if (elementId) {
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/24h-website" component={Landing24h} />
        <Route path="/leistungen/:slug" component={ServiceDetail} />
        <Route path="/impressum" component={Impressum} />
        <Route path="/datenschutz" component={Datenschutz} />
        {/* Fallback to Home for unknown routes or handle 404 properly */}
        <Route component={Home} />
      </Switch>
    </>
  );
}

export default App;