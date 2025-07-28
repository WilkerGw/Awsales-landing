import AboutAwSalesSection from "@/components/AboutAwSalesSection";
import Alavanque from "@/components/Alavanque";
import ClientsSection from "@/components/ClientsSection";
import Configuration from "@/components/Configuration";
import FeatureSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Meta from "@/components/Meta";
import Navbar from "@/components/Navbar";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import UserHighlight from "@/components/UserHighlight";

import { mairaData, bettinaData } from "@/data/users";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#102240] font-sans overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ClientsSection />
      <UserHighlight userData={mairaData} />
      <AboutAwSalesSection />
      <FeatureSection />
      <UserHighlight userData={bettinaData} />
      <TestimonialCarousel />
      <Configuration />
      <Meta />
      <Alavanque />
      <Footer/>
    </main>
  );
}