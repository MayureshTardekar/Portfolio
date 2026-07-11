"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { Skill } from "@/lib/constants";

interface SkillCardProps {
  skill: Skill;
  index: number;
  onClick?: () => void;
}

export default function SkillCard({ skill, index, onClick }: SkillCardProps) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: Math.min(index * 0.03, 0.3), duration: 0.4 }}
      whileHover={{ y: -6 }}
      onClick={onClick}
      style={{
        "--hover-color": skill.color,
        "--hover-bg": `${skill.color}15`,
        "--hover-shadow": `0 0 15px ${skill.color}44`,
      } as React.CSSProperties}
      className="group relative flex cursor-pointer flex-col items-center gap-3 rounded-xl border border-border bg-card/80 p-5 transition-colors duration-300 hover:border-[var(--hover-color)]"
    >
      {/* click affordance — appears on hover */}
      <span className="absolute right-2.5 top-2.5 flex h-5 w-5 items-center justify-center rounded-full border border-border text-muted-foreground opacity-0 transition-all duration-300 group-hover:border-[var(--hover-color)] group-hover:text-[var(--hover-color)] group-hover:opacity-100">
        <Plus size={12} />
      </span>
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 text-muted-foreground transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--hover-bg)] group-hover:text-[var(--hover-color)] group-hover:shadow-[var(--hover-shadow)]">
        <Icon size={28} />
      </div>
      <span className="text-sm font-semibold text-foreground">
        {skill.name}
      </span>
    </motion.div>
  );
}
