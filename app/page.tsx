import { HeroSection } from "@/components/hero-section";
import { FeaturedSection } from "@/components/featured-section";
import { CollectionsSection } from "@/components/collections-section";
import { ExperienceSection } from "@/components/experience-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { JournalSection } from "@/components/journal-section";

export default function Home() {
  return (
    <div className="space-y-20">
      <HeroSection />
      <FeaturedSection />
      <CollectionsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <JournalSection />
    </div>
  );
}
