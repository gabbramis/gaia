import { StandardEvent, ViewContentParams, ContactParams } from '@/lib/types/facebook-pixel';

const isPixelAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.fbq === 'function';
};

export const trackEvent = (
  eventName: StandardEvent,
  parameters?: Record<string, any>
): void => {
  if (!isPixelAvailable()) return;

  try {
    window.fbq('track', eventName, parameters);
  } catch (error) {
    console.error('Error tracking Facebook Pixel event:', error);
  }
};

export const trackViewContent = (params: ViewContentParams): void => {
  trackEvent('ViewContent', params);
};

export const trackContact = (params?: ContactParams): void => {
  trackEvent('Contact', params);
};

export const trackLead = (params?: ContactParams): void => {
  trackEvent('Lead', params);
};

export const trackCustomEvent = (
  eventName: string,
  parameters?: Record<string, any>
): void => {
  if (!isPixelAvailable()) return;

  try {
    window.fbq('trackCustom', eventName, parameters);
  } catch (error) {
    console.error('Error tracking custom Facebook Pixel event:', error);
  }
};
