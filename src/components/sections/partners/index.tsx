"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { partnersContent } from "@/content/partners";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function PartnersSection() {
  if (!partnersContent.partners.length) return null;

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground mb-4">
            {partnersContent.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {partnersContent.partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group relative p-8 md:p-10 rounded-[2rem] border border-border/40 bg-card/50 backdrop-blur-sm",
                "hover:bg-card hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              )}
            >
              <div className="mb-8">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
                  {partner.role}
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4 group-hover:text-primary transition-colors">
                  {partner.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {partner.description}
                </p>
              </div>
              
              <div className="mt-auto pt-6 border-t border-border/50">
                <Link
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Visit Official Website
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
