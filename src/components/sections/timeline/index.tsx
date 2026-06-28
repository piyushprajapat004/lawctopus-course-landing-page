"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { CheckCircle2, Clock, CalendarDays, Rocket, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const timelineSteps = [
  {
    title: "Enrollment & Orientation",
    description: "Get instant access to the learning portal. Attend the live orientation session to set your goals and understand the 6-month roadmap.",
    icon: Clock,
  },
  {
    title: "Months 1-2: Core Drafting Skills",
    description: "Learn the anatomy of contracts, essential clauses, and execution formalities. Draft your first Sale Deed and get personalized feedback.",
    icon: CalendarDays,
  },
  {
    title: "Months 3-4: Advanced Agreements",
    description: "Master International Agreements, NDAs, and Intellectual Property Agreements. Participate in live negotiation simulations.",
    icon: CalendarDays,
  },
  {
    title: "Months 5-6: Commercial & Real Estate",
    description: "Draft complex Business Transfer Agreements, Share Purchase Agreements, and Commercial Leases.",
    icon: CalendarDays,
  },
  {
    title: "Freelancing & Career Prep",
    description: "Parallel monthly sessions on building your Upwork profile, drafting winning proposals, and optimizing your LinkedIn presence.",
    icon: Rocket,
  },
  {
    title: "Graduation & First Client",
    description: "Receive your Lawctopus Certificate of Excellence. Use your 10 reviewed contracts as a portfolio to land your first paid gig.",
    icon: Award,
  }
];

export function TimelineSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center mb-20"
        >
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6">
            <CheckCircle2 className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-foreground mb-4">
            Your 6-Month Roadmap to Mastery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured, step-by-step journey from learning the fundamentals to landing your first freelancing client.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/50 md:-translate-x-1/2" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12"
          >
            {timelineSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative flex items-center justify-between md:justify-center w-full"
                >
                  {/* Left Content (Hidden on Mobile, alternates on Desktop) */}
                  <div className={cn("hidden md:block w-5/12", isEven ? "text-right pr-12" : "opacity-0")} />

                  {/* Center Node */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-card border-2 border-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)] md:-translate-x-1/2 flex items-center justify-center z-10">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>

                  {/* Right Content / Main Content */}
                  <div className={cn("w-full pl-12 md:pl-0 md:w-5/12", !isEven && "md:pl-12", isEven && "md:pr-12 md:text-right md:w-5/12 md:-translate-x-full md:absolute md:left-1/2")}>
                    <div className="bg-card/50 backdrop-blur-sm border border-border/40 p-6 rounded-2xl hover:bg-card hover:border-border/80 transition-all duration-300 shadow-sm hover:shadow-md">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
