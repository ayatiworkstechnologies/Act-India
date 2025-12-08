import Products from "./Sdlg/Products";
import HeroSection from "./Sdlg/HeroSection";
import ClientSection from "./Home/ClientSection";
import ContactSection from "./Home/ContactSection";
import SdlgSection from "./Sdlg/SdlgSection";



export default function Sdlg() {
  return (
    <>
       <HeroSection />
       <ClientSection />
       <SdlgSection />
       <Products />
       <ContactSection />
    </>
  );
}