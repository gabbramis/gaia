declare global {
  interface Window {
    fbq: (
      action: 'track' | 'trackCustom' | 'init',
      eventName: string,
      parameters?: Record<string, any>
    ) => void;
    _fbq: any;
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
