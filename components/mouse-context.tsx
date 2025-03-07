"use client";

import type React from "react";
import { createContext, useState, useEffect, useContext } from "react";

type MousePosition = {
  x: number;
  y: number;
};

type MouseContextType = {
  mousePosition: MousePosition;
  isHovering: boolean;
  setIsHovering: (isHovering: boolean) => void;
};

const MouseContext = createContext<MouseContextType>({
  mousePosition: { x: 0, y: 0 },
  isHovering: false,
  setIsHovering: () => {},
});

export const MouseProvider = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition((prev) => {
        if (prev.x === e.clientX && prev.y === e.clientY) {
          return prev;
        }
        return { x: e.clientX, y: e.clientY };
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <MouseContext.Provider value={{ mousePosition, isHovering, setIsHovering }}>
      {children}
    </MouseContext.Provider>
  );
};

export const useMouse = () => useContext(MouseContext);
