"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { curriculumContent } from "@/content/curriculum";
import { fadeInUp } from "@/lib/animations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlayCircle, FileText, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function CurriculumSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-background overflow-hidden border-y border-border/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center mb-12 md:mb-16 lg:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-foreground mb-4">
            {curriculumContent.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {curriculumContent.subtitle}
          </p>
        </motion.div>

        {/* Desktop Sticky Timeline */}
        <div ref={containerRef} className="hidden lg:flex gap-16 max-w-6xl mx-auto">
          {/* Left Column - Sticky Timeline Line */}
          <div className="w-1/3 relative">
            <div className="sticky top-1/3 space-y-12 pb-32 pt-8">
              {/* Progress Line Background */}
              <div className="absolute left-[11px] top-8 bottom-0 w-[2px] bg-border/50" />
              {/* Active Progress Line */}
              <motion.div 
                className="absolute left-[11px] top-8 w-[2px] bg-primary origin-top"
                style={{ scaleY: scrollYProgress }}
              />

              {curriculumContent.modules.map((module, i) => (
                <div key={i} className="relative flex items-center pl-12 h-12">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 w-6 h-6 rounded-full border-4 border-background bg-muted-foreground transition-colors duration-500 z-10 hover:bg-primary" />
                  <div className="text-2xl font-bold tracking-tight text-foreground/40 hover:text-foreground transition-colors duration-300">
                    {module.month}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="w-2/3 pb-32 pt-8">
            <div className="space-y-24">
              {curriculumContent.modules.map((module, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-20% 0px -20% 0px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative"
                >
                  {/* Subtle connection line to the left timeline visually */}
                  <div className="absolute -left-16 top-12 w-16 h-px bg-border/50 hidden xl:block" />
                  
                  <div className="rounded-[2.5rem] border border-border/40 bg-card/40 p-10 shadow-sm backdrop-blur-md hover:shadow-xl hover:bg-card/80 transition-all duration-500">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                      {module.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 mb-10 pb-6 border-b border-border/40">
                      <span className="inline-flex items-center text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        {module.liveSessions} Live Sessions
                      </span>
                      <span className="inline-flex items-center text-sm font-medium text-muted-foreground bg-muted/50 px-4 py-2 rounded-full border border-border/40">
                        <FileText className="w-4 h-4 mr-2" />
                        {module.lectures} Modules
                      </span>
                    </div>

                    <ul className="space-y-6">
                      {module.topics.map((topic, j) => (
                        <li key={j} className="flex items-start group">
                          <div className="mt-1 mr-4 flex-shrink-0 w-6 h-6 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
                            <ArrowDown className="w-3 h-3 text-primary -rotate-45" />
                          </div>
                          <span className="text-muted-foreground text-lg leading-relaxed group-hover:text-foreground transition-colors">
                            {topic}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden max-w-2xl mx-auto">
          <Accordion className="w-full space-y-4">
            {curriculumContent.modules.map((module, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`} 
                className={cn(
                  "border border-border/40 rounded-3xl bg-card/40 backdrop-blur-sm px-6 transition-all duration-300",
                  "data-[state=open]:bg-card data-[state=open]:shadow-lg data-[state=open]:border-primary/20"
                )}
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex flex-col items-start text-left gap-2">
                    <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                      {module.month}
                    </span>
                    <span className="text-xl font-bold tracking-tight">
                      {module.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-8 pt-2">
                  <div className="flex gap-3 mb-8 flex-wrap border-b border-border/40 pb-6">
                    <span className="inline-flex items-center text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                      <PlayCircle className="w-3.5 h-3.5 mr-1.5" />
                      {module.liveSessions} Live
                    </span>
                    <span className="inline-flex items-center text-xs font-medium text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full border border-border/40">
                      <FileText className="w-3.5 h-3.5 mr-1.5" />
                      {module.lectures} Modules
                    </span>
                  </div>
                  <ul className="space-y-4">
                    {module.topics.map((topic, j) => (
                      <li key={j} className="flex items-start">
                        <div className="mt-0.5 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10">
                          <ArrowDown className="w-2.5 h-2.5 text-primary -rotate-45" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {topic}
                        </span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
