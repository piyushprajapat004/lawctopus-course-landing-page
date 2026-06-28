"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { supportContent } from "@/content/support";
import { PhoneCall, Phone, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const iconMap = {
  PhoneCall,
  Phone,
  MessageCircle,
  MapPin,
};

export function SupportSection() {
  if (!supportContent.methods.length) return null;

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
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground mb-4">
            {supportContent.title}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {supportContent.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {supportContent.methods.map((method, index) => {
            const Icon = iconMap[method.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "group relative p-8 rounded-3xl border border-border/40 bg-card/50 text-center flex flex-col items-center",
                  "hover:bg-card hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 hover:border-primary/20 transition-all duration-300"
                )}
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {Icon && <Icon className="w-5 h-5" />}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
                <p className="font-bold text-lg text-foreground tracking-tight mb-1">{method.detail}</p>
                <p className="text-sm text-muted-foreground mb-6">{method.subDetail}</p>
                
                <Link
                  href={method.action}
                  target={method.action.startsWith("http") ? "_blank" : undefined}
                  rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-auto inline-flex items-center text-xs font-semibold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors"
                >
                  Connect
                  <ArrowUpRight className="ml-1 w-3 h-3" />
                </Link>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-muted/50 text-sm font-medium text-muted-foreground border border-border/40">
            {supportContent.officeHours}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
