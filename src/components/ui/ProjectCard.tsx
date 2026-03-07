"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/constants";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass group flex flex-col rounded-xl overflow-hidden"
    >
      {/* Gradient header - clickable */}
      <Link
        href={`/projects/${project.slug}`}
        className="relative h-40 bg-gradient-to-br from-primary/30 via-primary/10 to-cyan-500/20 p-6 flex items-end cursor-pointer"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.15),transparent_70%)]" />
        <div className="relative flex items-center justify-between w-full">
          <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-mono text-primary">
            {project.year}
          </span>
          {project.live && (
            <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-[10px] text-green-400">
              LIVE
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <Link href={`/projects/${project.slug}`}>
          <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </Link>
        <p className="mb-4 flex-1 text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between border-t border-border pt-4">
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github size={16} />
                Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <ExternalLink size={16} />
                Demo
              </a>
            )}
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-foreground"
          >
            Case Study
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
