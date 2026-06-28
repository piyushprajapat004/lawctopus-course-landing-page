"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { supabase } from "@/lib/supabase/client";
import { fadeInUp } from "@/lib/animations";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const leadFormSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
});

type LeadFormValues = z.infer<typeof leadFormSchema>;

export function LeadFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
  });

  const onSubmit = async (data: LeadFormValues) => {
    setIsSubmitting(true);
    setError(null);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10_000);

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { error: submitError } = await (supabase.from("lead_submissions") as any).insert(
        [
          {
            full_name: data.fullName,
            email: data.email,
            phone: data.phone,
          },
        ],
        { signal: controller.signal },
      );

      if (submitError) {
        throw new Error(submitError.message);
      }

      setIsSuccess(true);
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") {
        setError("Request timed out. Please check your connection and try again.");
      } else {
        const errMsg = err instanceof Error ? err.message : String(err);
        setError(errMsg || "Something went wrong. Please try again.");
      }
    } finally {
      clearTimeout(timeout);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-form" className="relative py-24 md:py-32 pb-32 lg:pb-32 overflow-hidden bg-background scroll-mt-32">
      {/* Blend background from pricing spotlight seamlessly */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background -z-10 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center mb-16 flex flex-col items-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter text-foreground leading-[1.05] mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
            Leave your details below and our career counsellor will get in touch with you shortly to guide you.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Trust Panel Left */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden lg:flex flex-col justify-center space-y-8 pr-8"
          >
            <h3 className="text-2xl font-bold tracking-tight text-foreground">Why students contact us</h3>
            <ul className="space-y-6">
              {[
                { title: "Career Counselling", desc: "Get expert advice tailored to your legal career goals." },
                { title: "Course Roadmap", desc: "Understand exactly how this 6-month program works." },
                { title: "Freelancing Guidance", desc: "Learn how you can monetize drafting skills." },
                { title: "Free Consultation", desc: "No obligations. Just honest, clear guidance." }
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="mt-1 mr-4 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Form Panel Right */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="rounded-[2.5rem] border border-border/40 bg-card/60 p-6 sm:p-8 md:p-12 shadow-2xl backdrop-blur-md relative overflow-hidden">
              {/* Subtle highlight effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
              
              <div className="relative z-10">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 space-y-6"
                >
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2 shadow-inner">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground tracking-tight">Request Sent!</h3>
                  <p className="text-muted-foreground max-w-xs leading-relaxed">
                    Thank you for your interest. Our expert career counsellor will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Mobile Only Header */}
                  <div className="lg:hidden text-center mb-8 border-b border-border/40 pb-6">
                    <h3 className="text-xl font-semibold mb-2">Request Free Consultation</h3>
                    <p className="text-sm text-muted-foreground">Career advice, roadmap & freelancing guidance.</p>
                  </div>

                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 text-sm text-destructive bg-destructive/10 rounded-2xl border border-destructive/20"
                    >
                      <AlertCircle className="h-5 w-5 shrink-0" />
                      <span className="font-medium">{error}</span>
                    </motion.div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-foreground/80 font-medium">Full Name</Label>
                    <Input 
                      id="fullName" 
                      placeholder="Priya Sharma" 
                      {...register("fullName")}
                      autoFocus={!!errors.fullName}
                      className={cn(
                        "bg-background/50 border-border/50 focus-visible:ring-primary h-14 rounded-2xl transition-all",
                        errors.fullName ? "border-destructive focus-visible:ring-destructive" : ""
                      )}
                    />
                    {errors.fullName && (
                      <p className="text-sm text-destructive font-medium flex items-center gap-1.5 mt-1.5"><AlertCircle className="w-4 h-4"/> {errors.fullName.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground/80 font-medium">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="priya@gmail.com" 
                      {...register("email")}
                      autoFocus={!errors.fullName && !!errors.email}
                      className={cn(
                        "bg-background/50 border-border/50 focus-visible:ring-primary h-14 rounded-2xl transition-all",
                        errors.email ? "border-destructive focus-visible:ring-destructive" : ""
                      )}
                    />
                    {errors.email && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-destructive mt-1.5 ml-1 font-medium">{errors.email.message}</motion.p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground/80 font-medium">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      {...register("phone")}
                      autoFocus={!errors.fullName && !errors.email && !!errors.phone}
                      className={cn(
                        "bg-background/50 border-border/50 focus-visible:ring-primary h-14 rounded-2xl transition-all",
                        errors.phone ? "border-destructive focus-visible:ring-destructive" : ""
                      )}
                    />
                    {errors.phone && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-destructive mt-1.5 ml-1 font-medium">{errors.phone.message}</motion.p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full rounded-2xl h-14 mt-4 text-base font-semibold shadow-lg hover:shadow-[0_8px_30px_rgba(var(--primary-rgb),0.25)] hover:-translate-y-0.5 transition-all duration-300 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3" />
                          Processing...
                        </div>
                      ) : "Submit Request"}
                      {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />}
                    </span>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                  
                  <p className="text-center text-xs text-muted-foreground/60 mt-4">
                    Your information is secure. We don&apos;t spam.
                  </p>
                </form>
              )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
