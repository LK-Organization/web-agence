"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import useIsMobile from "@/hooks/use-mobile-view"; // adjust the path as needed
import { Smartphone, Lightbulb, Megaphone, Palette, Globe } from "lucide-react";

const floatingItems = [
  { text: "Développement Mobile", icon: Smartphone, delay: "0s" },
  { text: "Stratégie Digitale", icon: Lightbulb, delay: "2s" },
  { text: "Marketing Digital", icon: Megaphone, delay: "4s" },
  { text: "Design UI/UX", icon: Palette, delay: "6s" },
  { text: "Développement Web", icon: Globe, delay: "8s" },
];

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
      <div className="absolute w-[50rem] h-[50rem] rounded-full bg-blue-500/30 blur-[100px] animate-slow-pulse" />
      <div className="absolute w-[30rem] h-[30rem] rounded-full bg-blue-400/20 blur-[80px] animate-slow-pulse [animation-delay:3s]" />

      {/* Render the 3D scene only on non‑mobile devices */}
      {!isMobile && DynamicThreeScene && (
        <div
          className="h-[400px] lg:h-[500px] w-full rounded-xl  relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Floating elements positioned around the 3D scene */}
          {floatingItems.map((item, index) => {
            // Calculate position in a circular pattern
            const angle =
              index * (360 / floatingItems.length) * (Math.PI / 180);
            const radius = 220; // Distance from center
            const offsetX = Math.cos(angle) * radius;
            const offsetY = Math.sin(angle) * radius;

            return (
              <div
                key={item.text}
                className="absolute flex items-center gap-2 text-xl font-semibold text-white/40 animate-float-text "
                style={{
                  top: `calc(50% + ${offsetY}px)`,
                  left: `calc(50% + ${offsetX}px)`,
                  transform: "translate(-50%, -50%)",
                  animationDelay: item.delay,
                  textShadow: "0 0 10px rgba(0,0,0,0.1)",
                }}
              >
                <item.icon className="w-6 h-6" />
                <span>{item.text}</span>
              </div>
            );
          })}

          <DynamicThreeScene isHovered={isHovered} />
        </div>
      )}
    </>
  );
}
