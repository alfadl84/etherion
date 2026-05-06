import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AIToolsContent } from "@/components/pages/AIToolsContent";
import { WhatsAppCTA } from "@/components/sections/WhatsAppCTA";

export default function AIToolsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AIToolsContent />
        <WhatsAppCTA />
      </main>
      <Footer />
    </div>
  );
}
