"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, HelpCircle, Code2, GraduationCap } from "lucide-react";
import type { Skill } from "@/lib/constants";

interface SkillDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  skill: Skill | null;
}

export default function SkillDetailModal({ isOpen, onClose, skill }: SkillDetailModalProps) {
  if (!skill) return null;

  const Icon = skill.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="glass relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close details"
              className="absolute right-4 top-4 rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:border-primary hover:text-foreground cursor-pointer"
            >
              <X size={16} />
            </button>

            {/* Header / Brand Icon */}
            <div className="mb-6 flex items-center gap-4">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl border bg-card text-foreground"
                style={{
                  borderColor: `${skill.color}33`,
                  boxShadow: `0 0 20px ${skill.color}11`,
                }}
              >
                <Icon size={36} style={{ color: skill.color }} />
              </div>
              <div>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  {skill.category}
                </span>
                <h3 className="mt-1 text-xl font-bold text-foreground">
                  {skill.name}
                </h3>
              </div>
            </div>

            {/* Content Blocks */}
            <div className="space-y-4">
              {/* Why it is used */}
              <div className="rounded-xl border border-border/40 bg-muted/10 p-4">
                <div className="mb-2 flex items-center gap-2 font-mono text-xs font-bold text-primary">
                  <HelpCircle size={14} />
                  <span>// WHY IT IS USED</span>
                </div>
                <p className="text-sm leading-relaxed text-foreground/90">
                  {skill.whyUsed}
                </p>
              </div>

              {/* Where I used it */}
              <div className="rounded-xl border border-border/40 bg-muted/10 p-4">
                <div className="mb-2 flex items-center gap-2 font-mono text-xs font-bold text-cyan-400">
                  <Code2 size={14} />
                  <span>// WHERE I USED IT</span>
                </div>
                <p className="text-sm leading-relaxed text-foreground/90">
                  {skill.whereUsed}
                </p>
              </div>

              {/* Why I learned it */}
              <div className="rounded-xl border border-border/40 bg-muted/10 p-4">
                <div className="mb-2 flex items-center gap-2 font-mono text-xs font-bold text-purple-400">
                  <GraduationCap size={14} />
                  <span>// WHY I LEARNED IT</span>
                </div>
                <p className="text-sm leading-relaxed text-foreground/90">
                  {skill.whyLearned}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
