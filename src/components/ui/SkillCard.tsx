"use client";

import { motion } from "framer-motion";
import type { Skill } from "@/lib/constants";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="glass group flex flex-col items-center gap-3 rounded-xl p-4 transition-all hover:border-primary/40"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
        <Icon size={24} />
      </div>
      <span className="text-sm font-medium text-foreground">{skill.name}</span>
      {/* Skill level bar */}
      <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 + 0.3, duration: 0.8 }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-500"
        />
      </div>
    </motion.div>
  );
}
