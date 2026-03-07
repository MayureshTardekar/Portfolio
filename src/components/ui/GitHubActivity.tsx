"use client";

import useSWR from "swr";
import { motion } from "framer-motion";
import { Github, GitCommit, Star, GitFork, ExternalLink } from "lucide-react";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

interface Repo {
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
}

interface Event {
  type: string;
  repo: string;
  createdAt: string;
  message: string;
}

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3776ab",
  Solidity: "#363636",
  Java: "#b07219",
  "C++": "#f34b7d",
  HTML: "#e34c26",
  CSS: "#1572b6",
};

export default function GitHubActivity() {
  const { data, error, isLoading } = useSWR("/api/github", fetcher, {
    refreshInterval: 300000, // 5 min
    revalidateOnFocus: false,
  });

  if (isLoading) {
    return (
      <div className="glass rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Github size={20} className="text-primary" />
          <h3 className="font-bold text-foreground">GitHub Activity</h3>
        </div>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-16 animate-pulse rounded-lg bg-muted" />
          ))}
        </div>
      </div>
    );
  }

  if (error || !data || data.error) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-xl p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Github size={20} className="text-primary" />
          <h3 className="font-bold text-foreground">GitHub Activity</h3>
        </div>
        <a
          href="https://github.com/MayureshTardekar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1"
        >
          View Profile <ExternalLink size={12} />
        </a>
      </div>

      {/* Recent repos */}
      <div className="space-y-3 mb-6">
        {data.repos?.slice(0, 3).map((repo: Repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start justify-between rounded-lg bg-muted/50 p-3 transition-colors hover:bg-muted"
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {repo.name}
              </p>
              {repo.description && (
                <p className="text-xs text-muted-foreground mt-1 truncate">
                  {repo.description}
                </p>
              )}
            </div>
            <div className="flex items-center gap-3 ml-3 shrink-0">
              {repo.language && (
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{
                      backgroundColor:
                        languageColors[repo.language] || "#666",
                    }}
                  />
                  {repo.language}
                </span>
              )}
              {repo.stars > 0 && (
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Star size={12} /> {repo.stars}
                </span>
              )}
              {repo.forks > 0 && (
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <GitFork size={12} /> {repo.forks}
                </span>
              )}
            </div>
          </a>
        ))}
      </div>

      {/* Recent events */}
      {data.events?.length > 0 && (
        <>
          <p className="text-xs font-medium text-muted-foreground mb-2">
            Recent Activity
          </p>
          <div className="space-y-2">
            {data.events.slice(0, 3).map((event: Event, i: number) => (
              <div
                key={i}
                className="flex items-start gap-2 text-xs text-muted-foreground"
              >
                <GitCommit size={14} className="mt-0.5 shrink-0 text-primary" />
                <div className="min-w-0">
                  <span className="text-foreground">
                    {event.repo.split("/")[1]}
                  </span>
                  {" — "}
                  <span className="truncate">{event.message}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
}
