"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black text-white/70">
      <div className="container mx-auto px-4 py-16 md:px-6 lg:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand & About */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Lawctopus
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Lawctopus Law School believes that AI is no longer optional for lawyers, it is fast becoming a core professional skill.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
              <Link href="https://www.facebook.com/lawctopus/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                Facebook
              </Link>
              <Link href="https://www.twitter.com/lawctopus" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                Twitter
              </Link>
              <Link href="https://www.instagram.com/lawctopus.official/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                Instagram
              </Link>
              <Link href="https://www.linkedin.com/company/lawctopus" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                LinkedIn
              </Link>
              <Link href="https://www.youtube.com/channel/UC6fghSCgphfU1U4FfRF7pSg" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                YouTube
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="https://www.lawctopus.com/category/opportunities-events/jobs/" className="hover:text-white transition-colors">Jobs</Link>
              </li>
              <li>
                <Link href="https://www.lawctopus.com/category/opportunities-events/internships-small-projects/" className="hover:text-white transition-colors">Internships</Link>
              </li>
              <li>
                <Link href="https://www.lawctopuslawschool.com/courses" className="hover:text-white transition-colors">Courses</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 shrink-0 text-white/50" />
                <span>
                  Lawctopus, 2nd Floor, Seat No. 17, Sector 35B, S.C.O 339-340, Chandigarh (U.T.) - 160022, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-4 w-4 shrink-0 text-white/50" />
                <a href="tel:+919214883452" className="hover:text-white transition-colors">
                  +91 9214883452
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-4 w-4 shrink-0 text-white/50" />
                <a href="mailto:courses@lawctopus.com" className="hover:text-white transition-colors">
                  courses@lawctopus.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="https://www.lawctopus.com/lawctopus-privacy-policy/" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="https://www.lawctopus.com/terms-of-service/" className="hover:text-white transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {currentYear} Lawctopus. All rights reserved.</p>
          <p className="text-white/40 text-xs">
            Built for premium learning experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}
