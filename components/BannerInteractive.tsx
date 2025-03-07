// components/BannerInteractive.jsx
"use client";

import { useState, useMemo } from "react";

import dynamic from "next/dynamic";
import useIsMobile from "@/hooks/use-mobile-view"; // adjust the path as needed

export default function BannerInteractive() {
  const [isHovered, setIsHovered] = useState(false);

  const isMobile = useIsMobile(); // e.g., returns true if viewport width < 768px

  // Dynamically import the heavy 3D scene component only if not on mobile.
  const DynamicThreeScene = useMemo(() => {
    if (!isMobile) {
      return dynamic(() => import("@/components/DynamicThreeScene"), {
        ssr: false,
      });
    }
    return null;
  }, [isMobile]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <>
      {" "}
      {/* Render the 3D scene only on non‑mobile devices */}
      {!isMobile && DynamicThreeScene && (
        <div
          className="h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <DynamicThreeScene isHovered={isHovered} />
        </div>
      )}
    </>
  );
}
