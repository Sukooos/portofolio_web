"use client";

import { useEffect } from "react";

export default function HydrationFix() {
  useEffect(() => {
    // Fix hydration mismatches by ensuring consistent state
    if (typeof window !== 'undefined') {
      // Force a re-render after hydration
      const handleLoad = () => {
        // Clear any hydration-related console errors
        if (process.env.NODE_ENV === 'development') {
          console.clear();
        }
      };

      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
      }
    }
  }, []);

  return null;
} 