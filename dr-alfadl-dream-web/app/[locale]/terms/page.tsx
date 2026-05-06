import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TermsContent } from "@/components/pages/TermsContent";

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <TermsContent />
      </main>
      <Footer />
    </div>
  );
}
