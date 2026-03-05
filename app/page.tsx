import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ONama from "@/components/ONama";
import Brendovi from "@/components/Brendovi";
import Usluge from "@/components/Usluge";
import Galerija from "@/components/Galerija";
import Kontakt from "@/components/Kontakt";

export default function Home() {
  return (
    <div className="pt-20 lg:pt-18">
      <Navbar />
      <HeroSection />
      <ONama />
      <Brendovi />
      <Usluge />
      <Galerija />
      <Kontakt />
    </div>
  );
}
