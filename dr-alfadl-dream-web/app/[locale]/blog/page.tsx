import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogContent } from "@/components/pages/BlogContent";
import { WhatsAppCTA } from "@/components/sections/WhatsAppCTA";

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <BlogContent />
        <WhatsAppCTA />
      </main>
      <Footer />
    </div>
  );
}
