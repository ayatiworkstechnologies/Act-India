import VolvoSection from "./About/VolvoSection";
import Products from "./Volvo/Products";
import HeroSection from "./Volvo/HeroSection";
import ClientSection from "./Home/ClientSection";
import ContactSection from "./Home/ContactSection";



export default function Volvo() {
  return (
    <>
       <HeroSection />
       <ClientSection />
       <VolvoSection />
       <Products />
       <ContactSection />
    </>
  );
}