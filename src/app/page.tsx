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
import { InstructorProfilesSection } from "@/components/sections/instructors";
import { PricingSection } from "@/components/sections/pricing";
import { LeadFormSection } from "@/components/sections/lead-form";
import { FooterSection } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <TrustIndicators />
        <StudentStatistics />
        <ProblemSection />
        <SolutionSection />
        <OutcomesSection />
        <CurriculumSection />
        <FeaturesSection />
        <InstructorProfilesSection />
        <PricingSection />
        <LeadFormSection />
      </main>
      <FooterSection />
    </>
  );
}
