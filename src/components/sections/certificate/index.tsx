"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Award, ShieldCheck, CheckCircle2 } from "lucide-react";

export function CertificateSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-muted/30 border-y border-border/40">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          {/* Content Left */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-2">
              <Award className="w-6 h-6 text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-foreground">
              Official Certification
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Upon successful completion, you will receive an official Lawctopus Law School certificate, validating your expertise in drafting 24+ complex commercial contracts.
            </p>
            
            <ul className="space-y-4 text-left inline-block lg:block mx-auto">
              {[
                "Recognized by top law firms & corporations",
                "Verifiable credential for your LinkedIn profile",
                "Proof of practical drafting expertise",
                "Enhances your Upwork & freelancing portfolio"
              ].map((benefit, i) => (
                <li key={i} className="flex items-center text-foreground/80">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Certificate Visual Right */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-md perspective-1000"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl -z-10 rounded-full" />
            
            <div className="relative bg-card border border-border/50 p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden group transform transition-transform duration-700 hover:rotate-y-2 hover:rotate-x-2">
              {/* Inner border */}
              <div className="absolute inset-4 border-2 border-primary/20 rounded-xl" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-foreground/50" />
                </div>
                
                <h3 className="font-serif text-2xl tracking-widest uppercase text-foreground/80 mb-2">
                  Certificate
                </h3>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
                  of Completion
                </p>
                
                <div className="w-12 h-px bg-border mb-8" />
                
                <p className="text-sm text-muted-foreground mb-2">This is to certify that</p>

                <div className="mb-4 w-full">
                  <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-1 font-signature tracking-wider text-muted-foreground/50">
                    Your Name
                  </h4>
                  <div className="w-48 md:w-64 h-[2px] bg-primary/30 mx-auto" />
                </div>
                
                <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-[250px] mx-auto mb-8">
                  has successfully completed the 6-Month Expert-Level Course on Mastering Contract Drafting and Freelancing.
                </p>
                
                <div className="flex justify-between w-full items-end mt-4 px-4">
                  <div className="text-center">
                    <div className="w-20 h-px bg-border mb-2" />
                    <span className="text-[10px] uppercase text-muted-foreground">Date</span>
                  </div>
                  
                  <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-primary/50" />
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-px bg-border mb-2" />
                    <span className="text-[10px] uppercase text-muted-foreground">Director</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* MBG Badge floating */}
            <div className="absolute -bottom-6 -right-6 md:-right-12 bg-background border border-border shadow-xl p-4 rounded-2xl flex items-center gap-4 z-20 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-primary/10 p-3 rounded-xl text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-sm">100% Refund</p>
                <p className="text-xs text-muted-foreground">Money-Back Guarantee</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
