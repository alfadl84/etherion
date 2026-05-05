import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicesContent } from "@/components/pages/ServicesContent";
import { WhatsAppCTA } from "@/components/sections/WhatsAppCTA";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicesContent />
        <WhatsAppCTA />
      </main>
      <Footer />
    </div>
  );
}
