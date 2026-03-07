"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

interface NavbarProps {
  terminalMode: boolean;
  onToggleTerminal: () => void;
}

export default function Navbar({ terminalMode, onToggleTerminal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <motion.a
          href="#home"
          className="font-mono text-lg font-bold text-foreground"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-primary">&lt;</span>
          MT
          <span className="text-primary">/&gt;</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-2">
          <motion.button
            onClick={onToggleTerminal}
            className={cn(
              "flex h-9 items-center gap-2 rounded-full border px-3 text-xs font-mono transition-colors",
              terminalMode
                ? "border-green-500/50 bg-green-500/10 text-green-400"
                : "border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground"
            )}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle terminal mode"
          >
            <Terminal size={14} />
            <span className="hidden sm:inline">
              {terminalMode ? "Exit" : "Terminal"}
            </span>
          </motion.button>

          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass mt-2 overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="rounded-lg px-4 py-3 text-left text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
