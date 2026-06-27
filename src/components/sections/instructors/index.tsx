"use client";

import { motion } from "framer-motion";
import { instructorsContent } from "@/content/instructors";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function InstructorProfilesSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/70">
            {instructorsContent.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
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
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl ring-1 ring-inset ring-white/10 transition-all hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="flex flex-col items-center text-center">
                {/* Premium Avatar Placeholder */}
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 text-xl font-bold text-primary shadow-inner group-hover:scale-105 transition-transform duration-300">
                  {instructor.initials}
                </div>
                
                <h3 className="text-lg font-bold tracking-tight text-foreground mb-1">
                  {instructor.name}
                </h3>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                  {instructor.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {instructor.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
