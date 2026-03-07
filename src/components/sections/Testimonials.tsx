"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Hackathon Teammate",
    role: "Alkimi Move FWD Hackathon",
    text: "Mayuresh's ability to architect full-stack solutions under pressure is impressive. His work on our hackathon project was instrumental to our submission.",
    avatar: "HT",
  },
  {
    name: "College Peer",
    role: "SPIT Mumbai",
    text: "One of the most dedicated developers I know. Always exploring new tech and helping others learn. His blockchain and AI projects are next level.",
    avatar: "CP",
  },
  {
    name: "Project Collaborator",
    role: "AgentForge Co-builder",
    text: "Working with Mayuresh on AgentForge was a great experience. His understanding of RAG systems and scalable architecture is solid.",
    avatar: "PC",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <p className="mb-2 font-mono text-sm text-primary">
            // kind words
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            What People <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          <div className="glass relative overflow-hidden rounded-2xl p-8 md:p-12">
            <Quote
              size={48}
              className="absolute right-6 top-6 text-primary/10"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mb-6 text-lg leading-relaxed text-muted-foreground italic">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {testimonials[current].name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === current
                        ? "w-6 bg-primary"
                        : "w-2 bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
