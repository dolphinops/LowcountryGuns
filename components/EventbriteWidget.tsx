'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    EBWidgets?: {
      createWidget: (options: Record<string, unknown>) => void;
    };
  }
}

export default function EventbriteWidget({ eventId, height = 500 }: { eventId: string; height?: number }) {
  useEffect(() => {
    const scriptId = 'eventbrite-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.eventbrite.com/static/widgets/eb_widgets.js';
      script.async = true;
      document.body.appendChild(script);
    }

    const loadWidget = () => {
      if (window.EBWidgets) {
        window.EBWidgets.createWidget({
          widgetType: 'checkout',
          eventId: eventId,
          iframeContainerId: `eventbrite-widget-container-${eventId}`,
          iframeContainerHeight: height,
        });
      }
    };

    if (script.getAttribute('data-loaded') === 'true') {
      loadWidget();
    } else {
      script.addEventListener('load', () => {
        script.setAttribute('data-loaded', 'true');
        loadWidget();
      });
    }

    return () => {
      const container = document.getElementById(`eventbrite-widget-container-${eventId}`);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [eventId]);

  return (
    <div className="w-full min-w-0">
      {/* min-w-0 + optional horizontal scroll: Eventbrite iframes often have a min width; avoid page-level overflow on phones */}
      <div className="w-full min-w-0 overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch] rounded-xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-sm">
        <div
          id={`eventbrite-widget-container-${eventId}`}
          className="mx-auto w-full min-w-0 max-w-full bg-white [&_iframe]:mx-auto [&_iframe]:block [&_iframe]:max-w-full [&_iframe]:min-h-0"
          style={{ minHeight: height }}
        />
      </div>
    </div>
  );
}
