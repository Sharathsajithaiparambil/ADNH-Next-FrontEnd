import WelcomeSection from "@/components/WelcomeSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";

export default function Home() {
  return (
    <main>
      <WelcomeSection slug="welcome-to-adnh-catering" />
      <WhoWeAreSection slug="who-we-are" />
    </main>
  );
}
