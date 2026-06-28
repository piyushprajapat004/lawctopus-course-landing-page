"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling past hero (approx 500px)
    // Hide when Lead Form is in view
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const leadFormElement = document.getElementById("lead-form");
      
      let isLeadFormVisible = false;
      
      if (leadFormElement) {
        const rect = leadFormElement.getBoundingClientRect();
        // If the top of the lead form is within the viewport, it's visible
        isLeadFormVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      }
      
      // Show CTA if we've scrolled down a bit AND lead form is not visible
      setIsVisible(scrollY > 500 && !isLeadFormVisible);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 lg:hidden"
        >
          <div className="bg-background/80 backdrop-blur-md border border-border shadow-2xl rounded-2xl p-4 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                6-Month Course
              </span>
              <span className="font-bold text-lg text-foreground">
                ₹24,999
              </span>
            </div>
            
            <Link
              href="#lead-form"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium flex items-center shadow-lg shadow-primary/25 active:scale-95 transition-transform"
            >
              Enroll Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
