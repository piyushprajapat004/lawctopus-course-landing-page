import { AnnouncementBar } from "@/components/sections/announcement-bar";
import { Navigation } from "@/components/sections/navigation";
import { HeroSection } from "@/components/sections/hero";
import { TrustIndicators } from "@/components/sections/trust-indicators";
import { StudentStatistics } from "@/components/sections/student-statistics";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { OutcomesSection } from "@/components/sections/outcomes";
import { CurriculumSection } from "@/components/sections/curriculum";
import { FeaturesSection } from "@/components/sections/features";
import { TimelineSection } from "@/components/sections/timeline";
import { InstructorProfilesSection } from "@/components/sections/instructors";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { WhyLawctopusSection } from "@/components/sections/why-lawctopus";
import { PricingSection } from "@/components/sections/pricing";
import { ExploreProgramsSection } from "@/components/sections/explore-programs";
import { LeadFormSection } from "@/components/sections/lead-form";
import { FooterSection } from "@/components/sections/footer";
import { FloatingWhatsApp } from "@/components/shared/floating-whatsapp";
import { FAQSection } from "@/components/sections/faq";
import { PartnersSection } from "@/components/sections/partners";
import { InstitutionsSection } from "@/components/sections/institutions";
import { ComparisonSection } from "@/components/sections/comparison";
import { SupportSection } from "@/components/sections/support";
import { TrustCTA } from "@/components/shared/trust-cta";
import { CertificateSection } from "@/components/sections/certificate";
import { StickyMobileCTA } from "@/components/shared/sticky-mobile-cta";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <WhyLawctopusSection />
        <TrustIndicators />
        <InstitutionsSection />
        <StudentStatistics />
        <ComparisonSection />
        <ProblemSection />
        <SolutionSection />
        <TimelineSection />
        <OutcomesSection />
        <TrustCTA />
        <CurriculumSection />
        <CertificateSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PartnersSection />
        <InstructorProfilesSection />
        <PricingSection />
        <ExploreProgramsSection />
        <FAQSection />
        <SupportSection />
        <LeadFormSection />
      </main>
      <FooterSection />
      <FloatingWhatsApp />
      <StickyMobileCTA />
    </>
  );
}
