import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import DeveloperSection from "@/components/DeveloperSection";
import FilecoinSection from "@/components/FilecoinSection";
import RoadmapSection from "@/components/RoadmapSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling behavior for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-navy-deep text-off-white overflow-x-hidden">
      {/* Fixed Header */}
      <Header />

      {/* Main Content - Scene by Scene Flow */}
      <main>
        {/* Scene 1: Hero - "Prove You Live Where You Live" */}
        <HeroSection />

        {/* Scene 2: The Problem - "Why Residency is Broken" */}
        <ProblemSection />

        {/* Scene 3: The Solution - "How ProofPass Works" */}
        <SolutionSection />

        {/* Scene 4: Developer Mode - "API for Governments & Platforms" */}
        <DeveloperSection />

        {/* Scene 5: Filecoin Onchain Cloud Integration */}
        <FilecoinSection />

        {/* Scene 6: Roadmap & GTM */}
        <RoadmapSection />
      </main>

      {/* Footer with Submission Materials */}
      <Footer />

      {/* Scroll-to-top functionality */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-electric rounded-full flex items-center justify-center shadow-glow-blue hover:shadow-glow-green transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6 text-navy-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default Index;
