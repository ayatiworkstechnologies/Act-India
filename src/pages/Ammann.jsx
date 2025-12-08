import Products from "./Ammann/Products";
import HeroSection from "./Ammann/HeroSection";
import ClientSection from "./Home/ClientSection";
import ContactSection from "./Home/ContactSection";

import AmmannSection from "./Ammann/AmannSection";


export default function Ammann() {
  return (
    <>
       <HeroSection />
       <ClientSection />
       <AmmannSection />
       <Products />
       <ContactSection />
    </>
  );
}