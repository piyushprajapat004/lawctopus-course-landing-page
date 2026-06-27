"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigationContent } from "@/content/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
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
        "sticky top-0 z-40 w-full transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 rounded-sm"
            >
              {navigationContent.logoText}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationContent.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 rounded-sm px-2 py-1 group"
              >
                {link.label}
                <span className="absolute inset-x-2 -bottom-1 h-0.5 bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link 
              href={navigationContent.cta.href}
              className={cn(buttonVariants({ size: "default" }), "relative group shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)] hover:shadow-[0_0_25px_rgba(var(--primary-rgb),0.5)] transition-shadow duration-300")}
            >
              <span className="relative z-10">{navigationContent.cta.label}</span>
              <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block size-6" aria-hidden="true" />
              ) : (
                <Menu className="block size-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-30 transform transition-transform duration-300 ease-in-out bg-background/95 backdrop-blur-md pt-16",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        id="mobile-menu"
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-4 pb-20">
          <nav className="flex flex-col items-center gap-6">
            {navigationContent.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-lg font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 rounded-sm px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link 
            href={navigationContent.cta.href}
            className={buttonVariants({ size: "lg", className: "w-full max-w-xs mt-4" })}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {navigationContent.cta.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
