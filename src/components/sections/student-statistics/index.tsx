"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring } from "framer-motion";
import { Users, Star, Video, FileText } from "lucide-react";
import { statsContent } from "@/content/stats";
import { cn } from "@/lib/utils";

// Map string icon names to Lucide components
const iconMap = {
  Users,
  Star,
  Video,
  FileText,
};

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");
  
  const springValue = useSpring(0, {
    bounce: 0,
    duration: 2000,
  });

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [inView, springValue, value]);

  useEffect(() => {
    const isDecimal = value % 1 !== 0;
    
    return springValue.on("change", (latest) => {
      if (isDecimal) {
        setDisplayValue(latest.toFixed(1));
      } else {
        setDisplayValue(Intl.NumberFormat("en-US").format(Math.floor(latest)));
      }
    });
  }, [springValue, value]);

  return <span ref={ref}>{displayValue}</span>;
}

export function StudentStatistics() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsContent.stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "relative flex flex-col items-center justify-center p-8 md:p-10 text-center group h-full w-full",
                  "rounded-[2rem] border border-border/40 bg-card shadow-sm hover:shadow-xl hover:shadow-black/20 hover:border-border/80 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                )}
              >
                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative size-14 rounded-full bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-transform duration-500">
                  {IconComponent && <IconComponent className="size-6 text-primary" />}
                </div>
                
                <div className="relative text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-3 flex items-baseline justify-center">
                  <AnimatedCounter value={stat.value} />
                  {stat.suffix && <span className="text-2xl ml-1">{stat.suffix}</span>}
                </div>
                
                {stat.label === "Average Rating" && (
                  <div className="flex flex-col items-center mb-4 transition-all duration-300 group-hover:scale-[1.03] group-hover:brightness-110">
                    <div 
                      className="flex gap-1 mb-1.5" 
                      aria-hidden="true"
                    >
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="size-4 text-[#D4AF37] fill-[#D4AF37]/40 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] opacity-90" 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground tracking-[0.05em]">
                      Rated by 20,000+ learners
                    </span>
                    <span className="sr-only">Average rating: 93% based on 20,000+ learners.</span>
                  </div>
                )}
                
                <p className={cn(
                  "text-sm font-medium text-muted-foreground uppercase tracking-wider",
                  stat.label === "Average Rating" ? "mt-1" : ""
                )}>
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
