"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const programs = [
  {
    title: "Corporate Law Programs",
    description: "Master M&A, investment structuring, and corporate compliance for in-house roles.",
    category: "Corporate",
    link: "https://www.lawctopus.com/lawctopus-law-school/"
  },
  {
    title: "Litigation & Dispute Resolution",
    description: "Learn advanced drafting of civil, criminal, and commercial pleadings.",
    category: "Litigation",
    link: "https://www.lawctopus.com/lawctopus-law-school/"
  },
  {
    title: "Intellectual Property Rights",
    description: "Specialized training in patent, trademark, and copyright filing and prosecution.",
    category: "IPR",
    link: "https://www.lawctopus.com/lawctopus-law-school/"
  }
];

export function ExploreProgramsSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-muted/20 border-t border-border/40">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-primary/5 rounded-2xl mb-4 border border-primary/10">
            <BookOpen className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground mb-4">
            Explore Other Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover more professional legal training programs from Lawctopus Law School.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto"
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={cn(
                "group relative rounded-3xl border border-border/40 bg-card/40 p-6 md:p-8 flex flex-col transition-all duration-500",
                "hover:bg-card hover:shadow-xl hover:-translate-y-1 hover:border-border/80"
              )}
            >
              <div className="mb-6">
                <span className="inline-flex items-center rounded-full bg-muted border border-border/50 px-3 py-1 text-[10px] font-semibold tracking-widest uppercase text-muted-foreground shadow-sm">
                  {program.category}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {program.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-8">
                {program.description}
              </p>
              
              <Link
                href={program.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "w-full rounded-xl group/btn overflow-hidden transition-all duration-300 border-border/50 hover:bg-primary/5 hover:text-primary hover:border-primary/30"
                )}
              >
                <span className="flex items-center justify-center font-medium">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
