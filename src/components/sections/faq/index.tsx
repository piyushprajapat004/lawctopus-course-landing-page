"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqContent } from "@/content/faq";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { whatsappConfig } from "@/content/whatsapp";
import { fadeInUp } from "@/lib/animations";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (faqContent.length === 0) return null;

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden bg-background scroll-mt-32">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about the program.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqContent.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "border border-border/40 rounded-2xl overflow-hidden transition-colors duration-300",
                  isOpen ? "bg-card shadow-sm border-primary/20" : "bg-transparent hover:bg-card/50"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                >
                  <span className="font-semibold text-lg text-foreground pr-8">
                    {faq.question}
                  </span>
                  <div className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                    isOpen ? "bg-primary text-primary-foreground rotate-180" : "bg-muted text-muted-foreground"
                  )}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* WhatsApp CTA */}
        {whatsappConfig.url && (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 max-w-3xl mx-auto text-center p-8 rounded-3xl border border-border/40 bg-card/50"
          >
            <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">Chat with our admission counselors on WhatsApp.</p>
            <a
              href={whatsappConfig.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#20bd5a] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" /><path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" /><path d="M9 14a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0v1Z" /><path d="M14 14a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0v1Z" /><path d="M8.5 12h7" /></svg>
              Chat on WhatsApp
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
