
import FeaturesSection from "@/components/user/landingPage/FeatureSection";
import TestimonialsSection from "@/components/user/landingPage/Testimonials";
import HeroSection from "@/components/user/landingPage/HeroSection";
import Footer from "@/components/user/landingPage/Footer";
import SiteShowCase from "@/components/user/landingPage/SiteShowCase";
import LandingMenuBar from "@/components/user/landingPage/LandingMenuBar";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <LandingMenuBar />
      <main>
        <HeroSection />
        <SiteShowCase />
        <FeaturesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;