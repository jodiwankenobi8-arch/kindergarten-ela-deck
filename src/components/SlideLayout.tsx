import React from "react";

type SlideLayoutProps = {
  children: React.ReactNode;
  background?: string;
};

export default function SlideLayout({
  children,
  background = "#d9cfc2", // default slide background
}: SlideLayoutProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background,
      }}
    >
      {/* Slide Content Container */}
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        {children}
      </div>
    </div>
  );
}