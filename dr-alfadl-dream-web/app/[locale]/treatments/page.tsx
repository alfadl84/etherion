import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TreatmentsContent } from "@/components/pages/TreatmentsContent";
import { WhatsAppCTA } from "@/components/sections/WhatsAppCTA";

export default function TreatmentsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <TreatmentsContent />
        <WhatsAppCTA />
      </main>
      <Footer />
    </div>
  );
}
