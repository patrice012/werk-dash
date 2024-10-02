import PricingSection from "@/components/pricing-section";
import HeroSection from "@/components/landing/HeroSection";
import Services from "@/components/landing/Services";
import Freelancer from "@/components/landing/Freelancers";
import Choice from "@/components/landing/Choice";

export default function PageLanding() {
  return (
    <div>
      <div className="hero">
        <HeroSection />
      </div>
      <Services />
      <Freelancer />
      <Choice />
      <PricingSection />
    </div>
  );
}
