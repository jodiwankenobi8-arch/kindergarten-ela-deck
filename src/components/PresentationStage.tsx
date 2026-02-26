import React, { useEffect, useMemo, useRef, useState } from "react";

type PresentationStageProps = {
  children: React.ReactNode;
};

const STAGE_W = 1920;
const STAGE_H = 1080;

export function PresentationStage({ children }: PresentationStageProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      const r = el.getBoundingClientRect();
      setSize({ w: r.width, h: r.height });
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const scale = useMemo(() => {
    if (!size.w || !size.h) return 1;
    return Math.min(size.w / STAGE_W, size.h / STAGE_H);
  }, [size.w, size.h]);

  return (
    <div
      ref={hostRef}
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#0000", // transparent
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: STAGE_W,
          height: STAGE_H,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          willChange: "transform",
          position: "relative",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default PresentationStage;
