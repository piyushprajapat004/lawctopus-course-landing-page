"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function SolutionVisual() {
  return (
    <div className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[500px] mt-16 perspective-1000 flex items-center justify-center">
      {/* Background Soft Flare */}
      <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Abstract Grid Base */}
      <motion.div
        initial={{ opacity: 0, rotateX: 60, scale: 0.8 }}
        whileInView={{ opacity: 1, rotateX: 45, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute w-[800px] h-[800px] border border-primary/5 rounded-full"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      {/* Sweeping Path (SVG) */}
      <motion.svg
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute w-full h-full pointer-events-none overflow-visible"
        viewBox="0 0 800 400"
      >
        <motion.path
          d="M 50,300 C 200,300 300,100 500,150 S 700,50 750,100"
          fill="none"
          stroke="url(#gradientPath)"
          strokeWidth="3"
          strokeDasharray="10 10"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        />
        <defs>
          <linearGradient id="gradientPath" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(var(--primary-rgb), 0.5)" />
            <stop offset="100%" stopColor="rgba(var(--primary-rgb), 1)" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Glowing Nodes */}
      {/* Node 1: Start */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute left-[15%] bottom-[20%] size-8 rounded-full bg-card border border-border/60 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center z-10"
      >
        <div className="size-2.5 rounded-full bg-muted-foreground/50" />
      </motion.div>

      {/* Node 2: Middle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute left-[45%] top-[35%] size-12 rounded-full bg-card border border-border/60 shadow-[0_0_30px_rgba(var(--primary-rgb),0.1)] flex items-center justify-center z-10"
      >
        <div className="size-4 rounded-full bg-primary/40 animate-pulse" />
      </motion.div>

      {/* Node 3: End / Climax */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.8, type: "spring" }}
        className="absolute right-[20%] top-[25%] size-20 rounded-full bg-card border border-primary/30 shadow-[0_0_50px_rgba(var(--primary-rgb),0.3)] flex items-center justify-center z-10"
      >
        <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping opacity-20" />
        <div className="size-6 rounded-full bg-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.8)]" />
      </motion.div>
      
      {/* Floating Insight Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 2.2 }}
        className={cn(
          "absolute right-[10%] md:right-0 bottom-[30%] w-64 p-5 rounded-3xl",
          "border border-border/60 bg-card shadow-2xl shadow-black/40 flex flex-col gap-2 z-20 backdrop-blur-xl"
        )}
      >
        <div className="flex items-center gap-2 text-primary mb-1">
          <Sparkles className="size-4" />
          <span className="text-xs font-bold uppercase tracking-wider">Clarity Achieved</span>
        </div>
        <p className="text-sm font-light text-muted-foreground leading-relaxed">
          The complex legal landscape simplified into a continuous, clear path to mastery.
        </p>
      </motion.div>
    </div>
  );
}
