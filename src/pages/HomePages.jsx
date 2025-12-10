import AboutACT from "./Home/AboutACTSection";
import ClientSection from "./Home/ClientSection";
import CompaniesCarousel from "./Home/CompaniesCarousel";
import ContactSection from "./Home/ContactSection";
import DealersSection from "./Home/DealersSection";
import GridPage from "./Home/grid";
import HomeSection from "./Home/HomeSection";
import Infrastructure from "./Home/Infrastructure";
import OurNetwork from "./Home/OurNetwork";
import ServiceSlider from "./Home/ServiceSlider";
import SolutionsSection from "./Home/SolutionsSection";
import StatsSlider from "./Home/StatsSlidder";
import VideoSection from "./Home/VideoSection";

export default function HomePage() {
  return (
    <>
      <HomeSection />
      <ClientSection />
      {/* <StatsSlider /> */}
      <AboutACT />
      <GridPage />
      <DealersSection />
      <SolutionsSection />
      <ServiceSlider />
      <Infrastructure />
      <OurNetwork />
      <CompaniesCarousel />
      <ContactSection />
    </>
  );
}
