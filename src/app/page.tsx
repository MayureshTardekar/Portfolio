"use client";

import { useState, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Terminal from "@/components/ui/Terminal";
import EasterEgg from "@/components/ui/EasterEgg";
import GitHubActivity from "@/components/ui/GitHubActivity";
import SpotifyWidget from "@/components/ui/SpotifyWidget";
// import ChatBot from "@/components/ui/ChatBot";

const HeroScene = lazy(() => import("@/components/three/HeroScene"));

export default function Home() {
  const [terminalMode, setTerminalMode] = useState(false);

  return (
    <>
      <CustomCursor />
      <EasterEgg />
      {/* <ChatBot /> */}
      <Navbar
        terminalMode={terminalMode}
        onToggleTerminal={() => setTerminalMode(!terminalMode)}
      />

      <AnimatePresence mode="wait">
        {terminalMode ? (
          <main key="terminal" className="min-h-screen pt-24 pb-12">
            <Terminal />
          </main>
        ) : (
          <main key="portfolio">
            <div className="relative">
              <Suspense fallback={null}>
                <HeroScene />
              </Suspense>
              <Hero />
            </div>
            <About />
            <Skills />
            <Projects />
            <Experience />
            {/* GitHub Activity Section */}
            <section className="section-container">
              <GitHubActivity />
            </section>

            <Contact />
          </main>
        )}
      </AnimatePresence>

      {!terminalMode && (
        <>
          <SpotifyWidget />
          <Footer />
        </>
      )}
    </>
  );
}
