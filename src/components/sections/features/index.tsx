"use client";

import { motion } from "framer-motion";
import { 
  PenTool, 
  UserCheck, 
  TrendingUp, 
  Sparkles, 
  ShieldCheck, 
  Award,
  type LucideIcon 
} from "lucide-react";
import { featuresContent } from "@/content/features";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const IconMap: Record<string, LucideIcon> = {
  PenTool,
  UserCheck,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Award,
};

export function FeaturesSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/70">
            {featuresContent.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {featuresContent.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2 lg:gap-12"
        >
          {featuresContent.features.map((feature, index) => {
            const Icon = IconMap[feature.iconName];
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group flex flex-col sm:flex-row gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl ring-1 ring-inset ring-white/10 transition-all hover:bg-white/10 hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-transform duration-300">
                  {Icon && <Icon className="h-7 w-7" />}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
