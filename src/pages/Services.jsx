import TestimonialSlider from "./About/TestimonialSlider";
import ClientSection from "./Home/ClientSection";
import ContactSection from "./Home/ContactSection";
import DemolitionSection from "./Services/PrecareSection";
import ProductSection from "./Services/AuxilliarySection";
import ServiceBanner from "./Services/ServiceBanner";
import ExcavatorSlider from "./Services/OperatorTraining";
import ServicesSlider from "./Services/EaasService";
import PrecareSection from "./Services/PrecareSection";
import AuxilliarySection from "./Services/AuxilliarySection";
import EaasService from "./Services/EaasService";
import OperatorTrainingShowcase from "./Services/OperatorTraining";
import ServiceTabs from "./Services/ServiceTab";



export default function Service() {
  return (
    <>
    <ServiceBanner />
    <ClientSection />
    <ServiceTabs />
    {/* <PrecareSection />
    <EaasService />
    <AuxilliarySection />
    <OperatorTrainingShowcase /> */}

    </>
  )
}