"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Heart, ExternalLink } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export function Footer() {
  const { locale, t, isRTL } = useI18n();

  const quickLinks = [
    { label: t.nav.home, href: `/${locale}` },
    { label: t.nav.about, href: `/${locale}/about` },
    { label: t.nav.services, href: `/${locale}/services` },
    { label: t.nav.treatments, href: `/${locale}/treatments` },
    { label: t.nav.blog, href: `/${locale}/blog` },
    { label: t.nav.booking, href: `/${locale}/booking` },
  ];

  const serviceLinks = [
    t.services.items[0]?.title ?? "",
    t.services.items[1]?.title ?? "",
    t.services.items[2]?.title ?? "",
    t.services.items[3]?.title ?? "",
  ];

  const legalLinks = [
    { label: t.footer.privacy, href: `/${locale}/privacy` },
    { label: t.footer.terms, href: `/${locale}/terms` },
    { label: t.footer.disclaimer, href: `/${locale}/disclaimer` },
  ];

  return (
    <footer className="bg-navy-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-3 mb-5 group">
              <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold">
                <span className="text-navy-900 font-bold text-xl">A</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">
                  {isRTL ? "د. الفضل عبد الفتاح" : "Dr. Alfadl Abdulfattah"}
                </p>
                <p className="text-gold-400 text-xs font-medium leading-tight">
                  {isRTL ? "مركز الجهاز الهضمي بالليزر" : "Digestive & Laser Center"}
                </p>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
            {/* Social / WhatsApp */}
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}
            >
              <WhatsAppIcon />
              <span>{isRTL ? "واتساب" : "WhatsApp"}</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-gold-400 inline-block" />
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold-400 text-sm transition-colors duration-200 hover:underline underline-offset-4 flex items-center gap-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-gold-400 inline-block" />
              {t.footer.services}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((service, i) => (
                <li key={i}>
                  <Link
                    href={`/${locale}/services`}
                    className="text-white/60 hover:text-gold-400 text-sm transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-gold-400 hover:text-gold-300 text-sm font-medium flex items-center gap-1 transition-colors"
                >
                  {isRTL ? "عرض الكل" : "View All"} <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-gold-400 inline-block" />
              {t.footer.contact}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href="tel:+966500000000"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                  dir="ltr"
                >
                  {t.footer.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href={`mailto:${t.footer.email}`}
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  {t.footer.email}
                </a>
              </li>
            </ul>

            {/* Book Appointment CTA */}
            <Link
              href={`/${locale}/booking`}
              className="mt-6 btn-gold text-sm py-2.5 px-5 w-full justify-center"
            >
              {t.nav.booking}
            </Link>
          </div>
        </div>
      </div>

      {/* Gold Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-start">
            {t.footer.rights}
          </p>
          <div className="flex items-center gap-1 text-white/40 text-xs">
            <span>{isRTL ? "صُنع بـ" : "Made with"}</span>
            <Heart className="w-3 h-3 text-red-400 fill-red-400" />
            <span>{isRTL ? "للرعاية الصحية" : "for better healthcare"}</span>
          </div>
          <div className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/40 hover:text-gold-400 text-xs transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
