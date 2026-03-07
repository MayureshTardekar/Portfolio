"use client";

import { useEffect } from "react";
import useSWR from "swr";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function VisitorCounter() {
  const { data, mutate } = useSWR("/api/visitor", fetcher, {
    revalidateOnFocus: false,
  });

  useEffect(() => {
    // Increment on first visit (check session)
    const visited = sessionStorage.getItem("portfolio-visited");
    if (!visited) {
      fetch("/api/visitor", { method: "POST" })
        .then((r) => r.json())
        .then((d) => {
          mutate(d, false);
          sessionStorage.setItem("portfolio-visited", "true");
        });
    }
  }, [mutate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="flex items-center gap-2 text-xs text-muted-foreground"
    >
      <Eye size={14} />
      <span>{data?.count?.toLocaleString() || "—"} visits</span>
    </motion.div>
  );
}
