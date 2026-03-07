"use client";

import { useParams, notFound } from "next/navigation";
import { useRef, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Clock,
  Users,
  Lightbulb,
  Zap,
  AlertTriangle,
  Layers,
  ChevronRight,
} from "lucide-react";
import { PROJECTS } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const containerRef = useRef<HTMLDivElement>(null);

  const project = PROJECTS.find((p) => p.slug === slug);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    notFound();
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[100] h-1 origin-left bg-gradient-to-r from-primary to-cyan-500"
        style={{ scaleX }}
      />

      {/* Back navigation */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/#projects"
          className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} />
          Back
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/20 blur-[150px]" />
          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-500/15 blur-[150px]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        >
          <motion.div variants={fadeUp} className="mb-4 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full bg-primary/20 px-3 py-1 font-mono text-xs text-primary">
              {project.year}
            </span>
            {project.teamSize && (
              <span className="flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                <Users size={12} /> {project.teamSize}
              </span>
            )}
            {project.duration && (
              <span className="flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                <Clock size={12} /> {project.duration}
              </span>
            )}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mb-6 text-4xl font-bold sm:text-5xl md:text-7xl"
          >
            <span className="gradient-text">{project.title}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground"
          >
            {project.description}
          </motion.p>

          {/* Tech stack pills */}
          <motion.div
            variants={fadeUp}
            className="mb-8 flex flex-wrap justify-center gap-2"
          >
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Links */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-4"
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary"
              >
                <Github size={16} />
                View Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 glow"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* Problem Section */}
      {project.problemStatement && (
        <section className="relative border-t border-border">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                  <AlertTriangle size={20} />
                </div>
                <p className="font-mono text-sm text-primary">// the problem</p>
              </motion.div>

              <motion.h2 variants={fadeUp} className="mb-6 text-3xl font-bold sm:text-4xl">
                Why build this?
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-lg leading-relaxed text-muted-foreground"
              >
                {project.problemStatement}
              </motion.p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Solution Section */}
      {project.solutionApproach && (
        <section className="relative border-t border-border bg-card/30">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                  <Lightbulb size={20} />
                </div>
                <p className="font-mono text-sm text-primary">// the solution</p>
              </motion.div>

              <motion.h2 variants={fadeUp} className="mb-6 text-3xl font-bold sm:text-4xl">
                How I solved it
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-lg leading-relaxed text-muted-foreground"
              >
                {project.solutionApproach}
              </motion.p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Architecture Section */}
      {project.architecture && (
        <section className="relative border-t border-border">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <Layers size={20} />
                </div>
                <p className="font-mono text-sm text-primary">// architecture</p>
              </motion.div>

              <motion.h2 variants={fadeUp} className="mb-8 text-3xl font-bold sm:text-4xl">
                System Design
              </motion.h2>

              {/* Architecture flow */}
              <motion.div variants={fadeUp} className="glass rounded-xl p-6">
                <div className="flex flex-wrap items-center gap-3">
                  {project.architecture.split("→").map((part, i, arr) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-foreground">
                        {part.trim()}
                      </span>
                      {i < arr.length - 1 && (
                        <ChevronRight size={16} className="text-primary shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Key Features Section */}
      {project.keyFeatures && project.keyFeatures.length > 0 && (
        <section className="relative border-t border-border bg-card/30">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                  <Zap size={20} />
                </div>
                <p className="font-mono text-sm text-primary">// features</p>
              </motion.div>

              <motion.h2 variants={fadeUp} className="mb-8 text-3xl font-bold sm:text-4xl">
                Key Features
              </motion.h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {project.keyFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="glass flex items-start gap-3 rounded-xl p-4"
                  >
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                      {i + 1}
                    </div>
                    <p className="text-sm text-muted-foreground">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Challenges Section */}
      {project.challenges && project.challenges.length > 0 && (
        <section className="relative border-t border-border">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                  <AlertTriangle size={20} />
                </div>
                <p className="font-mono text-sm text-primary">
                  // challenges & learnings
                </p>
              </motion.div>

              <motion.h2 variants={fadeUp} className="mb-8 text-3xl font-bold sm:text-4xl">
                What I Learned
              </motion.h2>

              <div className="space-y-4">
                {project.challenges.map((challenge, i) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="glass flex items-start gap-4 rounded-xl p-5"
                  >
                    <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <p className="text-muted-foreground">{challenge}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative border-t border-border bg-card/30">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="mb-4 text-3xl font-bold">
              Interested in this project?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mb-8 text-muted-foreground"
            >
              Check out the code on GitHub or try the live demo.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-4"
            >
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
                >
                  <ExternalLink size={16} />
                  Try Live Demo
                </a>
              )}
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary"
              >
                <ArrowLeft size={16} />
                All Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
