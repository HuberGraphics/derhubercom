// Google Analytics utility functions

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void;
  }
}

// Track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, parameters);
  }
};

// Track contact form submissions
export const trackContactForm = (formType: string) => {
  trackEvent('contact_form_submission', {
    form_type: formType,
    page_location: window.location.href
  });
};

// Track phone clicks
export const trackPhoneCall = () => {
  trackEvent('phone_call', {
    phone_number: '+4915129515056',
    page_location: window.location.href
  });
};

// Track email clicks
export const trackEmailClick = (emailAddress: string) => {
  trackEvent('email_click', {
    email_address: emailAddress,
    page_location: window.location.href
  });
};

// Track external link clicks
export const trackExternalLink = (url: string, linkText: string) => {
  trackEvent('external_link_click', {
    link_url: url,
    link_text: linkText,
    page_location: window.location.href
  });
};

// Track service page views
export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', {
    service_name: serviceName,
    page_location: window.location.href
  });
};

// Track project website clicks
export const trackProjectClick = (projectName: string, projectUrl: string) => {
  trackEvent('project_website_click', {
    project_name: projectName,
    project_url: projectUrl,
    page_location: window.location.href
  });
};