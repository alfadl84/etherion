import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StoreContent } from "@/components/pages/StoreContent";
import { WhatsAppCTA } from "@/components/sections/WhatsAppCTA";

export default function StorePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <StoreContent />
        <WhatsAppCTA />
      </main>
      <Footer />
    </div>
  );
}
