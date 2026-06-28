"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { whatsappConfig } from "@/content/whatsapp";

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black text-white/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
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
                  +91 9214883452 (Phone)
                </a>
              </li>
              {whatsappConfig.url && (
                <li className="flex items-center">
                  <svg className="mr-3 h-4 w-4 shrink-0 text-white/50 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  <a href={whatsappConfig.url} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    {whatsappConfig.displayPhone} (WhatsApp)
                  </a>
                </li>
              )}
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
                <Link href="https://www.lawctopus.com/terms-of-service/" className="hover:text-white transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="https://www.lawctopuslawschool.com/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
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
