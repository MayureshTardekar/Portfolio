"use client";

import useSWR from "swr";
import { motion } from "framer-motion";
import { Music } from "lucide-react";
import Image from "next/image";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function SpotifyWidget() {
  const { data } = useSWR("/api/spotify", fetcher, {
    refreshInterval: 30000, // 30 sec
    revalidateOnFocus: false,
  });

  if (!data?.isPlaying) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-4 left-4 z-40 flex items-center gap-3 rounded-full border border-border bg-card/90 backdrop-blur-sm px-4 py-2"
      >
        <Music size={16} className="text-green-500" />
        <span className="text-xs text-muted-foreground">
          Not playing anything
        </span>
      </motion.div>
    );
  }

  return (
    <motion.a
      href={data.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 left-4 z-40 flex items-center gap-3 rounded-full border border-green-500/20 bg-card/90 backdrop-blur-sm px-4 py-2 transition-all hover:border-green-500/50"
    >
      {/* Album art */}
      {data.albumArt && (
        <Image
          src={data.albumArt}
          alt={data.album}
          width={32}
          height={32}
          className="h-8 w-8 rounded-full animate-spin"
          style={{ animationDuration: "3s" }}
        />
      )}

      <div className="max-w-[150px]">
        <p className="truncate text-xs font-medium text-foreground">
          {data.title}
        </p>
        <p className="truncate text-[10px] text-muted-foreground">
          {data.artist}
        </p>
      </div>

      {/* Equalizer bars */}
      <div className="flex items-end gap-0.5 h-4">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="w-0.5 bg-green-500 rounded-full"
            animate={{
              height: ["4px", "16px", "8px", "14px", "4px"],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.a>
  );
}
