"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    // WebKit bug 238497: scroll-behavior:smooth makes iOS Safari/Chrome
    // silently ignore programmatic scrollTo even with behavior:"instant".
    // Neutralize it for one frame, then restore.
    html.style.scrollBehavior = "auto";

    const raf = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      html.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
      html.style.scrollBehavior = prev;
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return null;
}
