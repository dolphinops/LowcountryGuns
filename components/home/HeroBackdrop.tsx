"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Hero background: static poster on mobile (no MP4 fetch/decode).
 * Video mounts only on md+ viewports and when reduced-motion is off.
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
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden opacity-80">
      <Image
        src="/images/hero-poster.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        aria-hidden
      />
      {mountVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-poster.jpg"
          className="pointer-events-none absolute top-1/2 left-1/2 h-[56.25vw] min-h-[100vh] w-[100vw] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
