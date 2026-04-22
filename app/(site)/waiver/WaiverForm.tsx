'use client';

import Script from 'next/script';

export function WaiverForm() {
  return (
    <>
      <div id="hubspot-waiver-form" className="w-full min-h-[400px]" />
      <Script
        src="//js.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && window.hbspt) {
            window.hbspt.forms.create({
              region: 'na1',
              portalId: '46537828',
              formId: '87565c66-3bff-4e7d-ac19-c83d3501a1aa',
              target: '#hubspot-waiver-form',
            });
          }
        }}
      />
    </>
  );
}
