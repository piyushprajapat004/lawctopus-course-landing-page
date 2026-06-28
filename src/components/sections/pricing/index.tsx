"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { pricingContent } from "@/content/pricing";
import { fadeInUp } from "@/lib/animations";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 overflow-hidden bg-background scroll-mt-32">
      {/* Dramatic Spotlight Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[conic-gradient(from_180deg_at_50%_0%,transparent_0deg,rgba(var(--primary-rgb),0.05)_120deg,rgba(var(--primary-rgb),0.15)_180deg,rgba(var(--primary-rgb),0.05)_240deg,transparent_360deg)] pointer-events-none -z-10 opacity-70" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[conic-gradient(from_180deg_at_50%_0%,transparent_0deg,rgba(255,255,255,0.02)_120deg,rgba(255,255,255,0.05)_180deg,rgba(255,255,255,0.02)_240deg,transparent_360deg)] mix-blend-screen pointer-events-none -z-10" />
      
      {/* Grounding line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-foreground leading-[1.1] mb-6">
            {pricingContent.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            {pricingContent.subtitle}
          </p>
        </motion.div>

        <div className="mx-auto max-w-[520px]">
          {pricingContent.tiers.map((tier, index) => {
            const isPopular = tier.highlight;
            
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={cn(
                  "relative rounded-[2.5rem] p-10 md:p-14 flex flex-col items-center text-center transition-all duration-700",
                  "bg-card border-2 border-primary/40 shadow-[0_20px_80px_-20px_rgba(var(--primary-rgb),0.3)] z-10"
                )}
              >
                {/* Highlight Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/30 px-5 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary shadow-sm backdrop-blur-md">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-10 w-full">
                  <h3 className="text-2xl font-medium text-foreground mb-4">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-light text-foreground">₹</span>
                    <span className="text-7xl font-medium tracking-tighter text-foreground">
                      {tier.price}
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-medium text-muted-foreground uppercase tracking-widest">
                    {tier.duration} Access
                  </p>
                </div>

                <ul className="mb-12 space-y-5 flex-1 w-full max-w-sm mx-auto text-left">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-4 mt-1.5 size-1.5 rounded-full bg-primary shrink-0 opacity-80" />
                      <span className="text-muted-foreground font-light leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-6 w-full mt-auto">
                  <Link
                    href={tier.ctaLink}
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "w-full sm:max-w-md mx-auto rounded-2xl h-14 group relative overflow-hidden transition-all duration-500",
                      "shadow-[0_8px_30px_rgba(var(--primary-rgb),0.25)] hover:shadow-[0_8px_40px_rgba(var(--primary-rgb),0.4)] hover:-translate-y-0.5"
                    )}
                  >
                    <span className="relative z-10 flex items-center justify-center font-medium tracking-wide">
                      {tier.ctaText}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dedicated Money-Back Guarantee Banner */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl mt-16 relative rounded-[2rem] p-8 md:p-12 overflow-hidden bg-card/40 border border-primary/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left">
            <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/30 shadow-inner">
              <ShieldCheck className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">100% Money-Back Guarantee</h3>
              <p className="text-muted-foreground leading-relaxed">
                We truly believe our courses will enhance your legal skills. If you complete the course sincerely and feel it didn&apos;t add value, we&apos;ll refund 100% of your fee within 10 days of completion. No questions asked.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
