import AuthoritySection from "../components/AuthoritySection";
import CTASection from "../components/CTASection";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import RecommendedProducts from "../components/RecommendedProducts";
import SolutionSection from "../components/SolutionSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <RecommendedProducts />
      <AuthoritySection />
      <CTASection />
    </main>
  );
}
