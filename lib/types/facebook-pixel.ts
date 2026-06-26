export type FacebookPixelParameters = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    fbq: (
      action: 'track' | 'trackCustom' | 'init',
      eventName: string,
      parameters?: FacebookPixelParameters
    ) => void;
    _fbq?: unknown;
  }
}

export type StandardEvent =
  | 'PageView'
  | 'ViewContent'
  | 'Contact'
  | 'Lead';

export interface ViewContentParams {
  content_name?: string;
  content_category?: string;
  content_type?: string;
}

export interface ContactParams {
  content_name?: string;
  content_category?: string;
}

export {};
