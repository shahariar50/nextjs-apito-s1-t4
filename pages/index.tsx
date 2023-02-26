import MainLayout from "components/layout/MainLayout";
import AboutSection from "components/page/homepage/AboutSection";
import AdmissionSection from "components/page/homepage/AdmissionSection";
import ClientSection from "components/page/homepage/Clientsection";
import DetermineSection from "components/page/homepage/DetermineSection";
import HeroSection from "components/page/homepage/HeroSection";
import WhySection from "components/page/homepage/WhySection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <div className="common_style">
        <AboutSection />
        <AdmissionSection />
        <WhySection />
        <DetermineSection />
      </div>
      <ClientSection />
    </MainLayout>
  );
}
