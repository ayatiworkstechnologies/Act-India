import Products from "./Epiroc/Products";
import HeroSection from "./Epiroc/HeroSection";
import ClientSection from "./Home/ClientSection";
import ContactSection from "./Home/ContactSection";
import EpirocSection from "./Epiroc/EpirocSection";



export default function Epiroc() {
  return (
    <>
       <HeroSection />
       <ClientSection />
       <EpirocSection />
       <Products />
       <ContactSection />
    </>
  );
}