import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Toaster } from "sonner";
import { I18nProvider } from "@/components/providers/I18nProvider";
import { Locale } from "@/types";
import "../globals.css";

const locales: Locale[] = ["en", "ar"];

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isAr = params.locale === "ar";
  return {
    title: {
      default: isAr
        ? "مركز د. الفضل للجهاز الهضمي وجراحة المستقيم بالليزر"
        : "Dr. Alfadl Digestive & Laser Proctology Center",
      template: isAr ? "%s | مركز د. الفضل" : "%s | Dr. Alfadl Center",
    },
    description: isAr
      ? "المركز الأول في المملكة العربية السعودية للتنظير المتقدم وجراحة المستقيم بالليزر والرعاية الشاملة للجهاز الهضمي."
      : "Saudi Arabia's premier center for advanced endoscopy, laser proctology, and comprehensive digestive care.",
  };
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const isRTL = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isRTL ? "rtl" : "ltr"}
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=Tajawal:wght@300;400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`bg-white text-navy-900 antialiased ${
          isRTL ? "font-arabic" : "font-sans"
        }`}
      >
        <I18nProvider initialLocale={locale}>{children}</I18nProvider>
        <Toaster position={isRTL ? "top-left" : "top-right"} dir={isRTL ? "rtl" : "ltr"} richColors />
      </body>
    </html>
  );
}
