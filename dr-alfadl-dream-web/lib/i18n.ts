"use client";

import { createContext, useContext } from "react";
import { TranslationKeys, Locale } from "@/types";
import { translations } from "./translations";

export interface I18nContextType {
  locale: Locale;
  t: TranslationKeys;
  isRTL: boolean;
  toggleLocale: () => void;
  setLocale: (locale: Locale) => void;
}

export const I18nContext = createContext<I18nContextType>({
  locale: "en",
  t: translations.en,
  isRTL: false,
  toggleLocale: () => {},
  setLocale: () => {},
});

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};

export const getTranslation = (locale: Locale): TranslationKeys => {
  return translations[locale] ?? translations.en;
};
