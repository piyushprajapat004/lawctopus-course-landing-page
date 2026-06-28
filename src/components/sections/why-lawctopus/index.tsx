"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Shield, Users, Building2, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

const reasons = [
  {
    title: "14+ Years of Trust",
    description: "Since 2010, Lawctopus has been India's most trusted platform for law students. Over 2 million annual visitors rely on our resources.",
    icon: Shield,
  },
  {
    title: "20,000+ Alumni Network",
    description: "Join an elite community of graduates who are now working in top-tier law firms, in-house roles, and successful independent practices.",
    icon: Users,
  },
  {
    title: "Industry-Vetted Curriculum",
    description: "Our courses are co-created with managing partners and senior counsels to ensure you learn exactly what the industry demands today.",
    icon: Building2,
  },
  {
    title: "Proven Placement Support",
    description: "We don't just teach; we help you get hired. From Upwork profile optimization to direct internship notifications.",
    icon: Trophy,
  }
];

export function WhyLawctopusSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-foreground mb-4">
            Why Choose Lawctopus?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are not just another ed-tech platform. We are the backbone of legal education and career advancement in India.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={cn(
                  "group relative rounded-[2rem] border border-border/40 bg-card/50 p-8 shadow-sm flex flex-col items-center text-center",
                  "hover:bg-card hover:shadow-xl hover:-translate-y-1 hover:border-border/80 transition-all duration-500"
                )}
              >
                <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 group-hover:scale-110 group-hover:shadow-md transition-all duration-500 text-primary">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
