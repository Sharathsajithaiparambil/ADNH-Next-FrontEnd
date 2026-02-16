"use client";

import { ReactNode, useEffect, useRef, createContext, useContext, useState, Suspense } from "react";
import Lenis from "lenis";
import { usePathname, useSearchParams } from "next/navigation";
import { LenisContextType } from "@/types";

const LenisContext = createContext<LenisContextType>({ lenis: null });

export const useLenis = () => useContext(LenisContext);

interface LenisProviderProps {
  children: ReactNode;
}

function LenisRouteHandler({ lenisInstance }: { lenisInstance: Lenis | null }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    // Only reset scroll if the pathname actually changed (not just the hash)
    if (prevPathnameRef.current !== pathname) {
      if (lenisInstance) {
        lenisInstance.scrollTo(0, { immediate: true });
      }
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      prevPathnameRef.current = pathname;
    }
  }, [pathname, searchParams, lenisInstance]);

  return null;
}

export function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Delay Lenis initialization to avoid blocking main thread
    const initLenis = () => {
      const prefersReducedMotion =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const lenis = new Lenis({
        // Automatically handles RAF loop
        autoRaf: true,

        // Smooth animation interpolation
        lerp: prefersReducedMotion ? 0 : 0.06,

        // Touch vs wheel sensitivity
        wheelMultiplier: 1.2,
        touchMultiplier: 1.8,

        // Optional anchor support
        anchors: false,

        // Enable nested scroll arenas safely
        allowNestedScroll: false,

        // If you want more mobile-friendly touch
        syncTouch: false
      });

      lenisRef.current = lenis;
      setLenisInstance(lenis);

      // Force scroll to top on mount to prevent automatic scrolling to anchor
      // This ensures the page always loads from the top as requested.
      if (window.location.hash) {
        window.scrollTo(0, 0);
        lenis.scrollTo(0, { immediate: true });
      }
    };

    // Use requestIdleCallback if available, otherwise use setTimeout as fallback
    if ('requestIdleCallback' in window) {
      requestIdleCallback(initLenis, { timeout: 2000 });
    } else {
      setTimeout(initLenis, 100);
    }

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
        setLenisInstance(null);
      }
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis: lenisInstance }}>
      <Suspense fallback={null}>
        <LenisRouteHandler lenisInstance={lenisInstance} />
      </Suspense>
      {children}
    </LenisContext.Provider>
  );
}

