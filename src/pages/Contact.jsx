import ContactStamp from "./Contact/ContactStamp"
import FirstSection from "./Contact/FirstSection"
import OfficeLocations from "./Contact/OfficeLocations"
import ClientSection from "./Home/ClientSection"
import ContactSection from "./Home/ContactSection"



export default function Contact() {
  return (
<>
  <FirstSection />
  <ClientSection />
  <ContactStamp />
  <ContactSection id="form" />

  <OfficeLocations />
  
</>
  )
}