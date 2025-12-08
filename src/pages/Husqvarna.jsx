import Products from "./Husqvarna/Products";
import HeroSection from "./Husqvarna/HeroSection";
import ClientSection from "./Home/ClientSection";
import ContactSection from "./Home/ContactSection";
import HusqvarnaSection from "./Husqvarna/HusqvarnaSection";



export default function Husqvarna() {
  return (
    <>
       <HeroSection />
       <ClientSection />
       <HusqvarnaSection />
       <Products />
       <ContactSection />
    </>
  );
}