"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, ExternalLink, Maximize2, Minimize2 } from "lucide-react";

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const resumeOptions = [
  {
    id: "tech",
    label: "v1",
    file: "/resumes/Mayuresh-tech.pdf",
    downloadName: "Mayuresh_Tardekar_Resume_v1.pdf",
    description: "Tailored for software engineering & full-stack development roles.",
  },
  {
    id: "ats",
    label: "v2",
    file: "/resumes/Mayuresh-ATS.pdf",
    downloadName: "Mayuresh_Tardekar_Resume_v2.pdf",
    description: "Text-optimized, clean format without a photo (perfect for automated trackers).",
  },
  {
    id: "photo",
    label: "v3",
    file: "/resumes/Mayuresh-photo.pdf",
    downloadName: "Mayuresh_Tardekar_Resume_v3.pdf",
    description: "Visual resume containing a professional profile photo.",
  },
];

export default function ResumeViewerModal({ isOpen, onClose }: ResumeViewerModalProps) {
  const [activeTab, setActiveTab] = useState(resumeOptions[0]);
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className={`glass relative z-10 flex w-full flex-col overflow-hidden border border-border bg-card shadow-2xl transition-all duration-300 ${
              isMaximized ? "h-screen w-screen max-w-none rounded-none border-0" : "h-[90vh] max-w-4xl rounded-2xl"
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Select & View Resume</h3>
                  <p className="text-xs text-muted-foreground">Choose a format to view or download</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMaximized(!isMaximized)}
                  aria-label={isMaximized ? "Minimize window" : "Maximize window"}
                  className="rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:border-primary hover:text-foreground cursor-pointer"
                >
                  {isMaximized ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                </button>
                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:border-primary hover:text-foreground cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Tabs Selector */}
            <div className="border-b border-border bg-muted/20 px-6 py-3">
              <div className="flex flex-wrap gap-2">
                {resumeOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setActiveTab(opt)}
                    className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                      activeTab.id === opt.id
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                        : "border border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-muted-foreground italic">
                {activeTab.description}
              </p>
            </div>

            {/* PDF Viewer / Document Preview Container */}
            <div className="relative flex-1 bg-black/10 p-4">
              <iframe
                src={`${activeTab.file}#toolbar=0`}
                title={`${activeTab.label} Resume Preview`}
                className="h-full w-full rounded-lg border border-border/50 bg-card shadow-inner"
              />
            </div>

            {/* Footer / Download Action Bar */}
            <div className="flex flex-col gap-3 border-t border-border px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs text-muted-foreground">
                Having trouble viewing? You can also open the PDF directly or download it.
              </span>
              <div className="flex gap-2">
                <a
                  href={activeTab.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground transition-all hover:border-primary cursor-pointer"
                >
                  <ExternalLink size={14} />
                  Open in New Tab
                </a>
                <a
                  href={activeTab.file}
                  download={activeTab.downloadName}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-all hover:brightness-110 shadow-md shadow-primary/10 cursor-pointer"
                >
                  <Download size={14} />
                  Download PDF
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
