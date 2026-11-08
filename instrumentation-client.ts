import { getPosthogClient } from './lib/analytics/posthog-client';

const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

if (!projectToken) {
  if (process.env.NODE_ENV !== "production") {
    throw new Error(
      "NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN is configured"
    );
  }
} else if (!posthogHost) {
  if (process.env.NODE_ENV !== "production") {
    throw new Error(
      "NEXT_PUBLIC_POSTHOG_HOST variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once NEXT_PUBLIC_POSTHOG_HOST is configured"
    );
  }
} else {
  const initialize = () => {
    void getPosthogClient();
  };

  if (typeof window !== "undefined" && "requestIdleCallback" in window) {
    window.requestIdleCallback(initialize);
  } else {
    setTimeout(initialize, 0);
  }
}
