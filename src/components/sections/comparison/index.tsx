"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { comparisonContent } from "@/content/comparison";
import { CheckCircle2, XCircle, MinusCircle } from "lucide-react";

export function ComparisonSection() {
  if (!comparisonContent.features.length) return null;

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-foreground mb-4">
            {comparisonContent.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {comparisonContent.subtitle}
          </p>
        </motion.div>

        {/* Desktop Table */}
        <div className="hidden lg:block max-w-6xl mx-auto overflow-hidden rounded-[2.5rem] border border-border/40 bg-card/30 shadow-sm backdrop-blur-sm">
          <div className="grid grid-cols-4 bg-muted/30 border-b border-border/40">
            <div className="p-8 font-semibold text-foreground/80">Features</div>
            <div className="p-8 font-semibold text-center text-foreground/80 border-l border-border/20">Internships</div>
            <div className="p-8 font-semibold text-center text-foreground/80 border-l border-border/20">Summer Schools</div>
            <div className="p-8 font-bold text-center text-primary bg-primary/5 border-l border-primary/20">
              Lawctopus Program
            </div>
          </div>
          
          <div className="divide-y divide-border/20">
            {comparisonContent.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-4 hover:bg-muted/10 transition-colors"
              >
                <div className="p-6 font-medium text-foreground flex items-center">{feature.name}</div>
                <div className="p-6 text-sm text-muted-foreground text-center border-l border-border/20 flex flex-col items-center justify-center gap-2">
                  <MinusCircle className="w-5 h-5 text-muted-foreground/50" />
                  <span>{feature.internship}</span>
                </div>
                <div className="p-6 text-sm text-muted-foreground text-center border-l border-border/20 flex flex-col items-center justify-center gap-2">
                  <XCircle className="w-5 h-5 text-destructive/50" />
                  <span>{feature.summerSchool}</span>
                </div>
                <div className="p-6 text-sm font-semibold text-foreground text-center bg-primary/5 border-l border-primary/20 flex flex-col items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>{feature.lawctopus}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Stacked Cards */}
        <div className="lg:hidden grid gap-8 max-w-2xl mx-auto">
          {comparisonContent.features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-3xl border border-border/40 bg-card p-6 shadow-sm flex flex-col gap-4"
            >
              <h3 className="text-lg font-bold text-foreground border-b border-border/40 pb-4 mb-2">
                {feature.name}
              </h3>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm gap-1 sm:gap-0">
                <span className="text-muted-foreground">Internships</span>
                <span className="text-foreground/80 font-medium sm:text-right">{feature.internship}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm gap-1 sm:gap-0">
                <span className="text-muted-foreground">Summer Schools</span>
                <span className="text-foreground/80 font-medium sm:text-right">{feature.summerSchool}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm p-4 bg-primary/5 rounded-xl border border-primary/10 mt-2 gap-2 sm:gap-0">
                <span className="font-semibold text-foreground">Lawctopus Program</span>
                <span className="text-primary font-bold sm:text-right flex items-center sm:justify-end gap-2">
                  {feature.lawctopus}
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
