"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Code, Rocket } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

const highlights = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "MCA @ SPIT Mumbai",
  },
  {
    icon: Code,
    label: "Focus",
    value: "Full-Stack Development",
  },
  {
    icon: Rocket,
    label: "Interests",
    value: "AI, Blockchain, SaaS",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mumbai, India",
  },
];

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <p className="mb-2 font-mono text-sm text-primary">
            {"// who am i"}
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              {PERSONAL_INFO.bio}
            </p>
            <p className="text-muted-foreground">
              Right now I&apos;m focused on RAG products, real-time systems,
              and blockchain apps through projects like AgentForge, BidArena,
              EzyVote, and Sahayak. I&apos;m looking for internship roles where
              I can build production features end to end.
            </p>
          </motion.div>

          {/* Right - Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-4"
              >
                <item.icon size={24} className="mb-2 text-primary" />
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-sm font-medium text-foreground">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
