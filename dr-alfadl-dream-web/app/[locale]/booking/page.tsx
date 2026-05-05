import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingForm } from "@/components/sections/BookingForm";
import { WhatsAppCTA } from "@/components/sections/WhatsAppCTA";

export default function BookingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <BookingForm />
        <WhatsAppCTA />
      </main>
      <Footer />
    </div>
  );
}
