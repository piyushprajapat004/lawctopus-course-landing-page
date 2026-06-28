"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigationContent } from "@/content/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy Logic
      const sections = navigationContent.links
        .map(link => link.href.startsWith("#") ? link.href.substring(1) : null)
        .filter(Boolean) as string[];

      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is currently near the top half of the screen
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      
      if (window.scrollY < 100) {
        setActiveSection(""); // At top, reset active
      } else {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500 ease-in-out",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex shrink-0 items-center">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
            >
              {navigationContent.logoText}
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8 bg-card/30 backdrop-blur-md border border-border/40 px-6 py-2.5 rounded-full shadow-sm">
            {navigationContent.links.map((link) => {
              const targetId = link.href.startsWith("#") ? link.href.substring(1) : "";
              const isActive = activeSection === targetId && targetId !== "";
              
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-semibold transition-colors focus-visible:outline-none rounded-sm group",
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute -bottom-1.5 left-0 h-[2px] bg-primary transition-all duration-300 rounded-full",
                    isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-50 group-hover:bg-foreground"
                  )} />
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center">
            <Link 
              href={navigationContent.cta.href}
              className={cn(buttonVariants({ size: "default" }), "rounded-full px-6 font-semibold shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5")}
            >
              {navigationContent.cta.label}
            </Link>
          </div>

          <div className="flex md:hidden items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full p-2.5 text-foreground bg-card/50 border border-border/40 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block size-5" aria-hidden="true" />
              ) : (
                <Menu className="block size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 border-b border-border/40 shadow-2xl h-screen overflow-hidden flex flex-col"
            id="mobile-menu"
          >
            <div className="flex flex-col items-center justify-start h-full gap-8 px-6 pb-20 pt-10">
              <nav className="flex flex-col items-center gap-8 w-full">
                {navigationContent.links.map((link) => {
                  const targetId = link.href.startsWith("#") ? link.href.substring(1) : "";
                  const isActive = activeSection === targetId && targetId !== "";
                  
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={cn(
                        "text-2xl font-bold tracking-tight transition-colors w-full text-center py-4 border-b border-border/20",
                        isActive ? "text-primary" : "text-foreground hover:text-primary"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
              <Link 
                href={navigationContent.cta.href}
                className={cn(buttonVariants({ size: "lg" }), "w-full max-w-sm mt-8 rounded-2xl h-14 text-lg font-semibold")}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {navigationContent.cta.label}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
