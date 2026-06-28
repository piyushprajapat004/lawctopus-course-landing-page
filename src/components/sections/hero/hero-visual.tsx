"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Play, CheckCircle2, Award, Star } from "lucide-react";
import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-2xl mx-auto h-[500px] md:h-[600px] perspective-1000">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] mix-blend-screen" />

      {/* Main Dashboard Mockup */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className={cn(
          "absolute top-[10%] left-[5%] md:left-[10%] w-[85%] md:w-[80%] rounded-2xl",
          "bg-card/80 backdrop-blur-2xl border border-border/50 shadow-2xl overflow-hidden"
        )}
      >
        {/* Browser Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-muted/30">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="mx-auto bg-background/50 rounded-md px-3 py-1 text-[10px] text-muted-foreground font-mono flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-primary/20 flex items-center justify-center">🔒</span>
            lawctopuslawschool.com/learn
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-5 md:p-6 flex flex-col gap-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-bold text-foreground">Advanced Contract Drafting</h3>
              <p className="text-xs text-muted-foreground">Module 4: Intellectual Property</p>
            </div>
            <div className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-wider uppercase border border-primary/20">
              65% Completed
            </div>
          </div>
          
          <div className="w-full bg-muted/50 rounded-full h-1.5 overflow-hidden">
            <div className="bg-primary h-full w-[65%] rounded-full shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]" />
          </div>

          <div className="grid grid-cols-2 gap-3 mt-2">
            {[
              { title: "Trademark Licensing", duration: "45 mins", active: true },
              { title: "Patent Assignment", duration: "60 mins", active: false },
              { title: "Live Draft Review", duration: "90 mins", active: false }
            ].map((lesson, i) => (
              <div key={i} className={cn("p-3 rounded-xl border flex items-center gap-3", lesson.active ? "bg-primary/5 border-primary/30" : "bg-card border-border/40")}>
                <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0", lesson.active ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-muted text-muted-foreground")}>
                  {lesson.active ? <Play className="w-4 h-4 fill-current ml-0.5" /> : <CheckCircle2 className="w-4 h-4" />}
                </div>
                <div>
                  <p className={cn("text-xs font-semibold", lesson.active ? "text-foreground" : "text-muted-foreground")}>{lesson.title}</p>
                  <p className="text-[10px] text-muted-foreground">{lesson.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating Certificate */}
      <motion.div
        animate={{ 
          y: [-15, 15, -15],
          rotate: [10, 15, 10]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className={cn(
          "absolute -bottom-[5%] -right-[5%] md:right-0 w-[60%] md:w-[50%] p-1 rounded-xl",
          "bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-600 shadow-2xl z-20"
        )}
      >
        <div className="bg-card w-full h-full rounded-lg p-4 md:p-5 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
          <Award className="w-10 h-10 text-amber-500 mb-2" />
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Certificate of Excellence</h4>
          <h3 className="text-sm md:text-base font-bold text-foreground font-serif leading-tight">Mastering Contract Drafting</h3>
          <div className="w-12 h-px bg-border my-2" />
          <p className="text-[8px] text-muted-foreground">Issued by Lawctopus Law School</p>
        </div>
      </motion.div>

      {/* Floating Review/Social Proof */}
      <motion.div
        animate={{ 
          y: [15, -15, 15],
          rotate: [-5, -10, -5]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className={cn(
          "absolute bottom-[15%] -left-[10%] md:left-0 w-[65%] md:w-[55%] p-4 rounded-2xl",
          "bg-card/90 backdrop-blur-xl border border-border/50 shadow-2xl z-30"
        )}
      >
        <div className="flex gap-3 items-start">
          <div className="w-10 h-10 rounded-full bg-primary/20 shrink-0 overflow-hidden relative">
            <Image src="https://cdn.lawctopus.com/wp-content/uploads/2024/06/profile-user.png" alt="Student" fill sizes="40px" className="object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />)}
            </div>
            <p className="text-xs text-foreground font-medium leading-snug">
              &quot;Landed my first Upwork client within 3 weeks of the course. The MSA templates are a lifesaver.&quot;
            </p>
            <p className="text-[10px] text-muted-foreground mt-1 font-medium">Verified Learner • Independent Freelancer</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
