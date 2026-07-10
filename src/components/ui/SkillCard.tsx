"use client";

import { motion } from "framer-motion";
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
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.4 }}
      whileHover={{ y: -6, scale: 1.03 }}
      onClick={onClick}
      style={{
        "--hover-color": skill.color,
        "--hover-bg": `${skill.color}15`,
        "--hover-shadow": `0 0 15px ${skill.color}44`,
      } as React.CSSProperties}
      className="glass group flex flex-col items-center gap-3 rounded-xl p-6 transition-all duration-300 hover:border-[var(--hover-color)] hover:shadow-lg hover:shadow-[color:var(--hover-color)]/5 cursor-pointer"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 text-muted-foreground transition-all duration-300 group-hover:bg-[var(--hover-bg)] group-hover:text-[var(--hover-color)] group-hover:scale-110 group-hover:shadow-[var(--hover-shadow)]">
        <Icon size={28} />
      </div>
      <span className="text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-foreground">
        {skill.name}
      </span>
    </motion.div>
  );
}
