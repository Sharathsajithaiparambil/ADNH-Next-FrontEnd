import WelcomeSection from "@/components/home/WelcomeSection";
import WhoWeAreSection from "@/components/about-us/WhoWeAreSection";
import OurBrandsSection from "@/components/our-brands/OurBrandsSection";
import ServicesSection from "@/components/services/ServicesSection";

export default function Home() {
  return (
    <main>
      <WelcomeSection slug="welcome-to-adnh-catering" />
      <OurBrandsSection />
      <WhoWeAreSection slug="who-we-are" />
      <ServicesSection slug="services" />
    </main>
  );
}
