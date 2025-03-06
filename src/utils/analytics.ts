import ReactGA from 'react-ga4';

// Initialize GA4
export const initGA = () => {
  ReactGA.initialize('G-0NZ32KE175'); // Replace with your GA4 measurement ID
};

// Track page entrance
export const trackPageEntrance = () => {
  const params = {
    landing_page: window.location.href,
    entrance_source: document.referrer || 'direct',
    session_start: true,
    timestamp: new Date().toISOString()
  };

  ReactGA.event({
    category: 'User',
    action: 'page_entrance',
    label: 'Page Visit',
    ...params
  });

  // Also send as a custom event
  ReactGA.event('entrou', params);
};

// Predefined events for consistent tracking
export const AnalyticsEvents = {
  PAGE_ENTRANCE: 'page_entrance',
  PAGE_VIEW: 'page_view',
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  PRICING_PLAN_SELECTED: 'pricing_plan_selected',
  PORTFOLIO_ITEM_VIEW: 'portfolio_item_view',
  FAQ_ITEM_EXPANDED: 'faq_item_expanded',
  WHATSAPP_CONTACT: 'whatsapp_contact',
} as const;