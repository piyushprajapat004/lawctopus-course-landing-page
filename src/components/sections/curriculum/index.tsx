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
import { PlayCircle, FileText, CheckCircle2 } from "lucide-react";

export function CurriculumSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/70">
            {curriculumContent.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {curriculumContent.subtitle}
          </p>
        </motion.div>

        {/* Desktop Sticky Timeline */}
        <div ref={containerRef} className="hidden md:flex gap-12 max-w-6xl mx-auto">
          {/* Left Column - Sticky Timeline Line */}
          <div className="w-1/3 relative">
            <div className="sticky top-1/3 space-y-8 pb-32 pt-8">
              {/* Progress Line Background */}
              <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-white/10" />
              {/* Active Progress Line */}
              <motion.div 
                className="absolute left-[11px] top-8 w-0.5 bg-primary origin-top"
                style={{ scaleY: scrollYProgress }}
              />

              {curriculumContent.modules.map((module, i) => (
                <div key={i} className="relative flex items-center pl-10 h-16">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 w-6 h-6 rounded-full border-4 border-background bg-muted-foreground z-10" />
                  <div className="text-xl font-bold tracking-tight text-foreground/50 transition-colors">
                    {module.month}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="w-2/3 pb-32 pt-8">
            <div className="space-y-32">
              {curriculumContent.modules.map((module, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-20% 0px -20% 0px" }}
                  transition={{ duration: 0.5 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl ring-1 ring-inset ring-white/10"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {module.title}
                  </h3>
                  <div className="flex gap-4 mb-8">
                    <span className="inline-flex items-center text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                      <PlayCircle className="w-4 h-4 mr-2" />
                      {module.liveSessions} Live Sessions
                    </span>
                    <span className="inline-flex items-center text-sm text-muted-foreground bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      <FileText className="w-4 h-4 mr-2" />
                      {module.lectures} Modules
                    </span>
                  </div>

                  <ul className="space-y-4">
                    {module.topics.map((topic, j) => (
                      <li key={j} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-primary/70 mr-3 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">
                          {topic}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden max-w-2xl mx-auto">
          <Accordion className="w-full space-y-4">
            {curriculumContent.modules.map((module, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`} 
                className="border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl px-6 data-[state=open]:shadow-2xl data-[state=open]:ring-1 data-[state=open]:ring-white/10 transition-all"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex flex-col items-start text-left gap-2">
                    <span className="text-sm font-semibold tracking-wider text-primary uppercase">
                      {module.month}
                    </span>
                    <span className="text-lg font-bold">
                      {module.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="flex gap-3 mb-6 flex-wrap">
                    <span className="inline-flex items-center text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                      <PlayCircle className="w-3.5 h-3.5 mr-1.5" />
                      {module.liveSessions} Live
                    </span>
                    <span className="inline-flex items-center text-xs text-muted-foreground bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      <FileText className="w-3.5 h-3.5 mr-1.5" />
                      {module.lectures} Modules
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {module.topics.map((topic, j) => (
                      <li key={j} className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-primary/70 mr-3 shrink-0 mt-0.5" />
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
