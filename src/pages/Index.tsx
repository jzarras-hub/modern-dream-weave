import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsCounter from "@/components/StatsCounter";
import DevicesGrid from "@/components/DevicesGrid";
import ServicesSection from "@/components/ServicesSection";
import SpeedSection from "@/components/SpeedSection";
import WhyUsSection from "@/components/WhyUsSection";
import AboutSection from "@/components/AboutSection";
import TonerSection from "@/components/TonerSection";
import RentalSection from "@/components/RentalSection";
import BrandsTicker from "@/components/BrandsTicker";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <StatsCounter />
    <DevicesGrid />
    <ServicesSection />
    <SpeedSection />
    <WhyUsSection />
    <AboutSection />
    <TonerSection />
    <RentalSection />
    <BrandsTicker />
    <ContactSection />
    <Footer />
    <FloatingCTA />
  </div>
);

export default Index;
