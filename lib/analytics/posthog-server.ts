import { PostHog } from 'posthog-node';

let client: PostHog | undefined;

function getClient(): PostHog | undefined {
  const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
  if (!token || !host) return undefined;

  client ??= new PostHog(token, { host, flushAt: 1, flushInterval: 0 });
  return client;
}

export async function captureContactFormSubmitted(request: Request): Promise<void> {
  const posthog = getClient();
  if (!posthog) return;

  const distinctId = request.headers.get('x-posthog-distinct-id')?.slice(0, 200) || crypto.randomUUID();
  const sessionId = request.headers.get('x-posthog-session-id')?.slice(0, 200);

  try {
    posthog.capture({
      distinctId,
      event: 'contact_form_submitted',
      properties: {
        source: 'website_contact_form',
        ...(sessionId ? { $session_id: sessionId } : {}),
      },
    });
    await posthog.flush();
  } catch (error) {
    console.error('PostHog contact event failed:', error);
  }
}
