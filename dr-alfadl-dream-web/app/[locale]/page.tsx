import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { LaserProctology } from "@/components/sections/LaserProctology";
import { Endoscopy } from "@/components/sections/Endoscopy";
import { DoctorProfile } from "@/components/sections/DoctorProfile";
import { DigitalProducts } from "@/components/sections/DigitalProducts";
import { AITools } from "@/components/sections/AITools";
import { Blog } from "@/components/sections/Blog";
import { BookingForm } from "@/components/sections/BookingForm";
import { WhatsAppCTA } from "@/components/sections/WhatsAppCTA";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <LaserProctology />
        <Endoscopy />
        <DoctorProfile />
        <DigitalProducts />
        <AITools />
        <Blog />
        <WhatsAppCTA />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
