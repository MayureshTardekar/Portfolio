"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springX = useSpring(cursorX, { damping: 40, stiffness: 800, mass: 0.2 });
  const springY = useSpring(cursorY, { damping: 40, stiffness: 800, mass: 0.2 });

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.body.style.cursor = "none";

    const moveCursor = (e: MouseEvent) => {
      setHasMoved(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="custom-cursor pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-primary"
        style={{
          x: springX,
          y: springY,
          width: isHovering ? 40 : 8,
          height: isHovering ? 40 : 8,
          translateX: isHovering ? -20 : -4,
          translateY: isHovering ? -20 : -4,
          opacity: hasMoved ? (isHovering ? 0.3 : 1) : 0,
        }}
        transition={{ duration: 0.15 }}
      />
      {/* Outer ring */}
      <motion.div
        className="custom-cursor pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border border-primary/50"
        style={{
          x: springX,
          y: springY,
          width: isHovering ? 50 : 32,
          height: isHovering ? 50 : 32,
          translateX: isHovering ? -25 : -16,
          translateY: isHovering ? -25 : -16,
          opacity: hasMoved ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
