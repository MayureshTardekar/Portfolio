"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Trophy } from "lucide-react";
import type { TimelineItem as TimelineItemType } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
}

const iconMap = {
  education: GraduationCap,
  work: Briefcase,
  achievement: Trophy,
};

const colorMap = {
  education: "text-blue-400 bg-blue-500/10 border-blue-500/30",
  work: "text-green-400 bg-green-500/10 border-green-500/30",
  achievement: "text-amber-400 bg-amber-500/10 border-amber-500/30",
};

export default function TimelineItem({ item, index }: TimelineItemProps) {
  const Icon = iconMap[item.type];
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={cn(
        "relative flex w-full items-start gap-6 md:w-1/2",
        isLeft ? "md:pr-12 md:self-start" : "md:pl-12 md:self-end"
      )}
    >
      {/* Timeline dot */}
      <div
        className={cn(
          "absolute top-1 hidden h-4 w-4 rounded-full border-2 md:block",
          colorMap[item.type],
          isLeft ? "-right-2 md:right-[-8px]" : "-left-2 md:left-[-8px]"
        )}
      />

      {/* Card */}
      <div className="glass flex-1 rounded-xl p-5">
        <div className="mb-3 flex items-start justify-between gap-2">
          <div
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border",
              colorMap[item.type]
            )}
          >
            <Icon size={18} />
          </div>
          <span className="rounded-full bg-muted px-3 py-1 text-xs font-mono text-muted-foreground">
            {item.period}
          </span>
        </div>

        <h3 className="mb-1 text-base font-bold text-foreground">
          {item.title}
        </h3>
        <p className="mb-2 text-sm text-primary">{item.subtitle}</p>
        {item.location && (
          <p className="mb-2 text-xs text-muted-foreground">{item.location}</p>
        )}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
