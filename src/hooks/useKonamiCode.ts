"use client";

import { useEffect, useState, useCallback } from "react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function useKonamiCode() {
  const [activated, setActivated] = useState(false);
  const [progress, setProgress] = useState(0);

  const reset = useCallback(() => {
    setActivated(false);
    setProgress(0);
  }, []);

  useEffect(() => {
    let currentIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === KONAMI_CODE[currentIndex]) {
        currentIndex++;
        setProgress(currentIndex);
        if (currentIndex === KONAMI_CODE.length) {
          setActivated(true);
          currentIndex = 0;
        }
      } else {
        currentIndex = 0;
        setProgress(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return { activated, progress, reset };
}
