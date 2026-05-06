import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PrivacyContent } from "@/components/pages/PrivacyContent";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PrivacyContent />
      </main>
      <Footer />
    </div>
  );
}
