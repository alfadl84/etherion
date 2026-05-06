"use client";

import { useState, useCallback, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { I18nContext } from "@/lib/i18n";
import { translations } from "@/lib/translations";
import { Locale } from "@/types";

interface I18nProviderProps {
  children: React.ReactNode;
  initialLocale: Locale;
}

export function I18nProvider({ children, initialLocale }: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setLocaleState(initialLocale);
  }, [initialLocale]);

  const setLocale = useCallback(
    (newLocale: Locale) => {
      const segments = pathname.split("/");
      segments[1] = newLocale;
      const newPath = segments.join("/");
      setLocaleState(newLocale);
      router.push(newPath);
    },
    [pathname, router]
  );

  const toggleLocale = useCallback(() => {
    setLocale(locale === "en" ? "ar" : "en");
  }, [locale, setLocale]);

  const t = translations[locale] ?? translations.en;
  const isRTL = locale === "ar";

  return (
    <I18nContext.Provider value={{ locale, t, isRTL, toggleLocale, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}
