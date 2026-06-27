"use client";

import { faqContent } from "@/content/faq";


export function FAQSection() {
  if (faqContent.length === 0) {
    return (
      <section className="relative py-24 overflow-hidden bg-background">
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="rounded-3xl border border-dashed border-white/20 bg-white/5 p-12 text-center backdrop-blur-sm max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight text-muted-foreground mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-muted-foreground/70">
              [TODO: Awaiting verified FAQ content to populate accordion]
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Future implementation for Accordion goes here.
  return null;
}
