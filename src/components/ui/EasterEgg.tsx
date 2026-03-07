"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import useKonamiCode from "@/hooks/useKonamiCode";

export default function EasterEgg() {
  const { activated, reset } = useKonamiCode();
  const [confetti, setConfetti] = useState<
    { x: number; y: number; color: string; id: number }[]
  >([]);

  useEffect(() => {
    if (activated) {
      const colors = ["#8b5cf6", "#06b6d4", "#f59e0b", "#ef4444", "#22c55e"];
      const pieces = Array.from({ length: 50 }, (_, i) => ({
        x: Math.random() * window.innerWidth,
        y: -20,
        color: colors[i % colors.length],
        id: i,
      }));
      setConfetti(pieces);
    }
  }, [activated]);

  return (
    <AnimatePresence>
      {activated && (
        <>
          {/* Confetti */}
          {confetti.map((piece) => (
            <motion.div
              key={piece.id}
              initial={{ x: piece.x, y: -20, rotate: 0, opacity: 1 }}
              animate={{
                y: window.innerHeight + 20,
                rotate: Math.random() * 720,
                x: piece.x + (Math.random() - 0.5) * 200,
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                ease: "easeIn",
              }}
              className="pointer-events-none fixed z-[10000]"
              style={{
                width: 8 + Math.random() * 8,
                height: 8 + Math.random() * 8,
                backgroundColor: piece.color,
                borderRadius: Math.random() > 0.5 ? "50%" : "2px",
              }}
            />
          ))}

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={reset}
          >
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", damping: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="glass relative mx-4 max-w-md rounded-2xl p-8 text-center"
            >
              <button
                onClick={reset}
                className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
              >
                <X size={18} />
              </button>

              <Sparkles size={48} className="mx-auto mb-4 text-amber-400" />

              <h3 className="mb-2 text-2xl font-bold gradient-text">
                You found the secret!
              </h3>
              <p className="mb-4 text-muted-foreground">
                You know the Konami Code! You&apos;re clearly a person of
                culture. Here&apos;s a virtual high-five!
              </p>
              <div className="text-6xl">🖐️</div>
              <p className="mt-4 font-mono text-xs text-muted-foreground">
                ↑ ↑ ↓ ↓ ← → ← → B A
              </p>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
