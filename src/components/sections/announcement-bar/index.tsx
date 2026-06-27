import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { announcementContent } from "@/content/announcement";
import { cn } from "@/lib/utils";

export function AnnouncementBar() {
  if (!announcementContent.isActive) return null;

  return (
    <div
      className={cn(
        "bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground relative z-50",
        "animate-in slide-in-from-top-full duration-700 ease-out fill-mode-both border-b border-primary-foreground/10"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-10 items-center justify-center text-sm font-medium">
          <Link
            href={announcementContent.link}
            className="group flex items-center gap-2 focus-visible:ring-3 focus-visible:ring-primary-foreground/50 focus-visible:outline-none rounded-sm px-2 py-1 transition-all"
          >
            <Clock className="size-3.5 opacity-80" aria-hidden="true" />
            <span className="opacity-90 group-hover:opacity-100 transition-opacity">
              {announcementContent.text}
              <span className="font-bold ml-1">{announcementContent.highlightText}</span>
            </span>
            <ArrowRight className="size-3.5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
