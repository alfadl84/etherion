import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dr. Alfadl Digestive & Laser Proctology Center",
    template: "%s | Dr. Alfadl Center",
  },
  description:
    "Saudi Arabia's premier center for advanced endoscopy, laser proctology, and comprehensive digestive care. Dr. Alfadl Abdulfattah — Consultant Gastroenterologist.",
  keywords: [
    "gastroenterologist Saudi Arabia",
    "laser proctology",
    "hemorrhoid treatment Jazan",
    "colonoscopy",
    "GERD treatment",
    "digestive specialist",
    "Dr Alfadl",
    "جراحة المستقيم بالليزر",
    "اخصائي جهاز هضمي",
  ],
  authors: [{ name: "Dr. Alfadl Abdulfattah" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
    siteName: "Dr. Alfadl Digestive & Laser Proctology Center",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
