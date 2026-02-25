import React from "react";

export function PresentationStage({ children }: { children: React.ReactNode }) {
  const hostRef = React.useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = React.useState(1);

  React.useLayoutEffect(() => {
    const el = hostRef.current;
    if (!el) return;

    const resize = () => {
      const { width, height } = el.getBoundingClientRect();
      const s = Math.min(width / 1920, height / 1080);
      setScale(s);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div ref={hostRef} className="fixed inset-0 bg-black overflow-hidden">
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          width: 1920,
          height: 1080,
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: "center",
        }}
      >
        <div className="w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
}
