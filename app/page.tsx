export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Nexus — Build the Future, One Pixel at a Time",
  description:
    "Nexus is a world-class digital agency. We design and develop stunning websites, SaaS platforms, and mobile apps that help ambitious businesses scale.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTABanner
        title="Ready to build something amazing?"
        subtitle="Let's turn your vision into a world-class digital product. Our team is ready to help you every step of the way."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
