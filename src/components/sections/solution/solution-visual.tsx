"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Scale } from "lucide-react";
import { cn } from "@/lib/utils";

export function SolutionVisual() {
  return (
    <div className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[500px] mt-16 perspective-1000">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-primary/20 rounded-full blur-[120px] scale-110 opacity-70 pointer-events-none" />

      {/* Main Backing Card (The Dashboard Shell) */}
      <motion.div
        initial={{ opacity: 0, rotateX: 15, y: 40 }}
        whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "absolute inset-x-0 bottom-0 top-12 md:top-24 rounded-t-[2.5rem] border border-white/10 ring-1 ring-inset ring-white/5",
          "bg-background/60 backdrop-blur-3xl shadow-2xl flex flex-col overflow-hidden"
        )}
      >
        <div className="h-14 border-b border-border/50 bg-muted/30 flex items-center px-6 gap-3">
          <div className="flex gap-2">
            <div className="size-3 rounded-full bg-destructive/60" />
            <div className="size-3 rounded-full bg-amber-500/60" />
            <div className="size-3 rounded-full bg-emerald-500/60" />
          </div>
          <div className="ml-4 flex gap-4 text-xs font-medium text-muted-foreground">
            <div className="px-3 py-1 bg-muted/50 rounded-md">Drafting Studio</div>
            <div className="px-3 py-1 hover:bg-muted/30 rounded-md transition-colors">Templates</div>
            <div className="px-3 py-1 hover:bg-muted/30 rounded-md transition-colors">Prism AI</div>
          </div>
        </div>
        
        {/* Fake Code/Text Lines */}
        <div className="flex-1 p-8 grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden">
          <div className="space-y-4">
            <div className="h-4 w-3/4 bg-foreground/10 rounded" />
            <div className="h-4 w-full bg-foreground/5 rounded" />
            <div className="h-4 w-5/6 bg-foreground/5 rounded" />
            <div className="h-4 w-full bg-foreground/5 rounded" />
            <div className="h-4 w-4/6 bg-foreground/5 rounded" />
          </div>
          <div className="hidden md:flex flex-col space-y-4 opacity-50">
            <div className="h-4 w-full bg-primary/10 rounded" />
            <div className="h-4 w-5/6 bg-primary/10 rounded" />
            <div className="h-4 w-full bg-primary/10 rounded" />
            <div className="h-4 w-3/4 bg-primary/10 rounded" />
          </div>
        </div>
      </motion.div>

      {/* Floating Card 1: Contract Output */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={cn(
          "absolute top-0 left-4 md:left-8 w-64 p-5 rounded-3xl",
          "border border-white/10 bg-background/80 backdrop-blur-2xl shadow-2xl shadow-black/5 flex flex-col gap-3 ring-1 ring-inset ring-white/10"
        )}
      >
        <div className="flex items-center gap-3 mb-2 border-b border-border/50 pb-3">
          <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Scale className="size-5 text-primary" />
          </div>
          <div>
            <h4 className="text-sm font-semibold">Commercial Lease</h4>
            <p className="text-[10px] text-muted-foreground">Generated successfully</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="size-4" />
          <span>Indemnity Clause Validated</span>
        </div>
      </motion.div>

      {/* Floating Card 2: AI Assistant */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: -20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={cn(
          "absolute top-8 md:top-4 right-4 md:right-8 w-72 p-6 rounded-3xl",
          "border border-white/10 bg-background/95 backdrop-blur-3xl shadow-2xl shadow-black/10 flex flex-col gap-3 z-10 ring-1 ring-inset ring-white/10"
        )}
      >
        <div className="flex items-center gap-2 text-primary mb-1">
          <Sparkles className="size-4" />
          <span className="text-xs font-bold uppercase tracking-wider">Prism AI Suggestion</span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground border-l-2 border-primary pl-3">
          &quot;Consider adding a Force Majeure clause here to protect against unforeseen disruptions.&quot;
        </p>
        <div className="flex gap-2 mt-2">
          <div className="px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-medium cursor-pointer">
            Accept
          </div>
          <div className="px-3 py-1.5 rounded-md bg-muted text-muted-foreground text-xs font-medium cursor-pointer">
            Dismiss
          </div>
        </div>
      </motion.div>
    </div>
  );
}
