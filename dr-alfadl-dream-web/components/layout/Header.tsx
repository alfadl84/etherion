"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const navItems = (locale: string, t: ReturnType<typeof useI18n>["t"]) => [
  { label: t.nav.home, href: `/${locale}` },
  { label: t.nav.about, href: `/${locale}/about` },
  {
    label: t.nav.services,
    href: `/${locale}/services`,
    children: [
      { label: t.nav.services, href: `/${locale}/services` },
      { label: t.nav.treatments, href: `/${locale}/treatments` },
    ],
  },
  { label: t.nav.store, href: `/${locale}/store` },
  { label: t.nav.aiTools, href: `/${locale}/ai-tools` },
  { label: t.nav.blog, href: `/${locale}/blog` },
];

export function Header() {
  const { locale, t, isRTL, toggleLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const items = navItems(locale, t);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-navy-900/95 backdrop-blur-xl border-b border-white/10 shadow-luxury py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold">
              <span className="text-navy-900 font-bold text-lg">A</span>
            </div>
            <div className={isRTL ? "text-right" : "text-left"}>
              <p className="text-white font-bold text-sm leading-tight">
                {isRTL ? "د. الفضل عبد الفتاح" : "Dr. Alfadl"}
              </p>
              <p className="text-gold-400 text-xs font-medium leading-tight">
                {isRTL ? "مركز الجهاز الهضمي" : "Digestive & Laser Center"}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {items.map((item) =>
              item.children ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === item.label ? null : item.label)
                    }
                    className="flex items-center gap-1 px-4 py-2 text-white/80 hover:text-gold-400 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-white/5"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        activeDropdown === item.label && "rotate-180"
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full mt-1 min-w-[180px] rounded-xl bg-navy-800 border border-white/10 shadow-luxury overflow-hidden"
                        style={isRTL ? { right: 0 } : { left: 0 }}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-4 py-3 text-sm text-white/80 hover:text-gold-400 hover:bg-white/5 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-white/80 hover:text-gold-400 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-white/5"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLocale}
              className="px-3 py-1.5 rounded-lg text-sm font-semibold text-gold-400 border border-gold-400/30 hover:bg-gold-400/10 transition-all duration-200"
            >
              {t.nav.language}
            </button>

            {/* Phone */}
            <a
              href="tel:+966500000000"
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:block">+966 5XX XXX XXX</span>
            </a>

            {/* Book CTA */}
            <Link
              href={`/${locale}/booking`}
              className="btn-gold text-sm py-2.5 px-5"
            >
              {t.nav.booking}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={toggleLocale}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-gold-400 border border-gold-400/30"
            >
              {t.nav.language}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-navy-900/98 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-4 py-3 text-white/80 hover:text-gold-400 hover:bg-white/5 rounded-xl transition-all text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-white/10">
                <Link
                  href={`/${locale}/booking`}
                  onClick={() => setMobileOpen(false)}
                  className="btn-gold w-full justify-center text-sm py-3"
                >
                  {t.nav.booking}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
