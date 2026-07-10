"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { TERMINAL_COMMANDS, PERSONAL_INFO } from "@/lib/constants";

const ASCII_BANNER = `
 __  __                                   _
|  \\/  | __ _ _   _ _   _ _ __ ___  ___| |__
| |\\/| |/ _\` | | | | | | | '__/ _ \\/ __| '_ \\
| |  | | (_| | |_| | |_| | | |  __/\\__ \\ | | |
|_|  |_|\\__,_|\\__, |\\__,_|_|  \\___||___/_| |_|
              |___/
`;

interface Line {
  content: string;
  type: "input" | "output" | "ascii";
}

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([
    { content: ASCII_BANNER, type: "ascii" },
    {
      content:
        'Welcome to Mayuresh\'s terminal! Type "help" to see available commands.',
      type: "output",
    },
    { content: "", type: "output" },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();

    const newLines: Line[] = [
      ...lines,
      { content: `visitor@mayuresh:~$ ${cmd}`, type: "input" },
    ];

    if (trimmed === "clear") {
      setLines([
        {
          content: 'Terminal cleared. Type "help" for commands.',
          type: "output",
        },
      ]);
      return;
    }

    const parts = trimmed.split(/\s+/);
    const cmdName = parts[0];
    const cmdArg = parts[1] || "";

    if (trimmed === "github") {
      newLines.push({ content: TERMINAL_COMMANDS.github, type: "output" });
      window.open(PERSONAL_INFO.github, "_blank");
    } else if (cmdName === "resume") {
      let file = "/resumes/resume-tech.pdf";
      let label = "Full-Stack Dev Resume";
      
      if (cmdArg === "-ats" || cmdArg === "ats" || cmdArg === "-a" || cmdArg === "a") {
        file = "/resumes/resume-ats.pdf";
        label = "ATS-Friendly Resume";
      } else if (cmdArg === "-photo" || cmdArg === "photo" || cmdArg === "-p" || cmdArg === "p") {
        file = "/resumes/resume-photo.pdf";
        label = "Resume with Photo";
      } else if (cmdArg === "-tech" || cmdArg === "tech" || cmdArg === "-t" || cmdArg === "t") {
        file = "/resumes/resume-tech.pdf";
        label = "Full-Stack Dev Resume";
      } else if (cmdArg === "help" || cmdArg === "--help" || cmdArg === "-h") {
        newLines.push({
          content: `Usage: resume [option]
Options:
  -tech, -t   - Full-Stack Developer Resume (Default)
  -ats, -a    - ATS-Friendly Resume (No Photo)
  -photo, -p  - Resume with Photo`,
          type: "output",
        });
        newLines.push({ content: "", type: "output" });
        setLines(newLines);
        return;
      } else if (cmdArg !== "") {
        newLines.push({
          content: `Unknown option: ${cmdArg}. Type "resume -h" for usage.`,
          type: "output",
        });
        newLines.push({ content: "", type: "output" });
        setLines(newLines);
        return;
      }

      newLines.push({ content: `> Downloading ${label}... 📄`, type: "output" });
      const a = document.createElement("a");
      a.href = file;
      a.download = `Mayuresh_Tardekar_${label.replace(/\s+/g, "_")}.pdf`;
      a.click();
    } else if (TERMINAL_COMMANDS[trimmed]) {
      newLines.push({
        content: TERMINAL_COMMANDS[trimmed],
        type: "output",
      });
    } else if (trimmed) {
      newLines.push({
        content: `Command not found: ${trimmed}. Type "help" for available commands.`,
        type: "output",
      });
    }

    newLines.push({ content: "", type: "output" });
    setLines(newLines);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setHistory((prev) => [input, ...prev]);
    setHistoryIdx(-1);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIdx < history.length - 1) {
        const newIdx = historyIdx + 1;
        setHistoryIdx(newIdx);
        setInput(history[newIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx > 0) {
        const newIdx = historyIdx - 1;
        setHistoryIdx(newIdx);
        setInput(history[newIdx]);
      } else {
        setHistoryIdx(-1);
        setInput("");
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="mx-auto max-w-4xl px-4"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="overflow-hidden rounded-xl border border-green-500/20 bg-[#0d1117] shadow-2xl shadow-green-500/5">
        {/* Terminal header */}
        <div className="flex items-center gap-2 border-b border-green-500/10 bg-[#161b22] px-4 py-3">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-3 font-mono text-xs text-green-500/60">
            visitor@mayuresh: ~
          </span>
        </div>

        {/* Terminal body */}
        <div className="h-[70vh] overflow-y-auto p-4 font-mono text-sm">
          {lines.map((line, i) => (
            <div key={i} className="whitespace-pre-wrap">
              {line.type === "input" ? (
                <span className="text-green-400">{line.content}</span>
              ) : line.type === "ascii" ? (
                <span className="text-cyan-400 text-xs">{line.content}</span>
              ) : (
                <span className="text-green-300/80">{line.content}</span>
              )}
            </div>
          ))}

          {/* Input line */}
          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="text-green-400">visitor@mayuresh:~$&nbsp;</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-green-300 outline-none caret-green-400"
              autoComplete="off"
              spellCheck="false"
            />
            <span className="terminal-cursor text-green-400">█</span>
          </form>

          <div ref={bottomRef} />
        </div>
      </div>
    </motion.div>
  );
}
