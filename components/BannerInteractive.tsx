// components/BannerInteractive.jsx
"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import dynamic from "next/dynamic";
import useIsMobile from "@/hooks/use-mobile-view"; // adjust the path as needed

export default function BannerInteractive() {
  const [isHovered, setIsHovered] = useState(false);
  const { theme, setTheme } = useTheme();
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
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

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
      <Button
        variant="outline"
        size="icon"
        className="absolute top-4 right-4"
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        )}
        <span className="sr-only">Toggle Theme</span>
      </Button>
    </>
  );
}
