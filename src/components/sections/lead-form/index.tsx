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
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { error: submitError } = await (supabase.from("lead_submissions") as any).insert([
        {
          name: data.fullName,
          email: data.email,
          phone: data.phone,
        },
      ]);

      if (submitError) {
        throw new Error(submitError.message);
      }

      setIsSuccess(true);
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : String(err);
      setError(errMsg || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-xl text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/70">
            Request Course Details
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Leave your details below and our career counsellor will get in touch with you shortly.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-lg"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl ring-1 ring-inset ring-white/10">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-8 space-y-4"
              >
                <div className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Request Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for your interest. Our team will contact you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {error && (
                  <div className="flex items-center gap-2 p-3 text-sm text-red-500 bg-red-500/10 rounded-lg border border-red-500/20">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-foreground/80">Full Name</Label>
                  <Input 
                    id="fullName" 
                    placeholder="John Doe" 
                    {...register("fullName")}
                    className="bg-background/50 border-white/10 focus-visible:ring-primary/50"
                  />
                  {errors.fullName && (
                    <p className="text-sm text-red-500 mt-1">{errors.fullName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground/80">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    {...register("email")}
                    className="bg-background/50 border-white/10 focus-visible:ring-primary/50"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground/80">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+91 98765 43210" 
                    {...register("phone")}
                    className="bg-background/50 border-white/10 focus-visible:ring-primary/50"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full rounded-xl h-12 shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)] hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.4)] transition-all group"
                >
                  {isSubmitting ? "Sending..." : "Submit Request"}
                  {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
