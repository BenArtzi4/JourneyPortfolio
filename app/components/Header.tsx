"use client";

import { GithubIcon, Linkedin, MailIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-border-subtle backdrop-blur-sm bg-background/50 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <div className="flex flex-col gap-8">
          {/* Name and Title */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
              Gal Ben Artzi
            </h1>
            <p className="text-lg sm:text-xl text-foreground-muted font-normal">
              Software Engineer · DevOps
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:Benartzi4@gmail.com"
              className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-background-elevated border border-border hover:border-accent hover:bg-background-surface transition-all duration-200"
            >
              <MailIcon size={18} className="text-foreground-muted group-hover:text-accent transition-colors" />
              <span className="text-sm text-foreground-muted group-hover:text-foreground transition-colors">
                Benartzi4@gmail.com
              </span>
            </a>
            <a
              href="https://github.com/BenArtzi4"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-background-elevated border border-border hover:border-accent hover:bg-background-surface transition-all duration-200"
            >
              <GithubIcon size={18} className="text-foreground-muted group-hover:text-accent transition-colors" />
              <span className="text-sm text-foreground-muted group-hover:text-foreground transition-colors">
                GitHub
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/gal-ben-artzi/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-background-elevated border border-border hover:border-accent hover:bg-background-surface transition-all duration-200"
            >
              <Linkedin size={18} className="text-foreground-muted group-hover:text-accent transition-colors" />
              <span className="text-sm text-foreground-muted group-hover:text-foreground transition-colors">
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
