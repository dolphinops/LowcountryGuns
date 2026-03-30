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

  return <div id={`eventbrite-widget-container-${eventId}`} className="w-full bg-white rounded-xl overflow-visible shadow-sm border border-zinc-100 min-w-[320px]" style={{ minHeight: height }}></div>;
}
