"use client";

import { motion } from "framer-motion";
import { Award, PlayCircle, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square md:aspect-auto md:h-[500px]">
      {/* Background Gradient Orb */}
      <div className="absolute inset-0 bg-primary/20 rounded-full blur-[120px] scale-110 opacity-70" />

      {/* Main Container - Course Platform Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={cn(
          "absolute top-8 left-4 right-4 md:left-8 md:right-8 h-80 rounded-3xl",
          "border border-white/10 bg-background/40 backdrop-blur-2xl shadow-2xl flex flex-col overflow-hidden ring-1 ring-inset ring-white/5"
        )}
      >
        {/* Mock Header */}
        <div className="h-12 border-b border-border/50 flex items-center px-4 gap-2 bg-muted/20">
          <div className="flex gap-1.5">
            <div className="size-2.5 rounded-full bg-destructive/50" />
            <div className="size-2.5 rounded-full bg-amber-500/50" />
            <div className="size-2.5 rounded-full bg-emerald-500/50" />
          </div>
          <div className="ml-4 h-4 w-32 bg-muted rounded-full" />
        </div>
        {/* Mock Content */}
        <div className="flex-1 p-6 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <PlayCircle className="size-6 text-primary" />
            </div>
            <div>
              <div className="h-5 w-48 bg-foreground/10 rounded-md mb-2" />
              <div className="h-3 w-32 bg-muted-foreground/20 rounded-md" />
            </div>
          </div>
          <div className="flex-1 border border-border/50 rounded-xl bg-muted/10 mt-2 p-4 flex flex-col gap-3">
             <div className="h-3 w-full bg-foreground/5 rounded-md" />
             <div className="h-3 w-5/6 bg-foreground/5 rounded-md" />
             <div className="h-3 w-4/6 bg-foreground/5 rounded-md" />
          </div>
        </div>
      </motion.div>

      {/* Floating Card 1: Certificate Preview */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className={cn(
          "absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 w-48 p-4 rounded-2xl",
          "border border-white/10 bg-background/60 backdrop-blur-2xl shadow-2xl shadow-black/10 ring-1 ring-inset ring-white/10"
        )}
      >
        <div className="flex items-center gap-3 mb-2">
          <Award className="size-5 text-amber-500" />
          <span className="text-xs font-semibold">Certificate</span>
        </div>
        <div className="h-2 w-full bg-muted rounded-full mb-1" />
        <div className="h-2 w-2/3 bg-muted rounded-full" />
      </motion.div>

      {/* Floating Card 2: Progress Widget */}
      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className={cn(
          "absolute top-20 -right-4 md:-right-12 w-52 p-4 rounded-2xl",
          "border border-white/10 bg-background/60 backdrop-blur-2xl shadow-2xl shadow-black/10 ring-1 ring-inset ring-white/10"
        )}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium">Course Progress</span>
          <BarChart3 className="size-4 text-primary" />
        </div>
        <div className="w-full bg-muted rounded-full h-1.5 mb-2">
          <div className="bg-primary h-1.5 rounded-full w-[70%]" />
        </div>
        <div className="flex justify-between text-[10px] text-muted-foreground">
          <span>Module 4 of 6</span>
          <span>70%</span>
        </div>
      </motion.div>

      {/* Floating Card 3: Live Sessions */}
      <motion.div
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className={cn(
          "absolute bottom-20 -right-2 md:-right-6 px-4 py-3 rounded-full flex items-center gap-2",
          "border border-white/10 bg-background/70 backdrop-blur-xl shadow-xl ring-1 ring-inset ring-white/10"
        )}
      >
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </div>
        <span className="text-xs font-medium">54 Live Sessions</span>
      </motion.div>
    </div>
  );
}
