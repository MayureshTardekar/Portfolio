"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SKILLS, type SkillCategory, type Skill } from "@/lib/constants";
import SkillCard from "@/components/ui/SkillCard";
import SkillDetailModal from "@/components/ui/SkillDetailModal";
import { cn } from "@/lib/utils";

const categories: ("All" | SkillCategory)[] = [
  "All",
  "Languages",
  "Frontend",
  "Backend",
  "Database",
  "DevOps",
  "Blockchain",
  "Tools",
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<"All" | SkillCategory>(
    "All"
  );
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const filtered =
    activeCategory === "All"
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <p className="mb-2 font-mono text-sm text-primary">
            {"// what i work with"}
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-medium transition-all",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {filtered.map((skill, i) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={i}
              onClick={() => {
                setSelectedSkill(skill);
                setIsDetailOpen(true);
              }}
            />
          ))}
        </motion.div>
      </div>
      <SkillDetailModal
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        skill={selectedSkill}
      />
    </section>
  );
}
