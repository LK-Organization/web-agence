"use client"

import { useMouse } from "@/components/mouse-context"
import { useEffect, useState } from "react"

export default function CustomCursor() {
  const { mousePosition, isHovering } = useMouse()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timeout)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed pointer-events-none z-50 mix-blend-difference"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
      }}
    >
      <div
        className={`rounded-full bg-white transition-all duration-300 ease-out ${
          isHovering ? "w-24 h-24 -ml-12 -mt-12" : "w-8 h-8 -ml-4 -mt-4"
        }`}
      />
    </div>
  )
}

