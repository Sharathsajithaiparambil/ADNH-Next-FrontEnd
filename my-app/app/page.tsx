import WelcomeSection from "@/components/home/WelcomeSection";
import WhoWeAreSection from "@/components/about-us/WhoWeAreSection";

export default function Home() {
  return (
    <main>
      <WelcomeSection slug="welcome-to-adnh-catering" />
      <WhoWeAreSection slug="who-we-are" />
    </main>
  );
}
