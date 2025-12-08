import Hero from "./SelfLoadingMixer/Hero";
import ClientSection from "./Home/ClientSection";
import ContactSection from "./Home/ContactSection";
import SelfLoadingMixerSection from "./SelfLoadingMixer/SelfLoadingMixerSection";
import ProductsShowcase from "./SelfLoadingMixer/Products";



export default function SelfLoadingMixer() {
  return (
    <>
       <Hero />
       <ClientSection />
       <SelfLoadingMixerSection />
       <ProductsShowcase />
       <ContactSection />
    </>
  );
}