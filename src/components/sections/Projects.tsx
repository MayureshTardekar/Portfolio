"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import ProjectCard from "@/components/ui/ProjectCard";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Collect all unique tech stack items
  const allTech = Array.from(
    new Set(PROJECTS.flatMap((p) => p.techStack))
  );

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.techStack.includes(activeFilter));

  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <p className="mb-2 font-mono text-sm text-primary">
            // what i&apos;ve built
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap justify-center gap-2"
        >
          <button
            onClick={() => setActiveFilter("All")}
            className={cn(
              "rounded-full px-4 py-2 text-xs font-medium transition-all",
              activeFilter === "All"
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card text-muted-foreground hover:border-primary"
            )}
          >
            All
          </button>
          {allTech.map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveFilter(tech)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-medium transition-all",
                activeFilter === tech
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-muted-foreground hover:border-primary"
              )}
            >
              {tech}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
