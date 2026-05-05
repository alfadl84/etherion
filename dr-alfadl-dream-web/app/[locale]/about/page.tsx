import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutContent } from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About Dr. Alfadl",
  description: "Learn about Dr. Alfadl Abdulfattah — Consultant Gastroenterologist, Laser Proctologist, and Assistant Professor at Jazan University.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </div>
  );
}
