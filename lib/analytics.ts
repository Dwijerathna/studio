type PlausibleProps = Record<string, string | number | boolean>;

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: PlausibleProps; callback?: () => void },
    ) => void;
  }
}

/**
 * Fire a custom Plausible event. Safe no-op during SSR or if the
 * Plausible script has not loaded.
 */
export function trackEvent(event: string, props?: PlausibleProps): void {
  if (typeof window === "undefined" || typeof window.plausible !== "function") {
    return;
  }
  window.plausible(event, props ? { props } : undefined);
}
