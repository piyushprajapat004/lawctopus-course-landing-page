"use client";

import { motion } from "framer-motion";
import { testimonialsContent } from "@/content/testimonials";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Star, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  if (testimonialsContent.length === 0) return null;

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6">
            <MessageSquare className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-foreground mb-4">
            Trusted by Ambitious Legal Professionals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our alumni have to say about the impact of Lawctopus Law School courses on their careers.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        >
          {testimonialsContent.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={cn(
                "group relative rounded-[2rem] border border-border/40 bg-card/50 p-8 shadow-sm flex flex-col",
                "hover:bg-card hover:shadow-xl hover:-translate-y-1 hover:border-border/80 transition-all duration-500",
                index === 1 ? "md:translate-y-6" : "" // Masonry effect
              )}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <div className="text-xs font-semibold px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                  {testimonial.source}
                </div>
              </div>
              
              <p className="text-foreground leading-relaxed flex-grow font-medium text-[15px] italic mb-8">
                &quot;{testimonial.content}&quot;
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary font-bold border border-primary/20">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.designation}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
