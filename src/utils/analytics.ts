import { analytics } from '../lib/firebase';
import { logEvent } from 'firebase/analytics';

export const trackEvent = (eventName: string, params?: { [key: string]: any }) => {
  try {
    logEvent(analytics, eventName, params);
    console.log('Event tracked:', eventName, params);
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

// Predefined events for consistent tracking
export const AnalyticsEvents = {
  PAGE_VIEW: 'page_view',
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  PRICING_PLAN_SELECTED: 'pricing_plan_selected',
  PORTFOLIO_ITEM_VIEW: 'portfolio_item_view',
  FAQ_ITEM_EXPANDED: 'faq_item_expanded',
  WHATSAPP_CONTACT: 'whatsapp_contact',
} as const;