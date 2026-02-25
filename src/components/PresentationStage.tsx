import React, { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

const SLIDE_WIDTH = 1920;
const SLIDE_HEIGHT = 1080;

export default function PresentationStage({ children }: Props) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const scaleX = window.innerWidth / SLIDE_WIDTH;
      const scaleY = window.innerHeight / SLIDE_HEIGHT;
      setScale(Math.min(scaleX, scaleY));
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#111",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: SLIDE_WIDTH,
          height: SLIDE_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          position: "relative",
        }}
      >
        {children}
      </div>
    </div>
  );
}