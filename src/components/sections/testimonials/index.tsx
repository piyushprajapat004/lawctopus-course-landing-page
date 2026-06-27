"use client";

import { testimonialsContent } from "@/content/testimonials";

export function TestimonialsSection() {
  if (testimonialsContent.length === 0) {
    return (
      <section className="relative py-24 overflow-hidden bg-background">
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="rounded-3xl border border-dashed border-white/20 bg-white/5 p-12 text-center backdrop-blur-sm">
            <h2 className="text-2xl font-bold tracking-tight text-muted-foreground mb-2">
              Student Testimonials
            </h2>
            <p className="text-sm text-muted-foreground/70">
              [TODO: Awaiting verified testimonials content to populate masonry grid / mobile carousel]
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Future implementation for masonry grid / mobile carousel goes here.
  return null;
}
