import React, { useEffect, useMemo, useRef, useState } from "react";

type PresentationStageProps = {
  children: React.ReactNode;
};

export function PresentationStage({ children }: PresentationStageProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ro = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect;
      if (!rect) return;
      setSize({ w: rect.width, h: rect.height });
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const scale = useMemo(() => {
    const w = size.w || window.innerWidth;
    const h = size.h || window.innerHeight;
    return Math.min(1, w / 1920, h / 1080);
  }, [size.w, size.h]);

  return (
    <div ref={containerRef} className="w-screen h-screen overflow-hidden">
      <div className="w-full h-full flex items-center justify-center overflow-hidden">
        <div
          style={{
            width: 1920,
            height: 1080,
            transform: `scale(${scale})`,
            transformOrigin: "center center",
            willChange: "transform",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}