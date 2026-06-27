"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { pricingContent } from "@/content/pricing";
import { fadeInUp } from "@/lib/animations";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function PricingSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Mesh Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/70">
            {pricingContent.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {pricingContent.subtitle}
          </p>
        </motion.div>

        <div className="mx-auto max-w-md">
          {pricingContent.tiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative rounded-3xl border border-primary/20 bg-white/5 p-8 shadow-2xl shadow-primary/10 backdrop-blur-xl ring-1 ring-inset ring-white/10"
            >
              {/* Highlight Badge */}
              {tier.highlight && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-xs font-semibold tracking-wide text-primary-foreground shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold text-foreground">₹</span>
                  <span className="text-5xl font-black tracking-tighter text-foreground">
                    {tier.price}
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium text-primary uppercase tracking-wider">
                  {tier.duration} Access
                </p>
              </div>

              <ul className="mb-8 space-y-4">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="mr-3 h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <Link
                  href={tier.ctaLink}
                  className={buttonVariants({
                    size: "lg",
                    className: "w-full rounded-2xl group shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)] transition-all",
                  })}
                >
                  {tier.ctaText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Secure Payment. 100% Money-Back Guarantee.</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
