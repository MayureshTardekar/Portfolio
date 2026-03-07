"use client";

import { motion } from "framer-motion";
import { TIMELINE } from "@/lib/constants";
import TimelineItem from "@/components/ui/TimelineItem";

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <p className="mb-2 font-mono text-sm text-primary">// my journey</p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:left-1/2 md:block" />

          <div className="flex flex-col gap-8 md:gap-12">
            {TIMELINE.map((item, i) => (
              <TimelineItem key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
