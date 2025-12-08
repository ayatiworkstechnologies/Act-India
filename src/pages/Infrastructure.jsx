
import ClientSection from './Home/ClientSection';
import HeroSection from './Infrastructure/HeroSection';
import Stockyard from './Infrastructure/Stockyard';
import Warehouse from './Infrastructure/Warehouse';
import Training from './Infrastructure/Training';
import Workshop from './Infrastructure/Workshop';
import Support from './Infrastructure/Support';


export default function Infrastructure() {
  return (
    <>
        <HeroSection />
        <ClientSection />
        <Warehouse />
       <Stockyard />
       <Training />
       <Workshop />
       <Support />
      
    </>
  );
}