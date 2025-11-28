import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'wouter';
import Header from './components/Header';
import Home from './components/Home';
import ServiceDetail from './components/ServiceDetail';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import Footer from './components/Footer';

// Component to handle scroll to top on route changes
const ScrollToTop: React.FC = () => {
  const [location] = useLocation();

  useEffect(() => {
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
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/leistungen/:slug" component={ServiceDetail} />
          <Route path="/impressum" component={Impressum} />
          <Route path="/datenschutz" component={Datenschutz} />
          {/* Fallback to Home for unknown routes or handle 404 properly */}
          <Route component={Home} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;