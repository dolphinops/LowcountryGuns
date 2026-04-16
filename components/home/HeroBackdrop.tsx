"use client";

import { useEffect, useState } from "react";

/**
 * Hero background: solid black until video (md+, motion OK).
 * No poster image — avoids a visible wrong/low-res flash before the MP4.
 */
export function HeroBackdrop() {
  const [mountVideo, setMountVideo] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      setMountVideo(mq.matches && !reduce.matches);
    };

    sync();
    mq.addEventListener("change", sync);
    reduce.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden bg-black">
      {mountVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="pointer-events-none absolute top-1/2 left-1/2 h-[56.25vw] min-h-[100vh] w-[100vw] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 object-cover opacity-80"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
