import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DisclaimerContent } from "@/components/pages/DisclaimerContent";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <DisclaimerContent />
      </main>
      <Footer />
    </div>
  );
}
