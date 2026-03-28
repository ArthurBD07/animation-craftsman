import Navbar from '@/components/Navbar';
import HeroScrollAnimation from '@/components/ui/hero-scroll-animation';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroScrollAnimation />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
