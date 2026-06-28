"use client";

import { motion } from "framer-motion";
import { instructorsContent } from "@/content/instructors";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";
import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

export function InstructorProfilesSection() {
  return (
    <section id="instructors" className="relative py-24 md:py-32 overflow-hidden bg-background scroll-mt-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6">
            <Briefcase className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-foreground mb-4">
            {instructorsContent.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {instructorsContent.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {instructorsContent.instructors.map((instructor, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={cn(
                "group relative rounded-[2rem] border border-border/40 bg-card/50 p-8",
                "hover:bg-card hover:shadow-xl hover:-translate-y-1 hover:border-border/80 transition-all duration-500 flex flex-col h-full"
              )}
            >
              <div className="flex flex-col h-full">
                {/* Premium Avatar */}
                {instructor.image ? (
                  <div className="mb-6 relative h-16 w-16 overflow-hidden rounded-2xl border border-border/50 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-500">
                    <Image
                      src={instructor.image}
                      alt={instructor.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 text-xl font-bold text-primary shadow-inner group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    {instructor.initials}
                  </div>
                )}
                
                <h3 className="text-xl font-bold tracking-tight text-foreground mb-1 group-hover:text-primary transition-colors">
                  {instructor.name}
                </h3>
                <p className="text-xs font-semibold text-primary/80 uppercase tracking-wider mb-4 pb-4 border-b border-border/40">
                  {instructor.role}
                </p>
                <div className="mt-auto">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                    {instructor.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
