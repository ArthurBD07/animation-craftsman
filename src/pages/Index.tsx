import Navbar from '@/components/Navbar';
import ShaderHero from '@/components/ui/hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ShaderHero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
