"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMouse } from "@/components/mouse-context";
import CustomCursor from "@/components/custom-cursor";
import { Button } from "@/components/ui/button";
import ProjectShowcase from "@/components/project-showcase";

export default function Works() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { setIsHovering } = useMouse();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
    setIsHovering(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollPosition(containerRef.current.scrollLeft);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <CustomCursor />

      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Travaux</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Explorez notre portfolio de projets primés qui mettent en valeur
              notre expertise et notre créativité.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button
              variant="link"
              className="text-primary font-medium"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Voir Tous les Projets
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <ProjectShowcase />

      <div className="container mx-auto px-4 mt-8">
        <div className="w-full bg-muted/30 h-1 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: "0%" }}
            animate={{
              width: `${Math.min(
                (scrollPosition / (containerRef.current?.scrollWidth || 1)) *
                  100,
                100
              )}%`,
            }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>
    </section>
  );
}
