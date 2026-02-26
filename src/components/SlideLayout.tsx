import React from "react";

export type SlideLayoutProps = {
  children: React.ReactNode;
  background?: string;
  className?: string;
  style?: React.CSSProperties;
};

export function SlideLayout({
  children,
  background = "#d9cfc2",
  className = "",
  style,
}: SlideLayoutProps) {
  return (
    <div
      className={className}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        background,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default SlideLayout;
