/**
 * Service Clusters Definition
 *
 * Defines semantic relationships between services for Topic Cluster SEO strategy.
 * Each cluster represents a pillar page with related supporting content.
 */

export interface ServiceCluster {
  pillarService: string;    // Main Service Slug
  clusterName: string;      // Cluster Topic (e.g., "Web Presence")
  relatedServices: {
    slug: string;
    relationship: 'complementary' | 'alternative' | 'prerequisite' | 'sequential';
    semanticConnection: string;  // WHY they are related
  }[];
  topicHierarchy: {
    level: number;          // 1 = pillar, 2 = supporting, 3 = long-tail
    topic: string;
    searchIntent: 'informational' | 'commercial' | 'transactional';
    url?: string;           // Optional URL if page exists
  }[];
}

export const serviceClusters: ServiceCluster[] = [
  {
    pillarService: 'webdesign',
    clusterName: 'Web Presence Development',
    relatedServices: [
      {
        slug: 'webentwicklung',
        relationship: 'complementary',
        semanticConnection: 'Design requires technical implementation for functional websites. Webdesign creates the visual experience, while Webentwicklung brings it to life with code.'
      },
      {
        slug: 'ux-design',
        relationship: 'prerequisite',
        semanticConnection: 'UX principles and user research inform effective web design decisions. Good webdesign is built on solid UX foundations.'
      }
    ],
    topicHierarchy: [
      { level: 1, topic: 'Webdesign', searchIntent: 'commercial', url: '/leistungen/webdesign' },
      { level: 2, topic: 'Responsive Webdesign', searchIntent: 'informational', url: '/leistungen/webdesign' },
      { level: 2, topic: 'Mobile-First Design', searchIntent: 'informational', url: '/leistungen/webdesign' },
      { level: 2, topic: 'Webdesign Kosten', searchIntent: 'commercial', url: '/leistungen/webdesign' },
      { level: 2, topic: 'Barrierefreies Webdesign', searchIntent: 'informational', url: '/leistungen/webdesign' },
      { level: 3, topic: 'Webdesign Heidelberg', searchIntent: 'transactional', url: '/leistungen/webdesign' },
      { level: 3, topic: 'Webdesign Mannheim', searchIntent: 'transactional', url: '/leistungen/webdesign' },
      { level: 3, topic: 'Webdesign Agentur', searchIntent: 'commercial', url: '/leistungen/webdesign' },
      { level: 3, topic: 'Webdesign Preise', searchIntent: 'commercial', url: '/leistungen/webdesign' }
    ]
  },
  {
    pillarService: 'webentwicklung',
    clusterName: 'Technical Web Development',
    relatedServices: [
      {
        slug: 'webdesign',
        relationship: 'complementary',
        semanticConnection: 'Frontend development brings webdesign to life. Both disciplines are essential for modern websites.'
      },
      {
        slug: 'automatisierung',
        relationship: 'complementary',
        semanticConnection: 'Web development creates the foundation for business automation and API integrations.'
      }
    ],
    topicHierarchy: [
      { level: 1, topic: 'Webentwicklung', searchIntent: 'commercial', url: '/leistungen/webentwicklung' },
      { level: 2, topic: 'Frontend Entwicklung', searchIntent: 'informational', url: '/leistungen/webentwicklung' },
      { level: 2, topic: 'React Entwicklung', searchIntent: 'commercial', url: '/leistungen/webentwicklung' },
      { level: 2, topic: 'Next.js Entwicklung', searchIntent: 'commercial', url: '/leistungen/webentwicklung' },
      { level: 2, topic: 'CMS Entwicklung', searchIntent: 'commercial', url: '/leistungen/webentwicklung' },
      { level: 2, topic: 'Performance Optimierung', searchIntent: 'informational', url: '/leistungen/webentwicklung' },
      { level: 3, topic: 'Webentwicklung Heidelberg', searchIntent: 'transactional', url: '/leistungen/webentwicklung' },
      { level: 3, topic: 'Webentwickler', searchIntent: 'commercial', url: '/leistungen/webentwicklung' },
      { level: 3, topic: 'API Entwicklung', searchIntent: 'commercial', url: '/leistungen/webentwicklung' },
      { level: 3, topic: 'E-Commerce Entwicklung', searchIntent: 'commercial', url: '/leistungen/webentwicklung' }
    ]
  },
  {
    pillarService: 'ux-design',
    clusterName: 'User Experience & Optimization',
    relatedServices: [
      {
        slug: 'webdesign',
        relationship: 'prerequisite',
        semanticConnection: 'UX research and testing should inform webdesign decisions. UX is the foundation, visual design is the execution.'
      },
      {
        slug: 'online-marketing',
        relationship: 'complementary',
        semanticConnection: 'UX optimization improves conversion rates from marketing traffic. Better UX = higher ROI from marketing spend.'
      }
    ],
    topicHierarchy: [
      { level: 1, topic: 'UX-Design', searchIntent: 'commercial', url: '/leistungen/ux-design' },
      { level: 2, topic: 'User Research', searchIntent: 'informational', url: '/leistungen/ux-design' },
      { level: 2, topic: 'Usability Testing', searchIntent: 'informational', url: '/leistungen/ux-design' },
      { level: 2, topic: 'Conversion Rate Optimization', searchIntent: 'commercial', url: '/leistungen/ux-design' },
      { level: 2, topic: 'Customer Journey Mapping', searchIntent: 'informational', url: '/leistungen/ux-design' },
      { level: 3, topic: 'UX Designer', searchIntent: 'commercial', url: '/leistungen/ux-design' },
      { level: 3, topic: 'UX Audit', searchIntent: 'commercial', url: '/leistungen/ux-design' }
    ]
  },
  {
    pillarService: 'online-marketing',
    clusterName: 'Digital Marketing & Visibility',
    relatedServices: [
      {
        slug: 'webdesign',
        relationship: 'prerequisite',
        semanticConnection: 'Effective marketing requires a solid website foundation. Marketing drives traffic, webdesign converts it.'
      },
      {
        slug: 'ux-design',
        relationship: 'complementary',
        semanticConnection: 'UX optimization increases marketing ROI. Better user experience = higher conversion rates from paid traffic.'
      }
    ],
    topicHierarchy: [
      { level: 1, topic: 'Online-Marketing', searchIntent: 'commercial', url: '/leistungen/online-marketing' },
      { level: 2, topic: 'Local SEO', searchIntent: 'commercial', url: '/leistungen/online-marketing' },
      { level: 2, topic: 'Google Ads', searchIntent: 'commercial', url: '/leistungen/online-marketing' },
      { level: 2, topic: 'Social Media Marketing', searchIntent: 'informational', url: '/leistungen/online-marketing' },
      { level: 2, topic: 'Content Marketing', searchIntent: 'informational', url: '/leistungen/online-marketing' },
      { level: 3, topic: 'SEO Heidelberg', searchIntent: 'transactional', url: '/leistungen/online-marketing' },
      { level: 3, topic: 'Google Ads Agentur', searchIntent: 'commercial', url: '/leistungen/online-marketing' }
    ]
  },
  {
    pillarService: 'automatisierung',
    clusterName: 'Business Process Automation',
    relatedServices: [
      {
        slug: 'webentwicklung',
        relationship: 'prerequisite',
        semanticConnection: 'Web APIs and integrations enable automation. Web development creates the technical foundation for automation workflows.'
      },
      {
        slug: 'ki-loesungen',
        relationship: 'complementary',
        semanticConnection: 'Automation and AI work together. Automation handles repetitive tasks, AI adds intelligence and decision-making.'
      }
    ],
    topicHierarchy: [
      { level: 1, topic: 'Automatisierung', searchIntent: 'commercial', url: '/leistungen/automatisierung' },
      { level: 2, topic: 'Workflow Automation', searchIntent: 'informational', url: '/leistungen/automatisierung' },
      { level: 2, topic: 'E-Mail Automation', searchIntent: 'informational', url: '/leistungen/automatisierung' },
      { level: 2, topic: 'CRM Integration', searchIntent: 'commercial', url: '/leistungen/automatisierung' },
      { level: 2, topic: 'Zapier Make Integration', searchIntent: 'commercial', url: '/leistungen/automatisierung' },
      { level: 3, topic: 'Business Automation', searchIntent: 'commercial', url: '/leistungen/automatisierung' },
      { level: 3, topic: 'Terminbuchung Automatisierung', searchIntent: 'transactional', url: '/leistungen/automatisierung' }
    ]
  },
  {
    pillarService: 'ki-loesungen',
    clusterName: 'AI & Machine Learning Solutions',
    relatedServices: [
      {
        slug: 'automatisierung',
        relationship: 'complementary',
        semanticConnection: 'AI enhances automation with intelligent decision-making. Automation provides the workflow structure, AI adds the brain.'
      },
      {
        slug: 'webentwicklung',
        relationship: 'complementary',
        semanticConnection: 'AI features require web development integration. Chatbots, recommendation engines, and AI tools need technical implementation.'
      }
    ],
    topicHierarchy: [
      { level: 1, topic: 'KI-Lösungen', searchIntent: 'commercial', url: '/leistungen/ki-loesungen' },
      { level: 2, topic: 'KI Chatbots', searchIntent: 'commercial', url: '/leistungen/ki-loesungen' },
      { level: 2, topic: 'Prompt Engineering', searchIntent: 'informational', url: '/leistungen/ki-loesungen' },
      { level: 2, topic: 'Content-Erstellung mit KI', searchIntent: 'informational', url: '/leistungen/ki-loesungen' },
      { level: 2, topic: 'KI Beratung', searchIntent: 'commercial', url: '/leistungen/ki-loesungen' },
      { level: 3, topic: 'ChatGPT Integration', searchIntent: 'commercial', url: '/leistungen/ki-loesungen' },
      { level: 3, topic: 'KI Workshops', searchIntent: 'commercial', url: '/leistungen/ki-loesungen' }
    ]
  }
];

/**
 * Helper function to get cluster info for a service
 */
export function getClusterForService(serviceSlug: string): ServiceCluster | undefined {
  return serviceClusters.find(cluster => cluster.pillarService === serviceSlug);
}

/**
 * Helper function to get related services with semantic context
 */
export function getRelatedServices(serviceSlug: string): ServiceCluster['relatedServices'] | undefined {
  const cluster = getClusterForService(serviceSlug);
  return cluster?.relatedServices;
}

/**
 * Helper function to get topic hierarchy for a service
 */
export function getTopicHierarchy(serviceSlug: string): ServiceCluster['topicHierarchy'] | undefined {
  const cluster = getClusterForService(serviceSlug);
  return cluster?.topicHierarchy;
}
