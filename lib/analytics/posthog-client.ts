type PostHogClient = typeof import('posthog-js')['default'];

let clientPromise: Promise<PostHogClient> | undefined;

export function getPosthogClient(): Promise<PostHogClient | null> {
  const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
  if (!token || !host) return Promise.resolve(null);

  clientPromise ??= import('posthog-js').then(({ default: posthog }) => {
    posthog.init(token, {
      api_host: host,
      defaults: '2026-08-30',
      capture_exceptions: true,
      disable_surveys: true,
      session_recording: { maskAllInputs: true },
      debug: process.env.NODE_ENV === 'development',
    });
    return posthog;
  });

  return clientPromise;
}

export function captureClientEvent(event: string, properties?: Record<string, string>) {
  void getPosthogClient().then((posthog) => posthog?.capture(event, properties));
}
