"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function TrustCTA({ 
  title = "Ready to Build Your Legal Career?", 
  subtitle = "Join 20,000+ learners advancing their careers through Lawctopus." 
}: { 
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="py-16 md:py-24 border-y border-border/30 bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto"
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tighter text-foreground mb-2">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              {subtitle}
            </p>
          </div>
          
          <div className="shrink-0">
            <Link
              href="#lead-form"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full px-8 group relative overflow-hidden transition-all duration-500 shadow-sm hover:shadow-md"
              )}
            >
              <span className="relative z-10 flex items-center font-medium">
                Enroll Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
