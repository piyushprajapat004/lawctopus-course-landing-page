import { trustContent } from "@/content/trust";

export function TrustIndicators() {
  return (
    <section className="py-12 md:py-16 border-y border-border/50 bg-muted/10 animate-in fade-in duration-700 ease-in-out">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-8">
          {trustContent.title}
        </p>
        <div 
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-700"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
          }}
        >
          {trustContent.logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-105"
            >
              <div className="text-xl font-bold font-serif tracking-tight text-foreground/80">
                {logo.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
